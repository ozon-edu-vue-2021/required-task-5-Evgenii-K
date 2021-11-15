<template>
  <div :class="$style.card__content">
    <input 
      type="checkbox"
      :checked="product.checked"
      @change="isChecked"
    />      
    <img 
      :class="$style.card__image" 
      :src="require(`@/assets/images/${product.img}`)" 
      alt="img-item" 
    />
    <div
      :class="$style.card__info"
    >
      {{ product.dish }}
      <change-item
        :id="product.id"
      />
    </div>
    <div
      :class="$style.card__price"
    >
      {{ getCurrentProductFullPrice(product.id) }}
    </div>
    <div
      :class="$style.card__count"
    >
      <base-multi-select
        readonly
        :selected="product.count"
        @update="updateCount"
      />
    </div>
  </div>
</template>

<script>
import BaseMultiSelect from '../BaseComponents/BaseMultiSelect.vue'
import ChangeItem from '../ChangeItem.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'BasketCard',
  components: {
    BaseMultiSelect,
    ChangeItem
  },
  data() {
    return {
    }
  },
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapMutations([
      'setCount',
      'setChecked',
    ]),
    isChecked(event) {
      const value = event.target.checked
      const id = this.product.id
      this.setChecked({id, value})
    },
    updateCount(count) {
      const id = this.product.id
      this.setCount({id, count})
    },
  },
  computed: {
    ...mapGetters([
      'getCurrentProductFullPrice'
    ]),
  }
}
</script>

<style module>
.card__content {
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1fr 2fr 1fr 1fr;
  grid-gap: 20px;
  background-color: #fff;
  padding: 10px;
}
.card__image {
  width: 100px;
  height: 100px;
  align-self: center;
  margin-bottom: 5px;
}
</style>