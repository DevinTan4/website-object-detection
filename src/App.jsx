import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
