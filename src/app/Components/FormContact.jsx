'use client'
import React, { useState } from "react";

function FormContact() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://hooks.zapier.com/hooks/catch/20669867/2zlu6ya/", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          company: "",
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        alert("There was an issue submitting the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="fild">
          <input
            type="text"
            id="company"
            name="company"
            placeholder=" "
            value={formData.company}
            onChange={handleChange}
          />
          <label htmlFor="company">Company (optional)</label>
        </div>
        <div className="fild">
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" "
            required
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
        </div>
      </div>
      <div className="row">
        <div className="fild">
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder=" "
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <label htmlFor="phone">Phone Number</label>
        </div>
        <div className="fild">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            required
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <textarea
        name="message"
        placeholder="Message (optional)"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit" name="submit">
        Submit
      </button>
    </form>
  );
}

export default FormContact;
