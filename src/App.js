import React, { useState } from "react";
import "./styles.css";

const Moviedict = {
  HORROR: [
    { name: "13B", rating: "4/5" },
    { name: "Arundhathi", rating: "4.5/5" },
    { name: "Tumbbad", rating: "4.3/5" },
    { name: "Raaz", rating: "4.1/5" },
    { name: "Raat", rating: "3.8/5" },
    { name: "Bhagamathie", rating: "4/5" },
    { name: "Deyyam", rating: "4.2/5" },
    { name: "Jessie", rating: "3.8/5" },
    { name: "Raju Gari Adhi", rating: "4.2/5" }
  ],
  ACTION: [
    { name: "Saaho", rating: "4.3/5" },
    { name: "War", rating: "4.2/5" },
    { name: "URI", rating: "4.3/5" },
    { name: "KGF", rating: "4.1/5" },
    { name: "Badla", rating: "3.8/5" },
    { name: "Raazi", rating: "4/5" },
    { name: "Baahubali-2", rating: "4.5/5" }
  ],
  COMEDY: [
    { name: "Munnabhai M.B.B.S", rating: "4.3/5" },
    { name: "Hera-pheri", rating: "4.2/5" },
    { name: "Rajababu", rating: "4.3/5" },
    { name: "Kick", rating: "4.5/5" },
    { name: "Dubai-seenu", rating: "3.8/5" },
    { name: "F2", rating: "4/5" }
  ],
  ROMANTIC: [
    { name: "Rabnebanadi jodi", rating: "4.3/5" },
    { name: "Dilwale dhunia le jayengey", rating: "4.2/5" },
    { name: "Jabwemet", rating: "4.3/5" },
    { name: "ArjunRedy", rating: "4.5/5" },
    { name: "Ye maya chesavey", rating: "4.2/5" },
    { name: "Bommarillu", rating: "4/5" }
  ],
  THRILLER: [
    { name: "Gameover", rating: "4.3/5" },
    { name: "Ratsasan", rating: "4.2/5" },
    { name: "Kshanam", rating: "4.3/5" },
    { name: "HIT", rating: "4.1/5" },
    { name: "Badla", rating: "3.8/5" },
    { name: "Agent sai srinivas", rating: "4/5" }
  ]
};

var genrekeys = Object.keys(Moviedict);
export default function App() {
  const [moviegenre, setgenre] = useState("HORROR");

  function clickhandler(genre) {
    setgenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "yellow", padding: "2rem" }}>
        {" "}
        Welcome to MOVIEBUFF 📣🎬📸
      </h1>
      <h4>
        You can checkout all the indian movies of different genres and their
        ratings below
      </h4>
      <div>
        {genrekeys.map((genre) => (
          <button
            onClick={() => clickhandler(genre)}
            style={{
              borderRadius: "1rem",
              cursor: "pointer",
              background: "#E5E7EB",
              padding: "0.5rem  1rem",
              border: "2px solid blue",
              margin: "1rem 1.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul>
          {Moviedict[moviegenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "30%",
                margin: "1rem 25rem",
                borderRadius: "0.5rem",
                backgroundColor: "gray"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      <h3 class="foot">Thankyou ! Visit again 😊 </h3>
      <small style={{ fontSize: "15px" }}>sainitheesh creations $$</small>
    </div>
  );
}
