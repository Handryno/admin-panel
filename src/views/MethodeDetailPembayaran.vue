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
      <div class="promo p-3 border rounded mb-4">
        <img src="" alt="">
        <div class="text-lg font-semibold text-gray-600">ATM BRI</div>
      </div>
     <div class="promo p-3 border rounded mb-4">
        <img src="" alt="">
        <div class="text-lg font-semibold text-gray-600">Mobile Banking BRI</div>
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
export default {
  name: 'MethodeDetailPembayaran',}
</script>