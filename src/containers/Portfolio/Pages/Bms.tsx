import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import Actions from '../../../store/actions';
import SectionBlock, {values} from '../../../components/UI/SectionBlock/SectionBlock';
import LightboxBlock from '../../../components/UI/LightboxBlock/LightboxBlock';
import LinkBlock from '../../../components/UI/LinkBlock/LinkBlock';
import And from '../../../components/UI/And/And';
// Images
import img1 from '../../../assets/img/screenshots/bms-1.jpg';
import img2 from '../../../assets/img/screenshots/bms-2.jpg';
import img3 from '../../../assets/img/screenshots/bms-3.jpg';
import thumb1 from '../../../assets/img/screenshots/bms-1-th.jpg';
import thumb2 from '../../../assets/img/screenshots/bms-2-th.jpg';
import thumb3 from '../../../assets/img/screenshots/bms-3-th.jpg';

type BmsProps = PortfolioPage & ConnectedProps<typeof connector>;

const bms: React.FC<BmsProps> = ( props ) => {

    const infoRef = React.createRef();
    const techRef = React.createRef();
    const screenRef = React.createRef();

    props.UPDATE_NAV_LIST([infoRef,techRef,screenRef]);

    return (
        <>
            <SectionBlock theRef={infoRef} title={values.info}>
                <p>Blackie Mini Storage is a small company near Calgary, Alberta that provides shipping containers for long-term storage. I was contacted by them and asked to make a simple, clean website that would display nicely on any screen size. The site is fairly simple as its primary focus is to give Blackie Mini Storage a web presence and allow people to find or contact them more&nbsp;easily.</p>
            </SectionBlock>
            <SectionBlock theRef={techRef} title={values.tech}>
                <p>After a year of experimenting with preprocessors, this was my first website preprocessed with <a href='https://pugjs.org/api/getting-started.html'>Pug</a> <And/> <a href='https://sass-lang.com/'>Sass</a>, as well as my first fully-responsive site. The experience of transitioning from &ldquo;learning&rdquo; to &ldquo;applying&rdquo; is always&nbsp;exciting.</p>
                <p>The website's design was wireframed using <a href='http://macaw.co/'>Macaw</a>, while the underlying responsive framework uses the <a href='https://www.bourbon.io/'>Bourbon</a> <And/> <a href='https://neat.bourbon.io/'>Neat</a> Sass libraries. The interactive map uses the <a href='https://cloud.google.com/maps-platform/'>Google Maps Platform</a> while fonts and icons use <a href='https://fonts.google.com/'>Google Fonts</a> and <a href='https://fontawesome.com/'>Font Awesome</a>&nbsp;respectively.</p>
                <p>In order to teach myself <a href='https://wordpress.org/'>WordPress</a>, I also remade the site as a one-page WordPress template. While the front-end remains the same, the backend is powered by WordPress. This is now the official version of the&nbsp;site.</p>
            </SectionBlock>
            <LinkBlock links={props.links} />
            <LightboxBlock
                srcs={[img1,img2,img3]}
                thumb={[thumb1,thumb2,thumb3]}
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
export default connector(bms);
