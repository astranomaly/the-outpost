import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import Actions from '../../store/actions';
import axios from 'axios';
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
import BookInfo from '../../components/BookInfo/BookInfo';

type HomeProps = RouteComponentProps & ConnectedProps<typeof connector>;
type HomeState = {
    books: BookInfoType[]|undefined;
};
class Home extends Component<HomeProps,HomeState>{
    _aboutRef:React.RefObject<any>;
    _portfolioRef:React.RefObject<any>;
    _contactRef:React.RefObject<any>;
    _grURL: string = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/5661481.xml?key=3UtcU5haOHagS71pQdTww&v=2&shelf=currently-reading`;

    state = {
        books: undefined,
    } as HomeState

    constructor(props:HomeProps){
        super(props);
        this._aboutRef = React.createRef();
        this._portfolioRef = React.createRef();
        this._contactRef = React.createRef();
        // Set page title
        document.title = 'The Outpost \u2022 Web development by Jon Reimer';
    }

    parseXml = (xml:string) => {
        if ( window.DOMParser ) {
            const parser = new DOMParser();
            return parser.parseFromString( xml, "text/xml" );
        }else{
            throw new Error('Window does not contain DOMParser');
        }
    }

    componentDidMount(){
        this.props.UPDATE_NAV_LIST( [
            this._aboutRef,
            this._portfolioRef,
            this._contactRef,
        ]);
        this.props.UPDATE_NAV_LOCATION(-1);
        // Get Goodreads Info
        axios({
            method: "GET",
            url: this._grURL,
        }).then( p => {
            // Make the XML useable
            const data = this.parseXml(p.data);
            const books = data.querySelectorAll( 'review' );
            // For each book, extract the needed information
            books.forEach(book => {
                let title:string = book.querySelector('title_without_series')!.innerHTML;
                let link: string = book.querySelector( 'link' )!.textContent!;
                const authors = book.querySelectorAll('author');
                let nameArr:string[] = [];
                authors.forEach(author => {
                    nameArr.push( author.querySelector( 'name' ) ? author.querySelector('name')!.innerHTML : 'Unknown');
                });
                // Copy the current state
                let statePayload: HomeState = this.state.books ?
                    { ...this.state } : {books: []};
                // Push in the new info
                statePayload.books!.push({
                    title: title,
                    link: link,
                    authors: nameArr,
                })
                // Add the updated state
                this.setState({
                    ...this.state,
                    books: statePayload.books,
                });
            });
        } );
    }

    render(){
        const readingSection = () => {
            if(this.state.books){
                return (
                    <InfoBlock title='Reading'>
                        <BookInfo data={this.state.books} />
                    </InfoBlock>
                )
            }else{
                return null;
            }
        }
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
                        {readingSection()}
                    </div>
                </section>
                <main ref={this._portfolioRef} className={style.Portfolio}>
                    <h2><abbr className='amp' title='and'>&amp;</abbr> Then</h2>
                    <h3>Portfolio</h3>
                    <div className={style.CardContainer}>
                        <Card title="Landman"
                            slug='landman'
                            type="code"
                            tools={toolsets.landman} />
                        <Card title="Max Q Live"
                            slug='maxq'
                            type="server"
                            tools={toolsets.maxq} />
                        <Card title="Blackie Mini Storage"
                            slug='bms'
                            type="code"
                            tools={toolsets.bms} />
                        <Card title="The Outpost"
                            slug='outpost'
                            type="code"
                            tools={toolsets.outpost} />
                        <Card title="Userscripts"
                            slug='userscripts'
                            type="code"
                            tools={toolsets.userscripts} />
                        <Card title="Graphic Design"
                            slug='graphics'
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
        'Netlify',
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
