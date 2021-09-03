import React from "react";
import NavBar from "../components/navbar/NavBar";

interface aboutProps {}

const about: React.FC<aboutProps> = ({}) => {
  return (
    <>
      <NavBar>
        <div>
          <h1 className="text-4xl p-2 font-black">About</h1>
          <hr />
          <p className="text-justify p-4">
            ERP Management is a feature packed. ERP Management is built with
            Next JS,Firebase, Tailwind CSS, Headless UI . We implemented all the features you
            might need to start a new Web application. The free version includes
            all components, Form elements, and validation, JWT
            authentication, Sign in, sign up pages, Vertical navigation, Lazy
            loading, Code splitting, SASS integration.It comes with large
            collection of React components that will offer you multiple
            possibilities to build any kind of Apps. ERP Mangement can be used for admin
            panel, management system, project management, CMS, CRM, Web & mobile
            application Backend and etc.
          </p>
          <img src={"https://miro.medium.com/max/1400/1*Zn7mEZXZmnGu6evZiztk6g.png"} alt="about" className="w-auto p-2 rounded-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />
        </div>
      </NavBar>
    </>
  );
};

export default about;
