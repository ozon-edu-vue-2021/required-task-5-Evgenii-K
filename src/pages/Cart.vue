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
        <select-all/>
        <div
          :class="$style.cart__products"
        >
          <basket-card 
            v-for="product in itemsInCart"
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
import BasketCard from '../components/Cards/BasketCard.vue'
import CheckoutCart from '../components/Cards/CheckoutCart.vue'
import SelectAll from '../components/SelectAll.vue'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Cart',
  components: {
    BasketCard,
    CheckoutCart,
    SelectAll,
  },
  computed: {
    ...mapGetters([
      'getCountProductsInCart'
    ]),
    ...mapState([
      'itemsInCart',
    ])
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