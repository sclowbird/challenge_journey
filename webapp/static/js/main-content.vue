<template>
    <div class="main-content">
        <h1> Challenge Journey</h1>
        <h2> How many brave souls participate? </h2>

        <form id="signup-form" @submit.prevent="processForm" v-for="(item, index) in participants" :key="index" v-on:input="checkEmptyField">
           <!-- <p> {{ index }} </p> -->
            <input v-if="index == inputFields" type="text"  name="participants" class="input" v-bind:id="`${index}`" v-on:input="newPlayer">
            <input v-else type="text"  name="participants" class="input" v-bind:id="`test-${index}`">
            <!-- <input type="text" class="input" name="participants" v-model="participants.name" v-on:input="newPlayer"> -->
        </form>
        <input type="submit" value="Submit">

            
            
        
             
    </div>
</template>

<script>
    export default {
        name: "main-content",
        data: () => ({
            //keeps track of the number of names currently entered
            editIndex: null,
            //represents the number of created input fields
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

                //third attribute of inputId is: v-bind:id="`${index}`"
                let index = inputId.attributes[3].value;
         
                if(index == this.editIndex) {
                    this.participants.push({ name: '' })
                    this.inputFields += 1
                }
                
            },

            // remove input field if it is empty
            checkEmptyField: function() {
                let secondToLastInput = document.getElementsByClassName("INPUT")[this.inputFields - 1].value;

                //check if input field is empty
                if(secondToLastInput === "") {
                    //console.log(`Field ${this.inputFields} is empty.`)
                    this.participants.splice(this.inputFields - 1, 1);
                    this.inputFields -=1;
                } 
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