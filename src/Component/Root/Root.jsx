import { Outlet } from "react-router-dom";
import Hadder from "../Hadder/Hadder";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Hadder></Hadder>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;