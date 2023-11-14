import axios from "axios";

export const getDepartments = (cb) => {
  axios
    .get("/api/v1/admin/department")
    .then(({ data }) => cb(data))
    .catch((err) => {
      console.log(err);
    });
};

export const createDepartment = (model) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post("/api/v1/admin/department", model, config)
    .then(({ data }) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
};

export const updateDepartment = (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .patch(`/api/v1/admin/department/${id}`, data, config)
    .then(({ data }) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
};

export const deleteDepartment = (ids) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    data: "",
  };

  let url = "/api/v1/admin/departments";

  if (ids.length === 1) {
    url = `/api/v1/admin/department/${ids[0]}`;
  } else if (ids.length > 1) {
    config.data = { ids };
  }
  axios
    .delete(url, config)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
