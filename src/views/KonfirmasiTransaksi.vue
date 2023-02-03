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
            <div class="number h-6 w-6 rounded-full bg-gray-200 font-semibold text-gray-400 text-center pt-0.5 text-sm">
              1</div>
            <div class="sub-title font-semibold ml-6 mt-0.5 text-gray-400"> Detail Pembayaran</div>
          </div>
          <div class="flex mb-6">
            <div
              class="number h-6 w-6 rounded-full font-semibold bg-green-700 text-gray-100 text-center pt-0.5 text-sm">2
            </div>
            <div class="sub-title font-semibold ml-6 mt-0.5 text-gray-800"> Konfirmasi</div>
          </div>
          <div class="flex mb-6">
            <div class="number h-6 w-6 rounded-full font-semibold bg-gray-200 text-gray-400 text-center pt-0.5 text-sm">
              3</div>
            <div class="sub-title font-semibold ml-6 mt-0.5 text-gray-400"> Metode Pembayaran</div>
          </div>
        </div>
      </div>

      <div class="bg-slate-100 h-auto grid grid-rows-3 gap-4 rounded col-span-2 shadow-xl">

        <!-- Input Rekening -->
        <div class="card bg-gray-50  0 py-5 px-8 rounded">
          <div class="header">
            <div class="font-medium text-2xl mb-8">Detail Transaksi</div>

            <div class="isi grid grid-rows-3 gap-4">
              <div class="namaNasabah flex justify-between ">
                <div class="ket">Nama Nasabah</div>
                <div class="isi">{{ this.$route.params.result.namaNasabah }}</div>
              </div>
              <div class="nomorKredit flex justify-between ">
                <div class="ket">Nomor Kredit</div>
                <div class="isi">{{this.$route.params.result.norek}}</div>
              </div>
              <div class="nominalEmas flex justify-between ">
                <div class="ket">Nominal Emas</div>
                <div class="isi">{{this.$route.params.result.gram}}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card bg-gray-50 py-5 px-8">
          <div class="header">
            <div class="font-medium text-2xl mb-8">Detail Pembayaran</div>

            <div class="isi grid grid-rows-3 gap-4">
              <div class="namaNasabah flex justify-between ">
                <div class="ket">Jumlah Pembayaran </div>
                <div class="isi">{{this.$route.params.result.nilaiTransaksi}}</div>
              </div>
              <div class="nomorKredit flex justify-between ">
                <div class="ket">Biaya Administrasi</div>
                <div class="isi">{{this.$route.params.result.administrasi}}</div>
              </div>
              <div class="nominalEmas flex justify-between ">
                <div class="ket font-medium text-lg">Total Harga</div>
                <div class="isi font-medium text-lg">{{this.$route.params.result.totalKewajiban}}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card bg-gray-50 py-5 px-8 mb-6">
          <a href="/MetodePembayaran">
            <button class=" bg-green-600 w-full p-2 font-semibold text-gray-50 mt-6 rounded">Selanjutnya</button>
          </a>
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
  name: 'KofirmasiTransaksi',}
</script>