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
            <div class="number h-6 w-6 rounded-full bg-green-600 font-semibold text-gray-100 text-center pt-0.5 text-sm">1</div>
            <div class="sub-title font-semibold ml-6 mt-0.5"> Detail Pembayaran</div>
        </div>
        <div class="flex mb-6">
            <div class="number h-6 w-6 rounded-full font-semibold bg-gray-200 text-gray-400 text-center pt-0.5 text-sm">2</div>
            <div class="sub-title font-semibold ml-6 mt-0.5 text-gray-400"> Konfirmasi</div>
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
      <div class="text-base font-medium">Rekening Tabungan Emas</div>
      <input type="number" max="16" class="mt-4 p-2 border-gray-400 outline outline-1 rounded-sm w-full"/>
    </div>

    <!-- Harga Emas -->
    <div class="harga mt-6 ">
        <div class="text-base font-medium">Harga Emas</div>
        <div class="uang flex">
            <div class="rupiah mr-1">Rp 9,500</div> / <div class="gram font-light text-sm mt-0.5 ml-1">0,01 gr</div>
        </div>
    </div>

    <!-- Nominal pembeli -->
    <fieldset class="mt-6">

        <div class="text-base font-medium mb-2">Nominal Pembeli</div>
        <div class="radio grid grid-cols-3 gap-5">
            <div class="input p-3 border hover:border-green-400 rounded ">
                <input id="sepuluh" class="peer/sepuluh " type="radio" name="status" />
                <label for="sepuluh" class=" h-10 ml-2">Rp.10,000</label>
            </div>
    
            <div class="input p-3 border hover:border-green-400 rounded">
                <input id="duaPuluh" class="peer/duaPuluh" type="radio" name="status" />
                <label for="duaPuluh" class=" h-1 ml-2">Rp.20,000</label>
            </div>

            <div class="input p-3 border hover:border-green-400 rounded">
                <input id="tigaPuluh" class="peer/tigaPuluh" type="radio" name="status" />
                <label for="tigaPuluh" class=" h-1 ml-2">Rp.30,000</label>
            </div>

            <div class="input p-3 border hover:border-green-400 rounded">
                <input id="empatPuluh" class="peer/empatPuluh" type="radio" name="status" />
                <label for="empatPuluh" class=" h-1 ml-2">Rp.40,000</label>
            </div>

            <div class="input p-3 border hover:border-green-400 rounded">
                <input id="limaPuluh" class="peer/limaPuluh" type="radio" name="status" />
                <label for="limaPuluh" class=" h-1 ml-2">Rp.50,000</label>
            </div>

            <div class="input p-3 border hover:border-green-400 rounded">
                <input id="enamPuluh" class="peer/enamPuluh" type="radio" name="status" />
                <label for="enamPuluh" class=" h-1 ml-2">Rp.60,000</label>
            </div>
        </div>

        <div class="group rupiah mt-6 border flex hover:border-green-700  rounded">
            <div for="rupiah" class="p-3 group-hover:bg-green-700 w-20 font-medium bg-slate-300 text-gray-500 group-hover:text-gray-100">Rupiah</div>
            <input placeholder="Masukan amount" class=" p-3 focus:outline-none " id="rupiah">
        </div>
        <div class="group gram mt-4 border flex hover:border-amber-400 rounded">
            <div for="rupiah" class="p-3 group-hover:bg-amber-500 w-20 font-medium bg-slate-300 text-gray-500 group-hover:text-gray-100">Gram</div>
            <input placeholder="Masukan amount" class=" p-3 focus:outline-none " id="rupiah">
        </div>

        <div class="hidden peer-checked/sepuluh:block">10,000</div>
        <div class="hidden peer-checked/duaPuluh:block">20,000</div>
        <div class="hidden peer-checked/tigaPuluh:block">30,000</div>
        <div class="hidden peer-checked/empatPuluh:block">40,000</div>
        <div class="hidden peer-checked/limaPuluh:block">50,000</div>
        <div class="hidden peer-checked/enamPuluh:block">60,000</div>
        </fieldset>

        <!-- syarat -->
        <div class="syarat flex mt-2">
            <input type="checkbox" name="setuju" id="setuju">
            <div class="tulisan">
                <div class="rupiah mr-1 text-sm ml-1"> Saya setuju dengan Syarat dan Ketentuan yang berlaku</div>
            </div>
        </div>

        <!-- button -->
            <button @click="show = !show"  class=" bg-green-600 w-full p-3 font-semibold text-gray-50 mt-6 rounded">Beli Emas</button>
        </div>

        <div v-show="show" class="alert bg-yellow-300 w-96 p-4 rounded absolute z-20 top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl flex justify-between">
            <div class="title">Apkah Anda Yakin ?</div>
            <div class="button">
                <button @click="show = !show" class="mt-1">Tidak</button>
                <a href="/konfirmasiNoHp">
                    <button @click="show = !show" class="p-1 px-3 ml-2 rounded bg-green-700 text-gray-50 font-bold">Ya</button>
                </a>
            </div>
        </div>


</div>
</div>
</template>
<script>
export default {
  name: 'DetailPembayaran',
  methods:{
  },data() {
      return {
        show: false,
        mbr: false
      };
    },
  }
</script>