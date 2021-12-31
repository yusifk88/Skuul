<template>
<v-card>
    <v-card-title class="font-weight-light teal--text" >{{title}}</v-card-title>
    <v-card-text>
        <v-form ref="subject_form" >
            <v-text-field
                outlined
                label="Name*"
                filled
                :color="$store.state.app.ThemeColor"
                v-model="name"
                autofocus
                :rules="$store.state.requiredRules"
            ></v-text-field>
            <v-select
                outlined
                filled
                v-model="type"
                label="Type*"
                :items="types"
                :color="$store.state.app.ThemeColor"
                item-color="teal"
                :rules="$store.state.requiredRules"

            >
            </v-select>
            <v-textarea
                filled
                outlined
                label="Description"
                :color="$store.state.app.ThemeColor"
                v-model="description"
                auto-grow
                rows="2"
            >

            </v-textarea>
        </v-form>
    </v-card-text>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn rounded @click="$emit('closed')" text :disabled="progress">cancel</v-btn>
        <v-btn rounded text :color="$store.state.app.ThemeColor" @click="save" :loading="progress">Save</v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    name: "NewSubject",
    props:['edit'],
    data(){
      return{
          type:'core',
          name:"",
          description:"",
          progress:false,
          types:[
              {
              text:"Core Subject",
              value:"core"
          },
              {
              text:"Elective Subject",
              value:"elective"
          }
          ]
      }
    },
    computed:{
        title(){
            return this.edit ? "Edit subject" : "Create new subject";
        }
    },
    methods:{
        done(subject){
          this.name='';
          this.description='';
          this.$emit('created',subject);
          this.$emit('closed');
        },
        save(){

            if (this.$refs.subject_form.validate()){

                const formData = new FormData();
                formData.append('name',this.name);
                formData.append('description',this.description);
                formData.append('type',this.type);

                axios.post('/subject',formData)
                .then(res=>{
                    this.progress=false;
                    this.done(res.data.data);
                })
                .catch(error=>{
                    this.progress=false;
                })
            }

        }
    }
}
</script>

<style scoped>

</style>
