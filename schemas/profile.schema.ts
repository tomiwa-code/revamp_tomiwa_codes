import { FiGithub } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import {
  BsEnvelope,
  BsInstagram,
  BsPhone,
  BsTiktok,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { FaUser } from "react-icons/fa6";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: FaUser,
  fields: [
    {
      name: "profileImage",
      title: "Profile Image",
      type: "string",
      initialValue: "https://",
    },
    {
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
      description: "A short description about you",
    },
    {
      name: "fullname",
      title: "Full Name",
      type: "string",
      description: "Your full name",
    },
    {
      name: "greeting",
      title: "Greeting",
      type: "string",
      description: "A greeting message",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "bottomText",
      title: "slogan or word of inspiring",
      type: "string",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "Add your social media links:",
      fields: [
        {
          name: "github",
          title: "Github URL",
          type: "url",
          initialValue: "https://github.com/tomiwa-code",
          icon: FiGithub,
        },
        {
          name: "linkedin",
          title: "Linkedin URL",
          type: "url",
          initialValue: "https://www.linkedin.com/in/ayoola-ogunbase-96694715b",
          icon: TfiLinkedin,
        },
        {
          name: "twitter",
          title: "Twitter URL",
          type: "url",
          initialValue: "https://www.twitter.com/crownkvnq",
          icon: BsTwitter,
        },
        {
          name: "instagram",
          title: "Instagram URL",
          type: "url",
          initialValue: "https://www.instagram.com/crown.kvnq",
          icon: BsInstagram,
        },
        {
          name: "tiktok",
          title: "TikTok URL",
          type: "url",
          initialValue: "https://www.tiktok.com/@tomiwa.codes",
          icon: BsTiktok,
        },
      ],
    },
    {
      name: "contacts",
      title: "Contacts",
      type: "object",
      description: "Add a way you can be contacted:",
      fields: [
        {
          name: "phone",
          title: "Phone number",
          type: "string",
          icon: BsPhone,
        },
        {
          name: "email",
          title: "Email address",
          type: "string",
          icon: BsEnvelope,
        },
        {
          name: "whatsapp",
          title: "WhatsApp link",
          type: "url",
          icon: BsWhatsapp,
        },
      ],
    },
  ],
};

export default profile;
