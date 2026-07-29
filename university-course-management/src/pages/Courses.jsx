import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import api from "../services/api";

function Courses() {

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchCourses();
  }, []);


  const fetchCourses = async () => {

    try {

      const response = await api.get("/courses");

      setCourses(response.data);

    } catch (error) {

      console.log("Error fetching courses:", error);

    } finally {

      setLoading(false);

    }

  };


  const deleteCourse = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );


    if (!confirmDelete) return;


    try {

      await api.delete(`/courses/${id}`);

      setCourses(
        courses.filter((course) => course.id !== id)
      );

    } catch (error) {

      console.log("Delete error:", error);

    }

  };


  const filteredCourses = courses.filter((course) =>
    course.course_name
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (

    <>

      <Navbar />


      <div className="container-fluid">

        <div className="row">


          <div className="col-md-2 bg-light min-vh-100">

            <Sidebar />

          </div>



          <div className="col-md-10 p-4">


            <div className="d-flex justify-content-between align-items-center mb-4">


              <h2>
                CMS University Courses
              </h2>


              <button className="btn btn-success">
                Add Course
              </button>


            </div>



            <input

              type="text"

              className="form-control mb-3"

              placeholder="Search Course..."

              value={search}

              onChange={(e) => setSearch(e.target.value)}

            />



            {loading ? (

              <div className="text-center">

                <h4>
                  Loading Courses...
                </h4>

              </div>

            ) : (


              <div className="table-responsive">


                <table className="table table-bordered table-hover">


                  <thead className="table-dark">

                    <tr>

                      <th>ID</th>

                      <th>Course Name</th>

                      <th>Department</th>

                      <th>Credits</th>

                      <th>Instructor</th>

                      <th>Actions</th>

                    </tr>

                  </thead>



                  <tbody>


                    {filteredCourses.length > 0 ? (

                      filteredCourses.map((course) => (

                        <tr key={course.id}>


                          <td>
                            {course.id}
                          </td>


                          <td>
                            {course.course_name}
                          </td>


                          <td>
                            {course.department}
                          </td>


                          <td>
                            {course.credits}
                          </td>


                          <td>
                            {course.instructor_name}
                          </td>


                          <td>


                            <button
                              className="btn btn-warning btn-sm me-2"
                            >
                              Edit
                            </button>



                            <button

                              className="btn btn-danger btn-sm"

                              onClick={() =>
                                deleteCourse(course.id)
                              }

                            >
                              Delete
                            </button>


                          </td>


                        </tr>

                      ))

                    ) : (


                      <tr>

                        <td
                          colSpan="6"
                          className="text-center"
                        >
                          No Courses Found
                        </td>

                      </tr>


                    )}


                  </tbody>


                </table>


              </div>


            )}


          </div>


        </div>


      </div>


      <Footer />


    </>

  );

}


export default Courses;