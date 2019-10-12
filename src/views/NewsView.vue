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

export default {
  components: {
    'list-item':  ListItem,
    //ListItem,
  },
   // fetchNewsList()
   //   .then(response => this.users = response.data)
   //   .catch(error => console.log(error));
}
</script>