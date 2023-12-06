import React from "react";
import PropTypes from "prop-types";

function VideogameDetail(props){
  const { videogame, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Videogame Detail</h1>
      <h3>{videogame.name}</h3>
      <p><em>Gaming System:</em> {videogame.gamingSystem}</p>
      <p><em>Notes on game:</em> {videogame.notes}</p>
      <p><em>Rating:</em> {videogame.rating}</p>
      <button onClick={onClickingEdit}>Alter Game (cheater)</button>
      <button onClick={()=> onClickingDelete(videogame.id)}>Delete Save File</button>
      <hr/>
    </React.Fragment>
  );
}

VideogameDetail.propTypes = {
  videogame: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default VideogameDetail;