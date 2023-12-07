import React, { useState, useEffect } from 'react';
import NewVideogameForm from './NewVideogameForm';
import VideogameList from './VideogameList';
import EditVideogameForm from './EditVideogameForm';
import VideogameDetail from './VideogameDetail';
import db from './../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";


function VideogameControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainVideogameList, setMainVideogameList] = useState([]);
  const [selectedVideogame, setSelectedVideogame] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  //*** */ USE EFFECT HOOKS ***//

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "videogames"),

      // collectionSnapshot represents response coming from Firestore DB
      // can be named whatever makes most sense "collection snapshot" is gud tho
      (collectionSnapshot) => {
        const videogames = [];
        collectionSnapshot.forEach((doc) => {
            videogames.push({
              ... doc.data(),
              // name: doc.data().name,
              // gamingSystem: doc.data().gamingSystem,
              // notes: doc.data().notes,
              // finishedGame: doc.data().finishedGame,
              // rating: doc.data().rating,
              id: doc.id
            });
        });
        setMainVideogameList(videogames);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);


  const handleClick = () => {
    if (selectedVideogame != null) {
      setFormVisibleOnPage(false);
      setSelectedVideogame(null);
      setEditing(false);

    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleDeletingVideogame = async (id) => {
    await deleteDoc(doc(db, "videogames", id));
    setSelectedVideogame(null);
    
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleEditingVideogameInList = async (videogameToEdit) => {

    const videogameRef = doc(db, "videogames", videogameToEdit.id);
    await updateDoc(videogameRef, videogameToEdit);
    setEditing(false);
    setSelectedVideogame(null);
  }

  const handleAddingNewVideogameToList = async (newVideogameData) => {
    const collectionRef = collection(db,"videogames");
    await addDoc(collectionRef, newVideogameData);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedVideogame = (id) => {
    const selection= mainVideogameList.filter(videogame => videogame.id === id)[0];
    setSelectedVideogame(selection);

  }

  // REMOVED RENDER METHOD FROM CLASS COMPONENT STATE MGMT

  let currentlyVisibleState = null;
  let buttonText = null;

  if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>
  }
  else if (editing) {
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
      {error ? null : <button onClick={handleClick}>{buttonText}</button>}
    </React.Fragment>
  );

}


export default VideogameControl;
