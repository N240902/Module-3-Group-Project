<template>
    <div class="super_container">
    <!-- Header -->
    <header class="header trans_300">
        <div class="top_nav">
        <div class="container">
            <div class="row">
            <div class="col-md-6">
                <div class="top_nav_left">Free shipping on SA orders over R1000</div>
            </div>
            <div class="col-md-6 text-right">
                <div class="top_nav_right">
                <ul class="top_nav_menu">
                    <li class="currency" @mouseover="showCurrency = true" @mouseleave="showCurrency = false">
                    <a href="#">USD <i class="fa fa-angle-down"></i></a>
                    <ul v-show="showCurrency" class="currency_selection">
                        <li><a href="#">ZAR</a></li>
                        <li><a href="#">USD</a></li>
                        <li><a href="#">EUR</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>

        <!-- Main Navigation -->
        <div class="main_nav_container">
        <div class="container">
            <div class="row">
            <div class="col-lg-12 text-right">
                <div class="logo_container">
                <span>E-SHOP</span>
                </div>
                <nav class="navbar">
                <ul class="navbar_menu">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/shop">Shop</router-link></li>
                    <li><router-link to="/blog">Blog</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
                <ul class="navbar_user">
                    <li class="checkout">
                    <router-link to="/cart">
                        <span class="cart_count">{{ cartCount }}</span>
                        <i class="fa fa-shopping-cart"></i>
                    </router-link>
                    </li>
                </ul>
                </nav>
            </div>
            </div>
        </div>
        </div>
    </header>

    <!-- Mobile Menu -->
    <div class="mobile_menu" :class="{ 'menu_active': isMobileMenuOpen }">
        <div class="menu_close"><i class="fa fa-times" @click="isMobileMenuOpen = false"></i></div>
        <ul class="menu_items">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/shop">Shop</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </div>

    <!-- Main Content -->
    <main>
        <!-- Hero Slider -->
        <div class="hero_slider_container">
        <div class="owl-carousel owl-theme">
            <div class="hero_slide" v-for="(slide, index) in slides" :key="index">
            <img :src="slide.image" class="img-fluid" :alt="slide.title">
            <div class="hero_slide_content">
                <h2>{{ slide.title }}</h2>
                <p>{{ slide.subtitle }}</p>
            </div>
            </div>
        </div>
        </div>

        <!-- Product Categories -->
        <div class="product_banner">
        <div class="container">
            <div class="row">
            <div class="col-md-4" v-for="(category, index) in categories" :key="index">
                <div class="banner_item">
                <img :src="category.image" class="img-fluid" :alt="category.name">
                <div class="banner_category">
                    <h3>{{ category.name }}</h3>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <!-- New Arrivals -->
        <section class="new_arrivals">
        <div class="container">
            <div class="row">
            <div class="col text-center">
                <div class="section_title">
                <h2>New Arrivals</h2>
                </div>
            </div>
            </div>
            
            <div class="row">
            <div class="col">
                <div class="product-grid">
                <div class="product-item" v-for="product in filteredProducts" :key="product.id">
                    <img :src="product.image" class="img-fluid" :alt="product.name">
                    <h3>{{ product.name }}</h3>
                    <p>R{{ product.price }}</p>
                    <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        <!-- Deal of the Week -->
        <section class="deal_ofthe_week">
        <div class="container">
            <div class="row">
            <div class="col text-center">
                <h2>Deal of the Week</h2>
                <div class="deal_countdown">
                {{ formatTimeRemaining }}
                </div>
            </div>
            </div>
        </div>
        </section>

        <!-- Best Sellers -->
        <section class="best_sellers">
        <div class="container">
            <div class="row">
            <div class="col text-center">
                <h2>Best Sellers</h2>
                <div class="owl-carousel owl-theme">
                <div class="product-item" v-for="product in bestSellers" :key="product.id">
                    <img :src="product.image" class="img-fluid" :alt="product.name">
                    <h3>{{ product.name }}</h3>
                    <p>R{{ product.price }}</p>
                    <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        <!-- Benefits -->
        <section class="benefits">
        <div class="container">
            <div class="row">
            <div class="col-md-3" v-for="(benefit, index) in benefitsList" :key="index">
                <div class="benefit_item">
                <i :class="'fa fa-' + benefit.icon"></i>
                <h4>{{ benefit.title }}</h4>
                <p>{{ benefit.text }}</p>
                </div>
            </div>
            </div>
        </div>
        </section>

        <!-- Blog Section -->
        <section class="blog_section">
        <div class="container">
            <div class="row">
            <div class="col-md-4" v-for="post in blogPosts" :key="post.title">
                <div class="blog_post">
                <img :src="post.image" class="img-fluid" :alt="post.title">
                <h4>{{ post.title }}</h4>
                <p class="post-date">{{ post.date }}</p>
                </div>
            </div>
            </div>
        </div>
        </section>

        <!-- Newsletter -->
        <section class="newsletter">
        <div class="container">
            <div class="row">
            <div class="col text-center">
                <h3>Subscribe to our newsletter</h3>
                <form @submit.prevent="handleNewsletterSubscribe">
                <input type="email" v-model="newsletterEmail" placeholder="Enter your email">
                <button type="submit" class="btn btn-primary">Subscribe</button>
                </form>
            </div>
            </div>
        </div>
        </section>

        <!-- Cart Counter -->
        <div class="cart-counter">
        <i class="fa fa-shopping-cart"></i>
        <span class="badge">{{ cartCount }}</span>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
        <div class="row">
            <div class="col text-center">
            <p>&copy; 2024 E-SHOP. All rights reserved.</p>
            </div>
        </div>
        </div>
    </footer>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import $ from 'jquery'

