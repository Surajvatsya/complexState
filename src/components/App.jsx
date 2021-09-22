import React, { useState } from "react";

function App() {
  const [nm, setnm] = useState("");
  const [nm2, setnm2] = useState("");
  function myfn(e) {
    setnm(e.target.value);
  }
  function myfn2(e) {
    setnm2(e.target.value);
  }
  return (
    <div className="container">
      <h1>
        Hello {nm} {nm2}
      </h1>
      <form>
        <input
          value={nm}
          onChange={myfn}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={nm2}
          onChange={myfn2}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
