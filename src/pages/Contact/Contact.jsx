import { useState } from 'react';
import { motion } from 'framer-motion';
import { faEnvelope, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { slideLeft } from '../../animations/slideLeft.js';
import { slideRight } from '../../animations/slideRight.js';
import SectionHeader from '../../components/common/SectionHeader.jsx';
import FaIcon from '../../components/common/FaIcon.jsx';
import PageTransition from '../../components/layout/PageTransition.jsx';
import { profile, socialLinks } from '../../data/profile.js';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle');

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = 'Enter a valid email address.';
    if (values.message.trim().length < 12) nextErrors.message = 'Message should be at least 12 characters.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    setState('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Contact API:', data);
        setState('error');
        return;
      }

      setState('success');
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      console.error('Submission error:', error);
      setState('error');
    }
  };

  return (
    <PageTransition>
      <div className="container">
        <SectionHeader eyebrow="Contact" title="Let us get in touch">
          Feel free to reach out by filling out the form below. I will get back to you as soon as possible.
        </SectionHeader>
        <div className="contact-grid">
          <motion.aside className="contact-panel" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
            <h3>Direct contact</h3>
            <div className="contact-list">
              <a className="contact-link" href={`mailto:${profile.email}`}>
                <FaIcon icon={faEnvelope} size={18} /> {profile.email}
              </a>
              <a className="contact-link" href="tel:+201150895891">
                <FaIcon icon={faPhone} size={18} /> {profile.phone}
              </a>
            </div>
            <div className="social-row">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a className="icon-link" href={href} key={label} aria-label={label} target="_blank" rel="noreferrer">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.aside>

          <motion.form className="contact-panel form" noValidate onSubmit={onSubmit} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} aria-invalid={Boolean(errors.name)} />
              {errors.name ? <span className="field-error">{errors.name}</span> : null}
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={values.email} onChange={(event) => setValues({ ...values, email: event.target.value })} aria-invalid={Boolean(errors.email)} />
              {errors.email ? <span className="field-error">{errors.email}</span> : null}
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" value={values.message} onChange={(event) => setValues({ ...values, message: event.target.value })} aria-invalid={Boolean(errors.message)} />
              {errors.message ? <span className="field-error">{errors.message}</span> : null}
            </div>
            {state === 'success' ? (
              <div className="success-note">
                Your message has been sent successfully.
                <br />
                I'll get back to you as soon as possible.
              </div>
            ) : null}
            {state === 'error' ? (
              <div className="failure-note">
                Unable to send your message.
                <br />
                <br />
                Please try again later or contact me directly via email.
              </div>
            ) : null}
            <button className="btn btn-primary" disabled={state === 'loading'} type="submit">
              <FaIcon icon={faPaperPlane} size={18} />
              {state === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </PageTransition>
  );
}