const store = useStore()
const isMobileMenuOpen = ref(false)
const showCurrency = ref(false)
const activeFilter = ref('all')
const newsletterEmail = ref('')
  const dealEndTime = ref(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)

  // Vuex state
const products = computed(() => store.getters.allProducts)
const cartCount = computed(() => store.getters.cartCount)

  // Computed properties
const filteredProducts = computed(() => activeFilter.value === 'all' 
    ? products.value
    : products.value.filter(p => p.category === activeFilter.value))

const bestSellers = computed(() => products.value.slice(0, 5))

const formatTimeRemaining = computed(() => {
    const timeLeft = dealEndTime.value - Date.now()
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    return `${days}d ${hours}h remaining`
})

  // Methods
const addToCart = (product) => {
    store.dispatch('addToCart', product)
}

const handleNewsletterSubscribe = () => {
    console.log('Subscribed:', newsletterEmail.value)
    newsletterEmail.value = ''
}

  // Initial data
const slides = ref([
    { image: '/images/hero_1.jpg', title: 'New Collection', subtitle: 'Discover our latest arrivals' },
    { image: '/images/hero_2.jpg', title: 'Summer Sale', subtitle: 'Up to 50% off selected items' }
])

const categories = [
    { name: "Women's", image: "banner_1.jpg" },
    { name: "Accessories", image: "banner_2.jpg" },
    { name: "Men's", image: "banner_3.jpg" }
]

const benefitsList = [
    { icon: 'truck', title: 'Free Shipping', text: 'Suffered Alteration in Some Form' },
    // ... other benefits
]

const blogPosts = [
    { title: 'Fall Trends 2024', image: 'blog_1.jpg', date: 'Dec 01, 2024' },
    // ... other posts
]

  // Lifecycle hooks
onMounted(() => {
    store.dispatch('fetchProducts')
    $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    dots: true
    })
})
</script>

<style scoped>
.super_container {
    position: relative;
    overflow: hidden;
}

.cart-counter {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 1rem;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    cursor: pointer;
    z-index: 1000;
}

.cart-counter .badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #e65540;
    color: white;
    border-radius: 50%;
    padding: 5px 8px;
    font-size: 0.8rem;
}

.fa-shopping-cart {
    font-size: 1.5rem;
    color: #333;
}
</style>