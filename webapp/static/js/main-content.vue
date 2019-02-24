<template>
    <div class="main-content">
        <h1> Challenge Journey</h1>
        <h2> How many brave souls participate? </h2>

        <form id="signup-form" @submit.prevent="processForm" v-for="(item, index) in participants" :key="index">
           <p> {{ index + 1 }}</p>
           <!-- <input type="text" class="input" name="participants" v-model="participants" v-on:input="newPlayer"> -->
           <input type="text" class="input" name="participants" v-model="participants.name">
            
            <input type="submit" value="Submit">
        </form>
        
             
    </div>
</template>

<script>
    export default {
        name: "main-content",
        data: () => ({
            //editIndex: null,
            //originalData: null,
            // reactive data property of the component.
            participants: [
                { name: 'Enter name...'  }
            ]
        }),

        methods: {
            processForm: function() {
                console.log({ participants: this.participants });

                          
            },

            newPlayer: function() {
                let inputForms = document.createElement("INPUT");
                document.getElementById("signup-form").appendChild(inputForms);  

                

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