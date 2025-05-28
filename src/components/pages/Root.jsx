import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
        <Header name="HR App"/>
        <main>
            <Outlet/>
        </main>
        <Footer Binyam Angamo year={2025}/>
        </>
    )
}

export default Root;