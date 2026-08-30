'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:bies.com.pk@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={submit}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" required value={form.name} onChange={update('name')} />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" required value={form.email} onChange={update('email')} />
      </div>
      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" required value={form.message} onChange={update('message')} />
      </div>
      <button type="submit" className="btn btn-primary">Send Message</button>
      <p className="form-note">This opens your email app with the message ready to send to bies.com.pk@gmail.com.</p>
    </form>
  );
}
