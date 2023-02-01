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

  <div class="bg-slate-100 h-auto grid grid-rows-auto gap-3 rounded col-span-2 shadow-xl">

    <!-- Input Rekening -->
    <div class="card bg-gray-50 h-auto py-5 px-8 rounded">
        <div class="header">
          <div class="font-medium text-base ">Batas Waktu Pembayaran</div>
            <div class="sub-title">30 January 2023 || 19:42:49 WIB</div>
        </div>
    </div>

    <div class="card bg-gray-50 py-5 px-8">
        <div class="font-medium text-base">Metode Pembayaran</div>
        <div class="header flex justify-between ">
          <div class="bank flex p-3">
        <img src="./../assets/logo-pegadaian-va.jpeg" class="h-12 w-22" alt="">
        <div class="tex">
            <div class="nmBank font-light text-base  ml-4">Metode Pembayaran Lain</div>
            <div class="noVA font-normal text-base mt-1 ml-4">01923287198387129387</div>
        </div>
        </div>
        <div class="salin text-lg text-green-600 font-semibold mt-4">Salin</div>
        </div>
    </div>

    <div class="card bg-gray-50 py-5 px-8">
        <div class="header">
          <div class="font-medium text-base">Jumlah Pembayaran</div>
          <div class="bank flex justify-between">
        <div class="nmBank font-semibold text-2xl">Rp. 10,000</div>
        <div class="salin text-lg text-green-600 font-semibold mt-4">Salin</div>
      </div>
        </div>
    </div>


    <div class="card bg-gray-50 py-5 px-8 mb-6">
     <!-- Drop Down ATM BRI -->
     <div class="button border rounded p-2 mb-3">
    <div class="relative ">
      
        <!-- Dropdown toggle button -->
          <button @click="show = !show" class="flex items-center p-2 rounded-md w-full ">
            <span class="mr-4 text-lg font-semibold text-gray-600">ATM BRI</span>
            <svg class="w-5 h-5 text-gray-400 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </button>

      <!-- Dropdown menu -->
      <div v-show="show" class="   py-2 w-full">
        <ul class="marker:bg-stone-800">
          <li>1. Masukan Kartu ATM dan Pin</li>
          <li>2. Pilih Menu "Transaksi"</li>
          <li>3. Pilih Menu "Pembayaran", hingga menemukan menu "Pegadaian"</li>
          <li>4. Pilih Menu "Pembayaran Angsuran"</li>
          <li>5. Masukan "Nomor Virtual Account" Pegadaian , lalu pilih tombol Benar</li>
          <li>6. Akan muncul konfirmasi pembayaran, lalu pilih Ya</li>
          <li>7. Transaksi selesai, simpan bukti bayar Anda</li>
        </ul>
      </div>
    </div>
  </div>

    <!-- Drop Down Mobile Banking BRI  -->
    <div class="button border rounded p-2">
      <div class="relative ">
        
          <!-- Dropdown toggle button -->
            <button @click="mbr = !mbr" class="flex items-center p-2 rounded-md w-full ">
              <span class="mr-4 text-lg font-semibold text-gray-600">Mobile Banking BRI</span>
              <svg class="w-5 h-5 text-gray-400 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>

        <!-- Dropdown menu -->
        <div v-show="mbr" class=" py-2 w-full">
        <ul class="marker:bg-stone-800">
          <li>1. Login Ke Aplikasi Mobile Banking BRI Anda</li>
          <li>2. Pilih Menu "Pembayaran"</li>
          <li>3. Pilih Menu "Pegadaian"</li>
          <li>4. Pilih Menu "Tipe Pembayaran"</li>
          <li>5. Masukan "Nomor Virtual Account"</li>
          <li>6. Setelah mucul tagihan , pilih Konfirmasi</li>
          <li>7. Masukan PIN</li>
          <li>8. Transaksi selesai , simpan bukti bayar Anda</li>
        </ul>
        </div>
      </div>
    </div>

      <a href="/MetodePembayaran">
        <button class=" bg-green-600 w-full p-2 font-semibold text-gray-50 mt-6 rounded">Selesai</button>
      </a>
    </div>
  </div>

</div>
</div>
</template>
<script>
import { ref } from "vue";

const menubtn = ref(null);

export default {
  data() {
      return {
        show: false,
        mbr: false
      };
    },
  name: 'MethodeDetailPembayaran',
  methods:{
    // const btn = document.getElementById('menu-btn'),
    menuBtn(menubtn){
      this.$refs[menubtn].$el.classList.value = this.$refs[menubtn].$el.classList.value + 'hidden'
    }
  }}
</script>