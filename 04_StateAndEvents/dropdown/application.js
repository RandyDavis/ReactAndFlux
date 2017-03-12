var Badge = React.createClass({displayName: "Badge",
    render: function() {
        return(
            React.createElement("button", {className: "btn btn-primary", type: "button"}, 
                this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
            )
        )
    }
});
var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function() {
        return(
            React.createElement("div", {className: "col-sm-6 col-md-4"}, 
                React.createElement("div", {className: "thumbnail"}, 
                    React.createElement("img", {src: this.props.imageUrl}), 
                    React.createElement("div", {className: "caption"}, 
                        React.createElement("h3", null, this.props.header), 
                        React.createElement("p", null, this.props.description), 
                        React.createElement("p", null, 
                            React.createElement(Badge, {title: this.props.title, number: this.props.number})
                        )
                    )
                )
            )
        )
    }
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
    render: function () {
        var list = this.props.thumbnailData.map(function (thumbnailProps, index) { // needed to add index parameter to use as a key as React requires keys for lists
            return React.createElement(Thumbnail, React.__spread({key: index},  thumbnailProps)) // "..." syntax is a React shortcut to just pass all props of passed in object
        });

        return(
            React.createElement("div", null, 
                list
            )
        )
    }
});
// "options" will hold our props and will be passed as second argument when creating the React Element
var options = {
    thumbnailData: [
        {
            title: "Show Courses",
            number: 12,
            imageUrl: 'https://formatjs.io/img/react.svg',
            header: "Learn React",
            description: "React is a fantastic new library for making fast, dynamic pages. It's was created by FaceBook and is super fast and fun to use!"
        },
        {
            title: "Show Courses",
            number: 6,
            imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400',
            header: "Learn Gulp",
            description: "Gulp will speed up your development workflow.  Gulp is super popular and has overtaken Grunt as the taskrunner of choice in many circles."
        },
    ]
};

// ask react to render this class
var element = React.createElement(ThumbnailList, options);

// when we ask react to render this class, we will tell it
// where to place the rendered element in the DOM
ReactDOM.render(element, document.querySelector(".container"));