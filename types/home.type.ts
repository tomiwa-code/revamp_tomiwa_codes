export type HomeResProp = {
  firstText: string;
  secondText: string;
  heroText1: string;
  heroText2: string;
  github: string;
  resumeURL: ResumeProps;
};

export type HomeProps = {
  isDarkMode: boolean;
  content: HomeResProp;
};

export type ResumeProps = {
  _type: string;
  asset: { _ref: string; _type: string };
};
