import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import Actions from '../../../store/actions';
import SectionBlock, {values} from '../../../components/UI/SectionBlock/SectionBlock';
import LightboxBlock from '../../../components/UI/LightboxBlock/LightboxBlock';
import LinkBlock from '../../../components/UI/LinkBlock/LinkBlock';
import And from '../../../components/UI/And/And';
// Images
import img1 from '../../../assets/img/screenshots/maxq-1.jpg';
import thumb1 from '../../../assets/img/screenshots/maxq-1-th.jpg';

type MaxQProps = PortfolioPage & ConnectedProps<typeof connector>;

const maxQ: React.FC<MaxQProps> = ( props ) => {

    const infoRef = React.createRef();
    const techRef = React.createRef();
    const screenRef = React.createRef();

    props.UPDATE_NAV_LIST( [ infoRef, techRef, screenRef ] );

    return (
        <>
            <SectionBlock theRef={infoRef} title={values.info}>
                <p>Founded in Vancouver, Canada by Kerry <And/> Janet McLuhan, Max Q Live is developing technology and establishing global connections using the internet as its platform. Max Q Live is supported primarily by Fortune 500 companies and non-profits dedicated to changing the world. They hope to create a global social network that connects people from around the world in a face-to-face manner, promoting a spirit of wanderlust and adventure while teaching about the issues people face around the&nbsp;globe.</p>
            </SectionBlock>
            <SectionBlock theRef={techRef} title={values.tech}>
                <p>As the sole web developer at Max Q Live for the duration of my stay, my tasks covered all areas of the web stack from design to front-end to back-end to general <abbr>IT</abbr>. The primary goal was to develop a demo website that could be shown to investors. The website comprised hundreds of pages designed in Adobe Photoshop and written mainly in HTML, CSS, and <a href='https://jquery.com/'>jQuery</a>, with portions of PHP added to enable templating and speed up&nbsp;production.</p>
                <p>Server management was also an occasional part of my job, managing a Linux/Apache/MySQL/PHP &#40;<abbr>LAMP</abbr>&#41; server and writing a few Bash scripts to streamline common maintenance tasks. Networking between servers, computers, and video cameras was also often necessary &#40;along with some video editing&#41; since the development of video streaming software is one focus of the&nbsp;company.</p>
                <p>Unfortunately, Max Q Live is not accessible to the public at this&nbsp;time.</p>
            </SectionBlock>
            <LinkBlock links={props.links} />
            <LightboxBlock
                srcs={[img1]}
                thumb={[thumb1]}
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
export default connector( maxQ );
