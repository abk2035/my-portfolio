import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [message,setMessage] = useState('');
  const [error,setError]= useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    if((email==='' ) || (name === '') || ( message === '')){
      setError(true);
    }else{
    emailjs
      .sendForm(
        "service_sjk32kr",
        "template_z58dvuc",
        form.current,
        "gS1Z6eZfep_AZdpH8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
          setTimeout(setDone(false),3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }

  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}} >Get in Touch</span>
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
          <input type="text" name="user_name" className="user"  placeholder="Name" onChange={(e)=>{setName(e.value); setError(false)}}/>
          <input type="email" name="user_email" className="user" placeholder="Email" onChange={(e)=>{setEmail(e.value); setError(false)}}/>
          <textarea name="message" className="user" placeholder="Message" onChange={(e)=>{setMessage(e.value);setError(false)}}/>
          <span className="error">{error && "please fill all fields correctly"}</span>
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
