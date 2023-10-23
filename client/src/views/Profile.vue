<script lang="ts" setup>
  import PageTitle from "@/components/common/PageTitle.vue"
  interface ElementType{
    icon:string;
    title:string;
    body:string;
  }
  const elementList:ElementType[]=[
    {
      icon:"mdi-account",
      title:"Name",
      body:"松田　さゆり（Sayuri Matsuda）",
    },
    {
      icon:"mdi-school",
      title:"Affiliarion",
      body:"明治大学大学院先端数理科学研究科 修士1年",
    },
    {
      icon:"mdi-cake",
      title:"Birthday",
      body:"2000/11/28"
    },
    {
      icon:"mdi-xml",
      title:"Skills",
      body:"Python・TypeScript・Vue.js・HTML・CSS・PHP・Processing"
    },
    {
      icon:"mdi-heart",
      title:"Favorite",
      body:"Cooking・SelfNail・Fishing"
    }
  ]
</script>

<template>
  <div class="profile">
    <PageTitle title="Profile" hitokoto="わたしについて" />
    <v-row>
      <v-col cols="6">
        <v-img
          cover
          src="@/assets/profile.jpg"
          width=60%
          height="700"
          class="mx-auto border-radius: 20px;"
        ></v-img>
      </v-col>
      <v-col cols="6">
        <div class="element mb-4" v-for="(element,index) in elementList" :key="index">
          <div class="element-header d-flex my-10">
            <p><v-icon :icon="element.icon"/>{{element.title}}</p>
          </div>
          <div class="d-flex mx-12">
            <p>{{element.body}}</p>
          </div>

        </div>

      </v-col>
    </v-row>


  </div>
</template>

<style scoped>
.element-header{
  border-bottom: solid 1px #555;
  width:90%;
  margin:10px;
}

</style>