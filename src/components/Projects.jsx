import React from 'react'
import ProjectDemo from './ProjectDemo'
import landingPageImage from '../media/landing-page.PNG'
import minecraftImage from '../media/minecraft.PNG'
import planImage from '../media/plan.PNG'

const Projects = () => {
    return (
        <div>
            <h1 className='header'>What can I do for you?</h1>
            <h2 className='sub-header'>I've worked with:</h2>
            Front-end: HTML, CSS, JS, Jquery, Bootstrap, Material-UI, React, Redux<br />Back-end: Python, Django,
            Django-rest. JavaScript, Node.js<br /> Databases: PostgreSQL, MySQl
            <h2 className='sub-header'>Some of my work:</h2>
            <ProjectDemo description='Basic HTML & CSS landing page' codeLink='https://github.com/sapirm290/Landing_page' siteLink='https://sapirm290.github.io/Landing_page/'  image={landingPageImage}/>
            <ProjectDemo description='A simple minecraft like game using JS' codeLink='https://github.com/sapirm290/Minecraft' siteLink='https://sapirm290.github.io/Minecraft/' image={minecraftImage} />
            <ProjectDemo description=' A full APP using React, Redux, Material UI for the front-end, and Python, Django, Django-rest, knox auth
            for the back-end. hosted on Heroku' codeLink='https://github.com/sapirm290/planner' siteLink='https://arcane-cliffs-92152.herokuapp.com/?#/' image={planImage} />
        </div>
    )
}

export default Projects
