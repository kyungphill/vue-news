<template>
<div>
    <p>title : {{ userItem.title }}</p>    
    <p>user : {{ userItem.user }}</p>   
    <p>time_ago : {{ userItem.time_ago }}</p>
    <p>content : {{ userItem.content }}</p>
</div>
</template>

<script>
export default {
    computed: {
        userItem() {
            return this.$store.state.item;
        }
    },
    created() {
        const itemID = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemID); 
    },

}
</script>

<style>

</style>