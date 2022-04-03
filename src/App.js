import React, { useRef } from 'react';
import './App.scss';
import ExperienceForm from './components/forms/ExperienceForm';
import { nanoid } from 'nanoid'
import SkillsForm from './components/forms/SkillsForm';
import { useReactToPrint } from 'react-to-print'
import CV from './components/CV';
import EducationForm from './components/forms/EducationForm';
import AccomplishmentForm from './components/forms/AccomplishmentForm';
import HeaderForm from './components/forms/HeaderForm';
import PersonalSkillsForm from './components/forms/PersonalSkillsForm';
import ContactForm from './components/forms/ContactForm';


function App() {


  const [headerInfo, setHeaderInfo] = React.useState({
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '(336) 112 3541',
    address: '100 Lord St',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione deserunt rerum expedita officia eaque et non perferendis debitis tempore laboriosam, cupiditate repellendus consectetur blanditiis aut possimus alias! Asperiores, officia hic!'
  })

  const [contactInfo, setContactInfo] = React.useState({
    location: 'Wilmington, NC',
    phone: '(336) 112 3541',
    email: 'johndoe@gmail.com',
    website: 'JohnDoe.github.com'
  })

  const [experienceInfo, setExperienceInfo] = React.useState([
    {
      id: nanoid(),
      job: 'Walmart',
      date: '1992-01-12',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi asperiores dicta ipsa suscipit. Recusandae, ut fugiat. Labore dignissimos fugiat quam?',
      duties: ['duty1', 'duty2']
    },
    {
      id: nanoid(),
      job: 'Walmart',
      date: '1992-01-12',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi asperiores dicta ipsa suscipit. Recusandae, ut fugiat. Labore dignissimos fugiat quam?',
      duties: ['duty3', 'duty4']
    }
  ])

  const [jobDutiesInfo, setJobDutiesInfo] = React.useState([
    {
      id: nanoid(),
      duties: ['duty1', 'duty2']
    },
    {
      id: nanoid(),
      duties: ['duty3', 'duty4']
    },
  ])

  const [skillsInfo, setSkillsInfo] = React.useState([
    {
      id: nanoid(),
      skill: 'React'
    }
  ])

  const [educationInfo, setEducationInfo] = React.useState([
    {
      id: nanoid(),
      school: 'Berkley University',
      startDate: '2000-1-12',
      endDate: '2004-1-12',
      degree: 'Graphic Design'
    }
  ])

  const [accomplishmentsInfo, setAccomplishmentsInfo] = React.useState([
    {
      id: nanoid(),
      accomplishment: 'Award for winning'
    }
  ])

  const [personalSkillsInfo, setPersonalSkillsInfo] = React.useState([
    {
      id: nanoid(),
      skill: 'Creative'
    }
  ])

  function handleChange(e, id, index) {
    console.log(experienceInfo);
    console.log(id);
    e.preventDefault()
    e.stopPropagation()
    const { name, value } = e.target
    if (e.target.id === 'header') {
      setHeaderInfo(prev => {
        return {
          ...prev,
          [name]: value
        }
      })
    } else if (e.target.id === 'experience') {
      setExperienceInfo(prev => {
        return prev.map(experience => {
          return experience.id === id ?
            { ...experience, [name]: value } :
            experience
        })
      })
    } else if (e.target.id === 'duty') {
      setExperienceInfo(prev => {
        return prev.map(experience => {
          if (experience.id === id) {
            experience.duties[index] = value
            return experience
          } else {
            return experience
          }
        })
      })
    } else if (e.target.id === 'skills') {
      setSkillsInfo(prev => {
        return prev.map(skill => {
          return skill.id === id ?
            { ...skill, [name]: value } :
            skill
        })
      })
    } else if (e.target.id === 'personal-skills') {
      setPersonalSkillsInfo(prev => {
        return prev.map(skill => {
          return skill.id === id ?
            { ...skill, [name]: value } :
            skill
        })
      })
    } else if (e.target.id === 'education') {
      setEducationInfo(prev => {
        return prev.map(education => {
          return education.id === id ?
            { ...education, [name]: value } :
            education
        })
      })
    } else if (e.target.id === 'accomplishment') {
      setAccomplishmentsInfo(prev => {
        return prev.map(accomplishment => {
          return accomplishment.id === id ?
            { ...accomplishment, [name]: value } :
            accomplishment
        })
      })
    } else if (e.target.id === 'contact') {
      setContactInfo(prev => {
        return { ...prev, [name]: value }
      })
    }
  }
  function addInput(e, id) {
    e.preventDefault()
    console.log(experienceInfo);
    if (e.target.id === 'addJob') {
      setExperienceInfo(prev => {
        return [...prev, {
          id: nanoid(),
          job: 'Walmart',
          date: '1992-01-12',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi asperiores dicta ipsa suscipit. Recusandae, ut fugiat. Labore dignissimos fugiat quam?',
          duties: ['duty1', 'duty2']
        }]
      })
    } else if (e.target.id === 'addDuty') {
      setExperienceInfo(prev => {
        return prev.map(item => {
          if (item.id === id) {
            item.duties.push(`Duty ${item.duties.length + 1}`)
            return item
          } else {
            return item
          }
        })
      })
    } else if (e.target.id === 'addSkill') {
      setSkillsInfo(prev => {
        return [...prev, {
          id: nanoid(),
          skill: 'React'
        }]
      })
    } else if (e.target.id === 'addPersonalSkill') {
      setPersonalSkillsInfo(prev => {
        return [...prev, {
          id: nanoid(),
          skill: 'Creative'
        }]
      })
    } else if (e.target.id === 'addEducation') {
      setEducationInfo(prev => {
        return [...prev, {
          id: nanoid(),
          school: 'Berkley University',
          startDate: '2000-1-12',
          endDate: '2004-1-12',
          degree: 'Graphic Design'
        }]
      })
    } else if (e.target.id === 'addAccomplishment') {
      setAccomplishmentsInfo(prev => {
        return [...prev, {
          id: nanoid(),
          accomplishment: 'Award for winning'
        }]
      })
    }
  }

  function removeInput(e, id, index) {
    e.preventDefault()
    if (e.target.id === 'remove-job') {
      setExperienceInfo(prev => {
        return prev.map(experience => {
          return experience.id === id ?
            prev.splice(prev.indexOf(experience), 1) :
            experience
        })
      })
    } else if (e.target.id === 'remove-skill') {
      setSkillsInfo(prev => {
        return prev.map(skill => {
          return skill.id === id ?
            prev.splice(prev.indexOf(skill), 1) :
            skill
        })
      })
    } else if (e.target.id === 'remove-personal-skill') {
      setPersonalSkillsInfo(prev => {
        return prev.map(skill => {
          return skill.id === id ?
            prev.splice(prev.indexOf(skill), 1) :
            skill
        })
      })
    } else if (e.target.id === 'remove-education') {
      setEducationInfo(prev => {
        return prev.map(education => {
          return education.id === id ?
            prev.splice(prev.indexOf(education), 1) :
            education
        })
      })
    } else if (e.target.id === 'remove-accomplishment') {
      setAccomplishmentsInfo(prev => {
        return prev.map(accomplishment => {
          return accomplishment.id === id ?
            prev.splice(prev.indexOf(accomplishment), 1) :
            accomplishment
        })
      })
    }else if (e.target.id === 'remove-duty') {
      setExperienceInfo(prev => {
        return prev.map(experience => {
          if (experience.id === id) {
            experience.duties.splice(index, 1)
            return experience
          } else {
            return experience
          }
        })
      })
    }
  }



  const experienceFormElements = experienceInfo.map((experience, index) => {
    return <ExperienceForm
      key={experience.id}
      data={experience}
      index={index}
      onChange={handleChange}
      addJob={addInput}
      id={experience.id}
      removeJob={removeInput} />
  })
  const skillsFormElements = skillsInfo.map(skill => {
    return <SkillsForm
      onChange={handleChange}
      data={skill}
      key={skill.id}
      removeSkill={removeInput} />
  })
  const educationFormElements = educationInfo.map(education => {
    return <EducationForm
      onChange={handleChange}
      data={education}
      key={education.id}
      removeEducation={removeInput} />
  })
  const accomplishmentFormElements = accomplishmentsInfo.map(accomplishment => {
    return <AccomplishmentForm
      onChange={handleChange}
      data={accomplishment}
      key={accomplishment}
      removeAccomplishment={removeInput} />
  })
  const personalSkillsFormElements = personalSkillsInfo.map(skill => {
    return <PersonalSkillsForm
      onChange={handleChange}
      data={skill}
      key={skill}
      removeSkill={removeInput} />
  })

  const componentRef = useRef()

  const handlePrint = useReactToPrint({ content: () => componentRef.current })

  return (
    <div className="App">
      <div className="main-left">
        <button onClick={handlePrint} ></button>
        <HeaderForm handleChange={handleChange} data={headerInfo} />
        <div className="contact-forms">
          <ContactForm onChange={handleChange} data={contactInfo} />
        </div>
        <div className="experience-forms">
          {experienceFormElements}
          <button onClick={addInput} id='addJob'>Add Job</button>
        </div>
        <div className="skills-forms">
          {skillsFormElements}
          <button onClick={addInput} id='addSkill'>Add Skill</button>
        </div>
        <div className="education-forms">
          {educationFormElements}
          <button onClick={addInput} id='addEducation'>Add School</button>
        </div>
        <div className="accomplishment-forms">
          {accomplishmentFormElements}
          <button onClick={addInput} id='addAccomplishment'>Add Accomplishment</button>
        </div>
        <div className="personal-skills-forms">
          {personalSkillsFormElements}
          <button onClick={addInput} id='addPersonalSkill'>Add Personal Skill</button>
        </div>

      </div>
      <CV
        headerInfo={headerInfo}
        experienceInfo={experienceInfo}
        jobDutiesInfo={jobDutiesInfo}
        skillsInfo={skillsInfo}
        educationInfo={educationInfo}
        accomplishmentsInfo={accomplishmentsInfo}
        personalSkillsInfo={personalSkillsInfo}
        contactInfo={contactInfo}
        ref={componentRef}
      />
    </div>
  );
}

export default App;
