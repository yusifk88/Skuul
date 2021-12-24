<template>
    <span>

<TitleBarComponent
    @create="b=>CreateDialog=b"
    add-label="Create Grade"
></TitleBarComponent>


        <v-row>
            <v-col cols="12" sm="6" class="mx-auto">
                <v-skeleton-loader type="list-item@10" v-if="progress"></v-skeleton-loader>
                <v-list v-else>
                    <v-list-item
                        v-for="grade in grades"
                        :key="grade.id"
                        class="border"
                        two-line
                        :to="'/grades/'+grade.id"
                    >
                        <v-list-item-content>

                        <v-list-item-title>{{grade.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{grade.description}}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action-text>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-list-item-action-text>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>



        <v-dialog width="500px"
                  :fullscreen="$vuetify.breakpoint.mobile"
                  scrollable
                  v-model="CreateDialog"
                  persistent

        >
            <new-grade  @created="getGrades" @closed="CreateDialog=false"></new-grade>
        </v-dialog>
    </span>

</template>

<script>
import TitleBarComponent from "../../components/TitleBarComponent";
import NewGrade from "../../components/NewGrade";
export default {
    name: "Index",
    components: {NewGrade, TitleBarComponent},
    data(){
        return{
            CreateDialog:false,
            progress:false,
            grades:[]
        }
    },
    methods:{
        getGrades(){

            this.progress=true;

            axios.get('/grades')
                .then(res=>{
                    this.grades = res.data.data;
                    this.progress=false;
                })
        }
    },
    mounted() {
        this.getGrades();
    }
}
</script>

<style scoped>

</style>
