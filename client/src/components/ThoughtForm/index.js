import React, { useState } from "react";

const ThoughtForm = () => {
  const [thoughtText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = (e) => {
    if (e.target.value.length <= 280) {
      setText(e.target.value);
      setCharacterCount(e.target.value.length);
    }
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    setText('');
    setCharacterCount(0);
  };
  return (
    <div>
      <p className={`m-0 ${characterCount === 280 ? "text-error" : ""}`}>
        Character Count: {characterCount}/280
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Here's a new thought..."
          value={thoughtText}
          onChange={handleChange}
          className="form-input col-12 col-md-9"
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ThoughtForm;
