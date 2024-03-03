import React from 'react'
import './SkillCard.css'
const SkillCard = ({ title, iconUrl, isActive, OnClick }) => {
    return (
        <div
            className={`skill-card ${isActive ? 'active' : ''}`} onClick={() => OnClick()}>

            <div className='skill-icon'>
                <img src={iconUrl} alt={title} />
            </div>
            <span>{title}</span>
        </div>

    )
}

export default SkillCard