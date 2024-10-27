import type { Rule } from "@sanity/types";

export default {
  name: "contributor",
  type: "document",
  title: "Contributor",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "image",
      type: "image",
      title: "Profile Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "github",
      type: "url",
      title: "GitHub Profile",
      validation: (Rule: Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }),
    },
  ],
};
