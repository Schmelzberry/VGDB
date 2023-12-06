import React from "react";
import PropTypes from "prop-types";

function Videogame(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenVideogameClicked(props.id)}>
        <h2>{props.name}</h2>
        <p><em>{props.gamingSystem}</em></p>
        <p><em>{props.notes}</em></p>
        <p><strong>Rating: {props.rating}</strong></p>
        
        <hr/>
      </div>
    </React.Fragment>
  );
}

Videogame.propTypes = {
  name: PropTypes.string,
  gameSystem: PropTypes.string,
  notes: PropTypes.string,
  rating: PropTypes.number,
  id: PropTypes.string,
  whenVideogameClicked: PropTypes.func
}

export default Videogame;