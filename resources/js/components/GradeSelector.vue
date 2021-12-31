<template>

    <v-autocomplete
        :loading="progress"
        :items="grades"
        item-text="name"
        item-value="id"
        v-model="grade_id"
        @change="$emit('selected',grade_id)"
        filled
        :color="$store.state.app.ThemeColor"
        :rules="$store.state.requiredRules"
        outlined
        label="Grade"
        item-color="teal"
    >
        <template v-slot:prepend-item>
            <v-btn text block color="teal" rounded @click="newGrade=true">New Grade</v-btn>
            <v-dialog v-model="newGrade" width="500px">
                <new-grade @closed="newGrade=false" @created="gradeCreated"></new-grade>
            </v-dialog>
        </template>
    </v-autocomplete>
</template>

<script>
import NewGrade from "./NewGrade";
export default {
    name: "GradeSelector",
    components: {NewGrade},
    props:['id'],
    data(){
        return{

            grade_id:null,
            grades:[],
            progress:false,
            newGrade:false

        }
    },
    methods:{
        gradeCreated(grade){
            this.grades.unshift(grade);
            this.grade_id=grade.id;
            this.$emit('selected',this.grade_id);
        },
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
