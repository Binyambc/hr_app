import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Root.css";

const Root = () => {
    return (
        <div className="root-container">
            <Header name="HR App"/>
            <main>
                <Outlet/>
            </main>
            <Footer Binyam Angamo year={2025}/>
        </div>
    )
}

export default Root;