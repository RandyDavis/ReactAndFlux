var ThumbnailList = React.createClass({
    render: function () {
        var list = this.props.thumbnailData.map(function (thumbnailProps, index) { // needed to add index parameter to use as a key as React requires keys for lists
            return <Thumbnail key={index} {...thumbnailProps} /> // "..." syntax is a React shortcut to just pass all props of passed in object
        });

        return(
            <div>
                {list}
            </div>
        )
    }
});

module.exports = ThumbnailList;