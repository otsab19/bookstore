<template>
    <router-link id="logo" to="/">bookstore📚</router-link>
</template>

<script>
export default {
    name: 'logo',
}
</script>

<style scoped lang="scss">
#logo {
    color: var(--black);
    font-weight: 700;
    font-size: 1.5rem;
    user-select: none;
    display: block;
    text-transform: lowercase;
    text-decoration: none;

    @media (min-width: 768px) {
        margin-bottom: 2rem;
        line-height: 50px;
    }

    &:active {
        opacity: 0.5;
    }
}
</style>
