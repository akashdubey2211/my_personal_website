import React from 'react'
import './p.css'
import GitHubIcon from '@material-ui/icons/GitHub';

import{ MdLiveTv} from 'react-icons/md';
const Projects = () => {
    return (
      <>
         <div id="aboutImg" class="divHeadline">
			<h1 class="headline1">PROJECTS</h1>
		</div>
    <div class='project_container'>
  <div class='card'>
    <img src={`${process.env.PUBLIC_URL}/e.jpeg`} alt="person"/>
    <div class='card-body'>
      <div class='card-text'>
        <h3 className="p_name">Covid-Defeat</h3>
        <p>
      find slots for vaccinations centre near by us .
          {/* <a href='https://codepen.io/abcretrograde/pen/ZogNOZ' target='_blank'>Grid&nbsp;version</a> */}
        </p>
      </div>
      <div className="icon_div">
   <a  className="home_ii" href="https://akashdubey2211.github.io/covid-defeat-india/">
       <GitHubIcon/>
   </a>
   {/* <a className="home_iii" href="https://github.com/akashdubey2211">
       <MdLiveTv/> Live
   </a> */}
  </div>
     
    </div>
  </div>
  <div class='card'>
    <img src={`${process.env.PUBLIC_URL}/c.jpeg`} alt="b"/>
    <div class='card-body'>
      <div class='card-text'>
        <h3 className="p_name">CryptoWorld</h3>
        <p>
          All about crypto-currency.
          {/* <a href='https://codepen.io/abcretrograde/pen/ZogNOZ' target='_blank'>Grid&nbsp;version</a> */}
        </p>
      </div>
      <div className="icon_div">
   <a  className="home_ii" href="https://akashdubey2211.github.io/crypto-verse-a-crypto-app/">
       <GitHubIcon/>
   </a>
   
  </div>
     
    </div>
  </div>
  <div class='card'>
    <img src={`${process.env.PUBLIC_URL}/d.jpeg`} alt="d"/>
    <div class='card-body'>
      <div class='card-text'>
        <h3 className="p_name">Let's Meet</h3>
        <p>
          Video Chat app based on Node.js
          {/* <a href='https://codepen.io/abcretrograde/pen/ZogNOZ' target='_blank'>Grid&nbsp;version</a> */}
        </p>
      </div>
      <div className="icon_div">
   <a  className="home_ii" href="https://chating-application-web.herokuapp.com/">
       <GitHubIcon/>
   </a>

  </div>
    </div>
  </div>
  <div class='card'>
    <img src={`${process.env.PUBLIC_URL}/f.jpeg`} alt="f"/>
    <div class='card-body'>
      <div class='card-text'>
        <h3 className="p_name">Course Selling Application</h3>
        <p>
          Its's course selling app (Frontend).
          {/* <a href='https://codepen.io/abcretrograde/pen/ZogNOZ' target='_blank'>Grid&nbsp;version</a> */}
        </p>
      </div>
      <div className="icon_div">
   <a  className="home_ii" href="https://course-selling.herokuapp.com/">
       <GitHubIcon/>
   </a>
  
  </div>
  
    </div>
  </div>
  </div>
  <div className="project_button">
  <a href="https://github.com/akashdubey2211" className="projects_link">More Projects</a>  
  </div>




      </>
      
 
    )
}

export default Projects
