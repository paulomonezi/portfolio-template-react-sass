import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "email", icon: <FaEnvelope /> },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((newtwork, index) => (
        <a href="" className="social-btn" id={newtwork.name} key={index}>
            {newtwork.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
