import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f9f9f9', padding: '40px 0', borderTop: '1px solid #ddd' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Logo and Description */}
          <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.5em', marginBottom: '15px', fontWeight: 'bold' }}>Comforty</h3>
            <p style={{ fontSize: '1em', color: '#555', lineHeight: '1.6' }}>
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: '#555', fontSize: '1.2em' }}><i className="fab fa-facebook"></i></a>
              <a href="#" style={{ color: '#555', fontSize: '1.2em' }}><i className="fab fa-twitter"></i></a>
              <a href="#" style={{ color: '#555', fontSize: '1.2em' }}><i className="fab fa-instagram"></i></a>
              <a href="#" style={{ color: '#555', fontSize: '1.2em' }}><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Categories */}
          <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.2em', marginBottom: '15px', fontWeight: 'bold' }}>Category</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1em', color: '#555', lineHeight: '2' }}>
              <li><a href="#" style={{ color: '#555', textDecoration: 'none' }}>Sofa</a></li>
              <li><a href="#" style={{ color: '#555', textDecoration: 'none' }}>Armchair</a></li>
              <li><a href="#" style={{ color: '#555', textDecoration: 'none' }}>Wing Chair</a></li>
              <li><a href="#" style={{ color: '#555', textDecoration: 'none' }}>Desk Chair</a></li>
              <li><a href="#" style={{ color: '#555', textDecoration: 'none' }}>Wooden Chair</a></li>
              <li><a href="#" style={{ color: '#555', textDecoration: 'none' }}>Park Bench</a></li>
            </ul>
          </div>

          {/* Support */}
          <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.2em', marginBottom: '15px', fontWeight: 'bold' }}>Support</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1em', color: '#555', lineHeight: '2' }}>
              <li><a href="#" style={{ color: '#555', textDecoration: 'none' }}>Help & Support</a></li>
              <li><a href="#" style={{ color: '#555', textDecoration: 'none' }}>Terms & Conditions</a></li>
              <li><a href="#" style={{ color: '#555', textDecoration: 'none' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: '#555', textDecoration: 'none' }}>Help</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div style={{ flex: '1 1 200px', marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.2em', marginBottom: '15px', fontWeight: 'bold' }}>Newsletter</h4>
            <p style={{ fontSize: '1em', color: '#555', lineHeight: '1.6' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu et.
            </p>
            <form>
              <input 
                type="email" 
                placeholder="Your email" 
                style={{ width: '100%', padding: '12px', margin: '15px 0', border: '1px solid #ddd', borderRadius: '4px' }} 
              />
              <button 
                type="submit" 
                style={{ backgroundColor: '#007BFF', color: '#fff', padding: '12px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.9em', color: '#888' }}>
          <p>&copy; 2021 - Blogzy - Designed & Developed by Zairosoft</p>
          <div style={{ marginTop: '10px' }}>
            <img src="/path-to-paypal-logo.png" alt="PayPal" style={{ marginRight: '15px', verticalAlign: 'middle' }} />
            <img src="/path-to-visa-logo.png" alt="Visa" style={{ verticalAlign: 'middle' }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
