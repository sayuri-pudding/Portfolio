<script lang="ts" setup>
    import PageTitle from '@/components/common/PageTitle.vue';
    import hobbysList from '../settings/hobbys.json';
</script>

<template>
    <PageTitle title="Hobby" hitokoto="ずっと料理が好きです　最近はネイルにどハマり　釣りも楽しすぎて、たまげました"/>
    <div v-for="(hobby,i) in hobbysList" :key="i" class="subtitle">
        <v-row
            class="fill-height ma-0"
            justify="center"
            >
            <h1 class="subtitle">{{ hobby.name }}</h1></v-row>
        <v-row
            dense class="subtitle"
            justify="center"
            >
            <v-col v-for="(image,n) in hobby.imagePath" :key="n" class="d-flex child-flex" cols="4">
                <v-img
                    :src="`../src/assets/hobby/${image}`"
                    class="grey lighten-2"
                    height="500"
                    width="300"
                    cover
                    >
                </v-img>
            </v-col>
        </v-row>
    </div>
</template>
<style scoped>

.subtitle {
    text-align:  center;
    margin:10px;
}

</style>