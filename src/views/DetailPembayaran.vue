<template>
    <div class="mb-20">
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
                        <div
                            class="number h-6 w-6 rounded-full bg-green-600 font-semibold text-gray-100 text-center pt-0.5 text-sm">
                            1</div>
                        <div class="sub-title font-semibold ml-6 mt-0.5"> Detail Pembayaran</div>
                    </div>
                    <div class="flex mb-6">
                        <div
                            class="number h-6 w-6 rounded-full font-semibold bg-gray-200 text-gray-400 text-center pt-0.5 text-sm">
                            2</div>
                        <div class="sub-title font-semibold ml-6 mt-0.5 text-gray-400"> Konfirmasi</div>
                    </div>
                    <div class="flex mb-6">
                        <div
                            class="number h-6 w-6 rounded-full font-semibold bg-gray-200 text-gray-400 text-center pt-0.5 text-sm">
                            3</div>
                        <div class="sub-title font-semibold ml-6 mt-0.5 text-gray-400"> Metode Pembayaran</div>
                    </div>
                </div>
            </div>
            <v-form class="bg-slate-50 h-auto py-5 px-8 rounded-md col-span-2 shadow-xl" v-model="valid"
                lazy-validation>
                <!-- Input Rekening -->
                <div class="header">
                    <div class="text-base font-medium">Rekening Tabungan Emas</div>
                    <!-- <input  type="number" class="mt-4 p-2 border-gray-400 outline outline-1 rounded-sm w-full" v-model="norek" :rules="norekRules" /> -->
                    <v-text-field outlined class="mt-4 p-2 border-gray-400 outline-1" v-model="norek" :rules="norekRules"
                        required></v-text-field>
                </div>
                <!-- Harga Emas -->
                <div v-if="check">
                    <div class="harga mt-6 ">
                        <div class="text-base font-medium">Harga Emas</div>
                        <div class="uang flex">
                            <div class="rupiah mr-1">Rp 6,040</div> / <div class="gram font-light text-sm mt-0.5 ml-1">
                                0,01 gr</div>
                        </div>
                    </div>
                    </div>
                    <!-- Nominal pembeli -->
                    <fieldset class="mt-6">
                        <div class="text-base font-medium mb-2">Nominal Pembeli</div>
                        <div class="group rupiah mt-6 border flex hover:border-green-700  rounded">
                            <div for="rupiah"
                                class="p-3 group-hover:bg-green-700 w-20 font-medium bg-slate-300 text-gray-500 group-hover:text-gray-100">
                                Rupiah</div>
                            <input placeholder="Masukan amount" class="p-3 focus:outline-none" id="rupiah"
                                v-model="amount" required>
                        </div>
                    </fieldset>
                         <!-- syarat -->
                    <div class="syarat flex mt-2">
                        <input type="checkbox" name="setuju" id="setuju" v-model="setuju" required>
                        <div class="tulisan">
                            <div class="rupiah mr-1 text-sm ml-1"> Saya setuju dengan <a href="https://digital.pegadaian.co.id/bantuan/syarat-ketentuan">Syarat dan Ketentuan</a> yang berlaku</div>
                        </div>
                    </div>
                
                        <!-- button -->
                        <button class="bg-green-600 w-full p-3 font-semibold text-gray-50 mt-6 rounded"
                        @click="popup()">Beli Emas</button>
             </v-form>
        </div>

</div>
<Footer></Footer>
</div>
</template>
<script>
import axios from 'axios'
import Sidebar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
    components: {
    Footer,
    Sidebar,},
  name: 'DetailPembayaran',
  methods:{
  },data:()=> ({
        valid: true,
        amount: '',
        amountRules: [
            v => !!v || 'Amount tidak boleh kosong.',
            v => (v >= 10000) || 'Minimal Transaksi Rp 10.000',
        ],
        channelId: '6017',
        clientId: '9997',
        jenisTransaksi: 'SL',
        norek: '',
        norekRules: [
            v => !!v || 'Nomor Rekening tidak boleh kosong.',
            v => (v && v.length == 16) || 'Nomor Rekening harus 16 digit.',
        ],
    }), methods: {
        popup(){
            if (confirm("Are you Sure ?")){
                this.submit();
            }else{
            }
        },
        submit() {
            const credentials = {
                amount: this.amount,
                channelId: this.channelId,
                clientId: this.clientId,
                jenisTransaksi: this.jenisTransaksi,
                norek: this.norek,
            };
            axios
                .post(`http://localhost:8989/tabunganemas/inquiry`, credentials)
                .then((credentials) => 
                {
                    if(credentials.data.responseCode != '00'){
                        window.alert("Nomor Rekening tidak ditemukan!")
                    }else{
                        this.$router.push({ name: 'KonfirmasiTransaksi', params: { result: JSON.parse(credentials.data.data) } })
                    }
                }
                );
        },
    },
    computed: {
        check() {
            return this.norek.length == 16 ? true : false
        },
    }
}
</script>