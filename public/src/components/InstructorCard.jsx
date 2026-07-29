import React from "react";

function InstructorCard({ instructor, onEdit, onDelete }) {
  return (
    <div className="card shadow-sm mb-4 h-100">

      <div className="card-body">

        <div className="text-center mb-3">

          <img
            src="https://via.placeholder.com/120"
            alt="Instructor"
            className="rounded-circle"
            width="120"
            height="120"
          />

        </div>