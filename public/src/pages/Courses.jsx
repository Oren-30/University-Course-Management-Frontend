import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import api from "../services/api";

function Courses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);