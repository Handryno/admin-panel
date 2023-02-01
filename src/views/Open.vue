<template>
    <div class="home">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3>Home</h3>
        </v-subheader>
        <br>
        <v-row>
            <v-col lg="7" cols="12">
                <v-alert dense text type="success">
                        Welcome to <strong>PDS</strong>
                    </v-alert>
                <v-row>
                    <v-col lg="6" cols="12" v-for="(item, index) in activityLog" :key="index">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>{{ item.title }}</strong> <br>
                                    <!-- <span>Last 3 weeks</span> -->
                                </div>
                                <v-avatar size="60" :color="item.color" style="border: 3px solid #444">
                                    <span style="color: white">{{ item.amount }} +</span>
                                </v-avatar>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-space-between">
    
    
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" lg="5">
                <!-- <v-card>
                        <v-card-title>Activities</v-card-title>
                        <v-card-text class="py-0">
                            <v-timeline align-top dense>
                                <v-timeline-item color="indigo" small>
                                    <strong>5 Minuts ago</strong>
                                    <div class="text-caption">
                                        You have new order please check this out
                                    </div>
                                </v-timeline-item>
                                <v-timeline-item color="green" small>
                                    <strong>35 Minuts ago</strong>
                                    <div class="text-caption mb-2">
                                        A Product has delivered!
                                    </div>
                                </v-timeline-item>
    
                                <v-timeline-item color="indigo" small>
                                    <strong>44 Minuts ago</strong>
                                    <div class="text-caption">
                                        You have new order please check this out
                                    </div>
                                </v-timeline-item>
                            </v-timeline>
                        </v-card-text>
                    </v-card> -->
            </v-col>
            <v-col>
                <v-card>
                    <v-data-table caption="Recent Transaction list" :headers="headers" :items="desserts" :items-per-page="5"
                        class="elevation-1">
                        <!-- <template v-slot:item.action="">
                                <v-btn color="success" outlined small shaped>View</v-btn>
                            </template> -->
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </div>

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