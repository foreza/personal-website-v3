// Register the nav-bar component

 Vue.component('nav-bar-item', {
  props: ['navitem'],
  template: '<li class="navigation-item"><a :href=navitem.url>{{ navitem.text }}</a></li>'
})


var nav = new Vue(
  
  {
  el: '#navigation',
  data: {
    navList: [
      { id: 0, text: 'About', url: '#'},
      { id: 1, text: 'Projects', url: '#'},
      { id: 2, text: 'Resume', url: '#'},
      { id: 3, text: 'Contact', url: '#'}
    ]
  }
}


)
