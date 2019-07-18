<template>
    <Layout>
        <template v-slot:page>
            <div id="big-button-wrapper">
                <div class="big-button">Daily top 100</div>
                <div class="big-button">New releases</div>
                <div class="big-button">Best sellers</div>
                <div class="big-button">Top authors</div>
            </div>
        </template>
    </Layout>
</template>

<script>
import Layout from '../components/Layout'

export default {
    name: 'landing',
    components: {
        Layout,
    },
}
</script>

<style scoped lang="scss">
#big-button-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        display: block !important;
    }

    .big-button {
        cursor: pointer;
        font-size: 2rem;
        font-weight: 700;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        flex: 1;
        height: 18vh;
        max-height: 150px;
        color: #fff;
        border-radius: 5px;
        background-size: cover;
        background-position: center center;
        user-select: none;

        & + .big-button {
            margin-top: 0.5rem;
            @media (min-width: 768px) {
                margin-top: 0;
                margin-left: 1rem;
            }
        }

        &:active {
            opacity: 0.7;
        }

        &:focus {
            outline: none;
        }

        &:nth-child(1) {
            background-color: #000000;
            background-image: url('../assets/img/Bullseye-Gradient.svg');
        }

        &:nth-child(2) {
            background-color: #ff66bb;
            background-image: url('../assets/img/Cornered-Stairs.svg');
        }

        &:nth-child(3) {
            background-color: #ff7700;
            background-image: url('../assets/img/Flat-Mountains.svg');
        }

        &:nth-child(4) {
            background-color: #ff0000;
            background-image: url('../assets/img/Quantum-Gradient.svg');
        }
    }
}
</style>
