import { useState } from "react"
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword ,updateProfile ,sendEmailVerification   } from "firebase/auth";
import { Bounce, toast } from "react-toastify";
// firebase variable

const auth = getAuth();

const Ragister = () => {
const [show,setshow]=useState(false)
const [data,setdata]=useState({username:"",password:"",gmail:""})
const [error,seterror]=useState({usernameError:"",emailError:"",passwordError:""})

const handelbutton=(e)=>{
  e.preventDefault()
  if(data.username ==""){
    seterror((prev)=>({... prev ,usernameError:"Enter Your UserName"}))
  }
  if(data.gmail==""){
    seterror((prev)=>({...prev, emailError:"Enter Your Email"}))
  }
  if (data.password== ""){
    seterror((prev)=>({... prev ,passwordError:"Enter Your Password"}))
  }
  else{
    createUserWithEmailAndPassword(auth, data.gmail, data.password)
  .then((userCredential) => {
    const user = userCredential.user;
    // =-=-==-====update profile code 
    updateProfile(auth.currentUser, {
      displayName: data.username, photoURL: "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
    }).then(() => {
      // ========Email Verification
      const auth = getAuth();
sendEmailVerification(auth.currentUser)
  .then(() => {
    toast.info('Send Email Verification ', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  });
    }).catch((error) => {
      // An error occurred
      // ...
    });
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    if(errorCode == "auth/email-already-in-use"){
      toast.error('Email has already used', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }
    if(errorCode == 'auth/weak-password'){
      toast.error('please set an strong password',{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
    if (errorCode == 'auth/invalid-email'){
      toast.error('invalid email',{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  });
  }
}


  return (
    <>
    <div className="main-box px-4 py-5 bg-green-600 rounded-lg">
        <h1 className="text-[26px] font-bold text-center ">Register</h1>
        <div className="username flex flex-col">
            <label className="text-[24px] font-semibold pt-1 pb-1">UserName :</label>
          <p className="text-red-500 text-[14px] font-normal">{error.usernameError}</p>
            <input onChange={(e)=>{setdata((prev)=>({... prev ,username:e.target.value})),seterror((prev)=>({... prev ,usernameError:""}))}} className="h-[30px] w-[300px] outline-none border-b-4 text-[24px] bg-transparent border-[#FFE31A]" type="text" />
        </div>
        <div className="Email flex flex-col">
            <label className="text-[24px] font-semibold pt-1 pb-1">Email :</label>
          <p className="text-red-500 text-[14px] font-normal">{error.emailError}</p>
            <input onChange={(e)=>{setdata((prev)=>({... prev , gmail:e.target.value})),seterror((prev)=>({...prev, emailError:""}))}} className="h-[30px] w-[300px] outline-none border-b-4 text-[24px] bg-transparent border-[#FFE31A]" type="Email" />
        </div>
        <div className="Password flex flex-col relative">
            <label className="text-[24px] font-semibold pt-1 pb-1">Password :</label>
          <p className="text-red-500 text-[14px] font-normal">{error.passwordError}</p>
            <input onChange={(e)=>{setdata((prev)=>({... prev ,password:e.target.value})),seterror((prev)=>({... prev ,passwordError:""}))}} className="h-[30px] w-[300px] outline-none border-b-4 text-[24px] bg-transparent border-[#FFE31A]" type={show? "text" : "password"} />
            {
              show?
              <IoMdEye onClick={()=>setshow(!show)} className=" absolute top-[50%] translate-y-[50%] right-0 text-[18px]"/>
              :
              <IoMdEyeOff onClick={()=>setshow(!show)} className=" absolute top-[50%] translate-y-[50%] right-0 text-[18px]"/>
            }
        </div> 
        <div className="btn text-center pt-3">
          <button onClick={handelbutton} className="px-3 py-1 text-[24px] text-white hover:scale-[1.1]  bg-[#F96E2A] rounded-md" type="submit">Register</button>
        </div>
    </div>
    </>
  )
}

export default Ragister