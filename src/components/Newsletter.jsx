import { useState } from 'react';


const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      return;
    }

    // Here you would typically make an API call to your backend
    // For now, we'll just simulate a successful subscription
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Stay updated with school news, events, and announcements. Join our
            community today!
          </p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={status === 'error' ? 'error' : ''}
                required
              />
              <button type="submit">Subscribe</button>
            </div>
            {status === 'error' && (
              <p className="error-message">Please enter a valid email address</p>
            )}
            {status === 'success' && (
              <p className="success-message">
                Thank you for subscribing! You'll receive our next newsletter.
              </p>
            )}
          </form>
          <div className="newsletter-features">
            <div className="feature">
              <i className="fas fa-newspaper"></i>
              <span>Monthly Updates</span>
            </div>
            <div className="feature">
              <i className="fas fa-calendar-alt"></i>
              <span>Event Notifications</span>
            </div>
            <div className="feature">
              <i className="fas fa-trophy"></i>
              <span>Student Achievements</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 