import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
const Header=()=>{
    const location=useLocation()
    
    useEffect(()=>{
        
        if(location.pathname != "/") document.querySelector('.navbar').classList.add('sticky2')
    },[location])
    

    return(
        <nav class="navbar navbar-expand-lg header">
            <div class="container-fluid">
                        <a class="navbar-brand" href="/">fywo</a>
                   
                    
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
                                <li class="nav-item">
                                    <a class="nav-link hom" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link cat" href="#category">Category</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link abt" href="#about">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link cnt" href="#">Contact</a>
                                </li>
                                
                                
                            </ul>
                        </div>
                    
                     
               
                
                    
                
            </div>
        </nav>
    )
}

export default Header