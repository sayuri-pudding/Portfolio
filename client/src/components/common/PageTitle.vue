<script lang="ts" setup>
    // import {defineProps} from 'vue';

    export interface Props{
        title:String;
        hitokoto:String;
    }
    const props = defineProps<Props>();
</script>

<template>
    <div class="layout">
        <p class="page-title">{{ props.title }}</p>
        <p class="page-hitokoto">{{ props.hitokoto }}</p>
    </div>

</template>

<style scoped>
.layout{
    margin:30px;
}
.page-title{
    text-align:center;
    font-size:3rem;
    margin:10px;
}
.page-hitokoto{
    text-align:center;
    font-size:1rem;
    margin:10px;
}
</style>