import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewVideogameForm(props){

  function handleNewVideogameFormSubmission(event) {
    event.preventDefault();
    props.onNewVideogameCreation({
      name: event.target.name.value, 
      gamingSystem: event.target.gamingSystem.value, 
      notes: event.target.notes.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h3>New game form:</h3>
      <ReusableForm
        formSubmissionHandler={handleNewVideogameFormSubmission}
        buttonText="Add Game" />
    </React.Fragment>
  );
}

NewVideogameForm.propTypes = {
  onNewVideogameCreation: PropTypes.func
};

export default NewVideogameForm;
