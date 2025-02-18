<template>
    <div class="super_container">
    <!-- Header Section -->
    <header class="header trans_300">
        <!-- Top Navigation -->
        <div class="top_nav">
        <div class="container">
            <div class="row">
            <div class="col-md-6">
                <div class="top_nav_left">free shipping on all SA orders over R1000</div>
            </div>
            <div class="col-md-6 text-right">
                <div class="top_nav_right">
                <ul class="top_nav_menu">
                    <li class="currency" @mouseover="showCurrency = true" @mouseleave="showCurrency = false">
                    <a href="#">usd <i class="fa fa-angle-down"></i></a>
                    <ul v-show="showCurrency" class="currency_selection">
                        <li v-for="curr in currencies" :key="curr"><a href="#">{{ curr }}</a></li>
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
        <!-- ... existing navigation structure ... -->
        </div>
    </header>

    <!-- Map Container -->
    <div class="container contact_container">
        <div class="row">
        <div class="col">
            <GoogleMap
            :center="mapCenter"
            :zoom="14"
            map-type-id="terrain"
            style="width: 100%; height: 507px; box-shadow: 0px 27px 59px rgba(0, 0, 0, 0.15)"
            >
            <Marker :position="markerPosition" :clickable="true" :draggable="false" />
            </GoogleMap>
        </div>
        </div>

        <!-- Contact Form -->
        <div class="row">
        <div class="col-lg-6 contact_col">
            <!-- Contact Info -->
        </div>
        
        <div class="col-lg-6 get_in_touch_col">
            <form @submit.prevent="submitForm">
            <div>
                <input v-model="form.name" class="form_input input_name input_ph" 
                    type="text" placeholder="Name" required>
                <input v-model="form.email" class="form_input input_ph" 
                    type="email" placeholder="Email" required>
                <textarea v-model="form.message" class="form_input input_message" 
                        placeholder="Message" required></textarea>
                <button type="submit" class="red_button message_submit_btn trans_300">
                Send Message
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>

    <!-- Newsletter -->
    <div class="newsletter">
        <form @submit.prevent="submitNewsletter">
        <div class="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center">
            <input v-model="newsletterEmail" type="email" placeholder="Your email" required>
            <button type="submit" class="newsletter_submit_btn trans_300">subscribe</button>
        </div>
        </form>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <!-- Footer content -->
    </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { GoogleMap, Marker } from '@googlemaps/js-api-loader'

  // Reactive state
const showCurrency = ref(false)
const form = ref({
    name: '',
    email: '',
    message: ''
})
const newsletterEmail = ref('')
const currencies = ref(['ZAR', 'USD', 'EUR', 'GBP'])
const mapCenter = ref({ lat: 40.712776, lng: -74.005974 })
const markerPosition = ref({ lat: 40.712776, lng: -74.005974 })

  // Methods
const submitForm = () => {
    console.log('Form submitted:', form.value)
}

const submitNewsletter = () => {
    console.log('Newsletter email:', newsletterEmail.value)
}
</script>

<style scoped>
body {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    line-height: 23px;
    font-weight: 400;
    background: #FFFFFF;
    color: #1e1e27;
}
.super_container {
    width: 100%;
    overflow: hidden;
}
.top_nav {
    width: 100%;
    height: 50px;
    background: #1e1e27;
}
.top_nav_left {
    height: 50px;
    line-height: 50px;
    font-size: 13px;
    color: #b5aec4;
    text-transform: uppercase;
}
.form_input {
    display: block;
    width: 100%;
    height: 50px;
    border: solid 1px #e5e5e5;
    padding-left: 20px;
    font-size: 16px;
    margin-bottom: 20px;
}
.input_message {
    width: 100%;
    margin-bottom: 15px;
    font-size: 16px;
    padding-bottom: 15px;
}
.red_button {
    background: #fe4c50;
    color: #FFFFFF;
    text-transform: uppercase;
    width: 165px;
    height: 46px;
    cursor: pointer;
}
.red_button:hover {
    background: #FE7C7F !important;
}
</style>