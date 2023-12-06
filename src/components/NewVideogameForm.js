import React, { useState } from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewVideogameForm(props) {
  const [rating, setRating] = useState(1);

  function handleNewVideogameFormSubmission(event, rating) {
    event.preventDefault();
    props.onNewVideogameCreation({
      name: event.target.name.value,
      gamingSystem: event.target.gamingSystem.value,
      notes: event.target.notes.value,
      rating: rating, 
      id: v4()
    });
  }

  function handleRatingChange(event) {
    setRating(parseInt(event.target.value, 10));
  }

  return (
    <React.Fragment>
      <ReusableForm
  formSubmissionHandler={handleNewVideogameFormSubmission}
  buttonText="Update Game"
  renderAdditionalFormInputs={() => (
    <React.Fragment>
      {/* Additional form-specific inputs can go here */}
    </React.Fragment>
  )}
  includeRating
  rating={rating} // Pass the rating prop
>
  <label>
    Rating:
    {[1, 2, 3, 4, 5].map((value) => (
      <React.Fragment key={value}>
        <input
          type="radio"
          name="rating"
          value={value}
          checked={rating === value}
          onChange={handleRatingChange}
        />
        {value}
      </React.Fragment>
    ))}
  </label>
</ReusableForm>
    </React.Fragment>
  );
}



NewVideogameForm.propTypes = {
  onNewVideogameCreation: PropTypes.func
};

export default NewVideogameForm;