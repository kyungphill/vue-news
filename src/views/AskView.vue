<template>
<div>
  <list-item></list-item>
</div>

</template>
  <!-- <div>
    <ul class="ask-list">
      <li v-for="item in fetchedAsk" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link v-bind:to="`/item/${item.id}`">{{  item.title }}</router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
          <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{  item.user }}</router-link>
          </small>
        </div>
        
      </li>
    </ul>
  </div> -->

<script>
import ListItem from '../components/ListItem.vue';

// import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    ListItem,
  },
//  computed: {
//    ...mapGetters([
//      'fetchedAsk' //#4. 바로 fechedAsk변수 배열로 받아와서 쓰기
//    ]),
//
  //  #3 객체안에다가 fetchedAsk로 선언하고 fechedAsk받아오기
  //  ...mapGetters({
  //    fetchedAsk: 'fetchedAsk'
  //  }),

  //  #2
  //  ...mapState({
  //    fetchedAsk: state => state.ask
  //  })

  //  #1
  //  ask() {
  //    return this.$store.state;
  //  }

  //},
  // created() {
  //       this.$store.dispatch('FETCH_ASK'); 
  // //  fetchAskList()
  //    .then(response => this.ask = response.data)
  //    .catch(error => console.log(error));
  // },

}
</script>