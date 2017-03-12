(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/randy/Desktop/js-practice/udemy/reactAndFlux/03_Tooling/thumbnail-gulp/src/app.jsx":[function(require,module,exports){
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

},{}]},{},["/Users/randy/Desktop/js-practice/udemy/reactAndFlux/03_Tooling/thumbnail-gulp/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcmFuZHkvRGVza3RvcC9qcy1wcmFjdGljZS91ZGVteS9yZWFjdEFuZEZsdXgvMDNfVG9vbGluZy90aHVtYm5haWwtZ3VscC9zcmMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLHNHQUFzRztBQUN0RyxJQUFJLE9BQU8sR0FBRztJQUNWLGFBQWEsRUFBRTtRQUNYO1lBQ0ksS0FBSyxFQUFFLGNBQWM7WUFDckIsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsbUNBQW1DO1lBQzdDLE1BQU0sRUFBRSxhQUFhO1lBQ3JCLFdBQVcsRUFBRSxpSUFBaUk7U0FDako7UUFDRDtZQUNJLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsUUFBUSxFQUFFLDREQUE0RDtZQUN0RSxNQUFNLEVBQUUsWUFBWTtZQUNwQixXQUFXLEVBQUUsMklBQTJJO1NBQzNKO0tBQ0o7QUFDTCxDQUFDLENBQUM7O0FBRUYsaUNBQWlDO0FBQ2pDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUUxRCwwREFBMEQ7QUFDMUQsaURBQWlEO0FBQ2pELFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gXCJvcHRpb25zXCIgd2lsbCBob2xkIG91ciBwcm9wcyBhbmQgd2lsbCBiZSBwYXNzZWQgYXMgc2Vjb25kIGFyZ3VtZW50IHdoZW4gY3JlYXRpbmcgdGhlIFJlYWN0IEVsZW1lbnRcbnZhciBvcHRpb25zID0ge1xuICAgIHRodW1ibmFpbERhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiU2hvdyBDb3Vyc2VzXCIsXG4gICAgICAgICAgICBudW1iZXI6IDEyLFxuICAgICAgICAgICAgaW1hZ2VVcmw6ICdodHRwczovL2Zvcm1hdGpzLmlvL2ltZy9yZWFjdC5zdmcnLFxuICAgICAgICAgICAgaGVhZGVyOiBcIkxlYXJuIFJlYWN0XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSZWFjdCBpcyBhIGZhbnRhc3RpYyBuZXcgbGlicmFyeSBmb3IgbWFraW5nIGZhc3QsIGR5bmFtaWMgcGFnZXMuIEl0J3Mgd2FzIGNyZWF0ZWQgYnkgRmFjZUJvb2sgYW5kIGlzIHN1cGVyIGZhc3QgYW5kIGZ1biB0byB1c2UhXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiU2hvdyBDb3Vyc2VzXCIsXG4gICAgICAgICAgICBudW1iZXI6IDYsXG4gICAgICAgICAgICBpbWFnZVVybDogJ2h0dHBzOi8vYXZhdGFyczAuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjIwMDYyND92PTMmcz00MDAnLFxuICAgICAgICAgICAgaGVhZGVyOiBcIkxlYXJuIEd1bHBcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkd1bHAgd2lsbCBzcGVlZCB1cCB5b3VyIGRldmVsb3BtZW50IHdvcmtmbG93LiAgR3VscCBpcyBzdXBlciBwb3B1bGFyIGFuZCBoYXMgb3ZlcnRha2VuIEdydW50IGFzIHRoZSB0YXNrcnVubmVyIG9mIGNob2ljZSBpbiBtYW55IGNpcmNsZXMuXCJcbiAgICAgICAgfSxcbiAgICBdXG59O1xuXG4vLyBhc2sgcmVhY3QgdG8gcmVuZGVyIHRoaXMgY2xhc3NcbnZhciBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChUaHVtYm5haWxMaXN0LCBvcHRpb25zKTtcblxuLy8gd2hlbiB3ZSBhc2sgcmVhY3QgdG8gcmVuZGVyIHRoaXMgY2xhc3MsIHdlIHdpbGwgdGVsbCBpdFxuLy8gd2hlcmUgdG8gcGxhY2UgdGhlIHJlbmRlcmVkIGVsZW1lbnQgaW4gdGhlIERPTVxuUmVhY3RET00ucmVuZGVyKGVsZW1lbnQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpKTsiXX0=
