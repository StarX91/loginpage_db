import React, { useEffect, useState } from "react";
import Navbar from "../../../components/ServicesNavbar";
import { useNavigate } from "react-router-dom";
import { supabase } from '../../../supabaseclient';

function EditProfile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    username: '',
    dateOfBirth: '',
    pilotLicense: '',
    phoneNumber: '',
    profileImg: ''
  });

  const fetchUserProfile = async () => {
    try {
      // Get uid from local storage
      const uid = localStorage.getItem('uid');
      if (!uid) {
        throw new Error('No user UID found in local storage.');
      }

      // Fetch user profile from Supabase
      const { data, error } = await supabase
        .from('profile')
        .select('*')
        .eq('uid', uid)
        .single();
  
      if (error) {
        console.error('Error fetching user profile:', error);
        alert('Failed to fetch user profile. Please try again later.');
      } else {
        setProfile({
          username: data.username || '',
          dateOfBirth: data.date_of_birth || '',
          pilotLicense: data.pilot_license || '',
          phoneNumber: data.phone_number || '',
          profileImg: data.profile_img || ''
        });
      }
    } catch (error) {
      console.error('Error getting user profile:', error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const back = () => {
    navigate("/services");
  };

  return (
    <div className={`w-full h-screen bg-black`}>
      <Navbar />
      <div className="h-[calc(100%-48px)] w-full p-4 flex-col">
        <div className="flex justify-center mb-2">
          <button className={`p-8 rounded-full transition bg-neutral-900 hover:bg-neutral-800 duration-300`}>
            <img
              src={profile.profileImg || 'default-image-url'}
              alt="Profile"
              className="rounded-full w-full h-full"
            />
          </button>
        </div>
        <div className="flex justify-center">
          <button className={`text-xs text-center font-semibold transition text-neutral-600 hover:text-neutral-500 duration-200`}>
            Change Profile Picture
          </button>
        </div>
        <form>
          <div className="flex justify-center">
            <div className="flex-col flex justify-center px-20 py-4 rounded-lg">
              <div className={`text-center font-bold text-xl my-3 transition text-neutral-300 duration-200`}>
                Personal Information
              </div>
              <div className={`m-1 border-solid border-[2px] border-neutral-800 pl-3 pr-20 py-1 rounded-lg text-neutral-300 hover:bg-neutral-900 hover:text-neutral-200`}>
                <div className="font-semibold text-sm">Name</div>
                <input
                  readOnly
                  value={profile.username}
                  className={`px-0 text-sm font-semibold bg-transparent rounded-none placeholder-neutral-500`}
                />
              </div>
              <div className={`m-1 border-solid border-[2px] border-neutral-800 pl-3 pr-20 py-1 rounded-lg text-neutral-300 hover:bg-neutral-900 hover:text-neutral-200`}>
                <div className="font-semibold text-sm">Date of Birth</div>
                <input
                  readOnly
                  value={profile.dateOfBirth}
                  className={`px-0 text-sm font-semibold bg-transparent rounded-none placeholder-neutral-500`}
                />
              </div>
              <div className={`m-1 border-solid border-[2px] border-neutral-800 pl-3 pr-20 py-1 rounded-lg text-neutral-300 hover:bg-neutral-900 hover:text-neutral-200`}>
                <div className="font-semibold text-sm">Pilot License</div>
                <input
                  readOnly
                  value={profile.pilotLicense}
                  className={`px-0 text-sm font-semibold bg-transparent rounded-none placeholder-neutral-500`}
                />
              </div>
              <div className={`m-1 border-solid border-[2px] border-neutral-800 pl-3 pr-20 py-1 rounded-lg text-neutral-300 hover:bg-neutral-900 hover:text-neutral-200`}>
                <div className="font-semibold text-sm">Phone Number</div>
                <input
                  readOnly
                  value={profile.phoneNumber}
                  className={`px-0 text-sm font-semibold bg-transparent rounded-none placeholder-neutral-500`}
                />
              </div>
              <div className="flex justify-evenly my-2">
                <button
                  onClick={back}
                  className={`px-12 py-1 rounded-sm font-semibold transition bg-neutral-300 hover:bg-white duration-200`}
                >
                  Back
                </button>
                <button className={`px-12 py-1 rounded-sm font-semibold transition bg-neutral-300 hover:bg-white duration-200`}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
