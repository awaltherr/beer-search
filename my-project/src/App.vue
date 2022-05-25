<script>
import TheHeader from "./components/styling/TheHeader.vue";
import BeerList from "./pages/beers/BeerList.vue";
import CustomerSupport from './pages/contact/CustomerSupport.vue';
import ThankYou from './pages/contact/ThankYou.vue'

export default {
  components: {
    TheHeader,
    BeerList,
    CustomerSupport,
    ThankYou
  }
}

</script>

<template>
  <TheHeader />
  <beer-list v-for="res in beers"
  :name="res.name"
  :tagline="res.tagline"
  :first_brewed="res.first_brewed"
  :description="res.description"
  :abv="res.abv"
  ></beer-list>
  <RouterView/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700&display=swap');

html {
  font-family: 'Epilogue', sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

</style>