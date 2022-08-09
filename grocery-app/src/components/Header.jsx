import React from "react";
import Button from "./Button";

const Header = ({ showForm, changeTextAndColor }) => {
  return (
    <header className="header">
      <h2 className="app-header">Grocery List</h2>
      <Button
        onClick={showForm}
        color={changeTextAndColor ? "red" : "green"}
        text={changeTextAndColor ? "Close" : "Add"}
      />
    </header>
  );
};

export default Header;
