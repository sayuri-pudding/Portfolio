<script lang="ts" setup>
const news=[
  ['2023年9月22日','Vue3に全体をアップデートしました'],
  ['2022年8月30日','発表報告を追加しました'],
  ['2022年2月2日','Vue.jsで作りました'],
  ['2021年6月13日','Like項目を作りました'],
  ['2021年6月10日','サイトをリニューアルしました'],
  ['2020年5月','サイトを開設しました'],
] as const;
</script>

<template>
  <div class="top">
    <v-img
      cover
      width=width
      height="600"
      src="@/assets/top.jpg"
      class="mx-auto"
    />
    <h1 class="h1">Hello! This is Sayuri'page</h1>

    <h2 class="h2">What'new???</h2>

    <div>
      <v-row v-for ="(topic,index) in news" :key="index">
        <div class="underline">
          <v-col>{{topic[0]}}</v-col>
          <v-col>{{topic[1]}}</v-col>
        </div>

      </v-row>
    </div>


  </div>
</template>

<style scoped>
.h1{
  background-color: #f2a0a1;
  color:aliceblue;
  height:50px;
  text-align:  center;
}
.h2{
  margin:10px;
}
.news{
  text-align:  center;
}
.underline{
  text-align:  center;
  border-bottom: solid 1px #555;
  width:100%;
}
</style>

