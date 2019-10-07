import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';

import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    // this.props.fetchPosts(); // fetches posts via dispatcing action
    this.props.fetchPostsAndUsers();
  }

  // render list of posts from global redux state posts
  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div
          className="item"
          key={post.id}
          style={{
            margin: '30px 0',
            padding: '15px 0',
            borderBottom: '1px solid #aaa'
          }}
        >
          <i className="icon-user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    // log posts that were fetched via accessing global redux state
    console.log('Posts from jsonAPI:', this.props.posts);

    return (
      <div
        style={{
          fontSize: '16px',
          padding: '24px'
        }}
      >
        {this.renderList()}
      </div>
    );
  }
}

// this has access to entire state object from redux
const mapStateToProps = (state) => {
  return {
    // accesses our state's posts object who's name was decided in combineReducers file
    // i.e.: posts: postsReducer

    // local prop name for that state: accessing the actual state object
    posts: state.posts
    // now there is access to this state via this.prop.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
