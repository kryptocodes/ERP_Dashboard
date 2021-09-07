import React from "react";
import FormIndex from "../components/form";
import NavBar from "../components/navbar/NavBar";

interface formProps {}

const form: React.FC<formProps> = ({}) => {
  return (
    <>
      <NavBar>
          <FormIndex />
      </NavBar>
    </>
  );
};

export default form;
