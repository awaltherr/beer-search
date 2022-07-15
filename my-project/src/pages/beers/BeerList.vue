<template>

<div class="info">
  <h1>This generator is a tool to show information of random Beers. Just by the action of clicking a button.</h1>
  <p>This is a place for the curious to find out information about beers that the world has to offer and will hope fully gain you knowledge of these to show others.</p>
</div>

<ul>
    <li v-for="beer in beers">
<div class="beer-info">
    <h3>{{ beer.name }}</h3>
    <p><strong>Tagline: </strong>{{ beer.tagline }}</p>
    <p><strong>First brewing: </strong>{{ beer.first_brewed }}</p>
    <p><strong>Description: </strong>{{ beer.description }}</p>
    <p><strong>ABV: </strong>{{ beer.abv }}%</p>
    <button id="reload" @click="reloadPage">Generate a new Beer</button>
</div>
</li>
</ul>


</template>

<script>

export default {
    created() {
    fetch('https://api.punkapi.com/v2/beers/random')
    .then((response) => response.json())
    .then((result) => {
      this.beers = result 
    })
  },
  data() {
    return { beers: null}
  },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  },
  props: ['name', 'tagline', 'first_brewed', 'description', 'abv']
}
</script>

<style>


.info {
  padding-top: 50px;
  margin: 1rem auto;
  max-width: 50rem;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 1.5;
}

body {
    background-color: #dda15e;
}

.beer-info {
  max-width: 800px;
  margin: 1rem auto;
  max-width: 50rem;
  background: white;
  border: 1px solid #424242;
  border-radius: 12px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  line-height: 1.5;
}

h3 {
  margin: 1rem 0;
  padding: 1rem;
}

 .info a:hover {
    text-decoration: underline;
}

#reload {
  margin: 20px auto;
  width: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #283618;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

#reload:hover,
#reload:active {
  border-color: #4f6a2f;
  background-color: #4f6a2f;
}


</style>