import React from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App maxWidth">
      {/* intro */}
      <Intro />

      {/* experience */}
      <Experience />

      {/* projects */}
      <Projects />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
