import React from "react";
import PropTypes from "prop-types";

function VideogameDetail(props){
  const { videogame, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h2>{videogame.name}</h2>
      <h5><em>Gaming System:</em> {videogame.gamingSystem}</h5>
      <h5><em>Notes on game:</em> {videogame.notes}</h5>
      <h5><em>Rating:</em> {videogame.rating}</h5>
      <h5><em>Did ya beat it?</em>{" "}
        {videogame.finishedGame ? "Yes" : "No"}</h5>
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