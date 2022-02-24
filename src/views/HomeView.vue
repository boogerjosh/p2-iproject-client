<template>
<div class='block'>
  <div>
    <h1 class="mb-2 text-2xl font-bold text-gray-900">Hi..<i class="fa-solid fa-heart"></i>  {{ dataUser.data.display_name }}</h1>
  </div>
  <div class='grid justify-items-center mb-10'>
  <button v-if="!isPremium"  @click.prevent="paymentPage" type="button" class="text-white bg-yellow-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upgrade to premium</button>
  <button v-if="isPremium" type="button" class="text-white bg-yellow-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Premium</button>
  <button v-if="!registered" @click.prevent="confirmEmail" type="button" class="text-white bg-yellow-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirm your email</button>
  <div v-if="!registered" class="p-4 mb-4 text-sm text-white bg-yellow-300 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
  <span class="font-medium">Confirm!</span> Your email must be registered in gmail format to stream the song.
</div>
  <div v-if="registered" class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
    <span class="font-medium">Success!</span> Your email has been registered.
  </div>
  </div>
  <h1 class="mb-5 text-2xl font-bold text-gray-900">New Release</h1>
<div class="h-46 grid grid-cols-3 gap-4 px-9">
  <div v-for="data in fetchDataNewAlbum" :key="data.id">
     <div class="bg-neutral-100 rounded-lg shadow-xl lg:flex lg:max-w-lg">
        <img :src="data.images[0].url"
            class="w-1/1 lg:w-1/2 rounded-l-2xl">
        <div class="p-6">
            <h2 class="text-left mb-2 text-2xl font-bold text-gray-900">{{ data.name }}</h2>
            <button v-for="artist in data.artists" :key="artist.id" type="button" class=" flex justify-start text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2.5 py-1 text-left mr-2 mb-2 dark:focus:ring-yellow-900">{{ artist.name }}</button>
            <button type="button" class="text-left flex justify-start mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Album type: {{ data.album_type.charAt(0).toUpperCase() + data.album_type.slice(1) }}</button>
            <a v-if="registered" :href="data.external_urls.spotify" target="_blank">
            <img src="https://logodownload.org/wp-content/uploads/2020/03/listen-on-spotify.png"
            class=" w-1/1 lg:w-1/2">
            </a>
        </div>
    </div>
  </div>
</div><br>
 <!-- <div>
  <h1 class="mt-10 text-2xl font-bold text-gray-900">Playlists</h1>
 <div class="gap-4 mt-8 h-36 grid grid-cols-3 gap-4 px-9">
 <div v-for="data in fetchPalylists" :key="data.id">
     <div class="bg-neutral-100 rounded-lg shadow-xl lg:flex lg:max-w-lg">
        <img :src="data.images[0].url"
            class="object-contain w-1/1 lg:w-1/2 rounded-l-2xl">
        <div class="p-6">
            <h2 class="text-left mb-2 text-sm font-bold text-gray-900">{{ data.name }}</h2>
            <button type="button" class=" flex justify-start text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-2.5 py-1 text-left mr-2 mb-2 dark:focus:ring-yellow-900">{{ data.owner.display_name }}</button>
            <button type="button" class="text-left flex justify-start mr-2 mb-2 text-xs font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Tracks: {{ data.tracks.total }}</button>
            <a v-if="registered" :href="data.external_urls.spotify" target="_blank">
              <img src="https://logodownload.org/wp-content/uploads/2020/03/listen-on-spotify.png"
            class=" w-1/1 lg:w-1/2">
            </a>
        </div>
    </div>
 </div>
  </div>
