import React from 'react';
import SocialIcon from './SocialIcon/SocialIcon';
import style from './Social.module.scss';
import { ReactComponent as Github } from '../../assets/img/fa-github.svg';
import { ReactComponent as LinkedIn } from '../../assets/img/fa-linkedin.svg';
import { ReactComponent as Twitter } from '../../assets/img/fa-twitter.svg';
import { ReactComponent as Flickr } from '../../assets/img/fa-flickr.svg';
// import { ReactComponent as Spotify } from '../../assets/img/fa-spotify.svg';
// import { ReactComponent as Goodreads } from '../../assets/img/fa-goodreads.svg';

const social:React.FC = () => {

    return (
        <aside className={style.Social} aria-hidden='true'>
            <ul>
                <SocialIcon
                    url='https://github.com/astranomaly'
                    icon={<Github/>}
                >Github</SocialIcon>
                <SocialIcon
                    url='https://www.linkedin.com/in/jonjreimer'
                    icon={<LinkedIn />}
                >LinkedIn</SocialIcon>
                <SocialIcon
                    url='https://twitter.com/TheOutpostDev'
                    icon={<Twitter />}
                >Twitter</SocialIcon>
                <SocialIcon
                    url='https://www.flickr.com/photos/169764173@N04'
                    icon={<Flickr />}
                >Flickr</SocialIcon>
                {/* <SocialIcon
                    url='https://open.spotify.com/user/6c447y77tbby70wtxbryjypby?si=f8AxgO8CS9e65eN_EoTBIg'
                    icon={<Spotify />}
                >Spotify</SocialIcon>
                <SocialIcon
                    url='https://www.goodreads.com/user/show/5661481'
                    icon={<Goodreads />}
                >Goodreads</SocialIcon> */}
            </ul>
        </aside> );
}

export default social;
