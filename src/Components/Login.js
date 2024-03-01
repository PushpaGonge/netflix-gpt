import { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [Issigninform ,setIssignform] = useState(true)

    const toggeleSigninform = () =>{
        setIssignform(!Issigninform);
    }
    return (<div>
         <Header/>
         <div className="absolute">
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo" />
         </div>
         <form className=" p-4 w-80  absolute bg-black    my-52 mx-auto right-0 left-0  bg-opacity-50">
             <h1 className="text-white  text-3xl font-bold mx-20 my-2">{Issigninform ? "Signin" : "Signup"}</h1>
            <input type="text" placeholder="Email Adress" className="p-2 my-2 w-full rounded-lg"/>
            <input type="Password" placeholder="Password" className="p-2 my-2 w-full rounded-lg"/>
            <button className="p-2 my-4 w-full text-white  bg-red-600">sign in</button>
            <p className="text-white cursor-pointer" onClick={toggeleSigninform}>
                {Issigninform ? "new to netflix? SignUp now" : "Already user?SignIn"}
                </p>
         </form>
    </div>)

}

export default Login;