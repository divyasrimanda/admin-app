import React from "react";
import StudentForm from "./StudentForm";
import LandingPage from "./LandingPage";
import {
    Route,
    Routes,
  } from "react-router-dom";
import FamilyMember from "./FamilyMember";
import Header from "./Header";
import StudentModal from "./StudentModal";

const Layout = () => {
  return (
    <div>
         <Header />
         <Routes>
          <Route exact path="/" element ={<StudentForm />} /> 
          <Route exact path="/studentModal" element ={<StudentModal />} />
        </Routes>
    </div>
  );
};

export default Layout;
