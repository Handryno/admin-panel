<template >
    <div class=" w-full h-auto bg-green-700 shadow-md mb-20 p-1">
       <div class="container mx-auto px-28 mb-1 max-md:px-2 max-md:mx-2 flex justify-between ">
         <div class="logo p-2">
           <a href="/">
             <img src="./../assets/logo-pds-light-horizontal.svg" alt="" class="">
           </a>
         </div>

         <div class="avatar flex">
         <div class="prf p-2 px-4 rounded flex hover:bg-green-600 hover:shadow">
             <div class="foto h-12 w-12 ">
                 <img src="./../assets/ico-avatar.svg" class="rounded-full mt-1" alt="">
             </div>
           <div class="pgn text-lg font-medium ml-2 mt-2 text-gray-50"> Halo , Sahabat !</div>
          </div>
          <button class="prf rounded flex bg-gray-50 hover:shadow my-2 p-2 px-4" @click="show = !show">
            <div class="pgn text-lg font-medium  text-green-700"> Masuk</div>
          </button>
         </div>
       </div>

       <!-- Pop Up -->
       <div class="pop-up">
         <div class="bg-blur h-full w-full bg-gray-900 absolute z-10 opacity-60 " v-show="show">
         </div>
         <div v-show="show" class="pop-up h-auto w-96 bg-gray-100 shadow-xl rounded-md absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
             <div class="container p-4 ">
              <div class="title text-lg font-semibold mb-4">Login</div>
              <div class="nohp mb-2">
            <label for="first_name" class="block mb-2 text-sm font-medium">No Hp</label>
            <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb" placeholder="089*****10" required>
                </div>
                <div class="password">
            <label for="password" class="block mb-2 text-sm font-medium ">Password</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
            </div>
            <div class="lupaPasword text-right text-green-700 font-medium">
              Lupa Password ?
            </div>

             <!-- Page Profile -->
             <a href="/">
               <button class="w-full p-2 bg-green-600 rounded font-medium text-gray-50 mt-4 hover:shadow-md">Login</button>
             </a>
             <button @click="show = !show" class="w-full p-2 bg-red-600 rounded font-medium text-gray-50 mt-4 hover:shadow-md">Keluar</button>
           </div>
         </div>
       </div>
   </div>

  
   
</template>
<script>
export default {
 data() {
     return {
       show: false,
     };
   },
 name: 'NavLog'
};
</script>