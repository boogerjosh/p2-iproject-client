<template>
  <div id="app">
    <nav v-if="isLoggedIn">
      <router-link v-if="isLoggedIn" to="/">Home</router-link> |
      <button type="button" v-if="isLoggedIn" @click.prevent="logOut">Logout</button>
    </nav>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'App',
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    }
  },
  methods: {
    logOut() {
      localStorage.clear()
      this.$store.commit('setIsLogged', false)
         this.$router.push({name: 'Login'}).catch(error => {
        if (
          error.name !== 'NavigationDuplicated' &&
          !error.message.includes('Avoided redundant navigation to current location')
        ) {
          console.log(error)
        }
      })
    }
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  color: #42b983;
}

nav button {
  font-weight: bold;
  color: #2c3e50;
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
