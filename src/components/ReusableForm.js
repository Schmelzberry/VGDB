import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const [formData, setFormData] = useState(props.defaultFormData || {});
  const [rating, setRating] = useState(1);

  useEffect(() => {
    setRating(props.defaultFormData?.rating || 1);
    setFormData(props.defaultFormData || {});
  }, [props.defaultFormData]);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.formSubmissionHandler({ ...formData, rating });
  };

  return (
    <React.Fragment>
      <div className="form-wrapper">
      <form onSubmit={handleFormSubmit}>
        {/* Existing form inputs */}
        <input
          type="text"
          name="name"
          placeholder="Name of game:"
          value={formData.name || ""}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="gamingSystem"
          placeholder="System played on:"
          value={formData.gamingSystem || ""}
          onChange={handleInputChange}
        />
        <br />
        <textarea
          name="notes"
          placeholder="Things you want to mention about the game"
          value={formData.notes || ""}
          onChange={handleInputChange}
        />
        <br />
        <label>Beat Game?</label>
        <input
          type="checkbox"
          name="finishedGame"
          checked={formData.finishedGame || false}
          onChange={(event) =>
            handleInputChange({
              target: { name: "finishedGame", value: event.target.checked }
            })
          }
        />
        <br />

        {/* Additional form elements passed as a prop */}
        {props.renderAdditionalFormInputs && props.renderAdditionalFormInputs()}

        {/* Rating input */}
        {props.includeRating && (
          <div>
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
          </div>
        )}

        <button type="submit">{props.buttonText}</button>
      </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  renderAdditionalFormInputs: PropTypes.func,
  includeRating: PropTypes.bool,
  defaultFormData: PropTypes.object, // Initial form data
};

export default ReusableForm;