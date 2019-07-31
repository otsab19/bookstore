<template>
  <div>
    <Bar icon="shopping-cart" text="Cart" />
    <Books v-model="cartBooks" :loading="cartBooks === null">
      <template v-slot:buttons="{ book }">
        <span v-if="!book._isFavorited" style="display: flex; margin-right: auto">
          <Button icon="heart" @click.native="plusFav(book)"></Button>
        </span>
        <Button icon="minus" @click.native="minusCart(book)" />
        <Button number style="margin-left: 4px;">
          {{ book._cartedQuantity }}
        </Button>
        <Button icon="plus" @click.native="plusCart(book)" style="margin-left: 4px;" />
      </template>
    </Books>
  </div>
</template>

<script>
import Books from '../components/Books'
import Bar from '../components/Bar'
import Button from '../components/Button'
import { booksRef } from '../db'

export default {
  name: 'Cavorites',
  components: {
    Books,
    Bar,
    Button,
  },
  data() {
    return {
      cartBooks: null,
    }
  },
  firebase: {
    cartBooks: booksRef.orderByChild('_cartedQuantity').startAt(1),
  },
  methods: {
    plusFav(book) {
      const newBook = { ...book }
      newBook._isFavorited = true
      booksRef.child(book['.key']).set(newBook)
    },
    minusCart(book) {
      const newBook = { ...book }
      newBook._cartedQuantity -= 1
      booksRef.child(book['.key']).set(newBook)
    },
    plusCart(book) {
      const newBook = { ...book }
      newBook._cartedQuantity += 1
      booksRef.child(book['.key']).set(newBook)
    },
  },
}
</script>

<style scoped lang="scss">
#subtotal {
  display: inline-flex;
}
</style>
