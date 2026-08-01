import React, { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StudentCard from "../components/StudentCard";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await api.get("/students");
      setStudents(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to load students.");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/students/${id}`);

      setStudents(
        students.filter((student) => student.id !== id)
      );
    } catch (err) {
      console.error(err);
      alert("Failed to delete student.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h1 className="mb-4">Students</h1>

        {loading && <p>Loading students...</p>}

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        {!loading && students.length === 0 && (
          <p>No students found.</p>
        )}

        <div className="row">
          {students.map((student) => (
            <div
              className="col-md-4 mb-4"
              key={student.id}
            >
              <StudentCard
                student={student}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Students;