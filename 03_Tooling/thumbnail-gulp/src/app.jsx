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