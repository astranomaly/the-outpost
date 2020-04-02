import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import Actions from '../../../store/actions';
import SectionBlock, {values} from '../../../components/UI/SectionBlock/SectionBlock';
import LightboxBlock from '../../../components/UI/LightboxBlock/LightboxBlock';
import LinkBlock from '../../../components/UI/LinkBlock/LinkBlock';
// Images

type OutpostProps = PortfolioPage & ConnectedProps<typeof connector>;

const outpost: React.FC<OutpostProps> = ( props ) => {

    const infoRef = React.createRef();
    const techRef = React.createRef();

    props.UPDATE_NAV_LIST( [ infoRef, techRef ] );

    return (
        <>
            <SectionBlock theRef={infoRef} title={values.info}>
                <p>My personal portfolio has gone through numerous iterations throughout the years. For the longest time, I was using a quick-and-easy portfolio made by tweaking a template someone else had designed; but when you’re aiming to showcase your web development skills the portfolio site itself should be your centrepiece and should demonstrate your ability to&nbsp;code.</p>
                <p>With this in mind, I decided it was time for a drastic overhaul. While the new design hearkens back to the portfolio site I made for my senior project (in theme and colour), every aspect of the site has been redesigned with responsiveness and accessibility in mind. And unlike my previous portfolio, the design was built fully from scratch, truly making it my&nbsp;own.</p>
                <p>Having redesigned my portfolio, the next logical step was a full rebranding. The Outpost represents both my love for travel <abbr className='amp' title='and'>&amp;</abbr> the outdoors, as well as the decentralized nature of the internet. No matter who or where you are, you have a space for yourself&nbsp;online.</p>
            </SectionBlock>
            <SectionBlock theRef={techRef} title={values.tech}>
                <p>The redesign process was, as always, a great opportunity to experiment with the new technologies I was learning. In this case, it was an opportunity to step away from <a href='https://reactjs.org/'>React</a> tutorials and build a React app completely on my own. I also continued deepening my knowledge of <a href='https://www.typescriptlang.org/'>TypeScript</a>, learning how to integrate TS with React for truly modular, safely typed&nbsp;code.</p>
                <p>The design aspect of the web-app was mocked up using Affinity Designer&mdash;as usual&mdash;and implemented through CSS modules (specifically Sass). Using CSS modules allowed me to keep design separate from markup while still adhering to the modularity of React. As with any modern, responsive site, Flexbox was used extensively but I also used Grids where applicable this&nbsp;time.</p>
                <p>Images on the site are in SVG or WEBP formats where possible for reduced file sizes in modern browsers, allowing faster load times and less data use on mobile devices. Accessible Rich Internet Application (ARIA) tags and roles were used in as many areas as possible to aid in accessibility, along with typical HTML5&nbsp;semantics.</p>
            </SectionBlock>
            <LinkBlock links={props.links} />
            {/* <LightboxBlock
                srcs={[]}
                thumb={[]}
                theRef={}
            /> */}
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
export default connector( outpost );
