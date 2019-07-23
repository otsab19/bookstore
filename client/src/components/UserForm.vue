<template>
    <div id="wrapper">
        <Logo style="margin: 0;line-height: inherit;" />
        <form @submit.prevent="handleSubmit" id="form">
            <div id="form-header">
                <slot name="header" />
            </div>
            <label class="form-label">
                <span class="form-label-icon">
                    <font-awesome-icon icon="envelope" />
                </span>
                <div class="form-label-input-wrapper">
                    <input
                        class="form-input"
                        v-model="model.email"
                        placeholder="E-mail"
                        type="email"
                        required
                    />
                </div>
            </label>
            <label class="form-label">
                <span class="form-label-icon">
                    <font-awesome-icon icon="key" />
                </span>
                <div class="form-label-input-wrapper">
                    <input
                        class="form-input"
                        v-model="model.password"
                        placeholder="Password"
                        type="password"
                        required
                    />
                </div>
            </label>
            <span style="display: flex;height: 40px">
                <Button style="margin-left: 0;" submit type="submit">
                    <slot name="button-text" />
                </Button>
            </span>
        </form>
        <span id="form-link">
            <slot name="bottom-link" />
        </span>
    </div>
</template>

<script>
import Logo from './Logo'
import Button from './Button'
import _ from 'lodash'

export default {
    name: 'UserForm',
    components: {
        Logo,
        Button,
    },
    props: {
        value: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            model: {},
        }
    },
    created() {
        this.model = _.cloneDeep(this.value)
    },
    methods: {
        handleSubmit() {
            this.$emit('input', this.model)
        },
    },
}
</script>

<style scoped lang="scss">
#wrapper {
    margin: 0 auto;
    display: block;
    max-width: 384px;
    text-align: center;
}

#form {
    margin: 1rem 0 0.5rem;
    background-color: var(--white);
    box-shadow: rgba(0, 0, 0, 0.12) 0 10px 30px;
    display: flex;
    flex-grow: 1;
    -webkit-box-orient: vertical;
    flex-direction: column;
    justify-content: center;
    padding: 16px 32px 32px;
    text-align: center;
    border-radius: 4px;
    width: 100%;
    max-width: 384px;
}

.form-label {
    background-color: var(--accents-1);
    display: flex;
    border-radius: 4px;
    border: 1px solid var(--accents-2);
    align-items: center;
    margin: 0 auto 10px;
    width: 100%;
}

.form-label-icon {
    display: inline-flex;
    margin: 0 1rem;
}

.form-label-input-wrapper {
    position: relative;
    width: 100%;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    cursor: text;
    text-align: left;
    font-size: 14px;
}

.form-input {
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    padding: 0 0;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    width: 100%;
    box-shadow: none;
}

#form-header {
    margin: 0 0 16px;
    text-align: left;
    & h2 {
        margin: 0;
    }
}

#form-link {
    a {
        color: inherit;
        text-decoration: none;
    }

    &:hover {
        text-decoration: underline;
    }
}
</style>