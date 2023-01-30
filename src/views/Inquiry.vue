<template>
    <fieldset>
        <legend>Inquiry</legend>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="amount" :rules="amountRules" label="Amount" required></v-text-field>
            <v-text-field v-model="channelId" :rules="channelRules" label="ChannelId" required></v-text-field>
            <v-text-field v-model="clientId" :rules="clientRules" label="ClientId" required></v-text-field>
            <v-select v-model="jenisTransaksi" :items="items" :rules="[v => !!v || 'Jenis Transaksi is required']" label="Jenis Transaksi"
                required></v-select>
            <v-text-field v-model="norek"  :rules="norekRules" label="Nomor Rekening" required></v-text-field>
            <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit()">
                Submit
            </v-btn>
            <v-btn color="error" class="mr-4" @click="reset">
                Reset
            </v-btn>
        </v-form>
    </fieldset>
        
</template>
<style scoped>
fieldset {
    padding: 20px 40px;
    margin-left: 300px;
    margin-right: 300px;
    margin-bottom: 50px;
}

</style>
<script>
import axios from 'axios'
  export default {
    data: () => ({
        valid: true,
        amount: '',
        amountRules: [
            v => !!v || 'Amount is required',
        ],
        channelId: '',
        channelRules: [
            v => !!v || 'Channel Id is required',
            v => (v && v.length <= 4) || 'Channel Id must be less than 4 characters',
        ],
        clientId: '',
        clientRules: [
            v => !!v || 'Client Id is required',
            v => (v && v.length <= 4) || 'Client Id must be less than 4 characters',
        ],
        jenisTransaksi: null,
        items: [
            'SL',
            'OP',
            'BB',
            'UG',
            'CC',
            'TB',
            'OD',
        ],
        norek: '',
        norekRules: [
            v => !!v || 'Nomor Rekening is required',
            v => (v && v.length <= 16) || 'Nomor Rekening must be less than 16 characters',
        ],
    }),
    methods: {
      submit () {
        // const header = {
            // "Authorization": "YXBsaWthc2lqczphcGxpa2FzaTEyMw==",
            // "Accept": "*/*",
            // "Content-Type": "application/x-www-form-urlencoded",
            // "Accept-Encoding": "gzip, deflate, br",
            // "Connection": "keep-alive",
            // "Access-Control-Allow-Origin": "http://localhost:8080/",
            // "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            // "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
        // };
        // const credential = {
        //     username: "test",
        //     password: "test",
        //     grant_type: "password"
        // };
        // axios
        //     .post(`http://localhost:9010/oauth/token`, header)
        //     .then((response) => console.log(response.data));

        const credentials = {
            amount: this.amount,
            channelId: this.channelId,
            clientId: this.clientId,
            jenisTransaksi: this.jenisTransaksi,
            norek: this.norek,
        };
        console.log(credentials);
        // const headers = {
        //     "Content-type": "application/json",
        //     "Accept": "*/*",
        //     "Content-Type": "application/x-www-form-urlencoded",
        //     "Accept-Encoding": "gzip, deflate, br",
        //     "Connection": "keep-alive",
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        //     "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
        // }
        axios
            .post(`http://localhost:8989/tabunganemas/inquiry`, credentials)
            .then((credentials) => console.log(credentials))
        
      },
      reset () {
        this.$refs.form.reset()
      },
    },

  }
</script>