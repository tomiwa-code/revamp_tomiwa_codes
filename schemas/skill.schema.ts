import { GiSkills } from "react-icons/gi";

const skills = {
  name: "skills",
  title: "Skills",
  type: "document",
  icon: GiSkills,
  fields: [
    {
      name: "title",
      title: "Skill Name",
      type: "string",
      description: "Name of the skill",
    },
    {
      name: "value",
      title: "Skill Value",
      type: "string",
      description: "Name of the skill",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["frontend", "backend", "design"],
      },
      description: "Category of the skill (frontend, backend, design)",
    },
    {
      name: "subgroup",
      title: "Subgroup",
      type: "string",
      description: "Subgroup of the skill (Tools/Language, Color, etc.)",
    },
  ],
};

export default skills;