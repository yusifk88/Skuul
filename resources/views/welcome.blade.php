<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Skuul</title>

        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
        <script src="{{ asset('js/app.js') }}" defer></script>

    </head>
    <body >
    <!-- App.vue -->

    <v-app id="app">
<nav-drawer
    :MiniNav="MiniNav"
    v-if="$route.path!='/auth/login' && $route.path!='/auth/signup' "
></nav-drawer>
        <v-app-bar
            app
            flat
            v-if="$route.path!='/auth/login' && $route.path!='/auth/signup'"
        >
            <v-app-bar-nav-icon color="teal" @click="MiniNav=true"></v-app-bar-nav-icon>

            <v-toolbar-title class="teal--text font-weight-black">Skuul</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon color="teal">
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon color="teal">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu
                left
                bottom
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item>
                        <v-list-item-title>Option</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>

            <!-- Provides the application the proper gutter -->
            <v-container>
                <success-component></success-component>
                <error-component></error-component>
                <!-- If using vue-router -->
                <router-view></router-view>

            </v-container>
        </v-main>

{{--        <v-footer app>--}}

{{--        </v-footer>--}}
    </v-app>
    </body>
</html>
