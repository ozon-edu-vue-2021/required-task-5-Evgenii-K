<template>
  <div 
    :class="$style.drop__down__toggle"
    v-click-outside="closeOutside" 
  >
    <div @click="open">
      <slot name="drop-down-toggle"></slot>
    </div>
    <div v-show="opened" @click="close" :class="$style.drop__down__content">
      <slot name="drop-down-content"></slot>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";


export default {
  name: 'BaseDropdown',
  data: () => ({
    opened: false,
  }),
  methods: {
    open() {
      this.opened = true
    },
    closeOutside() {
      if(!this.opened) return
      this.opened = false
      this.$emit('close')
    },
    close() {
      this.opened = false
    }
  },
  directives: {
    ClickOutside,
  },
}
</script>

<style module>
.drop__down__toggle{
  width: 50px;
  position: relative;
}
.drop__down__content {
  position: absolute;
  z-index: 10;
  background-color: #fff;
  border: 2px solid #dce0e6;
  border-radius: 5px;
  display: grid;
  width: 100%;
  padding: 5px 0;
}
.drop__down__content > div {
  padding: 10px;
}
.drop__down__content > div:hover {
  background-color: rgb(233, 233, 233);
  cursor: pointer;
}
</style>