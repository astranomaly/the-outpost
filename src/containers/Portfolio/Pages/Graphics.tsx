import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import Actions from '../../../store/actions';
import { Link } from 'react-router-dom';
import SectionBlock, {values} from '../../../components/UI/SectionBlock/SectionBlock';
import LinkBlock from '../../../components/UI/LinkBlock/LinkBlock';
import LightboxBlock from '../../../components/UI/LightboxBlock/LightboxBlock';
// Images
import img1 from '../../../assets/img/screenshots/graphics-1.jpg';
import img2 from '../../../assets/img/screenshots/graphics-2.jpg';
import img3 from '../../../assets/img/screenshots/graphics-3.jpg';
import img4 from '../../../assets/img/screenshots/graphics-4.jpg';
import img5 from '../../../assets/img/screenshots/graphics-5.jpg';
import img6 from '../../../assets/img/screenshots/graphics-6.jpg';
import thumb1 from '../../../assets/img/screenshots/graphics-1-th.jpg';
import thumb2 from '../../../assets/img/screenshots/graphics-2-th.jpg';
import thumb3 from '../../../assets/img/screenshots/graphics-3-th.jpg';
import thumb4 from '../../../assets/img/screenshots/graphics-4-th.jpg';
import thumb5 from '../../../assets/img/screenshots/graphics-5-th.jpg';
import thumb6 from '../../../assets/img/screenshots/graphics-6-th.jpg';

type GraphicsProps = PortfolioPage & ConnectedProps<typeof connector>;

const graphics: React.FC<GraphicsProps> = ( props ) => {

    const infoRef = React.createRef();
    const techRef = React.createRef();
    const screenRef = React.createRef();

    props.UPDATE_NAV_LIST( [ infoRef, techRef, screenRef ] );

    return (
        <>
            <SectionBlock theRef={infoRef} title={values.info}>
                <p>Graphic design is what lead me down the Web Development path in the first place, and occasionally people ask me to do graphic designs for them (business cards <abbr className='amp' title='and'>&amp;</abbr> logos mostly). Luckily for me, graphic design is closely related to web design and both were part of my college&nbsp;education.</p>
                <p>Over the past few years I've been contracted by companies of many sizes, from private projects to province-wide customer bases. One recent project was to update ViaFoods' website and packaging, along with shooting their product photography. I also designed and printed mail flyers <abbr className='amp' title='and'>&amp;</abbr> business cards for Reimer Carpentry, and created business cards for&nbsp;<Link to='/p/landman'>Landman</Link>.</p>
                <p>Even when I'm not being paid to create, I enjoy designing consistent book/movie/album covers for my media libraries or creating icon sets for my own personal&nbsp;use.</p>
            </SectionBlock>
            <SectionBlock theRef={techRef} title={values.tech}>
                <p>Initially, I used Adobe Photoshop and/or Illustrator for a great deal of my design work. The <Link to='/p/maxq'>Max Q Live</Link> project required many mockups and photo edits in Adobe Photoshop, while the ViaFoods project exclusively used Adobe Illustrator. Recently, I've moved over to <a href='https://affinity.serif.com'>Affinity</a> Designer <abbr className='amp' title='and'>&amp;</abbr> Photo for all my design&nbsp;work.</p>
            </SectionBlock>
            <LinkBlock links={props.links} />
            <LightboxBlock
                srcs={[ img1, img2, img3, img4, img5, img6 ]}
                thumb={[ thumb1, thumb2, thumb3, thumb4, thumb5, thumb6 ]}
                theRef={screenRef}
            />
        </>
    );
}

// State
const mapDispatchToProps = ( dispatch: Dispatch ) => {
    return {
        UPDATE_NAV_LIST: ( payload: any ) => dispatch( {
            type: Actions.UPDATE_NAV_LIST,
            payload: payload,
        } )
    }
}
const connector = connect( null, mapDispatchToProps );

// Exports
export default connector( graphics );
