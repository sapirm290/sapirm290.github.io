import React from 'react'

import './ProjectDemo.css'
const ProjectDemo = ({ description, codeLink, siteLink, image }) => {
    return (
        <article className='demo'>
            <p className='project-description'>{description}</p>
            <p className='project-links'><a class="project-link" href={codeLink}>
                Code</a> <a class="project-link" href={siteLink}> Site</a></p>
            <img src={image} alt='sample landing page' />

        </article>
    )
}

export default ProjectDemo
