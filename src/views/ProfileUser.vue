<template>
    <div class="container mx-auto px-24">
        <div class="bg-gray-white p-4 h-auto flex justify-between rounded shadow-md">
            <!-- Avatar -->
            <div class="avatar rounded">
                <div class="avatar flex ">
                  <img src="../assets/hendry-ava.jpg" alt="" class="rounded-full w-24 h-24">
                <div class="text ml-4 text-gray-900 ">
                  <div class="name font-semibold mb-1">Handry Novianto</div>
                  <div class="cif mb-1">Cif : 78742513</div>
                  <div class="status font-semibold p-2 text-orange-600 bg-orange-100 rounded w-fit mb-1">standard</div>
                </div>
              </div>
            </div>
            <!-- G-Cash -->
            <div class="g-cash">
                <div class="g-card shadow-md grid grid-cols-2 p-4 bg-gray-50 rounded">
                <div class="g-cash border-r-2 pr-4">
                  <div class="icon flex ">
                    <div class="icon h-4 w-6 bg-gradient-to-b from-green-700 to-green-500 rounded-md mt-1"></div>
                    <p class="semi-bold ml-2">G-Cash</p>
                  </div>
                  <div class="title">Rp 0</div>
                </div>

                <div class="g-coin  ml-4">
                  <div class="icon flex ">
                    <div class="icon h-4 w-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mt-1"></div>
                    <p class="semi-bold ml-2">G-Coin</p>
                  </div>
                  <div class="title">Rp 0</div>
                </div>
              </div>
            </div>
        </div>

        <!-- upgrade premium -->
        <div class="premium flex p-4 bg-white rounded shadow-md mt-4">
        <div class="icon h-4 w-6 mt-1 bg-orange-500 rounded-full"></div>
        <div class="text ml-3">
            <div class="tit font-medium mb-2">Upgrade Akun Premium</div>
            <div class="content text-sm font-light" >Hanya perlu upload KTP untuk akses semua fitur dan mendapatkan promo khusus</div>
        </div>
        </div>

        <!-- data user -->
        <div class="bg-slate-100 h-auto grid grid-rows-auto gap-4 rounded col-span-2 shadow-xl mt-4">

        <!-- Input Rekening -->
        <div class="card bg-gray-50  0 py-5 px-8 rounded">
            <div class="header">
            <div class="font-medium text-base mb-6">Informasi Penguna</div>

            <div class="isi grid grid-rows-auto gap-2">
                <div class="namaNasabah flex ">
                    <div class="icon w-8 h-5 rounded-full bg-gradient-to-r from-green-700 to-green-500"></div>
                    <div class="isi ml-2">Data Nasabah</div>
                </div>
                <hr>
                <div class="namaNasabah flex ">
                    <div class="icon w-8 h-5 rounded-full bg-gradient-to-r from-green-700 to-green-500"></div>
                    <div class="isi ml-2">Data NPWP</div>
                </div>
                <hr>
                <div class="namaNasabah flex ">
                    <div class="icon w-8 h-5 rounded-full bg-gradient-to-r from-green-700 to-green-500"></div>
                    <div class="isi ml-2">Data SID</div>
                </div>
                <hr>
                <div class="namaNasabah flex ">
                    <div class="icon w-8 h-5 rounded-full bg-gradient-to-r from-green-700 to-green-500"></div>
                    <div class="isi ml-2">Keamanan Akun</div>
                </div>
                <hr>
                <div class="namaNasabah flex ">
                    <div class="icon w-8 h-5 rounded-full bg-gradient-to-r from-green-700 to-green-500"></div>
                    <div class="isi ml-2">CIF (ID Pelanggan)</div>
                </div>
            </div>
            </div>
        </div>

        <div class="card bg-gray-50 py-5 px-8">
            <div class="header">
                <div class="font-medium text-base mb-6">Rekening</div>

                <div class="isi grid grid-rows-auto gap-2">
                    <div class="namaNasabah flex ">
                        <div class="icon w-8 h-5 rounded-full bg-gradient-to-r from-green-700 to-green-500"></div>
                        <div class="isi ml-2">Rekening Saya</div>
                    </div>
                    <hr>
                    <div class="namaNasabah flex ">
                        <div class="icon w-8 h-5 rounded-full bg-gradient-to-r from-green-700 to-green-500"></div>
                        <div class="isi ml-2">Rekenging Favorit</div>
                    </div>
                    <hr>
                    <div class="namaNasabah flex ">
                        <div class="icon w-8 h-5 rounded-full bg-gradient-to-r from-green-700 to-green-500"></div>
                        <div class="isi ml-2">Transaksi Auto Debit</div>
                    </div>
                    <hr>
                    <div class="namaNasabah flex ">
                        <div class="icon w-8 h-5 rounded-full bg-gradient-to-r from-green-700 to-green-500"></div>
                        <div class="isi ml-2">Voucher Saya</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card bg-gray-50 py-5 px-8 ">
        <div class="namaNasabah flex ">
            <div class="icon w-8 h-5 rounded-full bg-orange-600"></div>
            <div class="isi ml-2">Voucher Saya</div>
        </div>
        </div>        

        <div class="card bg-gray-50 py-5 px-8 ">
        <a href="/MetodePembayaran">
            <button class=" bg-red-600 w-full p-2 font-semibold text-gray-50 rounded">Keluar</button>
        </a>
        </div>
        </div>

    </div>

</template>
<script>
export default {
  data() {
      return {
        show: false,
      };
    },
  name: 'ProfileUser'
};
</script>