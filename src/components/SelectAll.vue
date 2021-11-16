<template>
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
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'SelectAll',
  computed: {
    ...mapGetters(['getCheckAll']),
  },
  methods: {
    ...mapMutations([
      'setCheckedAll', 
      'removeCheckedFromCart',
    ]),
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
.cart__select {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
}
.cart__select input, label, button {
  cursor: pointer;
}
.cart__select label {
  margin: 0px 10px;
}
.cart__select button {
  border: none;
  background-color: #fff;
  color: #e53659;
  font-size: 16px;
}
.cart__select button:hover {
  color: #b42a45;
}
</style>