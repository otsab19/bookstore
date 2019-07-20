<template>
    <router-view ontouchstart="" />
</template>

<script>
export default {
    name: 'app',
}
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    background: var(--accents-1);
    -webkit-tap-highlight-color: transparent;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif;
    font-size: 16px;
}

*,
*:before,
*:after {
    box-sizing: inherit;
    outline: 0;
}

:root {
    --white: #ffffff;
    --accents-1: #fafafa;
    --accents-2: rgba(0, 0, 0, .10);
    --gray: #999999;
    --black: #000000;
}

::selection {
    background-color: #79ffe1;
    color: #000;
}
</style>
