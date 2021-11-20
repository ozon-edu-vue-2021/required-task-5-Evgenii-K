<template>
  <base-dropdown>
    <template slot="drop-down-toggle">
      <div>
        <base-input
          type="text"
          v-model="value"
          :readonly="readonly"
        />
      </div>
    </template>

    <template 
      slot="drop-down-content"
    >
      <div 
        v-for="item in 10" 
        :key="item"
        @click="selectHandler(item)"
      >
        {{ item }}
      </div>
    </template>
  </base-dropdown>
</template>

<script>
import BaseDropdown from './BaseDropdown.vue'
import BaseInput from './BaseInput.vue'

export default {
  props: {
    selected: {
      type: Number,
      default: 1
    },
    readonly: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      value: ''
    }
  },
  mounted() {
    this.value = this.selected.toString()
  },
  methods: {
    selectHandler(item) {
      this.$emit('update', item)
      this.value = item.toString()
    },
  },
  components: { BaseDropdown, BaseInput },
}
</script>

<style>

</style>