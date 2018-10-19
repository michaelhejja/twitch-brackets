<template>
  <div class="home">
    <h1 class="intro">welcome to decision maker, where you the viewer get to view what is coming up next on stream.  you also get to vote on who you think will win and see what others think as well.</h1>

    <div class="h1">next up</div>
    <div class="match-container">
      <div class="match">
        <div class="players">
          <div class="team">{{matches[0].player1.team}}</div>
          <div class="player">{{matches[0].player1.name}}</div>
        </div>
        <div class="players">
          <div class="team">{{matches[0].player2.team}}</div>
          <div class="player">{{matches[0].player2.name}}</div>
        </div>
      </div>
    </div>

    <div class="h1">coming up later</div>
    <div class="match-container">
      <div class="match">
        <div class="players">
          <div class="team">{{matches[1].player1.team}}</div>
          <div class="player">{{matches[1].player1.name}}</div>
        </div>
        <div class="players">
          <div class="team">{{matches[1].player2.team}}</div>
          <div class="player">{{matches[1].player2.name}}</div>
        </div>
      </div>
    </div>

    <div class="match-container">
      <div class="match">
        <div class="players">
          <div class="team">{{matches[2].player1.team}}</div>
          <div class="player">{{matches[2].player1.name}}</div>
        </div>
        <div class="players">
          <div class="team">{{matches[2].player2.team}}</div>
          <div class="player">{{matches[2].player2.name}}</div>
        </div>
      </div>
    </div>

    <div class="btn-vote" @click="goVote">
      VOTE
    </div>

  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'home',
  data() {
    return {
      msg: 'Hello Twitch'
    }
  },
  computed: {
    ...mapState({
      matches: state => state.matches,
    }),
  },
  methods: {
    goVote() {
      this.$router.push('vote');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.home {
  padding: 0 10px;
}

.intro {
  color: white;
  font-size: 18px;
  letter-spacing: 1.5px;
  font-weight: 100;
  margin: 10px 0 20px 0;
}

.h1 {
  color: #ceff00;
  font-size: 30px;
  letter-spacing: 1px;
  border-bottom: 3px solid #9da3a9;
  margin-bottom: 10px;
}

.match-container {
  position: relative;
  width: 100%;
  margin-bottom: 10px;

  &::before {
    content: 'VS';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: #666666;
    color: #ceff00;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    line-height: 22px;
    text-align: center;
  }
}

.match {
  display: flex;
  margin: 0 -2px;
}

.players {
  transition: background-color .2s ease-out;
  width: 200px;
  padding: 10px;
  margin: 0 2px;
  background-color: #9da3a9;
  cursor: pointer;

  &:nth-child(even) {
    text-align: right;
  }

  &:hover {
    background-color: #FFFFFF;
  }

  &.active {
    background-color: #FFFFFF;
  }
}

.team {
  color: #333333;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 16px;
}

.player {
  color: #333333;
  font-size: 30px;
  letter-spacing: 1px;
  line-height: 26px;
}

.btn-vote {
  transition: background-color .2s ease-out;
  background-color: #ceff00;
  font-size: 30px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 2px 20px;
  margin: 10px 0 0 125px;
  cursor: pointer;

  &:hover {
    background-color: #FFFFFF;
  }
}

</style>
