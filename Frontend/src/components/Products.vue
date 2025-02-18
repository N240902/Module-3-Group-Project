<template>
    <div class="product-card">
    <h2>{{ product.name }}</h2>
    <p>Price: {{ product.price }}</p>
    <button @click="handleAddToCart">Add to Cart</button>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'

const props = defineProps({
    product: {
    type: Object,
    required: true
    }
})

const store = useStore()

const handleAddToCart = () => {
    store.dispatch('addToCart', props.product)
}
</script>

<style scoped>
.product-card {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    margin: 1rem;
}

button {
    background: #42b983;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

button:hover {
    background: #359c6d;
}
</style>
