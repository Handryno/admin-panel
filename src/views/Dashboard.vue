<template>
  <div class="container mx-auto px-24">

    <div class="grid grid-cols-2 gap-6">
      <div class="bg-slate-200 h-auto rounded-md shadow-lg">
        <div class="font-medium text-3xl p-4">Mau Transaksi Apa ?</div>
        <!-- Card 1 sample to Looping -->
        <div class="card1">
          <div class=" bg-gray-50 h-auto text-ellipsis p-3 mx-4 mb-4 rounded">
        <div class=" h-16 w-16 rounded-sm float-left mr-6 text-center p-4">
          <img src="./../assets/ico-tabungan.svg">
        </div>
          <p class="title text-sm pt-4 ">Tabungan Emas</p>
        </div>
        </div>
        <div class="card1">
          <div class=" bg-gray-50 h-auto text-ellipsis p-3 mx-4 mb-4 rounded">
        <div class=" h-16 w-16 rounded-sm float-left mr-6 text-center p-4">
          <img src="./../assets/icon-bayar-gadai.svg">
        </div>
          <p class="title text-sm pt-4 ">Bayar Gadai</p>
        </div>
        </div>
        <div class="card1">
          <div class=" bg-gray-50 h-auto text-ellipsis p-3 mx-4 mb-4 rounded">
        <div class=" h-16 w-16 rounded-sm float-left mr-6 text-center p-4">
          <img src="./../assets/icon-bayar-cicilan.svg">
        </div>
          <p class="title text-sm pt-4 ">Bayar Cicilan</p>
        </div>
        </div>
        <div class="card1">
          <div class=" bg-gray-50 h-auto text-ellipsis p-3 mx-4 mb-4 rounded">
        <div class=" h-16 w-16 rounded-sm float-left mr-6 text-center p-4">
          <img src="./../assets/ico-cicil-emas.svg">
        </div>
          <p class="title text-sm pt-4 ">Cicil Emas Batangan</p>
        </div>
        </div>
        
      </div>

      <div class="bg-slate-200 h-auto px-5 rounded-md">
        <div class="header pt-6 pl-6">
          <div class="text-2xl ">Tabungan Emas Anda</div>
          <p class="text-xs">Selasa || 16 Jan 2023</p>
        </div>

        <!-- Card Jual & Beli -->
        <div class="card grid grid-cols-2 gap-3 p-4 h-auto bg-gray-50 rounded">
          <!-- Jual Emas -->
          <div class="jual">
            <div class="harga flex">
              <div class="rupiah mr-1">Rp 9,500</div> / <div class="gram font-light text-sm mt-0.5 ml-1">0,09 gr</div>
            </div>
            <button class="button bg-green-600 w-full p-1 font-semibold text-gray-50 mt-4 rounded">Beli Emas</button>
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
          <div class="head text-center font-semibold text-xl mb-4"> Jual Dan Beli</div>
            <Chart :data="data" :options="options" :type="type" />   
        </div>
      </div>

    </div>
  </div>
</template>
<script>
// import logo from "./assets/ico-tabungan.svg";
import Chart from 'vue-chartjs3'
export default {
  name: 'App',
  components: {
        Chart
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