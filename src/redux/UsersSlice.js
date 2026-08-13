import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data/users";

const initialState = {
  users: users,
  editingUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    addUser: (state, action) => {
      const newUser = {
        id: Math.max(...state.users.map((u) => u.id)) + 1,
        ...action.payload,
      };
      state.users.push(newUser);
    },
    setEditingUser: (state, action) => {
      state.editingUser = action.payload;
    },
    clearEditingUser: (state) => {
      state.editingUser = null;
    },
    editUser: (state, action) => {
      const index = state.users.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
      state.editingUser = null;
    },
  },
});

export const {
  deleteUser,
  addUser,
  setEditingUser,
  clearEditingUser,
  editUser,
} = usersSlice.actions;

export default usersSlice.reducer;
