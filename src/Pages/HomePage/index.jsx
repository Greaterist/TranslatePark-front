import { Link } from "react-router-dom";
import Defaultlayout from "../../Layouts/Default";


const HomePage = () => {
  return (
    <Defaultlayout>
      <p>HOME PAGE</p>
      <Link to={"/translation/" + 1}>Translation example</Link>
      <Link to={"/profile/"}>profile example</Link>
      <Link to={"/auth/"}>auth</Link>
      <Link to={"/register/"}>register</Link>
    </Defaultlayout>
  );
};

export default HomePage;
