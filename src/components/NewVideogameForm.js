import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";


function NewVideogameForm(props) {
  return (
    <React.Fragment>
      <h2>Enter New Game Below</h2>
      <ReusableForm
        formSubmissionHandler={(data) =>
          props.onNewVideogameCreation({ ...data })
        }
        buttonText="Add Game"
        includeRating
      />
    </React.Fragment>
  );
}

NewVideogameForm.propTypes = {
  onNewVideogameCreation: PropTypes.func,
};

export default NewVideogameForm;