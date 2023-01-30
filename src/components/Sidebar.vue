<template>
    <v-navigation-drawer v-model="drawer" app>
        <v-img height="140" class="pa-4" src="">
            <div class="text-center">
                <v-avatar class="mb-4" color="grey darken-1" size="64">
                    <v-img aspect-ratio="30"
                        src="" />
                </v-avatar>
                <h2 class="black--text">Dashboard</h2>
            </div>
        </v-img>
        <v-divider></v-divider>
        <v-list>
            <v-list-item v-for="(menuItem, index) in menuItems" :key="index"> 
                <a :href="menuItem.link">
                    <v-list-item-icon>
                        <v-icon>{{ menuItem.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
                    </v-list-item-content>
                </a>  
            </v-list-item>
            <!-- <span v-for="(menuItem, index) in menuItems" :key="index">
                <li>
                    <a :href="menuItem.link">
                        <i class="bx" :class="menuItem.icon || 'bx-square-rounded'" />
                        <span class="links_name">{{ menuItem.name }}</span>
                    </a>
                    <span class="tooltip">{{ menuItem.tooltip || menuItem.name }}</span>
                </li>
            </span> -->
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "Sidebar",
    // props: ["drawer"],
    props: {
        menuItems: {
            type: Array,
            default: () => [
                {
                    link: '/',
                    name: 'Dashboard',
                    icon: 'mdi-microsoft-windows',
                },
                {
                    link: '/inquiry',
                    name: 'Inquiry',
                    icon: 'mdi-card-account-details-outline',
                },
                {
                    link: '/createbilling',
                    name: 'Createbilling',
                    icon: 'mdi-clipboard-list-outline',
                },
            ],
        },
    },
    data() {
        return {
        };
    },
};
</script>

<style scoped>
a {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    text-decoration: none;
}
</style>