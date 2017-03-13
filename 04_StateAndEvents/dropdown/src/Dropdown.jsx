//  We need to show a button and a list
// This component should know when to show the list
// based on when the user clicks on a button

var React = require('react');
var Button = require('./Button');
var ListItem = require('./List-Item');
// var List = require('./list');

var Dropdown = React.createClass({
   handleClick: function () {
        console.log('hello from dropdown');
   },
   render: function () {
       var list = this.props.items.map(function (item, index) {
           return <ListItem key={index} item={item} />;
       });

       return(
           <div className="dropdown">
                <Button
                    whenClicked={this.handleClick}
                    className="btn-default"
                    title={this.props.title}
                    subTitleClassName="caret"
                />
               <ul>
                   {list}
               </ul>
           </div>
       )
   }
});

module.exports = Dropdown;