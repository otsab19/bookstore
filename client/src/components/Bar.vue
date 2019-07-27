<template>
  <div id="wrapper">
    <div id="bar">
      <font-awesome-icon v-if="icon" :icon="icon" id="icon" />
      <span id="text">{{ text }}</span>
      <slot name="bar"></slot>
    </div>
    <div :class="{ button: this.$slots.button }">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bar',
  props: {
    icon: String,
    text: String,
  },
}
</script>

<style scoped lang="scss">
#wrapper {
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
}

#bar {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  user-select: none;
  color: var(--black);
  font-weight: 700;
  @media (min-width: 768px) {
    flex: 6.5;
  }
}

.button {
  display: flex;
  height: 2.3rem;
  margin-top: 0.5rem;
  @media (min-width: 768px) {
    margin-top: 0;
    height: auto;
    margin-left: 1.75rem;
    flex: 2;
  }
}

#icon {
  margin-right: 0.8rem;
}
</style>
