<template>
    <fieldset>
        <legend>Create Billing</legend>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="amount" :rules="amountRules" label="Amount" required></v-text-field>
            <v-text-field v-model="channelId" :rules="channelidRules" label="Channel Id" required></v-text-field>
            <v-text-field v-model="clientId" :rules="clientidRules" label="Client Id" required></v-text-field>
            <v-text-field v-model="customerEmail" :rules="customeremailRules" label="Customer Email" required></v-text-field>
            <v-text-field v-model="customerName" :rules="customernameRules" label="Customer Name" required></v-text-field>
            <v-text-field v-model="customerPhone" :rules="customerphoneRules" label="Customer Phone" required></v-text-field>
            <v-select v-model="jenisTransaksi" :items="items" :rules="[v => !!v || 'Jenis Transaksi is required']"
                label="Jenis Transaksi" required></v-select>
            <v-text-field v-model="keterangan" :rules="keteranganRules" label="Keterangan" required></v-text-field>
            <v-text-field v-model="norek" :rules="norekRules" label="Nomor Rekening" required></v-text-field>
            <v-text-field v-model="productCode" :rules="productcodeRules" label="Product Code" required></v-text-field>
            <v-text-field v-model="trxId" :rules="trxidRules" label="Trx Id" required></v-text-field>
            <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">
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
        customerEmail: '',
        customeremailRules: [
            v => !!v || 'Customer Email is required',
        ],
        customerName: '',
        customernameRules: [
            v => !!v || 'Customer Name is required',
        ],
        customerPhone: '',
        customerphoneRules: [
            v => !!v || 'Customer Phone is required',
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
            'MP',
        ],
        keterangan: '',
        keteranganRules: [
            v => !!v || 'Keterangan is required'
        ],
        norek: '',
        norekRules: [
            v => !!v || 'Norek is required',
        ],
        productCode: '',
        productcodeRules: [
            v => !!v || 'Product Code is required',
            // v => (v && v.length <= 16) || 'Nomor Rekening must be less than 16 characters',
        ],
        trxId: '',
        trxidRules: [
            v => !!v || 'Trx Id is required',
        ],
    }),
    methods: {
        submit() {
            const credentials = {
                amount: this.amount,
                channelId: this.channelId,
                clientId: this.clientId,
                customerEmail: this.customerEmail,
                customerName: this.customerName,
                customerPhone: this.customerPhone,
                jenisTransaksi: this.jenisTransaksi,
                keterangan: this.keterangan,
                norek: this.norek,
                productCode: this.productCode,
                trxId: this.trxId
            };
            console.log(credentials)
            
            axios
                .post(`http://localhost:9095/va/finpay/createbilling`, credentials)
                .then((credentials) => console.log(credentials))
        },
        reset() {
            this.$refs.form.reset()
        },
    },
}
</script>