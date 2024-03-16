// ProfilePhoto.js
import React from 'react';
import { Avatar } from '@mui/material';

function ProfilePhoto({ photoUrl }) {
  return <Avatar src={photoUrl} alt="Profile Photo" />;
}

export default ProfilePhoto;
