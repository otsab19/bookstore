<template>
    <div id="spacerbar">
        <div id="content">
            <font-awesome-icon :icon="icon" id="icon" />
            {{ text }}
        </div>
        <div id="button">
            <slot name="button"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'spacerbar',
    props: {
        icon: String,
        text: String,
    },
}
</script>

<style scoped lang="scss">
#spacerbar {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    margin: 0;
    user-select: none;
    color: var(--black);
    font-weight: 700;
    @media (min-width: 768px) {
        flex-direction: row;
    }
}

#content {
    display: flex;
    align-items: center;
    /*hacky but this matches the searchbar exactly*/
    flex: 6;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
        line-height: 50px;
        flex-direction: row;
        margin-bottom: 0;
        margin-right: calc(1.5rem + 64px);
    }
}

#button {
    display: flex;
    flex: 2;
}

#icon {
    margin-right: 0.8rem;
}
</style>
