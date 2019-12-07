import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        //call our action creator fetchPosts 
        //after component renders for the first time, it will fetchPosts 
        this.props.fetchPosts();
    }

    render() {
        return (
            <div >
                Post List
            </div>
        );
    }
}

export default connect(
    null, 
    { fetchPosts }
)(PostList);