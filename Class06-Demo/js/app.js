'use strict';

// create object literals of each of my animals
// display information about each of my animals to the DOM using only javaScript - displaying dynamically

var cookie = {
  name: 'Cookie',
  hairColor: 'brown',
  sheds: true,
  type: 'dog',
  age: 10,
  weight: '100lbs',
  render: function(){
    // select a DOM element
    var parent = document.getElementById('cookie');

    // create a DOM li
    var listItem = document.createElement('li');

    // give it conent
    listItem.textContent = `name: ${this.name}`;

    // append it to the DOM
    parent.appendChild(listItem);
  }
}

cookie.render();

var tangerine = {
  name: 'Tangerine',
  hairColor: 'orange',
  sheds: true,
  type: 'cat',
  age: 8,
  weight: '12lbs',
  render: function(){
    // select a DOM element
    var parent = document.getElementById('tangerine');

    // create a DOM li
    var listItem = document.createElement('li');

    // give it conent
    listItem.textContent = `name: ${this.name}`;

    // append it to the DOM
    parent.appendChild(listItem);
  }
}

tangerine.render();

var malaki = {
  name: 'Malki',
  hairColor: 'orange',
  sheds: false,
  type: 'cat',
  age: 5,
  weight: '5lbs',
  render: function(){
    // select a DOM element
    var parent = document.getElementById('malaki');

    // create a DOM li
    var listItem = document.createElement('li');

    // give it conent
    listItem.textContent = `name: ${this.name}`;

    // append it to the DOM
    parent.appendChild(listItem);
  }
}

malaki.render();

// // I want to select an element in the DOM to append my new element to
// var parent = document.getElementById('malaki');
// // I then want to create a new element
// var listItem = document.createElement('li');
// // fill that new element with content
// listItem.textContent = 'I am text content!!!! Woot!!!!!';
// // append it to the DOM
// parent.appendChild(listItem);

// var paragraph = document.getElementById('paragraph');
// paragraph.textContent = 'this is the paragraph tag'