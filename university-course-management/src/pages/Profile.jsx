import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
function Profile() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">

          <div className="col-md-2 bg-light min-vh-100">
            <Sidebar />
          </div>

          <div className="col-md-10 p-4">

            <h2 className="mb-4">
              My Profile
            </h2>

            <div className="card shadow">

              <div className="card-body">

                <div className="text-center mb-4">

                  <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="rounded-circle mb-3"
                  />

                  <h3>
                    {user?.first_name} {user?.last_name}
                  </h3>

                  <p className="text-muted">
                    {user?.role}
                  </p>

                </div>

                <hr />

                <div className="row">

                  <div className="col-md-6">

                    <h5>First Name</h5>
                    <p>{user?.first_name}</p>

                    <h5>Email</h5>
                    <p>{user?.email}</p>

                  </div>

                  <div className="col-md-6">

                    <h5>Last Name</h5>
                    <p>{user?.last_name}</p>

                    <h5>Role</h5>
                    <p>{user?.role}</p>

                  </div>

                </div>

                <div className="mt-4">

                  <button className="btn btn-primary me-2">
                    Edit Profile
                  </button>

                  <button className="btn btn-warning">
                    Change Password
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

