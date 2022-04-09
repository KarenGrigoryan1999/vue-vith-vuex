<template>
    <div class = "post">
        <p>Id пользователя: {{userId}}</p>
        <p>Текст поста: {{title}}</p>
    </div>
</template>

<script setup>
import {defineProps, toRefs} from 'vue'

const props = defineProps({
    userId: String,
    title: String
});

const {userId, title} = toRefs(props);
</script>

<style>
.post {
    border: 1px solid silver;
    border-radius: 3px;
    margin: 5px;
}
</style>
