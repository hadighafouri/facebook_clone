import React, {useEffect, useState} from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from '../firebase';

const Feed = () => {
  const [posts, setPosts] = useState ([]);
  console.log ('🚀 ~ file: Feed.jsx ~ line 10 ~ Feed ~ posts', posts);
  useEffect (() => {
    db.collection ('posts').orderBy ('timestamp').onSnapshot (snapshot => {
      setPosts (
        snapshot.docs.map (doc => {
          return {
            id: doc.id,
            data: doc.data (),
          };
        })
      );
    });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map (post => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          image={post.data.image}
          userName={post.data.username}
          timestamp={
            post.data.timestamp &&
              new Date (post.data.timestamp.toDate ()).toUTCString ()
          }
          message={post.data.message}
        />
      ))}

    </div>
  );
};

export default Feed;
