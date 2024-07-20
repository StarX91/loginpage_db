import React, { useContext } from 'react';
import { ProfileContext } from '../../context/ProfileContext';

const Profile = () => {
  const { profileImg } = useContext(ProfileContext);

  return (
    <div>
      {profileImg ? (
        <div>
          <h3 className='text-white'>Google Profile Image:</h3>
          <img src={profileImg} alt="Google Profile" className='rounded-full w-24 h-24' />
        </div>
      ) : (
        <p className='text-white'>No profile image available.</p>
      )}
    </div>
  );
};

export default Profile;
