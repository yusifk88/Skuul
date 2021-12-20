<template>
    <v-navigation-drawer
        :mini-variant="MiniNav"
        fixed
        floating
        app
        color="teal"
        dark
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
        </v-list>
    </v-navigation-drawer>

</template>

<script>
export default {
    props: {
        MiniNav: {
            default: false,
            type: Boolean
        }
    },
    name: "NavDrawer",
    data() {
        return {
            generalNavs: [
                {
                    title: 'Dashboard',
                    icon: 'mdi-view-dashboard',
                    route: '/'
                },
                {
                    title: 'Students',
                    icon: 'mdi-account-multiple',
                    route: '/students'
                },
                {
                    title: 'Teachers',
                    icon: 'mdi-account-multiple',
                    route: '/teachers'
                },
                {
                    title: 'Parents',
                    icon: 'mdi-account-multiple',
                    route:'/parents'
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
