<template>
  <div>
    <div :class="$style.cart__title">
      <h1>Корзина</h1>
      <span>{{getCountProductsInCart}}</span>
    </div>
    <div
      :class="$style.cart__content"
    >
      <div>
        <div
          :class="$style.cart__select"
        >
          <input 
            type="checkbox" 
            id="checkbox"
            :checked="getCheckAll"
            @change="isSelected"
          >
          <label for="checkbox">Выбрать всё</label>
          <button @click="remove">Удалить выбранные</button>
        </div>
        <div
          :class="$style.cart__products"
        >
          <basket-card 
            v-for="product in getCart"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
      <checkout-cart/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import BasketCard from '../components/Cards/BasketCard.vue'
import CheckoutCart from '../components/Cards/CheckoutCart.vue'

export default {
  name: 'Cart',
  data() {
    return {
    }
  },
  components: {
    BasketCard,
    CheckoutCart,
  },
  computed: {
    ...mapGetters(['getCart', 'getCountProductsInCart', 'getCheckAll']),
  },
  methods: {
    ...mapMutations(['setCheckedAll', 'removeCheckedFromCart']),
    isSelected(event) {
      this.setCheckedAll(event.target.checked)
    },
    remove() {
      this.removeCheckedFromCart()
    }
  },
}
</script>

<style module>
.cart__content {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;
}

.cart__title {
  display: flex;
}

.cart__products {
  display: grid;
  grid-gap: 10px;
}

.cart__checkout {
  padding: 10px;
}
</style>