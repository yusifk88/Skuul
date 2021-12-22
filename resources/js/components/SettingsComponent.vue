<template>
<span>
    <v-row>
        <v-col cols="12">

            <v-text-field
                outlined
                filled
                label="Class work ratio"
                suffix="%"
                v-model="class_work_ratio"
                type="number"
            ></v-text-field>


            <v-text-field
                type="number"
                outlined
                filled
                label="Project work ratio"
                suffix="%"
                v-model="project_work_ratio"
            ></v-text-field>

            <v-text-field
                type="number"
                outlined
                filled
                label="Exam ratio"
                suffix="%"
                v-model="exam_ratio"
            ></v-text-field>

            <v-alert v-if="total!==100" type="error" color="error lighten-4 red--text">
                <h3 class="font-weight-light">Invalid entry detected, all values mist sum up to 100%, current total={{ total }}%</h3>
            </v-alert>

            <v-btn
                color="teal"
                rounded
                large
                depressed
                block
                @click="update"
                :dark="total===100"
                :disabled="total!==100"
                :loading="progress"
            >Update</v-btn>

        </v-col>
    </v-row>
</span>
</template>

<script>
export default {
    props: ['settings'],
    name: "SettingsComponent",
    data() {
        return {
            class_work_ratio: 0,
            project_work_ratio: 0,
            exam_ratio: 0,
            progress: false
        }
    },
    watch: {
        settings() {

            this.setUpSettings();
        }
    },
    computed: {
        isvalid() {
            return (Number(this.class_work_ratio) + Number(this.project_work_ratio) + Number(this.exam_ratio)) === 100;
        },
        total() {
            return (Number(this.class_work_ratio) + Number(this.project_work_ratio) + Number(this.exam_ratio));
        }
    },
    methods: {
        setUpSettings() {
            this.class_work_ratio = this.settings.class_work_ratio;
            this.project_work_ratio = this.settings.project_work_ratio;
            this.exam_ratio = this.settings.exam_ratio;
        },
        update() {
            this.progress = true;
            const formData = new FormData();
            formData.append('class_work_ratio', this.class_work_ratio);
            formData.append('project_work_ratio', this.project_work_ratio);
            formData.append('exam_ratio', this.exam_ratio);
            const url = "/settings/" + this.settings.id;
            axios.post(url, formData)
                .then(res => {

                    this.progress = false;

                    this.$emit('settingsUpdated',res.data.data);
                })
                .catch(error => {
                    this.progress = false;
                })


        }
    },
    mounted() {
        this.setUpSettings();
        console.log(this.total);
    }
}
</script>

<style scoped>

</style>
