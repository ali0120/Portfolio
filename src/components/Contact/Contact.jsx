import React, { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";

//style
import "./Contact.css";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [done, setDone] = useState(false)
  const form = useRef();
  const user = useRef();
  const email = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1izwbok",
        "template_3lvilti",
        form.current,
        "bv0jPFuil1tVMGWdS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          user.current.value = '';
          email.current.value = '';
          message.current.value = '';
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input ref={user} type="text" name="user_name" className="user" placeholder="Name" />
          <input ref={email} type="email" name="user_email" className="user" placeholder="Email" />
          <textarea ref={message} name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
