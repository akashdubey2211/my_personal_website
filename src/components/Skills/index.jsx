import React from 'react'
import './style.css'

const Skills = () => {
    return (
      <section id="skills">
  <div class="container">
   <div class="row">
    <div class="col-md-12">
     <div class="section_title text-center">
       <h2>Our key skills</h2>
       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. <br/>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
     </div>
    </div>
   </div>
   <div class="service_area">
    <div class="row">
     <div class="col-md-6">
      <div class="skill_left">
       <img class="img-responsive" src="https://i.ibb.co/qpz1hvM/About-us.jpg" alt="Our service"/> 
      </div> 
     </div> 
     <div class="col-md-6 skills_bar_design">
      <div class="progress-bar-linear">
       <p class="progress-bar-text">Graphics Design 
         <span class="float_right">85%</span>
       </p>
       <div class="progress-bar">
         <span data-percent="85"></span>
       </div>
      </div>
      <div class="progress-bar-linear">
       <p class="progress-bar-text">Web design
         <span class="float_right">98%</span>
       </p>
       <div class="progress-bar">
         <span data-percent="98"></span>
       </div>
      </div>

      <div class="progress-bar-linear">
       <p class="progress-bar-text">Web development 
         <span class="float_right">95%</span>
       </p>
       <div class="progress-bar">
        <span data-percent="95"></span>
       </div>
      </div>

      <div class="progress-bar-linear">
       <p class="progress-bar-text">Wordpress Theme
        <span class="float_right"> 80% </span>
       </p>
       <div class="progress-bar">
         <span data-percent="80"></span>
       </div>
      </div>

     </div>       
    </div>
   </div>
  </div>
 </section>
    )
}

export default Skills
