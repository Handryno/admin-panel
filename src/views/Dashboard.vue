<template>
  <div class="container mx-auto px-24">

    <div class="grid grid-cols-2 gap-6">
      <div class="bg-slate-50 h-auto rounded-md shadow-md">
        <div class="font-medium text-3xl p-4">Mau Transaksi Apa ?</div>
        <!-- Card 1 sample to Looping -->

        <div class=" bg-gray-50 shadow h-auto text-ellipsis p-3 mx-4 mb-4 rounded flex justify-between">
          <div class="icon flex flex-row">
        <div class=" h-16 w-16 rounded-sm mr-6 p-4 max-md:p-2">
          <a href="">

            <img src="./../assets/icon-bayar-gadai.svg">
          </a>
        </div>
          <p class="title text-sm pt-4 ">Tabungan Emas</p>
        </div>
        <svg class="w-10 h-10 mt-4 -rotate-90 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </div>

        <div class=" bg-gray-50 shadow h-auto text-ellipsis p-3 mx-4 mb-4 rounded flex justify-between">
          <div class="icon flex flex-row">
        <div class=" h-16 w-16 rounded-sm mr-6 p-4 max-md:p-2">
          <img src="./../assets/ico-tabungan.svg">
        </div>
          <p class="title text-sm pt-4 ">Bayar Gadai</p>
        </div>
        <svg class="w-10 h-10 mt-4 -rotate-90 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </div>

        <div class=" bg-gray-50 shadow h-auto text-ellipsis p-3 mx-4 mb-4 rounded flex justify-between">
          <div class="icon flex flex-row">
        <div class=" h-16 w-16 rounded-sm mr-6 p-4 max-md:p-2">
          <img src="./../assets/icon-bayar-cicilan.svg">
        </div>
          <p class="title text-sm pt-4 ">Bayar Cicilan</p>
        </div>
        <svg class="w-10 h-10 mt-4 -rotate-90 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </div>

        <div class=" bg-gray-50 shadow h-auto text-ellipsis p-3 mx-4 mb-4 rounded flex justify-between">
          <div class="icon flex flex-row">
        <div class=" h-16 w-16 rounded-sm mr-6 p-4 max-md:p-2">
          <img src="./../assets/ico-cicil-emas.svg">
        </div>
          <p class="title text-sm pt-4 ">Cicilan Emas Batangan</p>
        </div>
        <svg class="w-10 h-10 mt-4 -rotate-90 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </div>
        
      </div>

      <div class="bg-slate-50 shadow-md h-auto px-5 rounded-md">
        <div class="header pt-6 ">
          <div class="text-2xl ">Tabungan Emas Anda</div>
          <p class="text-xs">Selasa || 16 Jan 2023</p>
        </div>

        <!-- Card Jual & Beli -->
        <div class="card grid grid-cols-2 gap-3 p-4 h-auto bg-gray-50 shadow rounded">
          <!-- Jual Emas -->
          <div class="jual">
            <div class="harga flex">
              <div class="rupiah mr-1">Rp 9,500</div> / <div class="gram font-light text-sm mt-0.5 ml-1">0,09 gr</div>
            </div>
            <a href="/detailPembayaran">
            <button class=" bg-green-600 w-full p-1 font-semibold text-gray-50 mt-4 rounded">Beli Emas</button></a>
          </div>
          <!-- Beli Emas -->
          <div class="jual">
            <div class="harga flex">
              <div class="rupiah mr-1">Rp 9,372</div> / <div class="gram font-light text-sm mt-0.5 ml-1">0,09 gr</div>
            </div>
            <button class="button outline outline-1 hover:outline-2 outline-green-600 w-full p-1 font-semibold text-gray-800 mt-4 rounded">Beli Emas</button>
          </div>
        </div>

        <!-- Chart Section -->
        <div class="cahrt mt-6">
          <div class="head text-center font-semibold text-xl mb-4 text-green-600"> Jual Dan Beli</div>
            <Chart :data="data" :options="options" :type="type" />   
        </div>
      </div>

    </div>
  </div>



</template>
<script>
// import logo from "./assets/ico-tabungan.svg";
import Chart from 'vue-chartjs3'
import { RouterLink } from 'vue-router';
export default {
  name: 'App',
  components: {
    Chart,
    RouterLink
},
    data () {
        return {
          
              // logo,
              type: 'line',
              data: {
                labels: ["Januari", "February", "Maret", "April", "Mei", "Juni" , "Juli" , "Agustus"],
                datasets: [
                  {
                    label: 'Harga Jual',
                    data: [12, 19, 3, 5, 2, 3,9,3],
                    backgroundColor: '#386380'
                  },	
                  {
                    label: 'Harga Beli',
                    data: [7, 11, 5, 8, 3, 7,5,6],
                    backgroundColor: '#ff6384'
                  }
        		],
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
              }
        	}
    }
};

</script>