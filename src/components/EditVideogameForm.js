import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditVideogameForm(props) {
  const [rating, setRating] = useState(1);

  useEffect(() => {
    // Set the initial rating when the component mounts
    setRating(props.videogame.rating || 1);
  }, [props.videogame.rating]);

  function handleEditVideogameFormSubmission(event) {
    event.preventDefault();
    props.onEditVideogame({
      name: event.target.name.value,
      gamingSystem: event.target.gamingSystem.value,
      notes: event.target.notes.value,
      rating: rating, 
      id: props.videogame.id
    });
  }

  function handleRatingChange(event) {
    setRating(parseInt(event.target.value, 10));
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditVideogameFormSubmission}
        buttonText="Update Game"
        renderAdditionalFormInputs={() => (
          <React.Fragment>
            {/* Additional form-specific inputs can go here */}
          </React.Fragment>
        )}
        includeRating
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

EditVideogameForm.propTypes = {
  onEditVideogame: PropTypes.func,
  videogame: PropTypes.object
};

export default EditVideogameForm;