import React from "react";
import Videogame from "./Videogame";
import PropTypes from "prop-types";

function VideogameList(props){

  return (
    <React.Fragment>
      <h3>Click the button to start adding your favorite games to VGDB!</h3>
      {props.videogameList.map((videogame) =>
        <Videogame 
          whenVideogameClicked={props.onVideogameSelection}
          name={videogame.name}
          gamingSystem={videogame.gamingSystem}
          notes={videogame.notes}
          finishedGame={videogame.finishedGame}
          rating={videogame.rating}
          id={videogame.id}
          key={videogame.id}/>
      )}
    </React.Fragment>
  );
}

VideogameList.propTypes = {
  videogameList: PropTypes.array,
  onVideogameSelection: PropTypes.func
};

export default VideogameList;

