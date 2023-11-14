import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  createDepartment,
  updateDepartment,
} from "../Services/DepartmentServices";

const MyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    dept_name: "",
    dept_type: "",
    dept_category: "",
    add_dept_info: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Department Name:
        <input
          type="text"
          name="dept_name"
          value={formData.dept_name}
          onChange={handleChange}
        />
      </label>

      <br />
      <label>
        Department Type:
        <input
          type="text"
          name="dept_type"
          value={formData.dept_type}
          onChange={handleChange}
        />
      </label>

      <br />
      <label>
        Department Category
        <input
          type="text"
          name="name"
          value={formData.dept_category}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        Additional Department Information
        <textarea
          name="description"
          value={formData.add_dept_info}
          onChange={handleChange}
        />
      </label>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

const CreateEdit = () => {
  const params = useParams();

  const handleFormSubmit = async (formData) => {
    try {
      if (params) {
        updateDepartment(params.id, formData);
        alert("Department updated successfully:");
      } else {
        createDepartment(formData);
        alert("New Department Created Successfully");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>{params ? "Edit Department" : "Create Department"}</h2>
      <MyForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateEdit;
