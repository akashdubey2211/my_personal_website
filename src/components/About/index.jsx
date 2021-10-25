import './style.css'
import {AiOutlineDownload} from 'react-icons/ai'

const About = () => {
    return (
     
        <main class="CV-page">
          <div id="aboutImg" class="divHeadline">
			<h1 class="headline1">ABOUT ME</h1>
		</div>
            <section className="pr_details">
{/* <div class="blog-header">
                <h3>About Me</h3>
               
            </div> */}
<div className="home">
            <div className="title">
                <h1>
                    <p className="home_header_about">
Hi, I'm <strong style={{color:"#150050"}}>Akash Dubey</strong>, a self-taught passionate FrontEnd developer from India,
currently I'm in final year of my engineering - 2022 from SRMU Lucknow.
I've made countless side projects and I also posses magical powers of using react to build delightful user interfaces.
also love to solve realworld problems by my code:)</p>
                    
                </h1>
               
                 
                <a className="btn9" href="https://drive.google.com/file/d/1Ru4czioaKDPFKI86s6--SPkQXkB7XDDs/view?usp=sharing">Download Resume <AiOutlineDownload className="home_icons" /></a>
          
            <br/>
          <div className="icon_div">
{/*         
                <a className="home_i" href="https://www.linkedin.com/in/akash-dubey-1040791a7/">
               <LinkedInIcon/>
           </a>
           <a  className="home_i" href="https://www.facebook.com/profile.php?id=100025704156015">
               <FacebookIcon/>
           </a>
           <a className="home_i" href="https://github.com/akashdubey2211">
               <GitHubIcon/>
           </a> */}
          </div>
            </div>
            <div className="persona">
            <img className="pp_img"
            src={`${process.env.PUBLIC_URL}/profile-pic.JPG`} alt="person"/>
           
            </div>
         
        </div>
</section>
  
        <div class="CV-grid">
          <div class="CV-grid-column">
            <div class="CV-jobs">
              <h2 class="CV-secondaryHeading CV-jobs-heading" style={{justifyContent:'center', alignContenter : 'center', color:"#09015f"}}> Relevant Experience</h2>
              <section class="CV-timeline CV-job">
                <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">MERN STACK DEVELOPER INTERN : </span> Jithvar Consultancy Services Pvt. Ltd. , Lucknow <span class="CV-timeline-heading-location">  </span><small class="CV-timeline-heading-duration">MAY - JULY 2021</small></h3>
                <ul class="CV-timeline-details">
                  <li class="CV-job-timeline-item">Developed Web Application covid management system for a hospital know as Avani Covid
using React and Node.js etc.</li>
                  <li class="CV-job-timeline-item">Developed Web Application T eam-stats using React and apis - where user can check match
status , upcoming matchs and previous matchs and on so many features using React and APIs..</li>

                  <li class="CV-job-timeline-item">WORKED ON | React.Js ,Node.Js, Express.Js, MongoDB.</li>
                </ul>
              </section>
              <section class="CV-timeline CV-job">
                <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">SDE INTERN :  </span>GeeksVila Solutions, Pune. <span class="CV-timeline-heading-location"></span><small class="CV-timeline-heading-duration">SEP 2020 - NOV 2020</small></h3>
                <ul class="CV-timeline-details">
                  <li class="CV-timeline-details-item">Developed Ecommerce application using react and node - (Grocery Shop ) which allows to
user can purchase , and add to cards their products. </li>
                  <li class="CV-timeline-details-item">Developed Expense management systems using react and node which allows to user can
manage their expense , also able to login through gmail .</li>
<li class="CV-timeline-details-item">WORKED ON | React.js ,Node.Js, Express.Js, MongoDB.</li>
                </ul>
              </section>
              <section class="CV-timeline CV-job">
                <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">WEB-DEVELOPER INTERN : </span> <span class="CV-timeline-heading-location">Varahas Technologies, Bhatinda – Punjab</span><small class="CV-timeline-heading-duration">MARCH 2020 - JUNE 2020</small></h3>
                <ul class="CV-timeline-details">
                  <li class="CV-timeline-details-item">Developed a Wesite for bank (fdk bank - frontend) using Html , css and javaScript. </li>
                  <li class="CV-timeline-details-item">Developed A job hunting website know as SparGEE. . </li>
                  <li class="CV-timeline-details-item">WORKED ON | Html , Css , Bootstrap , JavaScript,</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    )
}

export default About;