import React from 'react';
import PostList from './PostList';

class App extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: '#e9e9e6', padding: '40px 40px' }}>
        <PostList />
      </div>
    );
  }
}

export default App;
