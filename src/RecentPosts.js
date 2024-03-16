// RecentPosts.js
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

function RecentPosts({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch recent posts for the user from backend
    // Example: Fetch posts using Axios or fetch API
    // Update state with fetched posts
  }, [userId]);

  return (
    <div>
      <Typography variant="h5">Recent Posts</Typography>
      {posts.map((post) => (
        <div key={post.id}>
          <Typography variant="subtitle1">{post.title}</Typography>
          <Typography variant="body2">{post.body}</Typography>
        </div>
      ))}
    </div>
  );
}

export default RecentPosts;
