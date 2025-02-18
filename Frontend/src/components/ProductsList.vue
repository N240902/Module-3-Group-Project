<template>
    <div class="products-container">
    <Product 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
    />
    </div>
</template>

<script setup>
import Product from '@/components/Product.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const products = computed(() => store.getters.allProducts)
</script>
