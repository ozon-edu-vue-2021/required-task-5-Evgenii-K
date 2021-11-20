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
    <div :class="$style.card__info__wrapper">
      <div :class="$style.card__info">
        <h3>{{ product.dish }}</h3>
        <change-item :id="product.id"/>
      </div>
      <div :class="$style.card__info">
        <div :class="$style.card__price">
          {{ getCurrentProductFullPrice(product.id) }} &#8381;
        </div>
        <base-multi-select
          readonly
          :selected="product.count"
          @update="updateCount"
        />
      </div>
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
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding: 10px;
}
.card__image {
  width: 100px;
  height: 100px;
  align-self: center;
  margin: 0px 10px;
}
.card__info {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card__info__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>