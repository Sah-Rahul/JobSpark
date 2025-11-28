import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getMe, updateProfile } from "@/Api/authApi";
import { toast } from "react-hot-toast";

type UserProfile = {
  _id: string;
  fullName: string;
  userName: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  profile: string;
  role: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
};

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getMe();
        setProfile(res.data);
        setFormData({
          fullName: res.data.fullName || "",
          userName: res.data.userName || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          location: res.data.location || "",
          bio: res.data.bio || "",
        });
      } catch (err) {
        console.error("Failed to fetch profile", err);
        toast.error("Failed to fetch profile");
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      if (!profile?._id) return;

      const updated = await updateProfile(profile._id, formData);

      setProfile({ ...profile, ...updated.data });
      toast.success("Profile updated successfully!");
      setEditMode(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
    }
  };

  if (!profile) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto py-8">
      <Card>
        <CardContent>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Employer Profile</h2>
            <Button variant="outline" onClick={() => setEditMode(!editMode)}>
              {editMode ? "Cancel" : "Edit Profile"}
            </Button>
          </div>

          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block mb-1 font-semibold">Full Name</label>
              <Input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>

            {/* Username */}
            <div>
              <label className="block mb-1 font-semibold">Username</label>
              <Input
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 font-semibold">Phone</label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>

            {/* Location */}
            <div>
              <label className="block mb-1 font-semibold">Location</label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>

            {/* Bio */}
            <div>
              <label className="block mb-1 font-semibold">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                disabled={!editMode}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Save Button */}
            {editMode && (
              <Button
                onClick={handleSave}
                className="mt-4 bg-teal-500 hover:bg-teal-600 text-white"
              >
                Save Changes
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
