import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../store/todosSlice';
import './TodoForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      dispatch(addContact({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim()
      }));
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ім'я контакту..."
          className="contact-input"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Телефон..."
          className="contact-input"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (необов'язково)..."
          className="contact-input"
        />
      </div>
      <button type="submit" className="contact-button">
        Додати контакт
      </button>
    </form>
  );
};

export default ContactForm;
