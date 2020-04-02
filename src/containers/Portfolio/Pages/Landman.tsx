import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import Actions from '../../../store/actions';
import SectionBlock, {values} from '../../../components/UI/SectionBlock/SectionBlock';
import LightboxBlock from '../../../components/UI/LightboxBlock/LightboxBlock';
import LinkBlock from '../../../components/UI/LinkBlock/LinkBlock';
// Images
import img1 from '../../../assets/img/screenshots/landman-1.jpg';
import img2 from '../../../assets/img/screenshots/landman-2.jpg';
import img3 from '../../../assets/img/screenshots/landman-3.jpg';
import img4 from '../../../assets/img/screenshots/landman-4.jpg';
import thumb1 from '../../../assets/img/screenshots/landman-1-th.jpg';
import thumb2 from '../../../assets/img/screenshots/landman-2-th.jpg';
import thumb3 from '../../../assets/img/screenshots/landman-3-th.jpg';
import thumb4 from '../../../assets/img/screenshots/landman-4-th.jpg';

type LandmanProps = PortfolioPage & ConnectedProps<typeof connector>;

const landman: React.FC<LandmanProps> = ( props ) => {

    const infoRef = React.createRef();
    const techRef = React.createRef();
    const screenRef = React.createRef();

    props.UPDATE_NAV_LIST( [ infoRef, techRef, screenRef ] );

    return (
        <>
            <SectionBlock theRef={infoRef} title={values.info}>
                <p>Landman is a locally owned and operated construction company focusing on earthworks such as excavation and landscaping. I was contacted by Landman to design a simple, modern website with a strong focus on images rather than text. Additionally, I was tasked with designing new branding <abbr className='amp' title='and'>&amp;</abbr> business cards for the company to match the design of the&nbsp;website.</p>
            </SectionBlock>
            <SectionBlock theRef={techRef} title={values.tech}>
                <p>After practicing <a href='https://www.typescriptlang.org/'>TypeScript</a> in my personal projects over the previous months, this website was officially the first commercial project I completed using JavaScript's more strongly-typed&nbsp;descendant.</p>
                <p>As always, the responsive framework uses <a href='https://sass-lang.com/'>Sass</a> for styling, but no external libraries were used to create the layout this time. Instead, the site is built using CSS3's Flexbox feature with just a few media breakpoints as needed. Automated compiling of Sass <abbr className='amp' title='and'>&amp;</abbr> TypeScript was achieved through <a href='https://gulpjs.com/'>Gulp</a>. Fonts are provided by <a href='https://fonts.google.com/'>Google Fonts</a> and the slideshow uses the <a href='https://flickity.metafizzy.co/'>Flickity</a> slider since it's both mobile-friendly and pure&nbsp;JavaScript.</p>
                <p>All site graphics were done using <a href='https://affinity.serif.com'>Affinity</a> Designer & Photo. The icons and logos were then exported as SVG&nbsp;elements.</p>
            </SectionBlock>
            <LinkBlock links={props.links} />
            <LightboxBlock
                srcs={[img1, img2, img3, img4]}
                thumb={[thumb1,thumb2,thumb3,thumb4]}
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
export default connector( landman );
