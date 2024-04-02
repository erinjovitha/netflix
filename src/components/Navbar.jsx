import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assests/netflix-clone-react-node/netflix-ui/src/assets/logo.png";
import { Link } from "react-router-dom";
import {FaPowerOff, FaSearch} from 'react-icons/fa';
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../utlis/firebase-config";
export default function Navbar({ isScrolled }) {

   const links=[
   { name: "Home", link: "/"},
   { name: "Tv Shows", link: "/tv"},
   { name: "Movies", link: "/movies"},
   { name: "My List", link: "/mylist"}
];  

    const[showsearch,setshowsearch]= useState(false);
    const[inputHover,setinputHover]= useState(false);
    return(<Container>
        <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
            <div className="left flex a-center">
                <div className="brand flex a-center j-center">
                    <img src={logo} alt="logo"/>
                </div>
                <ul className="links flex">
                    {links.map(({name,link})=>{
                        return(
                            <li key={name}><Link to={link}>{name}</Link></li>
                        );
                        })}
                </ul>
            </div>
            <div className="right flex a-center">
                <div className={`search ${showsearch? "show-search" : ""}`}>
                    <button onFocus={() => setshowsearch(true)} onBlur={
                        ()=>{
                            if(!inputHover) setshowsearch(false);
                        }
                    }>
                        <FaSearch/>
                    </button>
                    <input type="text" placeholder="Search"
                    onMouseEnter={()=>setinputHover(true)}
                    onMouseLeave={()=>setinputHover(false)}
                    onBlur={()=>{
                        setshowsearch(false);
                        setinputHover(false);
                    }}
                    />

                </div>
                <button onClick={()=>signOut(firebaseAuth)}>
                    <FaPowerOff/>
                </button>
            </div>
        </nav>
    </Container>
    );
}


const Container = styled.div`

`;