<template>
  <div>
    <div class="big-button-wrapper">
      <div class="big-button one">Daily top 100</div>
      <div class="big-button two">New releases</div>
      <div class="big-button three">Best sellers</div>
      <div class="big-button four">Top authors</div>
    </div>
    <div class="hero">
      <h1>Welcome to bookstore📚</h1>
      <p>We make looking up books online easy.
        <br/><strong> Just browse our endless stock, </strong>
        and save your favorites for later.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'landing',
  }
</script>

<style scoped lang="scss">
  .hero {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      font-weight: 600;
    }

    p {
      margin: 0;
    }

    strong {
      font-weight: 600;
    }
  }

  .big-button-wrapper {
    display: flex;
    flex-direction: row;
    scroll-snap-type: x mandatory;
    scroll-padding: 50%;
    overflow-x: auto;
  }

  .big-button {
    scroll-snap-align: center;
    cursor: pointer;
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 10px 30px;
    border-radius: 5px;
    background-size: cover;
    background-position: center center;
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1 0 100%;
    height: 100px;

    @media(min-width: 768px) {
      flex-shrink: 1;
    }


    & + .big-button {
      margin-left: 1rem;
    }

    &:active {
      opacity: 0.7;
    }

    &:focus {
      outline: none;
    }
  }

  .one {
    background-color: #000000;
    background-image: url('../assets/img/Bullseye-Gradient.svg');
  }

  .two {
    background-color: #ff66bb;
    background-image: url('../assets/img/Cornered-Stairs.svg');
  }

  .three {
    background-color: #ff7700;
    background-image: url('../assets/img/Flat-Mountains.svg');
  }

  .four {
    background-color: #ff0000;
    background-image: url('../assets/img/Quantum-Gradient.svg');
  }
</style>
