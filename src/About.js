import React from "react";

import {NavLink} from "react-router-dom";
import img from "../src/Images/bg1-2.png"
import Coman from "./Coman";
const About = () =>  {
    return (
        <>
            <Coman 
                header="Welcome to About "
                btnname="Contact Us"
                visit="./Contact"
                img={img}
            />
        </>
    );
};
export default About;
