import React, { useState } from "react";

const ContactForm = () => {
  const [info] = useState({
    to: "contact@peterstenberg.no",
    subject: "Mail from peterstenberg.no",
    email: "",
    thanks: "https://www.peterstenberg.no"
  });
  const [form, setForm] = useState();

  const onFieldChange = (fieldName, event) => {
    setForm({ [fieldName]: event.target.value });
  };

  const handleSubmit = event => {
    event.target.style.opacity = "1";
    event.target.style.transform = "scale(1)";
  };

  return (
    <div id={"contact-form-container"} className="contact-form-container">
      <div className="contact-form">
        <form
          data-validate
          method="POST"
          action="https://www.domeneshop.no/cgi-bin/mailto.cgi"
          acceptCharset="ISO-8859-1"
          onSubmit={e => handleSubmit(e)}
        >
          <div className={"input-container"}>
            <input type="hidden" name="_to" value={info.to} />
            <input type="hidden" name="_from" value={info.email} />
            <input type="hidden" name="_subject" value={info.subject} />
            <input type="hidden" name="_resulturl" value={info.thanks} />
            <input
              type="text"
              name="name"
              minLength="3"
              maxLength="50"
              placeholder="FULL NAME*"
              required
            />
            <input
              value={info.email}
              type="email"
              name="email"
              title="Please provide a correct e-mail address. Ex: mail@example.com"
              pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
              placeholder="E-MAIL*"
              required
              onChange={e => onFieldChange("email", e)}
            />
            <input type="tel" name="phone" placeholder="PHONENUMBER" />
            <label htmlFor="message">MESSAGE*</label>
            <textarea
              name="message"
              minLength="5"
              title="Please provide a message so I can prepare before I contact you"
              required
            />
          </div>
          <p className="info-field">FIELDS WITH * ARE MANDATORY</p>
          <button id="submit" className="submit" type="submit">
            Send
            <span className="thanks">
              THANK YOU!{" "}
              <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">
                🙏
              </span>
            </span>
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
