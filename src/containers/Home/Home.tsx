import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import Actions from '../../store/actions';
// Style
import style from './Home.module.scss';
// Components
import AppContent from '../AppContent/AppContent';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Header from '../../components/Header/Header';
import InfoBlock from '../../components/UI/InfoBlock/InfoBlock';
import Card from '../../components/UI/Card/Card';
import StandoutText from '../../components/UI/StandoutText/StandoutText';
import Tools from '../../components/Tools/Tools';
import Social from '../../components/Social/Social';
// Images
import bmsImg from '../../assets/img/portfolio/bms.webp';
import graphicsImg from '../../assets/img/portfolio/graphics.webp';
import landmanImg from '../../assets/img/portfolio/landman.webp';
import maxqImg from '../../assets/img/portfolio/maxq.webp';
import outpostImg from '../../assets/img/portfolio/outpost.webp';
import userscriptsImg from '../../assets/img/portfolio/userscripts.webp';


type HomeProps = RouteComponentProps & ConnectedProps<typeof connector>;
class Home extends Component<HomeProps,{}>{
    _aboutRef:React.RefObject<any>;
    _portfolioRef:React.RefObject<any>;
    _contactRef:React.RefObject<any>;
    constructor(props:HomeProps){
        super(props);
        this._aboutRef = React.createRef();
        this._portfolioRef = React.createRef();
        this._contactRef = React.createRef();
        // Set page title
        document.title = 'The Outpost • Web development by Jon Reimer';
    }

    componentDidMount(){
        this.props.UPDATE_NAV_LIST( [
            this._aboutRef,
            this._portfolioRef,
            this._contactRef,
        ]);
        this.props.UPDATE_NAV_LOCATION(-1);
    }

    render(){
        return ( <>
            <AppContent>
                <Header />
                <section ref={this._aboutRef} className={style.About}>
                    <h2>Now</h2>
                    <p>Hello, I'm Jon Reimer. I believe browsing the web should be an enjoyable&nbsp;<abbr className='amp' title='and'>&amp;</abbr> fun experience for everyone, so I help local businesses establish a crisp, clean, and mobile-friendly online presence. My design&nbsp;<abbr className='amp' title='and'>&amp;</abbr> development journey is fueled by my passion for science, learning, and&nbsp;travel.</p>
                    <div className={style.InfoBlocks}>
                        <InfoBlock title='Working'><p>I am currently searching for a full-time developer&nbsp;position.</p></InfoBlock>
                        <InfoBlock title='Learning'><p>&ldquo;React &ndash; The Complete Guide (incl. Hooks, React Router,&nbsp;Redux)&rdquo;.</p></InfoBlock>
                        <InfoBlock title='Building'><>
                            <p>A Typescript/React game.</p>
                            <p>Enhancements for this portfolio&nbsp;website.</p>
                        </></InfoBlock>
                        <InfoBlock title='Reading'><>
                            {/* TODO: replace this with GR API request */}
                            <p>&ldquo;<a href="https://www.goodreads.com/book/show/77565">The Fall of Hyperion</a>&rdquo; <span className='no-break'>(Dan Simmons).</span></p>
                            <p>&ldquo;<a href="https://www.goodreads.com/book/show/374233">If on a winter&rsquo;s night a traveller</a>&rdquo; <span className='no-break'>(Italo Calvino).</span></p>
                        </></InfoBlock>
                    </div>
                </section>
                <main ref={this._portfolioRef} className={style.Portfolio}>
                    <h2><abbr className='amp' title='and'>&amp;</abbr> Then</h2>
                    <h3>Portfolio</h3>
                    <div className={style.CardContainer}>
                        <Card title="Landman"
                            slug='landman'
                            image={landmanImg}
                            type="code"
                            tools={toolsets.landman} />
                        <Card title="Max Q Live"
                            slug='maxq'
                            image={maxqImg}
                            type="server"
                            tools={toolsets.maxq} />
                        <Card title="Blackie Mini Storage"
                            slug='bms'
                            image={bmsImg}
                            type="code"
                            tools={toolsets.bms} />
                        <Card title="The Outpost"
                            slug='outpost'
                            image={outpostImg}
                            type="code"
                            tools={toolsets.outpost} />
                        <Card title="Userscripts"
                            slug='userscripts'
                            image={userscriptsImg}
                            type="code"
                            tools={toolsets.userscripts} />
                        <Card title="Graphic Design"
                            slug='graphics'
                            image={graphicsImg}
                            type="design"
                            tools={toolsets.graphics} />
                    </div>
                    <h3>Toolbox</h3>
                    <Tools />
                </main>
                <section ref={this._contactRef} className={style.Contact}>
                    <h2><abbr className='amp' title='and'>&amp;</abbr> Later</h2>
                    <p>Whether you're looking for a new/updated website or for someone to collaborate with, my inbox is <span className='no-break'>always open.</span></p>
                    <div className={style.ContactContainer}>
                        <StandoutText>
                            <>
                                Let's talk, yeah? <span className='no-break'>Send me a message.</span>
                            </>
                        </StandoutText>
                        <a href='mailto:jon.reimer@theoutpost.dev'>Email<span className='visually-hidden'> Jon Reimer</span></a>
                    </div>
                    <Social />
                </section>
                <Footer />
            </AppContent>
            <Nav />
        </> );
    }
}

// State
const mapDispatchToProps = ( dispatch:Dispatch ) => {
    return {
        UPDATE_NAV_LIST: (payload:any) => dispatch({
            type: Actions.UPDATE_NAV_LIST,
            payload: payload,
        }),
        UPDATE_NAV_LOCATION: ( payload: any ) => dispatch( {
            type: Actions.UPDATE_NAV_LOCATION,
            payload: payload,
        } ),
    }
}
const connector = connect(null,mapDispatchToProps);

// Exports
export const toolsets = {
    landman: [
        'Affinity Suite',
        'TypeScript',
        'Sass',
        'Gulp',
        'Flickity',
    ],
    maxq: [
        'Photoshop',
        'jQuery',
        'CSS3',
        'PHP',
        'Ubuntu',
        'Apache',
    ],
    bms: [
        'Macaw',
        'Pug',
        'WordPress',
        'Sass',
        'Google Maps API',
    ],
    outpost: [
        'Affinity Designer',
        'TypeScript',
        'React',
        'Goodreads API'
    ],
    userscripts: [
        'TypeScript',
        'Gulp',
        'Git',
        'Sass',
        'Node',
        'Greasemonkey API',
    ],
    graphics: [
        'Affinity Designer',
        'Photoshop',
        'Illustrator',
    ],
}
export default connector(Home);
