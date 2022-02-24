import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    isPremium: false,
    fetchDataNewAlbum: [],
    fetchSearchSongs: [],
    dataUser: "",
    fetchPalylists: []
  },
  mutations: {
    setDataLyrics(state, payload) {
      state.fetchPalylists = payload
    },
    setPremium(state, payload) {
      state.isPremium = payload
    },
    setIsDataNewAlbum(state, payload){
      state.fetchDataNewAlbum = payload
    },
    setIsLogged(state, payload){
      state.isLoggedIn = payload
    },
    setsearchSong(state, payload){
      state.fetchSearchSongs = payload
    },
    setDataUser(state, payload) {
      state.dataUser = payload
    },
  },
  actions: {
    async fetchData(context){
      try {
        const response = await axios.get('https://api.spotify.com/v1/browse/new-releases?country=US&limit=6&offset=1', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        context.commit('setIsDataNewAlbum', response.data.albums.items)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchSearchSong(context, payload){
      try {
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${payload}&type=track&market=US&limit=6&offset=1`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        })
        context.commit('setsearchSong', response.data.tracks.items)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchDataUser(context){
      try {
        const response = await axios.get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        })
        console.log(response)
        context.commit('setDataUser', response)
      } catch (error) {
        console.log(error)
      }
    },
    async confirmEmailUser(context, payload){
      try {
        await axios.post('http://localhost:3000/send', {
          email: payload.email,
          name: payload.name
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        })
      } catch (error) {
        console.log(error)
      }
    }, 
    async getTokenPayment(context, payload){
      try {
        const response = await axios.post('http://localhost:3000/payment', {
          price: payload.price,
          itemName: payload.itemName,
          name: payload.name,
          email: payload.email
        })
        localStorage.setItem('redirect_url', response.data.redirect_url)
      } catch (error) {
        console.log(error)
      }
    }, 
    async fetchDataLyrics(context){
      try {
        const response = await axios.get(`https://api.spotify.com/v1/me/playlists?limit=6&offset=1`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        })
        console.log(response.data.items)
        context.commit('setDataLyrics', response.data.items)
      } catch (error) {
        console.log(error)
      }
    },
    async getLyrics(context, payload) {
      try {
        const response = await axios.get(`https://api.genius.com/search?q=${payload}`, {
          headers: {
            Authorization: 'Bearer or1OpU-pVPkkMIZmkRuBhcbe-X1fiZiwiF4zrvk7gO_bXpSdw8ik-6tRPmBV-H2s'
          },
        })
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
