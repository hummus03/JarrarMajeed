'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Project from './components/project';

export default function Home() {
  const [resume, setResume] = useState({ skills: ['Excel', 'Word']});
  const [newSkill, setNewSkill] = useState('');
    
  const handler = async function() {
    const response = await fetch('/api/jobs');
    const projects = await response.json();
    setResume({ ...resume, projects: projects  });
  };

  useEffect(() => {
    handler();
  }, []);

  const projList = resume.projects?.map((proj, idx) => {
    return (
      <Project project={proj} index={idx} key={idx}></Project>
    );
  });

  const skillList = resume.skills?.map((skill, idx) => {
    return (
      <li key='idx'>{skill}</li>
    );
  });

  function skillChanged(event) {
    setNewSkill(event.target.value);
  }

  function addSkill() {
    const skills = resume.skills;
    skills.push(newSkill);
    setResume({...resume});
    setNewSkill('');
  }

  return (
    <main>
      <h1>Here is my Resume</h1>
      <h2>Projects</h2>
      <ul>
        {projList}
      </ul>
      <h2>Skills</h2>
      <ul>{skillList}</ul>

      <hr/>
      <div>
        <label>New Skill:</label>
        <input type="text" value={newSkill} onChange={skillChanged}/>
        <button onClick={addSkill}>Add</button>
      </div>
    </main>
  );
}