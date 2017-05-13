/* global Vue */

document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      showModal: false,
      races: [
        {name: 'Half-Orc', description: 'Hi, Im a half-orc'}, 
        {name: 'Elf', description: 'Hi, Im an elf'}
      ],
      aignments: [
        {name: 'good', blurb: 'Im good'},
        {name: 'bad', blurb: 'Im bad'}
      ]
    },
    components: {
      modal: {
        template: '#modal-template'
      }
    }
  });
});


