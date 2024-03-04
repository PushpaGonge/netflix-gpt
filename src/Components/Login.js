import { useState,useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import {auth} from "../utils/Firebase" 
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [Issigninform ,setIssignform] = useState(true)
    const [errormessage,seterrormessage] = useState(null)
    
    const dispatch = useDispatch()
    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);
    

    const toggeleSigninform = () =>{
        setIssignform(!Issigninform);
    }

    const handleButtonClick = () => {
       const message = checkValidateData(email.current.value,password.current.value)

       seterrormessage(message);

       if(message) return;

       if(!Issigninform){
        // sign up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName:name.current.value , 
  photoURL: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3BmLWljb240LWppcjIwNjItcG9yLWwtam9iNzg4LnBuZw.png"
}).then(() => {
  const {uid, email ,displayName, photoURL} = auth.currentUser;
     dispatch(addUser({uid:uid , email:email , displayName:displayName, photoURL:photoURL}));
 
  // ...
}).catch((error) => {
   seterrormessage(error.message);
});
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode + "-" + errorMessage)
    
    // ..
  });

       } else {
        //sign in logic
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+errorMessage)
  });


       }
       
    }
    return (<div>
         <Header/>
         <div className="absolute">
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo" />
         </div>
         <form className=" p-4 w-80  absolute bg-black    my-44 mx-auto right-0 left-0  bg-opacity-50" onSubmit={(e) => e.preventDefault()}>
             <h1 className="text-white  text-3xl  mx-20 my-2">{Issigninform ? "SignIn" : "SignUp"}</h1>
            
            {!Issigninform && (
                <input ref={name} type="text" placeholder="Full Name" className="p-2 my-2 w-full rounded-lg "/>
                
            )}
            
            <input ref={email} type="text" placeholder="Email Adress" className="p-2 my-2 w-full rounded-lg"/>
            <input ref={password} type="Password" placeholder="Password" className="p-2 my-2 w-full rounded-lg"/>
            <p className="text-red-500 p-2 font-bold">{errormessage}</p>
            <button className="p-2 my-4 w-full text-white  bg-red-600"  onClick={handleButtonClick}>{Issigninform ? "SignIn" : "SignUp"}</button>
            <p className="text-white cursor-pointer" onClick={toggeleSigninform}>
                {Issigninform ? "new to netflix? SignUp now" : "Already user?SignIn"}
                </p>
         </form>
    </div>)

}

export default Login;