<template>
    <Layout>
        <template v-slot:page>
            <Bar icon="heart" text="Favorites" />
            <Books v-model="favoriteBooks">
                <template v-slot:buttons="{ book }">
                    <span style="display: flex; margin-right: auto">
                        <Button
                            icon="trash"
                            @click.native="minusFav(book)"
                        ></Button>
                    </span>
                    <Button
                        v-if="book._cartedQuantity < 1"
                        secondary
                        icon="cart-plus"
                        @click.native="plusCart(book)"
                        >add to cart
                    </Button>
                    <Button
                        v-else
                        @click.native="$router.push('/cart')"
                        secondary
                        >view cart</Button
                    >
                </template>
            </Books>
        </template>
    </Layout>
</template>

<script>
import Books from '../components/Books'
import Button from '../components/Button'
import Bar from '../components/Bar'
import Layout from '../components/Layout'
import {booksRef} from "../db"

export default {
    name: 'Favorites',
    components: {
        Books,
        Layout,
        Bar,
        Button,
    },
    data() {
        return {
            favoriteBooks: []
        }
    },
    firebase: {
        favoriteBooks: booksRef.orderByChild('_isFavorited').equalTo(true)
    },
    methods: {
        minusFav(book){
            const newBook = {...book};
            newBook._isFavorited = false;
            booksRef.child(book['.key']).set(newBook);
        },
        plusCart(book){
            const newBook = {...book};
            newBook._cartedQuantity += 1;
            booksRef.child(book['.key']).set(newBook);
        }
    }
}
</script>

<style lang="scss" scoped></style>
