
import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiOutlineArrowUp,
} from "react-icons/ai";
// import lg from "../assets/logo.jpg";
const Footer = () => {
    return (
        <footer>
            <div>
                <img
                    src={"https://media.licdn.com/dms/image/D4D03AQGeBRfKBjuF-A/profile-displayphoto-shrink_800_800/0/1674808449877?e=1686182400&v=beta&t=JdL5-1YPbAmOZz5nV34mAxeUE4Rfqcp5E1Pd09scl3o"}
                    alt="Founder"
                />

                <h2>Akash Kumar Singh</h2>
                <p>Motivation is temporary, but discipline last forever.</p>
            </div>

            <aside>
                <h2>Social Media</h2>

                <article>
                    <a href="https://www.linkedin.com/in/akash-kumar-singh-712327234/" target={"blank"}>
                        <AiFillLinkedin />
                    </a>
                    <a href="https://www.instagram.com/ak47.ft/" target={"blank"}>
                        <AiFillInstagram />
                    </a>
                    <a href="https://github.com/AkashKumar3d" target={"blank"}>
                        <AiFillGithub />
                    </a>
                </article>
            </aside>
            <a href="#home">
                <AiOutlineArrowUp />
            </a>
        </footer>
    );
};
export default Footer;