<template>
  <div>
        <Sidebar></Sidebar>
    <div class="container mx-auto px-24">

<div class="grid grid-cols-3 gap-6">

    <!-- Tahap Section -->
  <div class="h-auto bagian-tahap ">
    <!-- Button Back -->
    <div class="kembali">
        <a href="/" class="flex">
        <img src="./../assets/arrow-left-green.svg">
        <div class="font-medium text-2xl p-4 text-gray-800">Beli Tabungan Emas</div>
        </a>
    </div>
    <!-- Tahap - tahap -->
    <div class="tahap h-auto p-2">
        <div class="flex mb-6">
            <div class="number h-6 w-6 rounded-full bg-gray-200 font-semibold text-gray-400 text-center pt-0.5 text-sm">1</div>
            <div class="sub-title font-semibold ml-6 mt-0.5 text-gray-400"> Detail Pembayaran</div>
        </div>
        <div class="flex mb-6">
            <div class="number h-6 w-6 rounded-full font-semibold bg-gray-200 text-gray-400 text-center pt-0.5 text-sm">2</div>
            <div class="sub-title font-semibold ml-6 mt-0.5 text-gray-400"> Konfirmasi</div>
        </div>
        <div class="flex mb-6">
            <div class="number h-6 w-6 rounded-full font-semibold bg-green-700 text-gray-100 text-center pt-0.5 text-sm">3</div>
            <div class="sub-title font-semibold ml-6 mt-0.5 text-gray-800"> Metode Pembayaran</div>
        </div>
    </div>
  </div>

  <div class="bg-slate-50 h-auto py-5 px-8 rounded-md col-span-2 shadow-xl">

    <!-- Input Rekening -->
    <div class="card border mb-4">
      <button class="font-medium text-green-600 border-b-2 p-3 drop-shadow-sm w-full text-start flex justify-between" @click="show = !show" >
        <div class="mtode-name font-medium ">
          Virtual Account Bank
        </div>
        <svg class="w-6 h-6 text-gray-400 dark:text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
      </button>
      <hr>
      <div class="bri " v-show="show" >

        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required>
        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-900 border border-gray-200 cursor-pointer dark:hover:text-gray-900 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-900">                           
            <div class="flex">
              <img src="./../assets/logo-bri.jpeg" class="h-12 w-22" alt="">
              <div class="judl">
                <div class="nmBank font-medium text-xl mt-2 ml-4">BRI</div>
              </div>
            </div>
            <svg aria-hidden="true" class="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </label>
      </div>
    </div>

    <div class="card border  ">
      <div class="mtf"></div>
        <button @click="mbr = !mbr" class=" text-green-600 border-b-2 p-3 drop-shadow-sm w-full text-start flex justify-between">
          <div class="mtode-name font-medium ">
            Metode Pembayaran Lain
          </div>
          <svg class="w-6 h-6 text-gray-400 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </button >

        <div class="mpl">
          <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer">
        <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-gray-500 border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 ">
          <div class="flex">
              <img src="./../assets/logo-pegadaian-va.jpeg" class="h-12 w-22" alt="">
              <div class="judl">
                <div class="nmBank font-medium text-xl mt-2 ml-4">Pegadaian</div>
                <div class="sub-title font-light ml-4 text-gray-500 text-xs -mt-1">Bayar di cabang</div>
              </div>
            </div>
            <svg aria-hidden="true" class="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </label>
        </div>
    </div>

    <div v-show="dtl" class="Detail mt-3">
        <div class="text-lg font-semibold mb-2">Detail Pembayaran</div>
        <div class="sub-title">
          <div class="flex justify-between">
            <div class="detail text-xs font-light">Total Biaya</div>
            <div class="harga text-xs font-light">Rp. 10,000</div>
          </div>
          <div class="flex justify-between">
            <div class="detail text-xs font-light">Biaya Admin</div>
            <div class="harga text-xs font-light">Rp. 0</div>
          </div>
        </div>
        <hr class="mt-1">
      </div>
      
    <div  class="flex justify-between">

        <div class="total mt-4">
            <button class="flex justify-between" @click="dtl = !dtl">
              <div class="mtode-name font-light text-sm ">
                Total Pembayaran
              </div>
              <svg class="w-4 h-4 text-gray-400 dark:text-white rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="black">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
            <div class="title">Rp. 10,000</div>
        </div>
            <button @click="alrt = !alrt" class=" bg-green-600 p-2 w-36 font-semibold text-gray-50 mt-6 rounded">Bayar</button>
    </div>

    <div v-show="alrt" class="alert bg-yellow-300 w-96 p-4 rounded absolute z-20 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl flex justify-between">
            <div class="title">Apkah Anda Yakin ?</div>
            <div class="button">
                <button @click="alrt = !alrt" class="mt-1">Tidak</button>
                <a href="/methodeDetailPembayaran">
                    <button @click="alrt = !alrt" class="p-1 px-3 ml-2 rounded bg-green-700 text-gray-50 font-bold">Ya</button>
                </a>
            </div>
        </div>


  </div>

</div>
</div>
<Footer></Footer>
</div>

</template>
<script>
import Sidebar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
    Sidebar,},
  data() {
      return {
        alrt:false,
        show: false,
        mbr: false,
        dtl: false
      };
    },
  name: 'MetodePembayarmbran',}
</script>