import React from "react";
import emailjs from "emailjs-com";

import { CSSProperties } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

interface Props {}
export default function ContactPage(props: Props) {
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
    <div>
      <form onSubmit={sendEmail}>
        <div>
          <textarea placeholder="Subject" name="subject" />
        </div>
        <div>
          <textarea placeholder="Name" name="name" />
        </div>
        <div>
          <textarea placeholder="Email" name="email" />
        </div>
        <div>
          <textarea placeholder="Message" name="message" />
        </div>
        <div>
          <Button variant="outlined" color="primary" type="submit">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
