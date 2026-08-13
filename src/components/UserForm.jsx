import React from "react";
import { useFormik } from "formik";
import Button from "./Button";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser, clearEditingUser } from "../redux/UsersSlice";

function UserForm() {
  const dispatch = useDispatch();
  const editingUser = useSelector((state) => state.users.editingUser);
  const addFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      phone: "",
      city: "",
      profession: "",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(addUser(values));
      resetForm();
    },
  });
  const editFormik = useFormik({
    initialValues: editingUser || {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      phone: "",
      city: "",
      profession: "",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(editUser(values));
    },
  });

  return (
    <>
      <Modal
        isOpen={!!editingUser}
        onClose={() => dispatch(clearEditingUser())}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          ✏️ Userni Tahrirlash
        </h2>

        <form
          onSubmit={editFormik.handleSubmit}
          className="grid grid-cols-1 gap-4"
        >
          <input
            type="text"
            name="firstName"
            placeholder="Ism"
            value={editFormik.values.firstName}
            onChange={editFormik.handleChange}
            className="p-2 border rounded border-gray-300 focus:outline-blue-500"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Familiya"
            value={editFormik.values.lastName}
            onChange={editFormik.handleChange}
            className="p-2 border rounded border-gray-300 focus:outline-blue-500"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Yosh"
            value={editFormik.values.age}
            onChange={editFormik.handleChange}
            className="p-2 border rounded border-gray-300 focus:outline-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={editFormik.values.email}
            onChange={editFormik.handleChange}
            className="p-2 border rounded border-gray-300 focus:outline-blue-500"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefon"
            value={editFormik.values.phone}
            onChange={editFormik.handleChange}
            className="p-2 border rounded border-gray-300 focus:outline-blue-500"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Shahar"
            value={editFormik.values.city}
            onChange={editFormik.handleChange}
            className="p-2 border rounded border-gray-300 focus:outline-blue-500"
            required
          />
          <input
            type="text"
            name="profession"
            placeholder="Kasbi"
            value={editFormik.values.profession}
            onChange={editFormik.handleChange}
            className="p-2 border rounded border-gray-300 focus:outline-blue-500"
            required
          />

          <Button type="submit" variant="secondary" text="Saqlash (Update)" />
        </form>
      </Modal>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-3xl mx-auto border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          ➕ Yangi User Qo'shish
        </h2>

        <form
          onSubmit={addFormik.handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="firstName"
            placeholder="Ism"
            value={addFormik.values.firstName}
            onChange={addFormik.handleChange}
            className="p-2 border rounded border-gray-300 focus:outline-blue-500"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Familiya"
            value={addFormik.values.lastName}
            onChange={addFormik.handleChange}
            className="p-2 border rounded border-gray-300 focus:outline-blue-500"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Yosh"
            value={addFormik.values.age}
            onChange={addFormik.handleChange}
            className="p-2 border rounded border-gray-300 focus:outline-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={addFormik.values.email}
            onChange={addFormik.handleChange}
            className="p-2 border rounded border-gray-300 focus:outline-blue-500"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefon"
            value={addFormik.values.phone}
            onChange={addFormik.handleChange}
            className="p-2 border rounded border-gray-300 focus:outline-blue-500"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Shahar"
            value={addFormik.values.city}
            onChange={addFormik.handleChange}
            className="p-2 border rounded border-gray-300 focus:outline-blue-500"
            required
          />
          <input
            type="text"
            name="profession"
            placeholder="Kasbi"
            value={addFormik.values.profession}
            onChange={addFormik.handleChange}
            className="p-2 border rounded border-gray-300 focus:outline-blue-500 md:col-span-2"
            required
          />

          <div className="md:col-span-2">
            <Button type="submit" variant="primary" text="Qo'shish (Add)" />
          </div>
        </form>
      </div>
    </>
  );
}

export default UserForm;
