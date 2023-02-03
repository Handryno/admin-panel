<template>
    <div>
          <Sidebar></Sidebar>
    <div class="container mx-auto px-24 mb-20">
  
  <div class="grid grid-cols-3 gap-6">
  
      <!-- Tahap Section -->
    <div class="h-auto bagian-tahap bg-slate-50 shadow p-4 rounded-md">
      <!-- Ava-->
      <div class="ava rounded mb-2 flex justify-center center">
          <img src="./../assets/hendry-ava.jpg" class="h-28 w-28 rounded-full">
      </div>
      <div class="prof text-center my-6">
        <div class="title font-medium text-green-600">Handry Novianto</div>
        <div class="cif">Cif : 123123124</div>
        <button class="p-1 bg-blue-500 text-gray-50 rounded"> Akun Standart</button>
      </div>
      <hr>
      <div class="g-cash flex justify-between my-6 ">
        <div class="icon flex mt-1">
            <div class="icon h-4 w-6 bg-green-700 rounded-md mt-1"></div>
                <p class="semi-bold ml-2">G-Cash</p>
            </div>
            <Button class="title p-1 rounded bg-green-800 text-gray-50">Aktifasi G-Cash</Button>
        </div>
      <hr>
      <!-- Tahap - tahap -->
      <div class="tahap h-auto p-2 mt-3">
          <div class="flex mb-6">
              <div class="number h-6 w-6 rounded-full bg-gray-200 font-semibold text-gray-400 text-center pt-0.5 text-sm"></div>
              <div class="sub-title font-base ml-6 mt-0.5 text-gray-700"> Beranda</div>
          </div>
          <div class="flex mb-6">
              <div class="number h-6 w-6 rounded-full font-semibold bg-gray-200 text-gray-400 text-center pt-0.5 text-sm"></div>
              <div class="sub-title font-base ml-6 mt-0.5 text-gray-700"> Riwayat</div>
          </div>
          <div class="flex mb-6">
              <div class="number h-6 w-6 rounded-full font-semibold bg-gray-200 text-gray-400 text-center pt-0.5 text-sm"></div>
              <div class="sub-title font-base ml-6 mt-0.5 text-gray-700"> Notifikasi</div>
          </div>
          <div class="flex mb-6">
              <div class="number h-6 w-6 rounded-full font-semibold bg-gray-200 text-gray-400 text-center pt-0.5 text-sm"></div>
              <div class="sub-title font-base ml-6 mt-0.5 text-gray-700"> Pengaturan</div>
          </div>
      </div>
    </div>
  
    <div class="bg-slate-100 h-fit grid grid-rows-auto gap-4 rounded col-span-2 shadow-xl">
  
      <!-- Input Rekening -->
      <div class="card bg-gray-50  0 py-5 px-8 rounded">
          <div class="header">
            <div class="font-medium text-2xl mb-8">Data Nasabah </div>
      
            <div class="isi grid grid-rows-3 gap-4">
              <div class="namaNasabah flex justify-between ">
                  <div class="ket">Nama Nasabah</div>
                  <div class="isi">Handry Novianto</div>
              </div>
              <div class="nomorKredit flex justify-between ">
                  <div class="ket">Alamat Email</div>
                  <div class="isi">hendrytani@gmail.com</div>
              </div>
              <div class="nominalEmas flex justify-between ">
                  <div class="ket">Nomor Handphone</div>
                  <div class="isi">081289805580</div>
              </div>
              <div class="norek flex justify-between ">
                  <div class="ket">Nomor Rekening</div>
                  <div class="isi">100009934980234</div>
              </div>
            </div>
          </div>
      </div>

      <div class="card bg-gray-50 py-5 px-8 ">
        <a href="/">
          <button class=" bg-green-600 w-full p-2 font-semibold text-gray-50 rounded">Kembali</button>
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