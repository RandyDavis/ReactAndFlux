var React = require('react');
var Dropdown = require('./dropdown');

// "options" will hold our props and will be passed as second argument when creating the React Element
var options = {
    title: 'Choose a dessert', // what should show up on the button to open/close the dropdown
    items: [
        'Apple Pie',
        'Peach Cobbler',
        'Coconut Cream Pie'
    ]
};

// ask react to render this class
var element = React.createElement(Dropdown, options);

// when we ask react to render this class, we will tell it
// where to place the rendered element in the DOM
ReactDOM.render(element, document.querySelector(".container"));