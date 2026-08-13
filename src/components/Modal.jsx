import React from "react";

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
