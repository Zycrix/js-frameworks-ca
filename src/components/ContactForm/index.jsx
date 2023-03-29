import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PrimaryButton } from "../styles";

//Email validation regex
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Add the regex to the string schema
yup.addMethod(yup.string, "email", function validateEmail(message) {
  return this.matches(regex, {
    message,
    name: "email",
    excludeEmptyString: true,
  });
});

//Validation schema
const schema = yup.object({
  fullName: yup
    .string()
    .required("Please enter your full name")
    .min(3, "Min 3 characters"),
  email: yup
    .string()
    .required("Please enter a valid email address")
    .email("Please enter a valid email address"),
  subject: yup
    .string()
    .required("Please enter your subject")
    .min(3, "Min 3 characters"),
  body: yup
    .string()
    .required("Please enter your message")
    .min(3, "Min 3 characters"),
});

//Form component
function App() {
  //Get the form methods
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitted(data) {
    setIsSubmitted(true);
    const form = document.querySelector(".contact-form");
    console.log("Form data:");
    console.log(data);
    form.reset();
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit((data) => submitted(data))}
    >
      <label htmlFor="fullName">Full Name</label>
      <input
        placeholder="Your name (Min. 3 characters)"
        {...register("fullName")}
      />
      <p>{errors.fullName?.message}</p>
      <label htmlFor="email">Email</label>
      <input
        placeholder="Your email (Must be a valid email address)"
        {...register("email")}
      />
      <p>{errors.email?.message}</p>
      <label htmlFor="subject">Subject</label>
      <input
        placeholder="The subject of your message (Min. 3 characters)"
        {...register("subject")}
      />
      <p>{errors.subject?.message}</p>
      <label htmlFor="body">Body</label>
      <textarea
        placeholder="Your message (Min. 3 characters)"
        {...register("body")}
      />
      <p>{errors.body?.message}</p>
      <PrimaryButton>Submit</PrimaryButton>
      <div>
        {isSubmitted ? (
          <p className="success">Submitted successfully!</p>
        ) : null}
      </div>
    </form>
  );
}

export default App;
