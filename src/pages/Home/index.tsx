import React from "react";
import NavBar from "../../components/Navbar";
import AddToDo from "../../components/AddToDo";
import ToDos from "../../components/ToDos";

const Home = () => {
  return (
    <div className="h-screen w-100 flex flex-col items-center justify-center">
      <h2>My TODO</h2>
      <NavBar />
      <AddToDo />
      <ToDos />
    </div>
  );
};

export default Home;
