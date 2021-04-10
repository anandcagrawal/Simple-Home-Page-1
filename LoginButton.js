import React from 'react';
import Login from "./Login";
import { NavLink } from "react-router-dom";

const LoginButton = () => {
    return (
        <>
            <div>
                <NavLink to="/login">
                    <button className="bd-violet-200"> Logout</button>
                </NavLink>
            </div>
        </>
    )
}

export default LoginButton;