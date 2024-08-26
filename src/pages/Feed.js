import React from 'react';
import Post from '../components/Post';

const Feed = () => {
  return (
    <div className="feed">
      <h2>Feed</h2>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
