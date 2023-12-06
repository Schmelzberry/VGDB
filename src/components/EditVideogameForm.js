import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditVideogameForm(props) {
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={props.onEditVideogame}
        buttonText="Update Game"
        includeRating
        defaultFormData={props.videogame} // Pass the videogame data
      />
    </React.Fragment>
  );
}

EditVideogameForm.propTypes = {
  onEditVideogame: PropTypes.func,
  videogame: PropTypes.object,
};

export default EditVideogameForm;