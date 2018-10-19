<template>
  <div id="app">
    <div class="brackets" v-bind:class="{'open' : open}">
      <div class="brackets__header" @click="headerClick">
        <div class="brackets__icon"><img src="./assets/brackets_icon.png"></div>
        <div class="brackets__title">{{title}}</div>
      </div>
      <router-view v-show="open"></router-view>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    headerClick() {
      this.$store.commit('toggleOpen')
      this.$store.commit('increment')
    }
  },
  computed: {
    ...mapState({
      open: state => state.isOpen,
      count: state => state.count,
    }),
    ...mapGetters({
      title: 'mainTitle'
    })
  }
}
</script>

<style lang="scss">

@font-face {
  font-family: 'BigNoodleTitling Italic';
  src: url('../static/fonts/BigNoodleTitling-Oblique.woff2') format('woff2'),
       url('../static/fonts/BigNoodleTitling-Oblique.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'BigNoodleTitling';
  src: url('../static/fonts/BigNoodleTitling.woff2') format('woff2'),
       url('../static/fonts/BigNoodleTitling.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'BigNoodleTitling', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background-image: url('./assets/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.brackets {
  transition: all 0.2s ease-out;
  position: absolute;
  right: 0;
  bottom: 45%;
  background: rgba(0, 0, 0, 0.6);
  width: 200px;
  height: 60px;
  overflow: hidden;

  &.open {
    width: 350px;
    height: 540px;
    bottom: 10%;
  }

  &__header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      .brackets__title {
        text-shadow: 0px 0px 5px rgba(206,255,0,0.75);
      }
    }
  }

  &__icon {
    padding-top: 2px;
  }

  &__title {
    transition: all 0.4s;
    position: relative;
    color: #ceff00;
    font-size: 35px;
    letter-spacing: 4px;
    padding-top: 1px;
    margin-left: 30px;

    &::before {
      content: '';
      position: absolute;
      width: 3px;
      height: 40px;
      background-color: #ceff00;
      left: -18px;
      top: -1px;
    }
  }
}

</style>
