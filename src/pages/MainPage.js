import React from "react";
import FirstPage from './../Components/MainPageComponents/FirstPage';
import Aboutus from './../Components/MainPageComponents/Aboutus';
import Services from './../Components/MainPageComponents/Services';
import Team from './../Components/MainPageComponents/teamMembers';
export default function MainPage(){
    return(
        <>
           <FirstPage/>
           <Aboutus/>
           <Services/>
           <Team/>
        </>
    );
}