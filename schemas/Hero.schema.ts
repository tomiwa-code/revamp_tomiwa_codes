import { FaHouse } from "react-icons/fa6";

const hero = {
  name: "hero",
  title: "Hero",
  type: "document",
  icon: FaHouse,
  fields: [
    {
      name: "firstText",
      title: "Text above the hero text",
      type: "string",
    },
    {
      name: "heroText1",
      title: "Hero text1",
      type: "string",
    },
    {
      name: "heroText2",
      title: "Hero text2",
      type: "string",
    },
    {
      name: "secondText",
      title: "Text below the hero text",
      type: "string",
    },
    {
      name: "github",
      title: "Github link",
      type: "url",
      initialValue: "https://github.com/tomiwa-code",
    },
    {
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
    },
  ],
};

export default hero;
