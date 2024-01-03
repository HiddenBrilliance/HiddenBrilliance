import React from 'react';
import spotifyLogo from '../resources/spotifyEmblem.png'
import appleMusicEmblem from '../resources/appleMusicEmblem.png'
import youtubeLogo from '../resources/youtubeEmblem.png'
import igLogo from '../resources/igEmblem.png'

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
            <a
  className="site-nav__link js-no-transition"
  target="_blank"
  rel="noopener"
  href={link}
  title={title}
>
  <div aria-hidden="true"  role="presentation" className="icon icon-spotify fa-brands">
{/* TODO: Ask why the CSS is not re-sizing image */}
  <img src={spotifyLogo} alt="Spotify Logo" className='social-medial-icons'    // Inline style added here
 />
  <img src={appleMusicEmblem} alt="Apple Music Logo" className='social-medial-icons' />
  <img src={youtubeLogo} alt="YouTube Music Logo" className='social-medial-icons' />
  <img src={igLogo} alt="Instagram Logo" className='social-medial-icons' />


  </div>
  <span className="icon__fallback-text">Spotify</span>
</a>
          </div>
          <div className="col-md-6">
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; {new Date().getFullYear()} Hidden Brilliance</p>
          </div>
        </div>
      </div>
    </footer>









        

    )
  };

  export default Footer;




