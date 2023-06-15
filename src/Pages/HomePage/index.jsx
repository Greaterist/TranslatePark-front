import { Link } from "react-router-dom";
import Defaultlayout from "../../Layouts/Default";

const HomePage = () => {
    return (
        <Defaultlayout>
            <p>HOME PAGE</p>
            <Link to="/translation">Translation example</Link>
        </Defaultlayout>
    )
}



export default HomePage;