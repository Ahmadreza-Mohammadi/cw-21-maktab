"use client";

import { getUsersList } from "@/redux/actions/UserActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserTable from "./UserTable";

function UsersList() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: any) => state.userList);

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  if (loading) {
    return <p>is loading ...</p>;
  }

  if (error) {
    return <p>try again later ...</p>;
  }
  return (
    <div className="w-full flex justify-center">
      <UserTable />
    </div>
  );
}

export default UsersList;
