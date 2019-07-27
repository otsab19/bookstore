<template>
  <div id="books">
    <div id="book" v-for="book of value" :key="book._bookid">
      <div style="display: flex;">
        <img id="book-thumbnail" :src="book.thumbnail" alt="thumbnail" />
        <div id="book-info">
          <h3 id="book-info-title">{{ book.title }}</h3>
          <span id="book-info-authors">{{ book.authors }}</span>
          <span id="book-info-categories">{{ book.categories }}</span>
        </div>
      </div>
      <div class="book-buttons">
        <slot name="buttons" :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Books',
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
#books {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 1.75rem;
  margin: 1.75rem 0;
  @media (min-width: 1025px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

#book {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 10px 30px;
  position: relative;
  z-index: 5;
  background-color: var(--white);

  @media(min-width: 768px) {
    padding: 1rem 2rem;
  }
}

#book-thumbnail {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 5px;
  transform: translate(0, -35px);
  user-select: none;
  object-fit: cover;
  height: 160px;
}

#book-info {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
}

#book-info-title {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  font-weight: 700;
  margin: 0;
}

#book-info-authors {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  color: var(--gray);
  margin: 8px 0;
}

#book-info-categories {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  color: var(--gray);
  font-size: 0.75rem;
  margin-bottom: 8px;
}

.book-buttons {
  display: inline-flex;
  flex-direction: row;
  margin-top: auto;
  justify-content: flex-end;
}
</style>
