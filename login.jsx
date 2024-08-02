import React from "react";
import LoginForm from "../components/LoginForm";

function Login(props) {
    return (
        <main className="py-10 container mx-auto">
        <section>
            <h1>Login</h1>
            <LoginForm/>
        </section>
       </main>

    );
}

export  default Login;