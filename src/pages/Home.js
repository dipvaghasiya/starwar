import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import CharacterName from "../components/CharacterName";
import CharacterInfo from "../components/CharacterInfo";
import Pagination from "../components/Pagination"; // Import the new Pagination component

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(
          `https://swapi.dev/api/people/?page=${page}`
        );
        if (!response.ok) throw new Error("Failed to fetch data.");

        const data = await response.json();
        setCharacters(data.results);
        setTotalPages(Math.ceil(data.count / 10));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  const handlePageChange = (event, value) => {
    navigate(`/people?page=${value}`);
  };

  if (loading) return <Loader />;
  if (error)
    return <p className="text-center text-red-500">Error fetching data</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-8 flex-grow">
        <h1
          className="text-4xl font-bold text-center mb-8 text-white"
          style={{ fontFamily: "'Cinzel', serif", fontWeight: 660 }}
        >
          Star Wars
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {characters.map((character) => (
            <CharacterName
              key={character.name}
              character={character}
              onClick={setSelectedCharacter}
            />
          ))}
        </div>
      </div>

      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
      />

      {selectedCharacter && (
        <CharacterInfo
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
};

export default Home;
