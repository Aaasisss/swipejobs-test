import React from "react";
import { data } from "./demoData";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <div>
      <Home {...data} />
    </div>
  );
};

export default App;
