import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store=> store.user)
  const handleSignOut = () =>{
    signOut(auth).then(() => {
   navigate("/")
}).catch((error) => {
  navigate("/error")
});
  }

  useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const {uid, email ,displayName, photoURL} = user;
     dispatch(addUser({uid:uid , email:email , displayName:displayName, photoURL:photoURL}));
     navigate("/browse")
     
  } else {
    dispatch(removeUser());
    navigate("/")
    
  }
});

    }, [])
    return (
        <div className="absolute z-10 w-full">
          <div className="w-full bg-gradient-to-b  from-black flex justify-between">
          <img 
          className="w-48 px-8 py-2 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
          
         {user && ( <div className="flex  flex-col ">
            <img 
            className="w-12  m-4"
            src={user?.photoURL} alt="user" />
            <button className="  bg-red-400 font-bold m-2 cursor-pointer" onClick={handleSignOut}>sign out</button>
          </div>)}
          </div>

        </div>
    )
}

export default Header;