<template>
    <div class="main-content">
        <h1> Challenge Journey</h1>
        <h2> How many brave souls participate? </h2>

        <form id="signup-form" @submit.prevent="processForm" v-for="(item, index) in participants" :key="index">
           <!-- <p> {{ item.name }}</p> -->
            <input v-if="index == inputFields" type="text"  name="participants" class="input" v-bind:id="`${index}`" v-on:input="newPlayer">
            <input v-else type="text"  name="participants" class="input" v-bind:id="`${index}`">

            <!-- <input type="text" class="input" name="participants" v-model="participants.name" v-on:input="newPlayer"> -->

            
            <input type="submit" value="Submit">
        </form>
        
             
    </div>
</template>

<script>
    export default {
        name: "main-content",
        data: () => ({
            //keeps track of the number of names currently entered
            editIndex: null,
            inputFields: 0,
            //originalData: null, 
            participants: [
                { name: 'Enter name...'  }
            ]
        }),

        methods: {
            processForm: function() {
                console.log({ participants: this.participants });

                          
            },

            newPlayer: function() {                
                this.editIndex = this.participants.length - 1 

                    
                let inputId = document.getElementsByClassName("INPUT")[this.inputFields];
                let index = inputId.attributes[3].value;

                console.log("this.editIndex: " + this.editIndex)
                console.log("this.inputFields: " + this.inputFields)


                
                if(index == this.editIndex) {
                    console.log("PUSHED")
                    this.participants.push({ name: '' })
                    this.inputFields += 1
                    console.log("PUSHED this.inputFields: " + this.inputFields)
                }
                

            },

            removePlayer: function() {

            },

            numberOfPlayers: function() {
                console.log("test");
                let elements = document.getElementsByTagName("input")

                
                /*
                let attributeValue = "democlass-" + index;
                document.getElementsByTagName("input")[index].setAttribute("class", "democlass");  
                */  
            }

            
        }
    

    }

</script>

<style scoped>
    /*
     * Some styles so that our first component
     * looks somewhat special
    */

    .democlass {
        color: red;
    }

    .main-content {
        margin: 0 auto;
        font-family: sans-serif;
        background-color: #ccf7e2;
        padding: 10px;
        border-radius: 5px;
        max-width: 500px;
    }


</style>