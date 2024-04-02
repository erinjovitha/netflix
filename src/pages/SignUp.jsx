import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BackgroundImages from "../components/BackgroundImages";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utlis/firebase-config";
import { useNavigate } from "react-router-dom";
export default function SignUp(){
  const [showpassword,setshowpassword] =useState(false);
  const navigate = useNavigate();
  const [formvalues,setformvalues]=useState({
    email:"",
    password:"",
  });


  const handleSignIn = async ()=>{
    try{
      const {email,password}=formvalues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password);
    }catch(err){
      console.log(err)
    }
  };

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/")
  });
  return(
    <Container showpassword={showpassword ? 'true':'false'}>
      <BackgroundImages/>
      <div className="content">
        <Header/>
        <div className="body flex column a-center j-center">
          <div className="text column flex">
            <h1>Unlimited movies, Tv shows and more</h1>
            <h4>Watch anywhere. Watch anytime</h4>
            <h6>Ready to watch? Enter your email to create or restart membership</h6>
          </div>
          <div className="form">
            <input type="email" placeholder="Email Address" name="email" value={formvalues.email} onChange={(e)=>setformvalues({...formvalues,[e.target.name]:e.target.value})}/>
            {
              showpassword &&(
              <input type="password" placeholder="Password" name="password"value={formvalues.password} onChange={(e)=>setformvalues({...formvalues,[e.target.name]:e.target.value})}/>
            )}
            
            {
              !showpassword && (<button onClick={()=>setshowpassword(true)}>Get Started</button>
            )}
            
          </div>
          <button onClick={handleSignIn}>Sign Up</button>
       
        </div>
    </div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showpassword }) =>
          showpassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;

