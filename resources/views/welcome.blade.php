<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Skuul</title>

        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
        <script src="{{ asset('js/app.js') }}" defer></script>

        <style>
            .border-bottom{
                border-bottom: 1px solid rgba(128,128,128,0.17)
            }
        </style>
    </head>
    <body>
    <!-- App.vue -->

    <v-app id="app" >
<nav-drawer
    :show-mini-variant="showMiniVariant"
    v-if="$route.path!='/auth/login' && $route.path!='/auth/signup' "
></nav-drawer>
        <v-app-bar
            app
            flat
            v-if="$route.path!='/auth/login' && $route.path!='/auth/signup'"
        >
            <v-app-bar-nav-icon :color="$store.state.app.ThemeColor" @click="changeNavVariant()"></v-app-bar-nav-icon>

            <v-toolbar-title :class="$store.state.app.ThemeText" class="font-weight-black">Skuul</v-toolbar-title>

            <v-spacer></v-spacer>


            <v-btn icon :color="$store.state.app.ThemeColor">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>


            <v-btn text>
                Help
            </v-btn>

            <v-menu
                left
                bottom
                v-if="$store.state.user"
                transition="scale-transition"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        text
                        v-bind="attrs"
                        v-on="on"
                        v-if="user"
                        rounded
                    >
                        @{{user.first_name}}
                       <v-avatar>
                           <v-img src="/img/avatar.png"></v-img>
                       </v-avatar>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item>
                        <v-list-item-title>Profile</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title class="red--text">Log Out</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main :class="$vuetify.theme.isDark ? '' : 'grey lighten-5'">

            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <success-component v-if="$store.state.successMessage"></success-component>
                <error-component v-if="$store.state.errors"></error-component>
                <!-- If using vue-router -->
                <router-view></router-view>

                <get-started-component  v-if="user && !user.school_id"></get-started-component>
            </v-container>

        </v-main>

    </v-app>
    </body>
</html>
