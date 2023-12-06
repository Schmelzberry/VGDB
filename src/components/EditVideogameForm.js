import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditNewVideogameForm (props) {
  const { videogame } = props;

  function handleEditVideogameFormSubmission(event) {
    event.preventDefault();
    props.onEditVideogame({
      name: event.target.name.value, 
      gamingSystem: event.target.gamingSystem.value, 
      notes: event.target.notes.value, 
      id: videogame.id
    });
  }

  // need to pull in existing data so user can see what they are changing and not need to reenter existing fields
  return (
    <React.Fragment>
      <h3>Edit game:</h3> 
      <ReusableForm 
        formSubmissionHandler={handleEditVideogameFormSubmission} 
        buttonText="Update Game" />
    </React.Fragment>
  );
}

EditNewVideogameForm.propTypes = {
  onEditVideogame: PropTypes.func,
  videogame: PropTypes.object
};

export default EditNewVideogameForm;
