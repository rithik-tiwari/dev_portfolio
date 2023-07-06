import React from 'react';
import Image1 from "../assets/img/frontdev.png";
import Image2 from "../assets/img/BACKENDdev.png";
import Image3 from "../assets/img/webdesigningdev.png";
import Image4 from "../assets/img/version.png";
import './SkillsBrief.css';


const SkillsBrief = () => {
    return (
        <div>
            <section className='skillsbrief' id='skillsbrief'>
                <div className='skillsbrief_div'>
                    <div className='skills_row'>
                        <h1>Skills & Services</h1>
                        <div />
                        <div className='skills_col1'>
                           <div className="front_end">
                            <img src={Image1} alt="front_end" />
                           </div>
                           <div className="front_end_content">
                              <p>As an <mark>Front-End Developer</mark>, I have expertise in <u className="underline">HTML</u>, <u className="underline">CSS</u>, and <u className="underline">JavaScript (ES6+)</u>. I am experienced in building responsive and user-friendly web interfaces using frameworks such as <u className="underline">React.js</u> and <u className="underline">Next.js</u>. I am proficient in implementing CSS frameworks like <u className="underline">Bootstrap</u> and <u className="underline">Tailwind CSS</u> to create visually appealing and modern web designs.</p>
                           </div>
                        </div>
                        <div className='skills_col2'>
                           <div className="back_end">
                            <img src={Image2} alt="back_end" />
                           </div>
                           <div className="back_end_content">
                           <p>In terms of <mark>Back-End Development</mark>, I have a strong command of <u className="underline">Node.js</u> and <u className="underline">Express.js</u>. I am experienced in building RESTful APIs to enable seamless communication between front-end and back-end systems. I am comfortable working with both SQL databases like <u className="underline">MySQL</u>, as well as NoSQL databases like <u className="underline">MongoDB</u>.</p>
                           </div>
                        </div>
                        <div className='skills_col3'>
                           <div className="web_design">
                            <img src={Image3} alt="web_design" />
                           </div>
                           <div className="web_design_content">
                           <p>As a <mark>Web Designer</mark>, I have a keen eye for web design and possess skills in <u className="underline">Adobe Photoshop</u>, and <u className="underline">Figma</u>. I am proficient in creating wireframes and prototypes, ensuring a smooth and intuitive user experience. I am well-versed in UI/UX design principles and strive to create visually appealing and user-friendly interfaces.</p>
                           </div>
                        </div>
                        <div className='skills_col4'>
                           <div className="version_control">
                             <img src={Image4} alt="version_control" />
                           </div>
                           <div className="version_control_content">
                           <p>In <mark>Version Control</mark>, I have extensive experience using <u className="underline">Git</u> and <u className="underline">Github</u> for <u className="underline">Version Control</u>, allowing for efficient collaboration and tracking of code changes. I am comfortable working with branches, merging code, and resolving conflicts. </p>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SkillsBrief
