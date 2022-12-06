import React, { useState } from "react";

const Videos = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <div>
      This is Sign In page
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Video ID: "
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Videos;
