import React, { useState } from 'react';
import SkillCard from './skillCard/SkillCard';
import './Skills.css';
import { SKILLS } from '../../utils/data';
import SkillsinfoCard from './skillCard/SkillsinfoCard/SkillsinfoCard';

const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    };

    return (
        <section className='skills-container'>
            <h5>Technical Proficiency</h5>

            <div className='skills-content'>
                <div className='skills'>
                    {SKILLS.map((item) => (
                        <SkillCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            OnClick={() => {
                                handleSelectSkill(item);
                            }}
                        />
                    ))}
                </div>

                <div className='skills-info'>
                    <SkillsinfoCard heading={selectedSkill.title} skills={selectedSkill.skills} />
                </div>
            </div>
        </section>
    )
}

export default Skills