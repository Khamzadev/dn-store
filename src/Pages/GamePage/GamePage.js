import React from "react";
import { useSelector } from "react-redux";
import GameBuy from "../../Components/Game-Buy/Game-Buy";
import GameCover from "../../Components/Game-Cover/Game-Cover";
import GameGenre from "../../Components/Game-Genre/Game-Ganre";
import './GamePage.css'

const GamePage = () => {
  const game = useSelector((state) => state.games.currentGame);
  console.log(game)
  return (
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube Video player"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="game-page__right">
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className="game-page__text-secondary">
            Популярные метки этой игры :
          </p>
          <div className="game-page__genre">
            {game.genres.map((genre) => (
              <GameGenre genre={genre} key={genre} />
            ))}
          </div>

          <div className="game-page__buy">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;