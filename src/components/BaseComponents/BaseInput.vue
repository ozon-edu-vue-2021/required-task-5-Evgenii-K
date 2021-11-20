<template>
  <input
    :class="$style.base__input"
    :type="type"
    :value="value"
    @input="$emit('input', $event.target.value)"
    :readonly="readonly"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style module>
.base__input {
  background-color: #fff;
  width: 100%;
  border: 2px solid #dce0e6;
  border-radius: 5px;
  padding: 0px 10px;
  margin: 10px 0px;
  font-size: 16px;
  height: 40px;
  cursor: pointer;
}
.base__input:focus-visible {
  border-color: #2459f6;
  outline: 0px solid #2459f6;
}
.base__input:active {
  border-color: #2459f6;
}
</style>