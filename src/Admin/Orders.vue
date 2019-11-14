<template>
    <v-container>
    <v-row no-gutters>
      <v-col
        class="ml-12"
       cols="12"
        sm="6"
        md="6"
      >
        <v-card
          class="pa-4"
          flat
          tile
           color="#ffffff60"
        >
          <p class="mb-6 font-weight-light text-center headline darkpurple--text">ORDERS</p>
     
        </v-card>
           <v-card
          class="pa-4"
          flat
          tile
           color="#ffffff60"
        >
           <div class="pa-2">
              <v-row>
                  <v-col cols="12" md="2" class="pa-2">
                       <p class='darkpurple--text'>INFO:</p>
                  </v-col>
                    <v-col cols="12" md="4" class="pa-2">
                     <v-row>
                         <div class="complete">COMPLETED</div>
                         <span class="darkpurple--text font-weight-light mt-1 caption pl-1">Done</span>
                     </v-row>
                      <v-row class="pt-2">
                         <div class="inprogress">IN PROGRESS</div>
                         <span class="darkpurple--text font-weight-light caption mt-1 pl-1">Working on it</span>
                     </v-row>
                      <v-row class="pt-2">
                         <div class="incomplete" id="status_box2">INCOMPLETE</div>
                         <span class="darkpurple--text font-weight-light mt-1 caption pl-1">Not started yet</span>
                     </v-row>
                  </v-col>
                    <v-col cols="12" md="6" class="pa-2">
                        <v-row>
                            <div class="complete">COMPLETED</div> 
                             <div class="inprogress ml-2">IN PROGRESS</div>
                             <div class="incomplete ml-2">INCOMPLETE</div>

                        </v-row>
                        <v-row>
                        <p class="darkpurple--text font-weight-light mt-2 caption pl-1"> <b>Simple click</b> to switch stage: complete => in progress => 
                        <b>Double-click</b> the box to reset to "INCOMPLETE". </p>
                        <span ><i class="fas fa-archive fa-lg ml-1 mr-1"></i> <span class="darkpurple--text font-weight-light mt-2 caption pl-1">Archive to "hide" lessons from orders list.</span> </span>
                        </v-row>
                  </v-col>
              </v-row>
          </div>
          <v-divider class="ma-6"></v-divider>
            <div >
             <v-col cols="12" md="2" class="pa-2">
                       <p class='darkpurple--text'>ORDERS:</p>
                  </v-col>
              <v-simple-table id="back" v-if="basket.length > 0">
        <thead>
          <tr >
            <th align="left" class="caption text-left darkpurple--text" style="width:10%">NR</th>
             <th align="left" class="caption text-left darkpurple--text" style="width:10%">QT</th>
             <th align="left" class="caption text-left darkpurple--text" style="width:20%">Lesson</th>
            <th align="left" class="caption text-left darkpurple--text" style="width:15%">Price</th>
               <th align="left" class="caption text-left darkpurple--text"  style="width:15%">Status</th>
            <th align="right"  class="caption  text-center darkpurple--text"  style="width:15%">Archive</th>
            <th align="right"  class="caption  text-center darkpurple--text"  style="width:15%">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lesson in orderItems " :key="lesson.headline">
            <td  class="body-2 font-weight-light darkpurple--text text-left" > {{lesson.orderNumber}}</td>
            <td class="py-3 body-2 font-weight-light darkpurple--text text-left"> <p v-for="sublesson in lesson.orderLines" :key="sublesson.id" style="margin:0;"> {{ sublesson.quantity }}</p></td>
            <td   class="py-3 body-2 font-weight-light darkpurple--text text-left"> <p v-for="sublesson in lesson.orderLines" :key="sublesson.id"> {{ sublesson.headline }}</p></td>
            <td  class="py-3 body-2 font-weight-light darkpurple--text text-left"> <p v-for="sublesson in lesson.orderLines" :key="sublesson.id"> {{ sublesson.price }}</p></td>
       
            <td>  <div @click="switchStage(lesson.id)" v-bind:class="lesson.status">{{lesson.status}}</div></td>
            <td> <v-btn  @click="addToBasket(lesson)" class="btn font-weight-light" rounded color="white" text>
            <i class="fas fa-archive fa-lg"></i>
              </v-btn> </td>
              <td><v-btn  @click="deleteOrderItem(lesson.id)" class="btn font-weight-light" rounded color="white" text>
            <i id="trash" class="fas fa-trash-alt fa-lg"></i>
              </v-btn></td>
            
          </tr>
        </tbody>
