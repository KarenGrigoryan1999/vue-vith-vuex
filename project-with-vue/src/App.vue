<template>
  <onePost v-for = "post of posts" :userId="post.userId" :title="post.title" :key="post.id" />
</template>

<script setup>
import {useStore} from 'vuex'
import {computed} from 'vue'

import onePost from './components/onePost'

const store = useStore();

store.dispatch("getPostsFromServer");

const posts = computed(() => store.state.posts);

</script>

<style>

</style>
