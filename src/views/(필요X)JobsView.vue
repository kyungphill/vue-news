<template>
  <list-item></list-item>
</template>
  <!-- <div>
    <ul class="jobs-list">
      <li v-for="job in this.$store.state.jobs" class="post">
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <div>
          <p class="job-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by 
            <a :href="job.url">{{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div> -->

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';

export default {
  components : {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_JOBS')
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
    },
  // created() {
    // this.$store.dispatch('FETCH_JOBS'); 
   // fetchJobsList()
   //    .then(response => this.jobs = response.data)
   //    .catch(error => console.log(error));
  // },

}
</script>