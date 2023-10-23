<script lang="ts" setup>
    import PageTitle from    '@/components/common/PageTitle.vue';
    // import DetailDialog from '@/components/works/DetailDialog.vue';
    import Works from '@/settings/works.json';
    // import {ref} from 'vue';//常に監視してくれる関数

    // const isDialog = ref<boolean>(false);

    // const openDialog = () =>{
    //     isDialog.value = true;
    // }
    // const closeDialog =() =>{
    //     isDialog.value = false;
    // }
    interface WorksType{
        title:string,
        image?:string,
        overview:string,
        description?:string,
        authors:string,
        conference?:string,
        place:string,
        date?:string,
        url_work?:string,
        url_slide?:string,
        url_impression?:string
        // tagList?:string[]
    }
    const worksList:WorksType[]=Works.reverse();

    //指定したURLに飛ばす関数
    const moveLink=(url?:string)=>{
        window.open(url,'_blank');
    }
</script>

<template>
    <!-- <DetailDialog
        :is-dialog="isDialog"
        :close-dialog="closeDialog"
    /> -->
    <div class="work">
        <PageTitle title="Works" hitokoto="学部3年生の時から研究をして、6本は主著として執筆。運転・爪色・文字学習と、、、分野はばらばらですね"/>
        <v-col v-for="(work,i) in worksList" :key="i">
            <v-card class="mx-12">
                <v-row>
                    <v-card-title>{{ work.title }}</v-card-title></v-row>
                    <v-row>
                        <v-col cols="5">
                        <v-img
                            contain
                            width="400"
                            height="200"
                            :src="`../src/assets/works/${work.image}`"
                            class="mx-auto"
                            ></v-img>
                    </v-col>
                    <v-col cols="7">
                        <p  class="content">{{ work.description }}</p>
                        <p class="content"><v-icon icon="mdi-account"/>{{ work.authors }}</p>
                        <p class="content"><v-icon icon="mdi-calendar-range"/>{{ work.date }}<v-icon icon="mdi-map-marker-outline"/>{{ work.place }}</p>
                        <v-row class="content">
                            <v-col cols="4"><v-btn color="#EF87AA" @click=moveLink(work.url_work)><v-icon icon="mdi-open-in-new"/>論文情報</v-btn></v-col>
                            <v-col cols="4"><v-btn color="#EF87AA" @click=moveLink(work.url_slide)><v-icon icon="mdi-open-in-new"/>スライド</v-btn></v-col>
                            <v-col cols="4"><v-btn color="#EF87AA" @click=moveLink(work.url_impression)><v-icon icon="mdi-open-in-new"/>発表報告記事</v-btn></v-col></v-row>
                    </v-col>

                </v-row>
            </v-card>
        </v-col>


</div>
</template>

<style scoped>
.h1{
    background-color: #EF87AA;
    color:aliceblue;
    height:50px;
    text-align:  center;
  }
.content{
    max-width: 100%;
    font-size: 0.9rem;
    display: -webkit-box;
    /* -webkit-box-orient: vertical; */
    -webkit-line-clamp: 8;
    overflow: hidden;
}
</style>
