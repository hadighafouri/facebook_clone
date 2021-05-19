import {Avatar} from '@material-ui/core';
import React, {useState} from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './MessageSender.css';
import {useStateValue} from '../contexAPI/StateProvider';
import db from '../firebase';
import firebase from 'firebase';

const MessageSender = () => {
  const [{user}, dispatch] = useStateValue ();
  const [input, setInput] = useState ('');
  const [imgURL, setImgURL] = useState ('');

  const handleSubmit = e => {
    e.preventDefault ();

    db.collection ('posts').add ({
      message: input,
      profilePic: user.photoURL,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp (),
      image: imgURL,
    });

    setImgURL ('');
    setInput ('');
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={e => setInput (e.target.value)}
            className="messageSender__input"
            type="text"
            placeholder={`What is on your mind. ${user.displayName} ?`}
          />
          <input
            type="text"
            placeholder="Image URL (Optional)"
            value={imgURL}
            onChange={e => setImgURL (e.target.value)}
          />
          <button
            className="messageSender__botton"
            onClick={handleSubmit}
            type="submit"
          >
            Hidden
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{color: 'red'}} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{color: 'green'}} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{color: 'orange'}} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>

    </div>
  );
};

export default MessageSender;
