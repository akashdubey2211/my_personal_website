import React from 'react'
import {Link} from 'react-router-dom'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import {AiOutlineDownload ,AiFillHtml5} from 'react-icons/ai'
import{ BsCodeSlash} from 'react-icons/bs';
import {IoLogoJavascript} from 'react-icons/io';
import {FaPaintBrush ,FaNode,FaAws} from 'react-icons/fa'
import {DiReact,DiMongodb,DiJava} from 'react-icons/di'
import "./style.css"
const Home = () => {
    return (
        <>

<div className="home">
           
            <div className="title">
                <h1>
                    <p className="home_header">Hello, I'm</p>
                    <div class="title_container">
 
 <div class="hider">
  <span class="character">A</span>
 </div>
 
 <div class="hider">
  <span class="character">k</span>
 </div>
 
 <div class="hider">
  <span class="character">a</span>
 </div>
 
 <div class="hider">
  <span class="character">s</span>
 </div>
 
 <div class="hider">
  <span class="character">h</span>
 </div>
 <div class="hider">
  <span class="character">-</span>
 </div>
 <div class="hider">
  <span class="character">D</span>
 </div>
 <div class="hider">
  <span class="character">U</span>
 </div>
 <div class="hider">
  <span class="character">B</span>
 </div>
 <div class="hider">
  <span class="character">e</span>
 </div>
 <div class="hider">
  <span class="character">Y</span>
 </div>
 
</div> 

                    <p className="home_header_b">CREATIVE FRONT-END WEB DEVELOPER (MERN)</p>
                </h1>
               
               <a className="btn9" href="https://drive.google.com/file/d/1Ru4czioaKDPFKI86s6--SPkQXkB7XDDs/view?usp=sharing">Download Resume <AiOutlineDownload className="home_icons" /></a>
          
            <br/>
          <div className="icon_div">
        
                <a className="home_i" href="https://www.linkedin.com/in/akash-dubey-1040791a7/">
               <LinkedInIcon/>
           </a>
           <a  className="home_i" href="https://www.facebook.com/profile.php?id=100025704156015">
               <FacebookIcon/>
           </a>
           <a className="home_i" href="https://github.com/akashdubey2211">
               <GitHubIcon/>
           </a>
          </div>
            </div>
            <div className="person swing">
            <img
            src={`${process.env.PUBLIC_URL}/invite1.png`} alt="person"/>
           
            </div>
         
        </div> 
         <section class="our-blogs">
        <div class="container">
            <div class="blog-header">
                <h3>Things I love</h3>
               
            </div>

            <div class="blogs">

                <div class="blog">
                    <BsCodeSlash className="love_icons" />
                <h4 className="i_love">  Frontend</h4>
                    
                    <p class="blog-text">
                    I'm more front end focused and love to work with Reactjs as well as pure HTML, CSS.
                        </p>
                
                </div>

                <div class="blog">
                    <IoLogoJavascript className="love_icons" />
               <h4 className="i_love">  Javascript
                    </h4>
                    <p class="blog-text">
                    I just extremely love javascript, I can’t even express how much I love javascript with just a few lines..
                        </p>
                
                </div>
                <div class="blog">
                    <FaPaintBrush  className="love_icons" />
              
                    <h4 className="i_love">  Creative Coding</h4>
                    <p class="blog-text">
                    I love creative coding because I do both coding & designing. making beautiful art with code is very satisfying to me.
                        </p>
                
                </div>
            </div>
        </div>
    </section>

    <div class="skills_header">
                <h3>My Skills</h3>
               
            </div>


    <div class="flexcontainer">
        
 <div>  <AiFillHtml5 className="love_icons" /></div>
 <div>  <DiReact className="love_icons" /></div>
 <div>  <FaNode className="love_icons" /></div>
 <div>  <DiMongodb className="love_icons" /></div>
 <div>  <DiJava className="love_icons" /></div>
 <div>  <FaAws className="love_icons" /></div>
 

</div> 

{/* 
about */}


<section class="showcase-area" id="showcase">
      <div class="showcase-container">
        <h1 class="main-title" id="home">“A website without visitors is like a ship lost in the horizon.”</h1>
        <p> Dr. Christopher Dayagdag</p>
       
      </div>
    </section>
        </>
    
        
    )
    
}



export default Home;
