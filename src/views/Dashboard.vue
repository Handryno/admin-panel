<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3>Dashboard</h3>
        </v-subheader>
        <br>
        <v-row>
            <v-col lg="7" cols="12">
                <!-- <v-alert dense text type="success">
                    Login Successfully! Welcome to <strong>Transaction Dashboard</strong>
                </v-alert> -->
                <v-row>
                    <v-col lg="6" cols="12" v-for="(item, index) in activityLog" :key="index">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>{{ item.title }}</strong> <br>
                                    <!-- <span>Last 3 weeks</span> -->
                                </div>
                                <v-avatar size="60" :color="item.color" style="border: 3px solid #444">
                                    <span style="color: white">{{ item.amount }}</span>
                                </v-avatar>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-space-between">


                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" lg="5">
                <v-card>
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
                </v-card>
            </v-col>
            <v-col>
               
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    props: {
        activityLog: {
            type: Array,
            default: () => [
                {
                    link: '',
                    title: 'Tabungan Emas',
                    amount:0,
                    icon: 'mdi-account',
                    color:'cyan lighten-3'
                },
                {
                    link: '',
                    title: 'Bayar Gadai',
                    amount: 0,
                    icon: 'mdi-account-group-outline',
                    color: 'green darken-2'
                },
                {
                    link: '',
                    title: 'Bayar Cicilan',
                    amount: 0,
                    icon: 'mdi-clipboard-list-outline',
                    color: 'blue-grey darken-1'
                },
                {
                    link: '',
                    title: 'Cicil Emas Batangan',
                    amount: 0,
                    icon: 'mdi-clipboard-list-outline',
                    color: 'deep-orange darken-1'
                },
            ],
        },
    },
    data() {
        return {
            // activityLog: [
            //     { title: 'Inquiry', amount: 0, icon: 'mdi-account', color: 'cyan lighten-3' },
            //     { title: 'Trace', amount: 0, icon: 'mdi-account-group-outline', color: 'green darken-2' },
            //     { title: 'CreateBilling', amount: 0, icon: 'mdi-account-group-outline', color: 'blue-grey darken-1' },
            //     {
            //         title: 'Failed',
            //         amount: 0,
            //         icon: 'mdi-account-group-outline',
            //         color: 'deep-orange darken-1'
            //     },
            // ],
            headers: [
                {
                    text: 'Delivery Date',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Request', value: 'request' },
                { text: 'Response', value: 'response' },
                { text: 'Application', value: 'application' },
                { text: 'Target', value: 'target' },
                { text: 'Topic', value: 'topic' },
                { text: 'Actions', value: 'action' },
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: '1%',
                },
                {
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: '7%',
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: '8%',
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: '16%',
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: '0%',
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: '2%',
                },
                {
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: '45%',
                },
                {
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: '22%',
                },
                {
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: '6%',
                },
            ],
        }
    },
    methods: {
        onButtonClick(item) {
            console.log('click on ' + item.no)
        }
    }
}
</script>

<style scoped>
.overlap-icon {
    position: absolute;
    top: -33px;
    text-align: center;
    padding-top: 12px;
}
</style>