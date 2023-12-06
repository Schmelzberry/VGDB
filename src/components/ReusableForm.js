import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const { formSubmissionHandler, buttonText, renderAdditionalFormInputs, includeRating, rating } = props;

  return (
    <React.Fragment>
      <form onSubmit={(event) => formSubmissionHandler(event, rating)}>
        {/* Existing form inputs */}
        <input type="text" name="name" placeholder="Name of game:" /><br />
        <input type="text" name="gamingSystem" placeholder="System played on:" /><br />
        <textarea name="notes" placeholder="Things you want to mention about the game" /><br />

        {/* Additional form elements passed as a prop */}
        {renderAdditionalFormInputs && renderAdditionalFormInputs()}

        {/* Rating input */}
        {includeRating && (
          <label>
            Rating:
            {[1, 2, 3, 4, 5].map((value) => (
              <React.Fragment key={value}>
                <input
                  type="radio"
                  name="rating"
                  value={value}
                />
                {value}
              </React.Fragment>
            ))}
          </label>
        )}

        <button type="submit">{buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  renderAdditionalFormInputs: PropTypes.func, // Function to render additional form inputs
  includeRating: PropTypes.bool, // Flag to include rating input
  rating: PropTypes.number, // Pass rating as a prop
};

export default ReusableForm;