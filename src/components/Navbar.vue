<template>
     <div class=" w-full h-auto bg-green-700 shadow-md ">
        <div class="container mx-auto px-28 mb-1 max-md:px-2 max-md:mx-2 flex justify-between">
          <div class="logo p-2">
            <a href="/">
              <img src="./../assets/logo-pds-light-horizontal.svg" alt="" class="">
            </a>
          </div>

          <div class="avatar">
          <button class="prf p-2 px-4 rounded flex hover:bg-green-600 hover:shadow" @click="show = !show">
              <div class="foto h-12 w-12 ">
                  <img src="./../assets/hendry-ava.jpg" class="rounded-full" alt="">
              </div>
            <div class="pgn text-lg font-semibold ml-3 mt-2 text-gray-50"> Halo , Handry !</div>
          </button>
          </div>
        </div>

        <div class="top-up">
          <div class="bg-blur h-full w-full bg-gray-900 absolute z-10 opacity-60 " v-show="show">
          </div>
          <div v-show="show" class="pop-up h-auto w-96 bg-gray-100 shadow-xl rounded-md absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <!-- <div class="curve bg-green-600 h- w-full absolute -z-10"></div> -->
            <!-- <div class="curve bg-green-600 h-48 rounded-b-full top-20 w-full absolute -z-10"></div> -->
            
            <div class="header p-4 bg-green-800 shadow-md rounded-t">
              <!-- title -->
              <div class="tilt font-bold text-gray-50 mb-4">Profil</div>
              <!-- avatar -->
              <div class="avatar flex ">
                <div class="pict">
                  <img src="../assets/hendry-ava.jpg" alt="" class="rounded-full w-24 h-24">
                </div>
                <div class="text ml-4 text-gray-50 mb-4">
                  <div class="name font-semibold mb-1">Handry Novianto</div>
                  <div class="cif mb-1">Cif : 78742513</div>
                  <div class="status font-semibold p-2 text-orange-600 bg-gray-50 rounded w-fit mb-1">standard</div>
                </div>
              </div>
            </div>

              <div class="container p-4 ">
                <!-- Card -->
              <div class="g-card shadow-md grid grid-cols-2 p-4 bg-white rounded">
                <div class="g-cash border-r-2">
                  <div class="icon flex ">
                    <div class="icon h-4 w-6 bg-green-700 rounded-md mt-1"></div>
                    <p class="semi-bold ml-2">G-Cash</p>
                  </div>
                  <div class="title">Rp 0</div>
                </div>

                <div class="g-coin  ml-4">
                  <div class="icon flex ">
                    <div class="icon h-4 w-4 bg-orange-500 rounded-full mt-1"></div>
                    <p class="semi-bold ml-2">G-Coin</p>
                  </div>
                  <div class="title">Rp 0</div>
                </div>
              </div>

              <!-- upgrade premium -->
              <div class="premium flex p-4 bg-white rounded shadow mt-4">
                <div class="icon h-4 w-6 mt-1 bg-orange-500 rounded-full"></div>
                <div class="text ml-3">
                  <div class="tit font-medium mb-2">Upgrade Akun Premium</div>
                  <div class="content text-xs font-light" >Hanya perlu upload KTP untuk akses semua fitur dan mendapatkan promo khusus</div>
                </div>
              </div>

              <!-- Page Profile -->
              <a href="/profileUser">

                <button class="w-full p-2 bg-green-600 rounded font-medium text-gray-50 mt-4 hover:shadow-md">Lihat Profile Selengkapnya</button>
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
  name: 'NavBar'
};
</script>