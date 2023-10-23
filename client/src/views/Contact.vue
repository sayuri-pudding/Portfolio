<script lang="ts" setup>
    import PageTitle from '@/components/common/PageTitle.vue';
</script>

<template>
    <PageTitle title="Contact" hitokoto="何か連絡がありましたら下記のメールアドレスまで"/>
    <div class="center">
        <p>Gmail</p>
        <p>sayuri.nikoniko@gmail.com</p>
        <v-img
        :src="'../src/assets/contact/foot.jpg'"
        height="500"
        ></v-img>

    </div>

</template>
<style scoped>
.center {
    text-align:  center;
    margin:100px;
}

</style>