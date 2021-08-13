import React from "react";
import Coman from "./Coman";
import Card from "./Card";
import {NavLink} from "react-router-dom";
import img from "../src/Images/bg1-1.png";
const Home = () =>  {
    return (
        <>
            <Coman
                header="Welcome to"
                visit="./About"
                btnname= "See Details"
                img={img}
            />
            <Card />
        </>
    );
};
export default Home;
