'use strict';

var cookie = {
  name: 'Cookie',
  hairColor: 'brown',
  sheds: true,
  age: 10,
  weight: '100lbs',
  type: 'dog'
  render: function(){
    // select dom element
    var parent = document.getElementById('id list time');
    // create dom li
    var listItem = document.createElement('li');
    // give content
    listItem.textContent = `name: ${this.name}`;
    // apend to dom
    parent.appendChild(listItem);
  }
}
cookie.render();

// the only things that shoud change are the id selectors


var snoke = {
  name: 'snoke',
  hairColor: 'orange',
  sheds: true,
  type: 'cat',
}

// // select elemnt in the dom to append my new element to 
// var parent = document.getElementById('cookie');
// // the create new element
// var listItem = document.createElement('li');
// // fill with content
// listItem.textContent = 'I R Baboon';
// // append to dom
// parent.appenChild(listItem);


