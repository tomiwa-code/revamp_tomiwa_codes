import type { Rule } from "@sanity/types";
import { FaUsers } from "react-icons/fa";

export default {
  name: "contributor",
  type: "document",
  title: "Contributor",
  icon: FaUsers,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "imageurl",
      title: "Image Url",
      type: "url",
      initialValue: "https://",
      validation: (Rule: Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }),
    },
    {
      name: "github",
      type: "url",
      title: "GitHub Profile",
      initialValue: "https://",
      validation: (Rule: Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }),
    },
  ],
};
