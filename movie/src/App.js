import Navbar from "./Components/Header/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import Movie from "./Components/Movie/Movie";
function App() {
  const [movieData, setMovieData] = useState([]);
  const MovieServices = async () => {
    const { data } = await axios.get(`http://localhost:8008/movies`);
    setMovieData(data);
  };
  useEffect(() => {
    MovieServices();
  }, []);
  // console.log(movieData);
  return (
    <div className="container-fluid">
      <Navbar />
      <Movie movieData={movieData} />
    </div>
  );
}

export default App;
