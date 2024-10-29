export type ProjectResProps = {
  _id: string;
  name: string;
  slug: string;
  utilities: string;
  projectimage: string;
  projectvideo: string;
  contributors: ContributorsType[];
  tools: string[];
  description: string;
  links: {
    site: string;
    github: string;
  };
};

export type ContributorsType = {
  name: string;
  github: string;
  imageurl: string;
};
