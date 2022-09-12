import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './Header'
import Banner from './Banner'
import Home from './Home'
import Content from './Content';
import Category from './Category'
import { Fragment,useEffect } from 'react';

function App() {
  const url="https://sheltered-ocean-62008.herokuapp.com/"

  useEffect(()=>{
    const header=document.querySelector('.banner')
    const navHeight=document.querySelector('.navbar').getBoundingClientRect().height;


    const stickyNav=function(entries){
        const entry=entries[0]  //Since there is only one threshold we do not need to loop over entries

        
        if(!entry.isIntersecting){
         
          document.querySelector('.navbar').classList.add('sticky');
        }

        else {
          document.querySelector('.navbar').classList.remove('sticky');
          
        }
    }

    const headerObserver=new IntersectionObserver(stickyNav,{
        root:null,
        threshold:0,
        //rootMargin: "-20px"
        rootMargin:`-${navHeight}px` //To make the nav appear at its exact height before reaching the specified position in threshold
    })

    window.addEventListener('scroll',()=>{
      headerObserver.observe(header)
    })
    
  },[])
  return (
    <div className="App">
      <Router>
          <Header/>
          <Routes>
              <Route path="/" element={
                <Fragment>
                  <Banner/>
                  <Home url={url}/>
                  <Category url={url}/>
                </Fragment>}>
              </Route>
              <Route path="/:id" element={<Content url={url}/>}></Route>
          </Routes>
      </Router>
      

    </div>
  );
}

export default App;
