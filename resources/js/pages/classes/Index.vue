<template>
<span>
    <title-bar-component
        @create="b=>newCLass=b"
        add-label="Create Class"
        btn-icon="mdi-plus"
    ></title-bar-component>

<v-row>
    <v-col cols="12" sm="6" class="mx-auto">
        <v-skeleton-loader type="list-item@10" v-if="progress"></v-skeleton-loader>
        <v-list v-else>
            <v-list-item
                v-for="cl in classes"
                :key="cl.id"
                :to="'classes/'+cl.id"
            >
                <v-list-item-content>
                    <v-list-item-title>{{cl.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{cl.description}}</v-list-item-subtitle>
                    <v-list-item-subtitle><strong>Grade:</strong> {{cl.grade.name}}</v-list-item-subtitle>

                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-col>
</v-row>


    <v-dialog
        width="500px"
        v-model="newCLass"
        persistent
    >
        <new-class
            @closed="newCLass=false"
            @created="classCreated"
        ></new-class>
    </v-dialog>
</span>
</template>

<script>
import TitleBarComponent from "../../components/TitleBarComponent";
import NewClass from "../../components/NewClass";

export default {
    name: "Index",
    components: {NewClass, TitleBarComponent},
    data() {
        return {
            newCLass: false,
            classes: [],
            progress: false
        }
    },
    methods: {
        classCreated(cl){
            this.getClasses();
        },
        getClasses() {
            this.progress = true;
            axios.get('/classes')
                .then(res => {
                    this.classes = res.data.data;
                    this.progress = false;
                })
                .catch(error => {
                    this.progress = false;
                })

        }
    },
    mounted() {
        this.getClasses();
    }
}
</script>

<style scoped>

</style>