</v-simple-table>
          </div>
     
        </v-card>
      </v-col>
      <v-col
         class="pa-2 ml-12"
       cols="6"
        md="4"
      >
        <v-card
         class="pa-4"
          flat
          tile
          color="#ffffff60"
        >
          <p class="mb-6 font-weight-light text-center headline darkpurple--text">REVENUE</p>
              <div class="pa-2">
              <p class='ml-4 font-weight-light darkpurple--text'>Revenue</p>
          </div>
            <div class="pa-2">
              <p class='ml-4 font-weight-light darkpurple--text'>Completed</p>
          </div>
        </v-card>
         
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { dbOrders } from '../firebase'
    export default {
        data() {
          return {
           basketDump: [],
            show: false,
            messages: 0,   
      }

           },
                  
    beforeCreate() {
          this.$store.dispatch('setOrderItems')
        },
        
     methods: {
      switchStage(id) {
          dbOrders.doc(id).update({status: "complete"})
         .then(() => {

         })
         let selectedOrderItem = this.orderItems
         .filter(lesson => lesson.id === id)[0];

         if(selectedOrderItem.status === "inprogress") {
           dbOrders.doc(id).update({status:"incomplete"})
           .then(()=> {

           })
         } else if (selectedOrderItem.status === "complete") {
           dbOrders.doc(id).update({status:"inprogress"})
           .then(() => {
             
           })
         } else if (selectedOrderItem.status === "complete") {
           dbOrders.doc(id).update({status:"incomplete"})
           .then(() => {
             
           })
         }
       },
       deleteOrderItem(id){
         dbOrders.doc(id).delete().then(() => {
           console.log('Deleted lesson');
         }).catch((error) => {

         })
       },
          addToBasket(lesson){
           /* if(this.basket.find(lessonInArray => lesson.headline == lessonInArray.headline)) {
            lesson = this.basket.find(lessonInArray => lesson.headline === lessonInArray.headline)
            this.increaseQnt(lesson);
           }  else {
           this.basket.push({
             headline: lesson.headline,
             price: lesson.price,
             quantity: 1,
              })
             }*/ 
             this.basketDump.push({
             headline: lesson.headline,
             price: lesson.price,
             quantity: lesson.quantity,
              }),
              this.$store.commit("addBasketLessons", this.basketDump);
              this.basketDump = [];
             },
          increaseQnt(lesson) {
            lesson.quantity++
          },
          decreaseQnt(lesson) {
            lesson.quantity--;
            if(lesson.quantity === 0) {
              this.basket.splice(this.basket.indexOf(lesson), 1)
            }
          }
           },
           computed: {
              orderItems() {
            return this.$store.getters.getOrderItems
          },
             basket() {
              //return this.$store.state.basketLessons
              return this.$store.getters.getBasketLessons
             },
             subTotal() {
               var subCost = 0;
               for(var lessons in this.basket) {
                 var indLesson = this.basket[lessons];
                 subCost += indLesson.quantity * indLesson.price
               }
               return subCost
             },
             total() {
             
               var totalCost = this.subTotal
        
               return totalCost
             },
           },
        

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
.complete {
       width: 80px;
    height: 30px;
    font-size: 11px;
    border-radius: 25px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    cursor: pointer;
}
.inprogress {
    width: 80px;
    height: 30px;
    font-size: 11px;
    border-radius: 25px;
    color: white;;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    cursor: pointer;
}
.incomplete {
    width: 80px;
    height: 30px;
    font-size: 11px;
    border-radius: 25px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    cursor: pointer;
}
i {
    color: map-get($colorz , purple );
}
#trash {
  color: map-get($colorz , darkpurple );
}
</style>