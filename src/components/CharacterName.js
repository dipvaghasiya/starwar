const CharacterCard = ({ character, onClick }) => (
  <div
    className="bg-gray-800 text-white p-4 rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform"
    onClick={() => onClick(character)}
  >
    <h2
      className="text-lg font-bold"
      style={{ fontFamily: "'Encode Sans SC', sans-serif", fontWeight: 400 }}
    >
      {character.name}
    </h2>
  </div>
);

export default CharacterCard;
