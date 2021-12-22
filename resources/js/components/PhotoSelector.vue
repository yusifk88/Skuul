<template>

    <span>

    <v-img
        :src="`${ImgPreview}`"
        eager
    >
        <span class="overlay" @mouseover="showControlls=true" @mouseleave="showControlls=false" >
            <v-btn
                v-if="showControlls && hasImage"
                dark
                block
                style="position: absolute; bottom: 25px !important;"
                small
                text
                @click="ImgPreview='/img/photo.jpg'; $refs.SelectInput.value=''; $emit('imageRemoved')"
                color="red"
            >{{RemoveLabel}}<v-icon small>mdi-delete-outline</v-icon></v-btn>
            <v-btn
                v-if="showControlls"
                dark
                block
                style="position: absolute; bottom: 2px !important;"
                small
                text
                @click="SelectPhoto"
            >{{SelectLabel}}<v-icon small>mdi-upload</v-icon></v-btn>
        </span>

    </v-img>
          <input
              type="file"
              class="d-none"
              ref="SelectInput"
              accept="image/png, image/jpeg, image/bmp"
              v-on:change="SelectChange"
          >
    </span>

</template>

<script>
export default {
    name: "PhotoSelector",
    props:{
        SelectLabel:{
            default:"Select Photo"
        },
        RemoveLabel:{
            default:"Remove Photo"
        }
    },
    data(){
        return{
            ImgPreview:"/img/photo.jpg",
            showControlls:false,
        }
    },
    computed:{
      hasImage(){
          return this.ImgPreview!=="/img/photo.jpg";
      }
    },
    methods:{
        SelectPhoto(){
            const el = this.$refs.SelectInput;
            el.click();
        },
        SelectChange(e){

            const photo = e.target.files[0];
            this.$emit('fileSelected',photo);

            const fr = new FileReader();

            fr.readAsDataURL(photo);

      fr.addEventListener('load',function (){
          this.setPreview(fr.result);
      },true)

        },

        setPreview(url){
            this.ImgPreview=url;
        }
    }

}
</script>

<style scoped>
.overlay{
    width: 100% !important;
    height: 100% !important;
    position: absolute;
    transition: 0.2s ease-in-out;

}
.overlay:hover{
    background-color: rgba(0, 0, 0, 0.55);

}

</style>
