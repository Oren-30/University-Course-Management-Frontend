import React, { useEffect, useState } from "react";
import api from "../services/api";

function Profile() {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {

      const response = await api.get("/auth/profile");

      setUser(response.data);

    } catch (error) {

      console.error("Error loading profile", error);

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <h4>Loading profile...</h4>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">
          Unable to load profile.
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">

      <h2>My Profile</h2>

      <div className="card shadow mt-3">

        <div className="card-body">

          <table className="table">

            <tbody>

              <tr>
                <th>First Name</th>
                <td>{user.first_name}</td>
              </tr>

              <tr>
                <th>Last Name</th>
                <td>{user.last_name}</td>
              </tr>

              <tr>
                <th>Email</th>
                <td>{user.email}</td>
              </tr>

              <tr>
                <th>Role</th>
                <td className="text-capitalize">
                  {user.role}
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Profile;