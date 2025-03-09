const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/academics">Academics</a></li>
              <li><a href="/admissions">Admissions</a></li>
              <li><a href="/calendar">School Calendar</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="/library">Library</a></li>
              <li><a href="/portal">Student Portal</a></li>
              <li><a href="/parents">Parent Resources</a></li>
              <li><a href="/staff">Staff Directory</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                123 School Street, City, State 12345
              </li>
              <li>
                <i className="fas fa-phone"></i>
                (555) 123-4567
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                info@stanschool.edu
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Stan School. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 