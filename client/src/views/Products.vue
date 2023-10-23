<script lang="ts" setup>
    import PageTitle from '@/components/common/PageTitle.vue';
    import products from "../settings/products.json";
</script>

<template>
    <div class="products">
        <PageTitle title="Products" hitokoto="大学の授業で作ったものから、ハッカソンで作成したものについてご紹介します"/>
        <v-row class="mx-12">
            <v-col v-for="(product, i) in products" :key="i" cols="3">
                <v-card class="content">
                    <v-img
                        :src="`../src/assets/products/${product.imagePath}`"
                        contain
                        height="300"></v-img>
                    <v-card-title>{{ product.title }}</v-card-title>
                    <v-card-subtitle>学年：{{ product.grade }}</v-card-subtitle>
                    <v-card-subtitle>使用言語：{{ product.language.toString() }}</v-card-subtitle>
                    <v-card-text>{{ product.introduction }}</v-card-text>
                    <v-btn
                        v-if="product.url !== ''"
                        :href="`${product.url}`"
                    >アクセス</v-btn>
                </v-card>
            </v-col>
    </v-row>
    </div>
</template>

<style scoped>

.content {
    height: 500px;
}

</style>