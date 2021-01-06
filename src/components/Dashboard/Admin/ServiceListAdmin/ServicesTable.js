import React from "react";

const ServicesTable = ({ service, index, handleStatus }) => {
  const { title, name, email, description, status, _id } = service;
  return (
    <tbody>
      <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{title}</td>
        <td style={{ width: "300px" }}>{description}</td>
        <td>
          <select
            name="cars"
            value={status}
            className={`border-0 p-1 ${
              (status === "pending" && "bg-danger") ||
              (status === "done" && "bg-success") ||
              (status === "ongoing" && "bg-warning")
            }`}
            onChange={(e) => handleStatus(_id, e)}
          >
            <option value="pending" className="bg-danger border-0">
              pending
            </option>
            <option value="ongoing" className="bg-warning border-0">
              ongoing
            </option>
            <option value="done" className="bg-success border-0">
              done
            </option>
          </select>
        </td>
      </tr>
    </tbody>
  );
};

export default ServicesTable;
