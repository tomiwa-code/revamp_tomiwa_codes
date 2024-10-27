import type { Rule } from '@sanity/types';

const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 100 },
    },
    {
      name: "utilities",
      title: "Utilities",
      type: "string",
    },
    {
      name: "projectimage",
      title: "Project Image",
      type: "url",
      initialValue: "https://",
    },
    {
      name: "projectvideo",
      title: "Video Url",
      type: "url",
      initialValue: "https://",
    },
    {
      name: "links",
      title: "Project links",
      type: "object",
      description: "Add your project links:",
      fields: [
        {
          name: "site",
          title: "Site Url",
          type: "url",
          initialValue: "https://",
        },
        {
          name: "github",
          title: "Github Url",
          type: "url",
          initialValue: "https://",
        },
      ],
    },
    {
      name: "contribution",
      title: "Contributed",
      description: "Add a list of people who contributed",
      type: "array",
      of: [{ type: "string" }],
      initialValue: "https://",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Provide a brief overview of what this app does",
      validation: (Rule: Rule) => Rule.max(300),
    },
    {
      name: "tools",
      type: "array",
      title: "Tools Used",
      description: "Select the tools used to develop the app",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "React", value: "react" },
          { title: "React Native", value: "reactNative" },
          { title: "Next JS", value: "next" },
          { title: "Vite JS", value: "vite" },
          { title: "Tailwind CSS", value: "tailwind" },
          { title: "Sanity", value: "sanity" },
          { title: "Node JS", value: "nodeJs" },
          { title: "TypeScript", value: "typescript" },
          { title: "SWR", value: "swr" },
          { title: "Firebase", value: "firebase" },
          { title: "MongoDB", value: "mongoDB" },
          { title: "Framer", value: "framer" },
          { title: "Magic UI", value: "magic" },
        ],
      },
    },
    {
      name: "contributors",
      type: "array",
      title: "Contributors",
      of: [{ type: "reference", to: [{ type: "contributor" }] }],
      description: "Select contributors for this project",
    },
  ],
};

export default project;
