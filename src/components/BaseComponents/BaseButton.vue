<template>
  <button 
    :class="[$style.button, $attrs.class]"
    v-on="listeners"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        click: this.onClick
      }
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    }
  }
};
</script>

<style module>
.button {
  background-color: #e53659;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.2s ease-in;
  text-align: center;
  flex-shrink: 0;
}
.button:hover {
  background-color: #b42a45;
}
.button:active {
  background-color: #e53659;
  box-shadow: 0 0 5px 0 rgba(259, 54, 89, 0.5);
}
.button:disabled {
  background-color: #80575f;
}
</style>
