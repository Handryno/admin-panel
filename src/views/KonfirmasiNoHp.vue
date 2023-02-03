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
            <div class="number h-6 w-6 rounded-full font-semibold bg-green-700 text-gray-100 text-center pt-0.5 text-sm">2</div>
            <div class="sub-title font-semibold ml-6 mt-0.5 text-gray-800"> Konfirmasi</div>
        </div>
        <div class="flex mb-6">
            <div class="number h-6 w-6 rounded-full font-semibold bg-gray-200 text-gray-400 text-center pt-0.5 text-sm">3</div>
            <div class="sub-title font-semibold ml-6 mt-0.5 text-gray-400"> Metode Pembayaran</div>
        </div>
    </div>
  </div>

  <div class="bg-slate-50 h-auto py-5 px-8 rounded-md col-span-2 shadow-xl">

    <!-- Input Rekening -->
    <div class="header">
      <div class="font-medium text-2xl">Konfirmasi Nomor Handphone</div>
      <div class="noHp font-medium text-2xl">08** **** **23</div>

      <div class="cara mt-5">Masukan nomor handphone kamu yang terdaftar pada aku pegadaian digital atau nomor yang di daftarkan di kantor cabang</div>
      <input class="mt-4 p-2 border-gray-400 outline outline-1 rounded-sm w-full" placeholder="Contoh: 0898***810"/>
      <div class="lupaPw font-medium text-sm text-green-600 text-right mt-2">Lupa Nomor Handphone ?</div>
    </div>

    <a href="/KonfirmasiTransaksi">
        <button class=" bg-green-600 w-full p-2 font-semibold text-gray-50 mt-6 rounded">Selanjutnya</button>
    </a>

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
  name: 'KonfirmasiNoHp',}
</script>