  <template>
  <div>
      <p v-for="item in fetchedAsk" >   
      <router-link v-bind:to="`/item/${item.id}`">{{  item.title }}</router-link>
      <small>{{ item.time_ago }} by {{  item.user }}</small>
      </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedAsk' //#4. 바로 fechedAsk변수 배열로 받아와서 쓰기
    ]),

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

  },
  created() {
        this.$store.dispatch('FETCH_ASK'); 
  //  fetchAskList()
  //    .then(response => this.ask = response.data)
  //    .catch(error => console.log(error));
  },

}
</script>
<style>

</style>