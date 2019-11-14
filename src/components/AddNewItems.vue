<template>
    <div>
 <v-container fluid>
     <v-row>
           <v-col cols="12" md="8">
         
  <v-card class="ma-2 pa-2"
    flat 
    color="#ffffff60"
     align="center"
     width="600"
  >
   <p color="blue" class="title blue--text font-weight-light">
            ADD NEW LESSON
             </p>
    <v-list-item two-line>
      <v-list-item-content>
       <v-list-item-title id="les-title" class="mb-4 headline font-weight-regular"> <v-text-field color="blue"
            label="Lesson Headline" outlined required v-model="headline"></v-text-field></v-list-item-title>
        <v-divider></v-divider> 
        <v-list-item-subtitle id="card-desc" class="subtitle-1 mt-6"><v-text-field color="blue"
            label="Description" required v-model="description"></v-text-field></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col id="card-text" class="subtitle-1" cols="6"> 
          <br>
        <v-text-field color="blue" label="Days" required v-model="days"></v-text-field>
         <v-text-field color="blue" label="Times" required v-model="time"></v-text-field> 
         <br>
         <p class="mt-12 font-weight-light">  <v-text-field color="blue" label="Price" outlined required v-model="price"></v-text-field>    DKK/lesson</p>
           <v-btn   class="btn ma-3 font-weight-light" rounded color="white" text @click="addLesson()" :disabled="btnDisable" >
       Add
      </v-btn>
      <v-btn  class="cancel ma-3 font-weight-light" rounded color="white" text>
       Cancel
      </v-btn>
        </v-col>
         <v-col cols="6">
         <v-file-input class="ml-8"
         @change="uploadImage"
         v-model="image"
         rounded
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Add image"
          prepend-icon="mdi-camera"

  ></v-file-input>
        </v-col>
        
      </v-row>
    </v-card-text>
  </v-card>
  </v-col>
  <v-col align-self="center"   cols="6" md="4">
<v-card
    class="pa-6 ma-2"
    flat 
    color="#ffffff60"
     align="center"
  >
  <p color="blue" class="title purple--text font-weight-light">
            PREVIEW
             </p>
    <v-card-text id="les-title" class="title font-weight-regular">{{headline}}</v-card-text>
    <v-divider></v-divider>
    <v-img
    v-bind:src="image"  width="125px"
      height="220px">
        </v-img>
    <v-card-text id="les-title" class="subtitle mt-6 font-weight-regular">{{description}}</v-card-text>
       
 <v-card-text class="mt-8" id="card-text"> Visit us on: <br> <span>{{days}}</span>
    <br>
        <br>
      from
      <br>
     <span>{{time}}</span>
      <br>
     <p class="mt-12 font-weight-light"> {{price}} DKK/lesson</p>
    </v-card-text>
   
  </v-card>
    </v-col>
  
     </v-row>



 </v-container>
    </div>
</template>

<script>
import { dbLessonAdd, fb } from '../firebase'

    export default {
       data() {
           return {
               headline: '',
               description: '',
               days: '',
               time: '',
               price: '',
               image: null,
               btnDisable: true,
           }
       },
       methods: {
         uploadImage(e) {
           let file = e;
           console.log(e);
           var storageRef = fb.storage().ref('lessons/'+ file.name);

           let uploadTask = storageRef.put(file);
           uploadTask.on('state_changed', (snapshot) => {
          
          }, (error) => {
            // Handle unsuccessful uploads
          }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.image = downloadURL;
              this.btnDisable = false;
              console.log('File available at', downloadURL);
            });
          });
         },
         addLesson() {
             dbLessonAdd.add({
               headline: this.headline,
               description: this.description,
               days: this.days,
               time: this.time,
               price: this.price,
               image: this.image,
             })
         }
        
       },
       computed: () => ({
           rules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
       })
       
           }
</script>

<style lang="scss" scoped>
$colorz: (
    blue: #1100BC,
    purple: #B893C6,
    lightblue: #6E98D2,
    darkpurple: #53275E,
    white:#ffffff,
 );
#les-title {
color: map-get($colorz , blue );
}
.btn {
    background-color: rgba(184, 147, 198, 0.600);
 }
 #card-text {
 color: rgb(83, 39, 94);
}
#card-desc {
  color: rgba(16, 0, 188, 0.616);
}
a {
text-decoration: none!important;
}
#back {
  background-color: #ffffff00;
}
#line {
  line-height: 8px;
}
i {
  color:rgba(184, 147, 198);
  cursor: pointer;
}
i:hover {
   color: #1100BC;
   cursor: pointer;
}
.btn {
    background-color: rgba(184, 147, 198, 0.600);
 }
 .btn:hover {
     background-color: rgba(16, 0, 188, 0.5);
 }
 #btn:hover {
   background-color: rgba(184, 147, 198, 0.4);
   color: #1100BC;
 }
 .cancel {
      background-color: #1100BC;
 }
.cancel:hover {
     background-color: rgba(184, 147, 198, 0.4);
}
#card-desc {
  color: rgba(16, 0, 188, 0.616);
}
</style>
    