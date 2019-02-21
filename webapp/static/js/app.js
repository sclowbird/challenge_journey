import Vue from 'vue';
import MainContent from './main-content';

let MainComponent = Vue.extend(MainContent);

new MainComponent().$mount("#mainContent");


//name of component is "main-content":
/*
new MainComponent({
    el: '#mainContent',
    render: h => h(MainContent)

})

*/