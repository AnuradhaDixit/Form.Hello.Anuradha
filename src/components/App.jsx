import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("");
  const [moused, mouseOver] = React.useState(false);
  const [name, setName] = React.useState("");
  function mousedOver() {
    mouseOver(true);
  }

  function click() {
    setHeadingText(name);
  }

  function mousedOut() {
    mouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button
        style={{ backgroundColor: moused ? "black" : "white" }}
        onClick={click}
        onMouseOver={mousedOver}
        onMouseOut={mousedOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
