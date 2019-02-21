<template>
    <div class="main-content">
        <h1> This is your first component in Vue </h1>
        <h2> Yeah. I can do all of this in plain JavaScript!</h2>

        <input type="text" class="input" name="name" v-model="name">
        <input type="email" class="input" name="email" v-model="email">
    </div>
</template>

<script>
    export default {
        name: "main-content",
        data: () => ({
            // reactive data property of the component.
            name: '',
            email: ''
        }),
    }

    //https://scotch.io/courses/getting-started-with-vue/processing-a-form-with-vue
    //hier weitermachen mit form submitten
</script>

<style scoped>
    /*
     * Some styles so that our first component
     * looks somewhat special
    */
    .main-content {
        margin: 0 auto;
        font-family: sans-serif;
        background-color: #ccf7e2;
        padding: 10px;
        border-radius: 5px;
        max-width: 500px;
    }
</style>