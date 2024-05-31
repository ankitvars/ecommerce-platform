import React from "react";

const UserProfile = ({user}) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="bg-white shadow p-4 rounded-lg">
        <p className="text-lg font-semibold">{user.name}</p>
        <p className="text-gray-600">{user.email}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
