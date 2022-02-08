<template>
  <div>

<div v-if="loadingStatus">
<Loader/>
</div>

<div v-else class="home">
  <h1>Dog Gallery</h1>

  <nav>
   <Loader/>
   <div class="select">
  <select v-on:change="(e) => loadByBreeds(e)" >
      <option>Search dogs</option> 
      <option v-for="dogBreed in dogBreeds" :key="dogBreed">{{dogBreed}}</option>
   </select>
   </div>
   
   <button ><bell-outline/></button>
  </nav>
  <main v-if="!dogCategories.length" class="grid-section">
    <div  v-for="dog in dogs" :key="dog"  className="grid-item">
        <img class="img-style" :src="dog" href="dog Image" />
      </div>
  </main> 
  <main v-else class="grid-section">
     <div  v-for="dog in dogCategories" :key="dog"  className="grid-item">
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
console.log(mapGetters, 'ffg')
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
}

nav {
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 2.5rem;
height: 2rem;
}

.input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  margin-bottom: 15px;
width: 40%;
}

.select {
  width: 20rem;
  background: white;
    border-radius: 15px;

}

select {
  width: 100%;
  background: transparent;
  border: none;
  padding: 1.5rem;
    border-radius: 15px;
outline: none;
}

input {
    border: none;
    outline: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 1.5rem;
  width: 100%;

}

button {
    border-radius: 15px;
    border: none;
    padding: 1rem;
    cursor: pointer;
    color: var(--main);
    background-color: white;
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
  grid-template-columns: auto auto auto auto;
  padding: 5px;
  grid-gap: 10px;
}

.grid-item {
  /* background-color: white; */
  /* padding: 10px; */
  height: 250px ;
  min-width: 100px;
  /* border-radius: var(--mb); */
  /* border: 2px solid var(--main) */
}

.img-style {
    width: 100%;
    height: 100%;
    object-fit: cover;
  /* border-radius: var(--mb); */

}

@media only screen and (max-width: 930px) {
  .grid-section {
  display: grid;
  grid-template-columns: auto auto;
  padding: 2px;
  grid-gap: 10px;
}

.select {
  width: 50%
}
}

@media only screen and (max-width: 600px) {
  .grid-section {
  display: grid;
  grid-template-columns: auto;
  padding: 2px;
  grid-gap: 10px;
}

.select {
  width: 10rem
}

}

</style>