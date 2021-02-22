import { useState } from 'react';


export function ExperienceBar() {

    const [experience, setExperience] = useState(0)

    return (
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
                <div style={{width: experience }}></div>
                <span className="current-experience" style={{ left: experience }}>{experience} xp</span>
            </div>
            
            <span>600 xp</span>
            <main>
                <div>
                    <button onClick={() => setExperience((experience + 50) % 600)}>Aumentar teste xp</button>
                </div>
            </main> 
        </header>
    );
}