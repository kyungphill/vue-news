<template>
<div>
    <list-item></list-item>
</div>
      <!-- <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by 
        <router-link v-bind:to="`/user/${item.user}`">{{  item.user }}</router-link>
      </small> -->
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';

export default {
  components: {
    'list-item':  ListItem,
    //ListItem,
  },
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_NEWS')
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
    }
   // fetchNewsList()
   //   .then(response => this.users = response.data)
   //   .catch(error => console.log(error));
}
</script>