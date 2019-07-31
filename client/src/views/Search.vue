<template>
  <div>
    <Bar>
      <template v-slot:bar>
        <input
          v-model="searchInput"
          id="searchbar"
          type="text"
          placeholder="Search for books by name, author, category, etc..."
        />
      </template>
      <template v-slot:button>
        <Button @click.native="onClick" :is-loading="isLoading" submit>
          <span>search</span>
        </Button>
      </template>
    </Bar>
    <Books v-model="searchedBooks" :loading="isLoading">
      <template v-slot:buttons="{ book }">
        <span style="display: flex; margin-right: auto">
          <Button v-if="true" icon="hand-holding-heart" @click.native="addToFav(book)">save</Button>
          <Button v-else @click.native="$router.push('/favorites')">saved</Button>
        </span>
        <Button v-if="true" secondary icon="cart-plus" @click.native="addToCart(book)"
          >add to cart
        </Button>
        <Button v-else secondary @click.native="$router.push('/cart')">view cart</Button>
      </template>
    </Books>
  </div>
</template>

<script>
import Bar from '../components/Bar'
import Books from '../components/Books'
import Button from '../components/Button'
import axios from 'axios'
import { booksRef } from '../db'

export default {
  name: 'Search',
  components: {
    Bar,
    Books,
    Button,
  },
  props: {
    query: String,
  },
  data() {
    return {
      searchInput: '',
      searchedBooks: [],
      isLoading: false,
    }
  },
  methods: {
    searchBooks(keyword) {
      this.isLoading = true
      this.searchedBooks = []
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=21`)
        .then(({ data }) => {
          if (data.totalItems > 0) {
            this.searchedBooks = data.items.map(({ volumeInfo, id }) => {
              return {
                title: volumeInfo.title,
                authors:
                  typeof volumeInfo.authors === 'undefined'
                    ? 'Unknown author'
                    : volumeInfo.authors.join(', '),
                categories:
                  typeof volumeInfo.categories === 'undefined'
                    ? 'Other'
                    : volumeInfo.categories.join(', '),
                thumbnail:
                  typeof volumeInfo.imageLinks === 'undefined'
                    ? 'https://dummyimage.com/128x160/42f4cb/000000&text=no+image+:('
                    : volumeInfo.imageLinks.thumbnail,
                _isFavorited: false,
                _cartedQuantity: 0,
                _id: id,
              }
            })
          } else {
            this.searchedBooks = []
          }
        })
        .finally(() => (this.isLoading = false))
    },
    onClick() {
      this.searchBooks(this.searchInput)
    },
    addToFav(book) {
      booksRef
        .orderByChild('_id')
        .equalTo(book._id)
        .once('value', snapshot => {
          if (snapshot.val()) {
            booksRef.child(Object.keys(snapshot.val())[0]).set({
              ...Object.values(snapshot.val())[0],
              _isFavorited: true,
            })
          } else {
            const newBook = { ...book }
            newBook._isFavorited = true
            booksRef.push(newBook)
          }
        })
    },
    addToCart(book) {
      booksRef
        .orderByChild('_id')
        .equalTo(book._id)
        .once('value', snapshot => {
          if (snapshot.val()) {
            booksRef.child(Object.keys(snapshot.val())[0]).set({
              ...Object.values(snapshot.val())[0],
              _cartedQuantity: Object.values(snapshot.val())[0]._cartedQuantity + 1,
            })
          } else {
            const newBook = { ...book }
            newBook._cartedQuantity = 1
            booksRef.push(newBook)
          }
        })
    },
  },
  mounted() {
    if (this.query) {
      this.searchInput = this.query
      this.searchBooks(this.searchInput)
    }
  },
  watch: {
    query: function(val) {
      if (val) {
        this.searchInput = val
        this.searchBooks(this.searchInput)
      }
    },
  },
}
</script>

<style scoped lang="scss">
#searchbar {
  display: flex;
  flex: auto;
  font-weight: 700;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0 32px;
  line-height: 50px;
  background-color: var(--white);
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 10px 30px;

  // fix box shadow not showing on iOS
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
}
</style>
