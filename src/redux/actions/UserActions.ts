import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersList: any = createAsyncThunk("todo/getAll", async () => {
  const resposne = await axios.get(
    "https://679f6a5424322f8329c39f31.mockapi.io/users"
  );
  return resposne.data;
});
