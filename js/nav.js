// Register the nav-bar component


$(document).ready(function(){
  $('.sidenav').sidenav();
});


 Vue.component('nav-bar-item', {
  props: ['navitem'],
  template: '<li v-bind:class="[{ active: navitem.isActive }]"><a :href=navitem.url>{{ navitem.text }}</a></li>'
})


var nav = new Vue(
  
  {
  el: '#navigation',
  data: {
    navList: [
      { id: 0, text: 'About', url: 'about.html', isActive: false },
      { id: 1, text: 'My Work', url: 'mywork.html', isActive: false },
      { id: 2, text: 'Resume', url: 'http://jasonthechiu.com/resume/resume.pdf', isActive: false },
      { id: 3, text: 'Contact', url: 'contact.html', isActive: false }
    ]
  }
}


)
