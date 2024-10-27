"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "@/context/Theme.Context";

type Props = {
  isDarkMode: boolean;
};

const ContactForm = ({ isDarkMode }: Props) => {
  // CUSTOM HOOKS
  const { theme } = useTheme();

  // REACT HOOKS
  const [isLoading, startTransition] = React.useTransition();
  const [msg, setMsg] = React.useState({
    text: "",
    status: false,
  });
  const [mail, setMail] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  // DECLARES
  const isDarkTheme = theme === "dark";

  // FUNCTIONS
  const clearForm = () => {
    setMail({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      emailjs
        .send("service_p0bzn9a", "template_irt9f7c", mail, "7XYo08YpLvvcOo7Rf")
        .then((res) => {
          if (res) {
            setMsg({
              text: "Thanks, message received. I'll get back as soon as possible.",

              status: true,
            });
            clearForm();
          }
        })
        .catch((err) => {
          if (err) {
            setMsg({
              text: "Sorry, message was not sent. Please check your network and try again.",
              status: true,
            });
          }
        });
    });
  };

  // STYLES
  const inputStyle = `text-sm ${
    isDarkTheme
      ? "text-gray-300 placeholder:text-gray-300"
      : "text-dark-300 placeholder:text-dark-300"
  }  text-sm py-4 border-b border-b-gray-400 w-full bg-transparent focus:outline-none focus:border-b-primary-500`;

  // USE EFFECTS
  React.useEffect(() => {
    if (msg?.status) {
      setTimeout(() => {
        setMsg((prev) => ({
          ...prev,
          status: false,
        }));
      }, 5000);
    }
  }, [msg?.status]);

  return (
    <div className="overflow-hidden">
      <div
        onClick={() =>
          setMsg({
            text: "",
            status: false,
          })
        }
        className={`bg-light-100 w-80 px-5 py-4 cursor-pointer rounded absolute duration-300 ${msg.status ? "right-10" : "-right-[100%]"} top-32 z-50 ${msg.status ? "border-green-500 border-r-8" : "border-red-500 border-r-8"}`}
      >
        <p className={`text-sm text-dark-200 font-medium`}>{msg.text}</p>
      </div>

      <div
        className={`relative z-50 mt-24 ${isDarkMode ? "bg-dark-200 backdrop-blur-sm bg-opacity-30" : ""} w-[50%] p-10 rounded-2xl mx-auto`}
      >
        <form className="w-full mx-auto" onSubmit={handleFormSubmit}>
          <div className="block md:flex md:items-center md:justify-between mb-5 md:mb-10">
            <div className="mb-5 md:mb-0 md:space-y-2 w-full md:w-5/12">
              <p
                className={`text-xs ${
                  isDarkTheme ? "text-gray-400" : "text-gray-500"
                }  capitalize md:mb-1`}
              >
                your name
              </p>
              <input
                type="text"
                className={`${inputStyle}`}
                placeholder="Enter your name"
                onChange={(e) =>
                  setMail((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="md:space-y-2 w-full md:w-5/12">
              <p
                className={`text-xs ${
                  isDarkTheme ? "text-gray-400" : "text-gray-500"
                }  capitalize md:mb-1`}
              >
                email address
              </p>
              <input
                type="email"
                className={`${inputStyle}`}
                placeholder="Enter your email address"
                onChange={(e) =>
                  setMail((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          <div className="w-full">
            <p
              className={`text-xs ${
                isDarkTheme ? "text-gray-400" : "text-gray-500"
              }  capitalize`}
            >
              your message
            </p>
            <textarea
              className={`text-sm ${
                isDarkTheme
                  ? "text-gray-300 placeholder:text-gray-300"
                  : "text-dark-300 placeholder:text-dark-300"
              }  text-sm py-3 border-b border-b-gray-400 w-full bg-transparent focus:outline-none h-20 md:h-16 resize-none focus:border-b-primary-500`}
              placeholder="Hi, we need a website for our Company X. How soon can you hop on to discuss this?"
              onChange={(e) =>
                setMail((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
              required
            />
          </div>

          <div className="text-center">
            <button
              className={`border-2 ${
                isDarkTheme
                  ? "border-purple-500 text-primary-300 hover:bg-light-600 hover:bg-opacity-5 hover:backdrop-blur-sm"
                  : "border-dark-300 text-dark-300 hover:bg-dark-300 hover:bg-opacity-5 hover:backdrop-blur-sm"
              } ${
                isLoading ? "pointer-events-none" : "pointer-events-auto"
              } duration-300 uppercase w-48 py-4 font-medium text-xs rounded-full mt-8 md:mt-10`}
            >
              {isLoading ? "sending" : "send a message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
