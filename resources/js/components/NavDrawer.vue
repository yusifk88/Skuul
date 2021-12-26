<template>
    <v-navigation-drawer
        :mini-variant="showMiniVariant"
        fixed
        floating
        app
        color="teal"
        dark
        width="200"
        :expand-on-hover="showMiniVariant"
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    School Name
                </v-list-item-title>
                <v-list-item-subtitle>
                    Address here
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
            dense
            nav
            shaped
        >
            <v-subheader>General</v-subheader>
            <v-list-item
                v-for="item in generalNavs"
                :key="item.title"
                link
                :to="item.route"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>


            <v-subheader>Structures</v-subheader>
            <v-list-item
                v-for="item in structureNavs"
                :key="item.title"
                link
                :to="item.route"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-subheader>Administration</v-subheader>
            <v-list-item
                v-for="item in adminNav"
                :key="item.title"
                link
                :to="item.route"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>



        </v-list>
    </v-navigation-drawer>

</template>

<script>
export default {
    name: "NavDrawer",
    props: {
        showMiniVariant: {
            default: true
        }
    },
    data() {
        return {
            generalNavs: [
                {
                    title: 'Dashboard',
                    icon: 'mdi-view-dashboard-outline',
                    route: '/'
                },
                {
                    title: 'Students',
                    icon: 'mdi-account-multiple-outline',
                    route: '/students'
                },
                {
                    title: 'Teachers',
                    icon: 'mdi-account-multiple-outline',
                    route: '/teachers'
                },
                {
                    title: 'Parents',
                    icon: 'mdi-account-multiple-outline',
                    route:'/parents'
                },
            ],
            structureNavs: [
                {
                    title: 'Grades/Levels',
                    icon: 'mdi-warehouse',
                    route: '/grades'
                },
                {
                    title: 'Classes',
                    icon: 'mdi-home-outline',
                    route: '/classes'
                },
                {
                    title: 'Subjects',
                    icon: 'mdi-book-open-page-variant-outline',
                    route: '/subjects'
                }
            ],
            adminNav: [
                {
                    title: 'Reports',
                    icon: 'mdi-chart-box-outline',
                    route: '/reports'
                },
                {
                    title: 'Fees',
                    icon: 'mdi-currency-usd',
                    route: '/fees'
                },
                {
                    title: 'Notifications',
                    icon: 'mdi-message-badge-outline',
                    route: '/subjects'
                },
                {
                    title: 'Notice Board',
                    icon: 'mdi-billboard',
                    route:'/notice-board'
                },
                {
                    title: 'Settings',
                    icon: 'mdi-cog-outline',
                    route:'/settings'
                },
            ],

        }
    },

}
</script>

<style scoped>

</style>
