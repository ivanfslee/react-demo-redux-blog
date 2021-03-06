import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        //call our action creator fetchPosts 
        //after component renders for the first time, it will fetchPosts 
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            );
        });
    }


    render() {
        console.log('aloha!', this.props.posts);
        return (
            <div className="ui relaxed divided list" >
                {this.renderList()}
            </div>
        );
    }
}

//state is from redux store and it contains 'posts' prop from reducers index.js file
const mapStateToProps = (state) => { 
    return { posts: state.posts };
}

export default connect(
    mapStateToProps, 
    { fetchPostsAndUsers }
)(PostList);