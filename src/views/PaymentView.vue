<template>
  <div class="bg-gray-300">
    <div class="py-12">
        <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg md:max-w-xl mx-2">
            <div class="md:flex ">
                <div class="w-full p-4 px-5 py-5">
                    <div class="mb-5 flex flex-row">
                        <h2 class="text-3xl font-semibold">Gestura</h2>
                        <h2 class="text-3xl text-yellow-400 font-semibold">Payment</h2>
                    </div>
                    <span>Shipping Information</span> 
                    <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" value="Gestura App Premium Mini"> 
                    <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" value="Rp 49900"> 
                    <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" value="1">
                     <div class="p-4 mt-2 text-sm text-black bg-yellow-300 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                    <span class="font-medium">Total:</span> Rp 49900
                    </div>
                    <div class="flex flex-col justify-center items-center pt-2"> <a :href="url" target="_blank" type="button" class="flex flex-row items-center justify-center h-12 w-48 rounded font-medium text-xs bg-blue-500 text-white">Continue to Pay </a> </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentView",
  data() {
    return {
      url: localStorage.getItem('redirect_url')
    }
  }
}
</script>

<style>

</style>