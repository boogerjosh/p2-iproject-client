<template>
<div>
   <img
      src="./Assets/wave.png"
      class="fixed hidden lg:block inset-0 h-full"
      style="z-index: -1;"
    />
    <div
      class="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2"
    >
      <img
        src="./Assets/unlock.svg"
        class="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto"
      />
      <form class="flex flex-col justify-center items-center w-1/2">
        <img src="./Assets/avatar.svg" class="w-32" />
        <h2
          class="my-8 font-display font-bold text-3xl text-gray-700 text-center"
        >
          Welcome to GESTURA
        </h2>
        <div class="relative">
          <a class="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-8 py-3 text-center mr-2 mb-2 dark:focus:ring-yellow-900" href="https://gestura-app.herokuapp.com/login">Login to spotify</a>
        </div>
      </form>
    </div>
</div>

</template>

<script>
export default {
  name: 'LoginView',
}
</script>

<style>

</style>