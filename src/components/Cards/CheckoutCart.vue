<template>
  <div :class="$style.cart__checkout">
    <div :class="$style.cart__wrapper">
      <base-button
        @click="checkout"
        :class="$style.card__button"
      >
        Перейти к оформлению
      </base-button>
      <h3>Ваша корзина</h3>
      <div :class="$style.card__price">
        Товары ({{getCountProductsInCart}})
        <span>{{getPrice}} &#8381;</span>
      </div>
      <div>
        Общая стоимость: {{ getTotalPrice }} &#8381;
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import BaseButton from '../BaseComponents/BaseButton.vue'

export default {
  components: { 
    BaseButton 
  },
  name: 'CheckoutCart',
  methods: {
    checkout () {
      let result = 'Ваш заказ: \n\n'
      for(let id in this.itemsInCart) {
        const {dish, count, price, checked} = this.itemsInCart[id]
        if(checked) {
          result = `${result}${dish} | Количество: ${count} | Общая стоимость: ${count * price}\n`
        }
      }
      result = result + `\n Сумма заказа: ${this.getTotalPrice}`
      alert(result)
    }
  },
  computed: {
    ...mapGetters([
      'getTotalPrice', 
      'getCountProductsInCart',
      'getPrice',
    ]),
    ...mapState([
      'itemsInCart',
    ])
  }
}
</script>

<style module>
.cart__checkout {
  background-color: #fff;
  padding: 20px;
}
.cart__wrapper {
  display: grid;
  grid-template-rows: 1fr 1fr 2fr 1fr;
  grid-gap: 10px;
}
.card__button {
  width: 100%;
}
.card__price {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>