</div> -->
 <h1 class="mt-12 text-2xl font-bold text-gray-900">Search Song</h1>
 <div>
   <form @submit.prevent="searchTheSong">
     <label></label>
    <input v-model="title" type="text" name="name" placeholder="Search..."
        class="w-1/3 py-2 border-b-2 border-gray-600 outline-none focus:border-green-400">
   </form>
 </div>
  <div class="mt-8 h-36 grid grid-cols-3 gap-4 px-9">
   <div v-for="data in fetchSearchSongs" :key="data.album.id">
     <div class="bg-neutral-100 rounded-lg shadow-xl lg:flex lg:max-w-lg">
        <img :src="data.album.images[0].url"
            class="object-contain w-1/1 lg:w-1/2 rounded-l-2xl">
        <div class="p-6">
            <h2 class="text-left mb-2 text-sm font-bold text-gray-900">{{ data.name }}</h2>
            <button v-for="artist in data.artists" :key="artist.id" type="button" class=" flex justify-start text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-2.5 py-1 text-left mr-2 mb-2 dark:focus:ring-yellow-900">{{ artist.name }}</button>
            <button type="button" class="text-left flex justify-start mr-2 mb-2 text-xs font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Album: {{ data.album.name }}</button>
            <button type="button" class="text-left flex justify-start text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-1 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700">See Detail</button>
            <a v-if="registered" :href="data.external_urls.spotify" target="_blank">
              <img src="https://logodownload.org/wp-content/uploads/2020/03/listen-on-spotify.png"
            class=" w-1/1 lg:w-1/2">
            </a>
        </div>
      </div>
    </div>
  </div>
   <br><br><br><br><br><br><br><br><br>
   <br><br><br><br><br><br><br><br><br>
   <br><br><br><br><br><br>
    <footer class="bg-yellow-300 border-t border-gray-200">
      <div
        class="
          container
          flex flex-col flex-wrap
          px-4
          py-16
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
      >
        <div
          class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left"
        >
          <a
            class="
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              text-white
              md:justify-start
            "
          >
            Gestura App
          </a>
          <p class="mt-2 text-sm text-gray-500">
            Gestura is a digital music service that gives you access to millions of songs and other content from creators all over the world.
            Basic functions such as playing music are totally free, but you can also choose to upgrade to Gestura Premium.
          </p>
        </div>
        <div class="justify-between w-full mt-4 text-center lg:flex">
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 class="mb-2 font-bold tracking-widest text-gray-900">
              Useful Links
            </h2>
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <a class="text-gray-600 hover:text-gray-800">Home</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Blogs</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 class="mb-2 font-bold tracking-widest text-gray-900">
              Useful Links
            </h2>
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <a class="text-gray-600 hover:text-gray-800">Home</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Blogs</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 class="mb-2 font-bold tracking-widest text-gray-900">
              Useful Links
            </h2>
            <ul class="mb-8 space-y-2 text-sm list-none">
              <li>
                <a class="text-gray-600 hover:text-gray-800">Home</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Blogs</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <p class="text-base text-gray-400">
          All rights reserved by @ company 2021
        </p>
      </div>
    </footer>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      title: '',
      registered: false,
      price: 49900,
      itemName: "Gestura App Premium Mini",
    }
  },
  computed: {
    isPremium() {
      return this.$store.state.isPremium
    },
     isLoggedIn() {
      return this.$store.state.isLoggedIn
    },
    fetchDataNewAlbum() {
      return this.$store.state.fetchDataNewAlbum
    },
    fetchSearchSongs() {
      return this.$store.state.fetchSearchSongs
    },
    dataUser() {
      return this.$store.state.dataUser
    },
    fetchPalylists() {
      return this.$store.state.fetchPalylists
    },
  },
  methods: {
    async paymentPage() {
      await this.$store.dispatch('getTokenPayment', {
        price: this.price,
        itemName: this.itemName,
        name:  this.dataUser.data.display_name,
        email: this.dataUser.data.email,
      })
      this.$router.push({ name: 'payment' })
      this.$store.commit('setPremium', true)
    },
    confirmEmail() {
      this.$store.dispatch('confirmEmailUser', {
        email: this.dataUser.data.email,
        name: this.dataUser.data.display_name
      })
      this.registered = true
      console.log(this.registered)
    },
    fetchDataUser() {
       this.$store.dispatch('fetchDataUser')
    },
    fetchDataLyric() {
       this.$store.dispatch('fetchDataLyrics')
    },
    async searchTheSong() {
      await this.$store.dispatch('fetchSearchSong', this.title)
      this.title = ''
    },
    fetchDataNewRelease() {
      this.$store.dispatch('fetchData')
    },
  },
  created() {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        location.hash = ""
        localStorage.setItem("token", token)
    }
    if (localStorage.getItem("token")) {
      this.$store.commit('setIsLogged', true)
      this.fetchDataLyric()
      this.fetchDataUser()
      this.searchTheSong()
      this.fetchDataNewRelease()
    }
  }
}
</script>
