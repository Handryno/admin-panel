<template>
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
      <div class="bank flex p-3 border-t-2" v-show="show" >
        <img src="./../assets/logo-bri.jpeg" class="h-8 w-22 ml-1 mt-1" alt="">
        <div class="nmBank font-medium text-xl mt-2 ml-4">BRI Virtual Account</div>
      </div>
    </div>

    <div class="card border  ">
        <button @click="mbr = !mbr" class=" text-green-600 border-b-2 p-3 drop-shadow-sm w-full text-start flex justify-between">
          <div class="mtode-name font-medium ">
            Metode Pembayaran Lain
          </div>
          <svg class="w-6 h-6 text-gray-400 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </button >

      <div  v-show="mbr" class="bank flex p-3 border-t-2">
        <img src="./../assets/logo-finpay.png" class="h-12 w-22" alt="">
        <div class="judl">
          <div class="nmBank font-medium text-xl mt-2 ml-4">Finpay</div>
          <div class="sub-title font-light ml-4 text-gray-500 text-xs -mt-1">Finpay Virtual Account</div>
        </div>
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
            <button @click="show = !show" class=" bg-green-600 p-2 w-36 font-semibold text-gray-50 mt-6 rounded">Bayar</button>
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
        mbr: false,
        dtl: false
      };
    },
  name: 'MetodePembayarmbran',}
</script>