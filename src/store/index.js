import Vue from 'vue'
import Vuex from 'vuex'
import {random, randomImage} from '../utils/random.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    favorites: [],
    itemsInCart: {},
    keyItemCart: []
  },
  mutations: {
    setData(state, payload) {
      payload.products.forEach(product => {
        product.price = random(100, 1000)
        product.img = randomImage()
      })
      state.products = [...state.products, ...payload.products]
    },
    setFavorites(state, id) {
      if (state.favorites.includes(id)) {
        const index = state.favorites.indexOf(id)
        state.favorites.splice(index, 1)
      } else {
        state.favorites.push(id)
      }
    },
    setToCart(state, payload) {
      const {id, dish, price, img, count} = payload
      if(!state.itemsInCart[id]) {
        state.itemsInCart[id] = { "id": id, "dish": dish, "price": price, "img": img, "count": count, "checked": true }
        state.keyItemCart = Object.keys(state.itemsInCart);
      } else {
        state.itemsInCart[id].count = state.itemsInCart[id].count + count
        state.itemsInCart = {...state.itemsInCart, [id]: state.itemsInCart[id]}
      }

    },
    setCount(state, payload) {
      const {id, count} = payload
      state.itemsInCart[id].count = count
      state.itemsInCart = {...state.itemsInCart, [id]: state.itemsInCart[id]}
    },
    setCheckedAll(state, value) {
      state.keyItemCart.forEach(id => {
        state.itemsInCart[id].checked = value
        state.itemsInCart = {...state.itemsInCart, [id]: state.itemsInCart[id]}
      })
    },
    setChecked(state, payload) {
      const {id, value} = payload
      state.itemsInCart[id].checked = value
      state.itemsInCart = {...state.itemsInCart, [id]: state.itemsInCart[id]}
    },
    removeCheckedFromCart(state) {
      state.keyItemCart.forEach(id => {
        if(state.itemsInCart[id].checked === true) {
          delete state.itemsInCart[id]
        }
      })
      state.keyItemCart = Object.keys(state.itemsInCart);
    },
    removeFromCart(state, id) {
      delete state.itemsInCart[id]
      state.keyItemCart = Object.keys(state.itemsInCart)
    }
  },
  getters: {
    getProduct: state => state.products,
    getFavorites: state => state.favorites,
    getFavoritesItems: state => {
      const favorites = []
      state.products.forEach(product => {
        if (state.favorites.includes(product.id)) {
          const { id, dish, price, img } = product
          favorites.push({ id, dish, price, img })
        }
          
      })
      return favorites
    },
    getCart: state => state.itemsInCart,
    getCountProductsInCart: (state, { getItemChecked }) => getItemChecked.length,
    getPrice: (state, { getItemChecked }) => 
      getItemChecked.reduce((res, cur) => res + state.itemsInCart[cur].price, 0),
    getTotalPrice: (state, { getItemChecked }) => 
      getItemChecked.reduce((res, cur) => res + (state.itemsInCart[cur].price * state.itemsInCart[cur].count), 0),
    getCurrentProductFullPrice: state => id => state.itemsInCart[id].count * state.itemsInCart[id].price,
    getItemChecked: state => state.keyItemCart.filter(id => state.itemsInCart[id].checked === true),
    getCheckAll: (state, { getItemChecked }) =>
      getItemChecked.length === state.keyItemCart.length && getItemChecked.length !== 0,
  },
  actions: {
    async requestProductsData({commit}) {
      try {
        const res = await fetch('https://random-data-api.com/api/food/random_food?size=30')
        const data = await res.json()
        commit('setData', { products: data })
      } catch(error) {
        console.log(error);
      }
    }
  }
})