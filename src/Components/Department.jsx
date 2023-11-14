import React, { useState, useEffect } from "react";
import { useNavigation } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

import {
  getDepartments,
  deleteDepartment,
} from "../Services/DepartmentServices";

const Department = () => {
  const navigate = useNavigation();
  const [departments, setDepartments] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getDepartments(setDepartments);
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((prevId) => prevId !== id)
        : [...prevIds, id]
    );
  };

  const handleDelete = () => {
    deleteDepartment(selectedIds, setDepartments);
    setSelectedIds([]);
  };

  const handleEditOrCreate = (id) => {
    if (id) {
      navigate(`/edit/${id}`);
    } else {
      navigate(`/create`);
    }
  };

  return (
    <div className="header">
      <h2>Department</h2>
      <div>
        <IconButton onClick={handleEditOrCreate} aria-label="add">
          Create Services
        </IconButton>
        <IconButton onClick={handleDelete} aria-label="delete">
          <DeleteForeverIcon />
        </IconButton>
        <IconButton
          disabled={selectedIds.length !== 1}
          onClick={() => handleEditOrCreate(selectedIds[0])}
          aria-label="edit"
        >
          <EditIcon />
        </IconButton>
        <Checkbox
          onChange={() => {
            if (selectedIds.length === departments.length) {
              setSelectedIds([]);
            } else {
              const allIds = departments.map((dept) => dept.id);
              setSelectedIds(allIds);
            }
          }}
          checked={selectedIds.length === departments.length}
          indeterminate={
            selectedIds.length > 0 && selectedIds.length < departments.length
          }
        />
        Select All
      </div>
      <div>
        {departments.map((dept) => (
          <div key={dept.id}>
            <Checkbox
              onChange={() => handleCheckboxChange(dept.id)}
              checked={selectedIds.includes(dept.id)}
            />
            {dept.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
