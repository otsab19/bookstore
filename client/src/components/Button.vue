<template>
  <button id="btn" :class="{ secondary, submit, number }">
    <font-awesome-icon v-if="isLoading" icon="sync" class="fa-spin" />
    <span v-else>
      <span v-if="icon">
        <font-awesome-icon :icon="icon" :class="classObject" />
      </span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    secondary: Boolean,
    submit: Boolean,
    number: Boolean,
    icon: String,
    isLoading: Boolean,
  },
  computed: {
    isSlotPresent() {
      return !!this.$slots.default
    },
    classObject() {
      return {
        iconandtext: this.isSlotPresent && this.icon,
      }
    },
  },
}
</script>

<style scoped lang="scss">
#btn {
  display: block;
  background-color: var(--accents-2);
  border: 1px solid transparent;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 6px 10px;
  color: var(--gray);
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 0.875rem;
  user-select: none;

  &:active {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }

  &.secondary {
    background: var(--black);
    color: var(--white);
    border: 1px solid var(--black);
  }

  &.submit {
    display: flex;
    flex: auto;
    background: var(--black);
    color: var(--white);
    border: 1px solid var(--black);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px;
  }

  &.number {
    border-color: transparent;
    cursor: default;
    color: var(--black);
    background-color: transparent;

    &:active {
      opacity: 1;
    }
  }
}

.iconandtext {
  margin-right: 5px;
}
</style>
