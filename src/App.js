import React, { useRef } from "react";
import "./App.scss";
import { nanoid } from "nanoid";
import { useReactToPrint } from "react-to-print";
import CV from "./components/CV";

import Form from "./components/Form";

function App() {
  const [headerInfo, setHeaderInfo] = React.useState({
    name: "John Doe",
    title: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione deserunt rerum expedita officia eaque et non perferendis debitis tempore laboriosam, cupiditate repellendus consectetur blanditiis aut possimus alias! Asperiores, officia hic!",
  });

  const [contactInfo, setContactInfo] = React.useState({
    location: "Wilmington, NC",
    phone: "(123) 123-1234",
    email: "johndoe@gmail.com",
    website: "JohnDoe.github.com",
  });

  const [experienceInfo, setExperienceInfo] = React.useState([
    {
      id: nanoid(),
      job: "Google",
      startDate: "2022-01-01",
      endDate: "2022-01-02",
      description: "Supervisor",
      duties: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      ],
    },
    {
      id: nanoid(),
      job: "Amazon",
      startDate: "2022-02-01",
      endDate: "2022-02-01",
      description: "Water Boy",
      duties: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      ],
    },
  ]);

  const [skillsInfo, setSkillsInfo] = React.useState([
    {
      id: nanoid(),
      skill: "React",
    },
    {
      id: nanoid(),
      skill: "HTML",
    },
    {
      id: nanoid(),
      skill: "Javascript",
    },
    {
      id: nanoid(),
      skill: "CSS",
    },
  ]);

  const [educationInfo, setEducationInfo] = React.useState([
    {
      id: nanoid(),
      school: "Berkley University",
      startDate: 2004,
      endDate: 2008,
      degree: "Bachelor of Arts in Business Communication",
    },
    {
      id: nanoid(),
      school: "West High School",
      startDate: 2000,
      endDate: 2004,
      degree: "Tech Sciences Pathway",
    },
  ]);

  const [accomplishmentsInfo, setAccomplishmentsInfo] = React.useState([
    {
      id: nanoid(),
      accomplishment: "Over 1k Stars on Github",
    },
    {
      id: nanoid(),
      accomplishment: "Over 15k downloads",
    },
  ]);

  const [personalSkillsInfo, setPersonalSkillsInfo] = React.useState([
    {
      id: nanoid(),
      skill: "Creative",
    },
    {
      id: nanoid(),
      skill: "Organized",
    },
    {
      id: nanoid(),
      skill: "Driven",
    },
    {
      id: nanoid(),
      skill: "Task Oriented",
    },
  ]);

  // Edits state based on the e.target.id, state id, and map index.
  function handleChange(e, id, index) {
    e.preventDefault();
    e.stopPropagation();
    const { name, value } = e.target;
    if (e.target.id === "header") {
      setHeaderInfo((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    } else if (e.target.id === "experience") {
      setExperienceInfo((prev) => {
        return prev.map((experience) => {
          return experience.id === id
            ? { ...experience, [name]: value }
            : experience;
        });
      });
    } else if (e.target.id === "duty") {
      setExperienceInfo((prev) => {
        return prev.map((experience) => {
          if (experience.id === id) {
            experience.duties[index] = value;
            return experience;
          } else {
            return experience;
          }
        });
      });
    } else if (e.target.id === "skills") {
      setSkillsInfo((prev) => {
        return prev.map((skill) => {
          return skill.id === id ? { ...skill, [name]: value } : skill;
        });
      });
    } else if (e.target.id === "personal-skills") {
      setPersonalSkillsInfo((prev) => {
        return prev.map((skill) => {
          return skill.id === id ? { ...skill, [name]: value } : skill;
        });
      });
    } else if (e.target.id === "education") {
      setEducationInfo((prev) => {
        return prev.map((education) => {
          return education.id === id
            ? { ...education, [name]: value }
            : education;
        });
      });
    } else if (e.target.id === "accomplishment") {
      setAccomplishmentsInfo((prev) => {
        return prev.map((accomplishment) => {
          return accomplishment.id === id
            ? { ...accomplishment, [name]: value }
            : accomplishment;
        });
      });
    } else if (e.target.id === "contact") {
      setContactInfo((prev) => {
        return { ...prev, [name]: value };
      });
    }
  }

  // Adds an item to state based on e.target.id, state id.
  function addInput(e, id) {
    e.preventDefault();
    console.log(experienceInfo);
    if (e.target.id === "addJob") {
      setExperienceInfo((prev) => {
        return [
          ...prev,
          {
            id: nanoid(),
            job: "Apple",
            startDate: "2022-03-01",
            endDate: "2022-03-02",
            description: "Water Man",
            duties: [
              "Lorem ipsum dolor sit amet consectetur.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            ],
          },
        ];
      });
    } else if (e.target.id === "addDuty") {
      setExperienceInfo((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            item.duties.push(`Duty ${item.duties.length + 1}`);
            return item;
          } else {
            return item;
          }
        });
      });
    } else if (e.target.id === "addSkill") {
      setSkillsInfo((prev) => {
        return [
          ...prev,
          {
            id: nanoid(),
            skill: "React",
          },
        ];
      });
    } else if (e.target.id === "addPersonalSkill") {
      setPersonalSkillsInfo((prev) => {
        return [
          ...prev,
          {
            id: nanoid(),
            skill: "Creative",
          },
        ];
      });
    } else if (e.target.id === "addEducation") {
      setEducationInfo((prev) => {
        return [
          ...prev,
          {
            id: nanoid(),
            school: "West High School",
            startDate: 2000,
            endDate: 2004,
            degree: "Tech Sciences Pathway",
          },
        ];
      });
    } else if (e.target.id === "addAccomplishment") {
      setAccomplishmentsInfo((prev) => {
        return [
          ...prev,
          {
            id: nanoid(),
            accomplishment: "Awarded most likely to have a good looking resume",
          },
        ];
      });
    }
  }

  // Removes item from state based on e.target.id, states id, and map index.
  function removeInput(e, id, index) {
    e.stopPropagation();
    e.preventDefault();
    if (e.target.id === "remove-job") {
      setExperienceInfo((prev) => {
        const newArr = prev.slice();
        newArr.splice(index, 1);
        return newArr;
      });
    } else if (e.target.id === "remove-skill") {
      setSkillsInfo((prev) => {
        const newArr = prev.slice();
        newArr.splice(index, 1);
        return newArr;
      });
    } else if (e.target.id === "remove-personal-skill") {
      setPersonalSkillsInfo((prev) => {
        const newArr = prev.slice();
        newArr.splice(index, 1);
        return newArr;
      });
    } else if (e.target.id === "remove-education") {
      setEducationInfo((prev) => {
        const newArr = prev.slice();
        newArr.splice(index, 1);
        return newArr;
      });
    } else if (e.target.id === "remove-accomplishment") {
      setAccomplishmentsInfo((prev) => {
        const newArr = prev.slice();
        newArr.splice(index, 1);
        return newArr;
      });
    } else if (e.target.id === "remove-duty") {
      setExperienceInfo((prev) => {
        return prev.map((experience) => {
          if (experience.id === id) {
            experience.duties.splice(index, 1);
            return experience;
          } else {
            return experience;
          }
        });
      });
    }
  }

  const componentRef = useRef();

  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <div className="App">
      <Form
        handlePrint={handlePrint}
        headerInfo={headerInfo}
        contactInfo={contactInfo}
        experienceInfo={experienceInfo}
        skillsInfo={skillsInfo}
        educationInfo={educationInfo}
        accomplishmentsInfo={accomplishmentsInfo}
        personalSkillsInfo={personalSkillsInfo}
        onChange={handleChange}
        removeInput={removeInput}
        addInput={addInput}
      />

      <CV
        headerInfo={headerInfo}
        experienceInfo={experienceInfo}
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
