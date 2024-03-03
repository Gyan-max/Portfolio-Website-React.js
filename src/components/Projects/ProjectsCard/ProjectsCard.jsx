import React from 'react'
import './ProjectsCard.css'

const ProjectsCard = ({ details }) => {
    return (
        <div className='project-card'>
            <h6>{details.title}</h6>

            <div className='projects-url'>{details.url}</div>


            <ul>
                {details.description.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            {/* <ul>
                <li>{details.url}</li>
            </ul> */}

        </div>
    );
};

export default ProjectsCard