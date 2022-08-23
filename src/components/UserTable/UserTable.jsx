import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserTable = (props) => {
  const { Id, Name, Email, Phone, Status, Role } = props.userTable;

  let navigate = useNavigate();
  const handelClick = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <>
      <td>{1 + props.count}</td>
      <td>{Name}</td>
      <td>{Email}</td>
      <td>{Phone}</td>
      <td>{Status}</td>
      <td>{Role}</td>
      <td>
        <div className="d-flex justify-content-center">
          <Button className="me-2 ms-2" onClick={() => handelClick(Id)}>
            Detail
          </Button>{" "}
          <Button onClick={() => handelClick(Id)}>Edit</Button>
        </div>
      </td>
    </>
  );
};

export default UserTable;
