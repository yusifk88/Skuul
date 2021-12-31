<template>
    <v-row>
        <v-col cols="12"
               :class="`${$store.state.app.ThemeColor}  ${$store.state.app.ThemeText}`"
               class="lighten-5"

        >

            <v-row>

                <v-col cols="1">

                    <v-btn @click="$router.back()" text rounded :color="$store.state.app.ThemeColor" ><v-icon>mdi-arrow-left</v-icon>Back</v-btn>
                </v-col>

                <v-col cols="8" >

                    <h2 class="font-weight-light">{{MainTitle}}</h2>
                </v-col>

                <v-col cols="2" >

                    <v-btn
                        :color="$store.state.app.ThemeColor"
                        rounded
                        depressed
                        dark
                        v-if="ShowAddBtn"
                        @click="$emit('create',true)"
                    >{{Btnlabel}}<v-icon>mdi-plus</v-icon></v-btn>
                </v-col>

            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "TitleBarComponent",
    props:{
      title:{
      },
        AddLabel:{},
        BtnIcon:{},
        ShowAddBtn:{
          default:true,
            type:Boolean
        }
    },
    computed:{
        MainTitle(){
            return this.title ? this.title : this.$route.name;
        },
        Btnlabel(){
            return this.AddLabel ? this.AddLabel : "Create New";
        },
        icon(){
            this.BtnIcon ? this.BtnIcon : 'mdi-plus';
        }
    }
}
</script>

<style scoped>

</style>
