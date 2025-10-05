'use client'

import { useState } from "react";
import './style.scss';

const ContactForm = ({ content }) => {
  const { title = 'Contacto', description = 'Dejanos tu mensaje y te contactaremos de inmediato' } = content;

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    setFormData(data);

    const newErrors = {};
    if (!data.name?.trim()) newErrors.name = "Este campo es obligatorio";
    if (!data.email?.trim()) newErrors.email = "Este campo es obligatorio";
    if (!data.content?.trim()) newErrors.content = "Este campo es obligatorio";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Formulario enviado:", data);
    }
  };

  return (
    <section className="contactForm py-16">
      <div className="contactForm__inner p-8 max-w-std m-auto w-full flex flex-col items-center bg-background-secondary rounded-xl gap-8" >
        <div className="contactForm__preamp text-center">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <form className="contactForm__form" onSubmit={handleSubmit} noValidate>
          <div className="contactForm__form-group">
            <label htmlFor="name" className='invisible'>Nombre</label>
            <input type="text" id="name" name="name" placeholder="Nombre" autoComplete="name" />
            <p className={`contactForm__form-error ${errors.name ? 'contactForm__form-error--visible' : ''}`}>Este campo es obligatorio</p>

            <label htmlFor="email" className='invisible'>Email</label>
            <input type="email" id="email" name="email" placeholder="Email" autoComplete="email" />
            <p className={`contactForm__form-error ${errors.email ? 'contactForm__form-error--visible' : ''}`}>Este campo es obligatorio</p>
          </div>

          <div className="contactForm__form-group">
            <label htmlFor="content" className='invisible'>Mensaje</label>
            <textarea id="content" name="content" placeholder="Mensaje" autoComplete="off"></textarea>
            <p className={`contactForm__form-error ${errors.content ? 'contactForm__form-error--visible' : ''}`}>Este campo es obligatorio</p>
          </div>

          <button type="submit" className="contactForm__form-submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
