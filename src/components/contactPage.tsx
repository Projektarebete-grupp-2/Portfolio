import React from "react";
import emailjs from "emailjs-com";

import { CSSProperties } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

interface Props {}
export default function ContactPage(props: Props) {
  /* Kanske göra en klass utav detta? */
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7mhxm8q",
        "template_vj0p6rn",
        e.target,
        "user_914CcAaQ8KuJjqqafaLS5"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thanks for contacting us!");
        },
        (error) => {
          console.log(error.text);

          throw new Error("De blev ett fel när vi skickade formuläret");
        }
      );
    e.target.reset();
  }

  return (
    <div style={formDiv}>
      <h1>Contact us!</h1>

      <form onSubmit={sendEmail} style={mainForm}>
        <div>
          <textarea style={fieldDiv} placeholder="Subject" name="subject" />
        </div>
        <div>
          <textarea style={fieldDiv} placeholder="Name" name="name" />
        </div>
        <div>
          <textarea style={fieldDiv} placeholder="Email" name="email" />
        </div>
        <div>
          <textarea style={fieldMessage} placeholder="Message" name="message" />
        </div>
        <div>
          {/*   <Button style={fieldBtn} type="submit" > Send Message</Button> */}
          <Button variant="outlined" type="submit">
            {" "}
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}

const formDiv: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  /*  backgroundColor: '#282c34', */
};
const mainForm: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "20vw",
  height: "30vh",
};
const fieldDiv: CSSProperties = {
  height: "5vh",
  resize: "none",
  borderRadius: "5px",
};
const fieldMessage: CSSProperties = {
  height: "5vh",
  borderRadius: "5px",
};
