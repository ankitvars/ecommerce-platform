import Navbar from "@/components/Navbar";
import UserProfile from "@/components/UserProfile";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
  };
  return (
    <>
      <Navbar />
      <UserProfile user={user} />
    </>
  );
};

export default Profile;
