import React from "react";
import PropTypes from "prop-types";

function Videogame(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenVideogameClicked(props.id)}>
        <h2>{props.name}</h2>
        <p><em>{props.gameSystem}</em></p>
        <p><em>{props.notes}</em></p>
        
        <hr/>
      </div>
    </React.Fragment>
  );
}

Videogame.propTypes = {
  name: PropTypes.string,
  gameSystem: PropTypes.string,
  notes: PropTypes.string,
  id: PropTypes.string,
  whenVideogameClicked: PropTypes.func
}

export default Videogame;