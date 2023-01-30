<template>
    <fieldset>
        <legend>Open Tabungan Emas</legend>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="channel" :counter="4" :rules="channelRules" label="Channel Id"
                required></v-text-field>
            <v-text-field v-model="client" :counter="4" :rules="clientRules" label="Client Id" required></v-text-field>
            <v-text-field v-model="amount" :rules="amountRules" label="Amount" required></v-text-field>
            <v-text-field v-model="customeremail" :rules="customeremailRules" label="Customer Email"
                required></v-text-field>
            <v-text-field v-model="customername" :rules="customernameRules" label="Customer Name"
                required></v-text-field>
            <v-select v-model="kodebank" :items="kodebanks" :rules="[v => !!v || 'Kode Bank is required']"
                label="Kode Bank" required></v-select>
            <v-select v-model="jenistransaksi" :items="jenistransaksis"
                :rules="[v => !!v || 'Jenis Transaksi is required']" label="Jenis Transaksi" required></v-select>
            <v-text-field v-model="keterangan" :rules="keteranganRules" label="Keterangan" required></v-text-field>
            <v-text-field v-model="norek" :rules="norekRules" label="Nomor Rekening" required></v-text-field>
            <v-select v-model="productcode" :items="productcodes" :rules="[v => !!v || 'Product Code is required']"
                label="Product Code" required></v-select>
            <v-text-field v-model="reffswitching" :counter="16" :rules="reffswitchingRules" label="Reffswitching"
                required></v-text-field>

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
export default {
    data: () => ({
        valid: true,
        channel: '',
        channelRules: [
            v => !!v || 'Channel Id is required',
            v => (v && v.length <= 4) || 'Channel Id must be less than 4 characters',
        ],
        client: '',
        clientRules: [
            v => !!v || 'Client Id is required',
            v => (v && v.length <= 4) || 'Client Id must be less than 4 characters',
        ],
        amount: '',
        amountRules: [
            v => !!v || 'Amount is required',
        ],
        customeremail: '',
        customeremailRules: [
            v => !!v || 'Customer Email is required',
        ],
        customername: '',
        customernameRules: [
            v => !!v || 'Customer Name is required',
        ],
        kodebank: null,
        kodebanks: [
            '770',
            '009',
            '002',
            '013',
            '016',
            '014',
            '008',
        ],
        jenistransaksi: null,
        jenistransaksis: [
            'SL',
            'OP',
            'BB',
            'UG',
            'CC',
            'TB',
            'OD',
        ],
        keterangan: '',
        keteranganRules: [
            v => !!v || 'Keterangan is required'
        ],
        norek: '',
        norekRules: [
            v => !!v || 'Nomor Rekening is required',
            // v => (v && v.length <= 16) || 'Nomor Rekening must be less than 16 characters',
        ],
        productcode: null,
        productcodes: [
            '62',
        ],
        reffswitching: '',
        reffswitchingRules: [
            v => !!v || 'ReffSwitching is required',
        ],
    }),
    methods: {
        submit() {
            this.$refs.form.submit()
        },
        reset() {
            this.$refs.form.reset()
        },
    },
}
</script>