<template>
  <div
    :class="$style.cart__checkout"
  >
    <base-button
      @click="checkout"
    >
      Перейти к оформлению
    </base-button>
    <div>
      <h3>Ваша корзина</h3>
      <div>
        Товары ({{getCountProductsInCart}})
      </div>
      <div>
        {{getPrice}} $
      </div>
    </div>
    <div>
      Общая стоимость: {{ getTotalPrice }} $
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import BaseButton from '../BaseComponents/BaseButton.vue'

export default {
  components: { 
    BaseButton 
  },
  name: 'CheckoutCart',
  methods: {
    checkout() {
      alert('Оформить')
    }
  },
  computed: {
    ...mapGetters([
      'getTotalPrice', 
      'getCountProductsInCart',
      'getPrice',
    ])
  }
}
</script>

<style module>
.cart__checkout {
  
}
</style>