import React from "react";
import ReactDOM from "react-dom";
import Login from "../modules/components/Login";
// TODO
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});
