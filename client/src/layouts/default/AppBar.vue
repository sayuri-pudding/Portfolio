<script lang="ts" setup>
  import {useRouter} from "vue-router";
  const router=useRouter();
  const tabNames=[
    "Home",
    "Profile",
    "Works",
    "Products",
    "Hobby",
    "Contact",
  ] as const;

  type TabName = typeof tabNames[number];

  const navigatePage=(name:TabName) =>{
    const lowerName: string = name =="Home"? "":name.toLowerCase();
    router.push(`/${lowerName}`)
  }

  const icons=[
    ['mdi-alpha-x','https://twitter.com/sayurinnkok'],
    ["mdi-instagram",'https://www.instagram.com/sayurinnko/?hl=ja'],
    ['mdi-github','https://github.com/sayuri-pudding'],
  ]as const;

</script>

<template>
  <v-app-bar
    flat
    height="80"
    color="#f2a0a1">
    <v-app-bar-title class="title">
      <img
        src = "@/assets/logo.png"
        @click="() => {router.push('/')}"
        >
    </v-app-bar-title>

    <v-col>
      <v-row justify="end">
        <div v-for="(ico,index) in icons" :key="index">
          <v-btn icon :href="ico[1]">
            <v-icon :icon="ico[0]" class="icon" />
          </v-btn>
        </div>
      </v-row>

      <v-row>
        <div v-for="(name,index) in tabNames" :key="index">
        <v-col @click="navigatePage(name)">{{name}}</v-col>
        </div>
      </v-row>
    </v-col>
  </v-app-bar>
</template>

<style scoped>
 .title {
   cursor: pointer;
 }
</style>