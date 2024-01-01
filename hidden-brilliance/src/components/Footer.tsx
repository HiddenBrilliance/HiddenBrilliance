import React from 'react';
import spotifyLogo from '../resources/spotify-logo.png'
import './Footer.css'; // Import your component-specific CSS

interface SpotifyLinkProps {
    link: string;
    title: string;
  }

const Footer: React.FC<SpotifyLinkProps> = ({ link, title }) => {
    return (


<footer className="bg-dark text-light py-4 fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Footer Section 1</h5>
            <a
  className="site-nav__link js-no-transition"
  target="_blank"
  rel="noopener"
  href={link}
  title={title}
>
  <div aria-hidden="true"  role="presentation" className="icon icon-spotify fa-brands">
{/* TODO: Ask why the CSS is not re-sizing image */}
  <img src={spotifyLogo} alt="Spotify Logo" className='social-medial-icons' />

  </div>
  <span className="icon__fallback-text">Spotify</span>
</a>
          </div>
          <div className="col-md-6">
            <h5>Footer Section 2</h5>
            <p>Content for the second section of the footer.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; {new Date().getFullYear()} Your Website</p>
          </div>
        </div>
      </div>
    </footer>









        

    )
  };

  export default Footer;




