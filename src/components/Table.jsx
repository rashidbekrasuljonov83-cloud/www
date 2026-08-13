import React from "react";
import TableRow from "./TableRow";
import UserForm from "./UserForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/UsersSlice";

function Table() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  function handleDelete(id) {
    dispatch(deleteUser(id));
  }

  return (
    <div className="p-4 container mx-auto">
      <div className="overflow-x-auto mt-6">
        <table className="w-full text-left table-auto border-collapse border border-slate-300 shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-slate-800 text-white uppercase text-xs tracking-wider">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Rasm</th>
              <th className="py-3 px-4">Ism</th>
              <th className="py-3 px-4">Familiya</th>
              <th className="py-3 px-4">Yosh</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Telefon</th>
              <th className="py-3 px-4">Shahar</th>
              <th className="py-3 px-4">Kasbi</th>
              <th className="py-3 px-4 text-center">Amallar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {users && users.length > 0 ? (
              users.map((user) => (
                <TableRow
                  key={user.id}
                  user={user}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center py-4 text-gray-500">
                  Foydalanuvchilar topilmadi
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <UserForm />
    </div>
  );
}

export default Table;
