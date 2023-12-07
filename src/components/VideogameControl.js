import React, { useState } from 'react';
import NewVideogameForm from './NewVideogameForm';
import VideogameList from './VideogameList';
import EditVideogameForm from './EditVideogameForm';
import VideogameDetail from './VideogameDetail';

function VideogameControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainVideogameList, setMainVideogameList] = useState([]);
  const [selectedVideogame, setSelectedVideogame] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    if (selectedVideogame != null) {
      setFormVisibleOnPage(false);
      setSelectedVideogame(null);
      setEditing(false);

    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }


  const handleDeletingVideogame = (id) => {
    const newMainVideogameList = mainVideogameList.filter(videogame => videogame.id !== id);
    setMainVideogameList(newMainVideogameList);
    setSelectedVideogame(null);
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleEditingVideogameInList = (videogameToEdit) => {

    const editedMainVideogameList = mainVideogameList
      .filter(videogame => videogame.id !== selectedVideogame.id)
      .concat(videogameToEdit);
    setMainVideogameList(editedMainVideogameList);
    setEditing(false);
    setSelectedVideogame(null);
  }

  const handleAddingNewVideogameToList = (newVideogame) => {

    const newMainVideogameList = mainVideogameList.concat(newVideogame);

    setMainVideogameList(newMainVideogameList);
    setFormVisibleOnPage(false)
  }

  const handleChangingSelectedVideogame = (id) => {
    const selection= mainVideogameList.filter(videogame => videogame.id === id)[0];
    setSelectedVideogame(selection);

  }

  // REMOVED RENDER METHOD FROM CLASS COMPONENT STATE MGMT

  let currentlyVisibleState = null;
  let buttonText = null;

  if (editing) {
    currentlyVisibleState = 
    <EditVideogameForm
     videogame={selectedVideogame}
    onEditVideogame={handleEditingVideogameInList} 
    />
    buttonText = "Return to Game List";
  }
  else if (selectedVideogame != null) {
    currentlyVisibleState = 
    <VideogameDetail
      videogame={selectedVideogame}
      onClickingDelete={handleDeletingVideogame}
      onClickingEdit={handleEditClick} 
      />
    buttonText = "Return to Game List";
  }
  else if (formVisibleOnPage) {
    currentlyVisibleState = 
    <NewVideogameForm
    onNewVideogameCreation = {handleAddingNewVideogameToList} 
    />
    buttonText = "Return to Game List";
  }
  else {
    currentlyVisibleState = 
    <VideogameList
      onVideogameSelection = {handleChangingSelectedVideogame}
      videogameList={mainVideogameList} 
      />
    buttonText = "Start New Game";
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );

}


export default VideogameControl;
