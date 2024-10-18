import React, { useEffect, useRef } from "react";

const CharacterModal = ({ character, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative bg-gray-300 p-8 rounded-2xl shadow-lg w-full max-w-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
      >
        <h2
          className="text-3xl font-bold text-center mb-4"
          style={{
            fontFamily: "'Encode Sans SC', sans-serif",
            fontWeight: 400,
          }}
        >
          {character.name}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <p className="font-medium text-gray-700">
            <strong>Height:</strong> {(character.height / 100).toFixed(2)}{" "}
            meters
          </p>
          <p className="font-medium text-gray-700">
            <strong>Mass:</strong> {character.mass} kg
          </p>
          <p className="font-medium text-gray-700">
            <strong>Birth Year:</strong> {character.birth_year}
          </p>
          <p className="font-medium text-gray-700">
            <strong>Date Added:</strong>{" "}
            {new Date(character.created).toLocaleDateString("en-GB")}
          </p>
          <p className="col-span-2 text-center font-medium text-gray-700">
            <strong>Number of Films:</strong> {character.films.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
