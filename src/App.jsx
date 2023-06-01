import { Outlet } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

const App = () => {
  return (
    <div className="container">
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
