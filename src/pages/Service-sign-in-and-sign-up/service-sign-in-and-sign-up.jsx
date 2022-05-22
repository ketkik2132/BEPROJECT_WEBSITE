import React from "react";
import ServiceCenterSignUp from "../../components/servicecenterSignUp/center-signup";
import SignIn from "../../components/sign-in/sign-in.component";
import './service-sign-in-and-sign-up.styles.scss';

const CenterSignInAndSignUp=()=>(
    <div className="sign-in-and-sign-up">
        <SignIn></SignIn>
        <ServiceCenterSignUp></ServiceCenterSignUp>
        
    </div>
)

export default CenterSignInAndSignUp;