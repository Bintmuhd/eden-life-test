<template>
  <div>
    <div v-if="loadingStatus">
    <Loader/>
    </div>

    <div v-else class="home">
    <h1>Dog Gallery</h1>

    <nav>
      <Loader/>
      <div class="select-container">
      <select v-on:change="(e) => loadByBreeds(e)" >
          <option>Search dogs</option> 
          <option v-for="dogBreed in dogBreeds" :key="dogBreed">{{dogBreed}}</option>
      </select>
      </div>
   
      <button class="btn"><bell-outline/></button>
    </nav>
    <main v-if="!dogCategories.length" class="grid-section">
      <div  v-for="dog in dogs" :key="dog"  class="grid-item">
          <img class="img-style" :src="dog" href="dog Image" />
        </div>
    </main> 
    <main v-else class="grid-section">
      <div  v-for="dog in dogCategories" :key="dog"  class="grid-item">
          <img class="img-style" :src="dog" href="dog Image" />
        </div>
    </main> 
    </div>
  </div>
</template>


<script>
import Loader from '../components/Loader.vue';
import BellOutline  from 'vue-material-design-icons/BellOutline.vue';
import { mapGetters } from 'vuex';

export default {
  name: "Home",
  
components: {
  BellOutline, 
  Loader,
},

  computed: {
    ...mapGetters([
      'dogs',
      'dogBreeds',
      'loadingStatus' ,
      'dogCategories',
    ]),
    
  },
  methods: {
    loadByBreeds: function (event) {
    this.$store.dispatch('getDogCategories', event.target.value);
      }
    },
  created() {
    this.$store.dispatch('getDogs');
    this.$store.dispatch('getDogBreeds');
  },
};

</script>

<style>
.home {
  width: 100%;
  color: var(--main);
  height: 100%;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2.5rem;
  height: 2rem;
}

.select-container {
  width: 20rem;
  background-color: whitesmoke;
  border-radius: 15px;
}

select {
  width: 100%;
  background: transparent;
  border: none;
  padding: 1.5rem;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
}

button {
    border-radius: 15px;
    border: none;
    padding: 1rem;
    cursor: pointer;
    color: var(--main);
    background: whitesmoke;
    display: flex;
    align-items: center;
}

.icon {
  padding: 10px;
  background: var(--main);
  color: white;
  min-width: 50px;
  text-align: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
}

.grid-section {
  display: grid;
  grid-template-columns: auto auto auto auto ;
  padding: 5px;
  grid-gap: 10px;
}

.grid-item {
  height: 250px ;
  min-width: 100px;
}

.img-style {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media only screen and (max-width: 930px) {
.grid-section {
  grid-template-columns: auto auto;
}

.select {
  width: 50%
}
}

@media only screen and (max-width: 600px) {
.grid-section {
  grid-template-columns: auto;
}

.select {
  width: 10rem
}

}

</style>