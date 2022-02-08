import axios from "axios";
const state = {
  dogs: [],
  dogBreeds: [],
  dogCategories: [],
  loadingStatus: false,
  signleDog:''
}

const mutations = {
    UPDATE_DOGS (state, dogs) {
      console.log("the main dog value is ", dogs)
      state.dogs = dogs;
    },
    LOADER(state, newLoadingStatus) {
      state.loadingStatus = newLoadingStatus
  },
  UPDATE_SINGLE_DOG(state, dog) {
      state.signleDog = dog;
    },

    UPDATE_DOG_BREEDS (state, dogBreeds) {
      console.log("the main dog value is ", dogBreeds)
      state.dogBreeds= dogBreeds;
    },

    UPDATE_DOG_CATEGORIES (state, dogCategories) {
      console.log("the main dog value is ", dogCategories)
      state.dogCategories= dogCategories;
    },
    
  }

  const actions = {
    getDogs ({ commit} ) {
      commit('LOADER', true)
        axios.get(`https://dog.ceo/api/breeds/image/random/50`) 
        .then((response) => {
          console.log(response)
          commit('UPDATE_DOGS', response.data.message.slice(0, 100))
          commit('LOADER', false)
        })
        .catch(error => console.log(error))

    },

    getDogBreeds ({ commit }) {
      axios.get(`https://dog.ceo/api/breeds/list/all`).then((response) => {
     const dogBreed = Object.keys(response.data.message).map((dog) => { 
         return dog
      })
      console.log(dogBreed, "tired")
        commit('UPDATE_DOG_BREEDS', dogBreed)
      });
    },

    getDogCategories ({ commit, }, breeds) {
      commit('LOADER', true)
      axios.get(`https://dog.ceo/api/breed/${breeds}/images`).then((response) => {
        console.log(response)
        commit('UPDATE_DOG_CATEGORIES', response.data.message)
        commit('LOADER', false)      
      })
      .catch(error => console.log(error))
    }
    
  }

  const getters = {
    dogs: state => state.dogs,
    dogsById: (state) => (message) => {
      return state.dogs.find(dog => dog.message === message)
    },
    dogBreeds: state => state.dogBreeds,
    dogBreedsById: (state) => (message) => {
      return state.dogBreeds.find(dogBreed => dogBreed.message === message)
    },

    dogCategories: state => state.dogCategories,
    dogCategoriesById: (state) => (message) => {
      return state.dogCategories.find(dogCategory => dogCategory.message === message)
    },

    loadingStatus(state) {
      return state.loadingStatus
    },
    singleDog:(state)=>{state.singleDog}
  }

  const dogListModule = {
    state,
    mutations,
    actions,
    getters
  }
  
  export default dogListModule;
