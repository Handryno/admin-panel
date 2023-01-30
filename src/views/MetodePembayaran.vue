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
      <div class="font-medium text-green-600 border-b-2 p-3 drop-shadow-sm">Virtual Account Bank</div>
      <div class="bank flex p-3">
        <img src="./../assets/logo-bri.jpeg" class="h-8 w-22 ml-1 mt-1" alt="">
        <div class="nmBank font-medium text-xl mt-2 ml-4">BRI Virtual Account</div>
      </div>
    </div>

    <div class="card border ">
      <div class="font-medium text-green-600 border-b-2 p-3 drop-shadow-sm">Virtual Account Bank</div>
      <div class="bank flex p-3">
        <img src="./../assets/logo-pegadaian-va.jpeg" class="h-12 w-22" alt="">
        <div class="nmBank font-medium text-xl mt-2 ml-4">Metode Pembayaran Lain</div>
      </div>
    </div>

    <div  class="flex justify-between">
        <div class="total mt-4">
            <div class="sub-title font-light text-sm">Total Pembayaran</div>
            <div class="title">Rp. 10,000</div>
        </div>
        <a href="/methodeDetailPembayaran">
            <button class=" bg-green-600 p-2 w-36 font-semibold text-gray-50 mt-6 rounded">Bayar</button>
        </a>
    </div>

  </div>

</div>
</div>
</template>
<script>
export default {
  name: 'MetodePembayaran',}
</script>