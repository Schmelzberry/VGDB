import React from "react";
import PropTypes from "prop-types";

function VideogameDetail(props){
  const { videogame, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Videogame Detail</h1>
      <h3>{videogame.name}</h3>
      <p><em>{videogame.gamingSystem}</em></p>
      <p><em>{videogame.notes}</em></p>
      <button onClick={onClickingEdit}>Update Videogame</button>
      <button onClick={()=> onClickingDelete(videogame.id)}>Close Videogame</button>
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