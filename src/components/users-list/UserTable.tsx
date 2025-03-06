import React from "react";
import { useSelector } from "react-redux";

function UserTable() {
  const { data } = useSelector((state: any) => state.userList);

  return (
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Email</th>
          <th>Name</th>
          <th>Lastname</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((user: any) => (
          <tr key={user.id}>
            <td>{user.country}</td>
            <td>{user.email}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
