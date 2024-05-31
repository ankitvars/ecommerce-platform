import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4 text-center">User Profile</h1>
      <div className="bg-white shadow p-4 rounded-lg flex items-center justify-between">
        <div>
          <img
            src="https://images.unsplash.com/photo-1527430253228-e93688616381?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhciUyMHJvYm90fGVufDB8fDB8fHww" // Assuming user.avatarUrl is the URL of the user's avatar
            alt="User Avatar"
            className="w-44 h-44 rounded-full mr-4"
          />
          <div className="mt-6">
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Edit Profile
        </button> */}
      </div>
    </div>
  );
};

export default UserProfile;
