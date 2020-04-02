import React, { Component } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import Actions from '../../store/actions';
import style from './Portfolio.module.scss';
// Components
import AppContent from '../AppContent/AppContent';
import SmallHeader from '../../components/Header/SmallHeader';
import LinkButton, { Icons } from '../../components/UI/LinkButton/LinkButton';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
// Pages
import Bms from './Pages/Bms';
import Graphics from './Pages/Graphics';
import Landman from './Pages/Landman';
import MaxQ from './Pages/MaxQ';
import Outpost from './Pages/Outpost';
import Userscripts from './Pages/Userscripts';
// Images
import landmanImg from '../../assets/img/backdrop/landman.webp';
import maxqImg from '../../assets/img/backdrop/maxq.webp';
import bmsImg from '../../assets/img/backdrop/bms.webp';
import outpostImg from '../../assets/img/backdrop/outpost.webp';
import graphicsImg from '../../assets/img/backdrop/graphics.webp';
import userscriptsImg from '../../assets/img/backdrop/userscripts.webp';
// Other
import { toolsets } from '../Home/Home';

type PortfolioProps = RouteComponentProps & ConnectedProps<typeof connector>;

class Portfolio extends Component<PortfolioProps,{}>{
    _currentPage:string = '';
    _activePage:string = '';
    constructor(props:PortfolioProps){
        super(props);
        /* If the active page doesn't match the URL, the
        visitor likely navigated directly to the page.
        Always update the active page before fetching data */
        this._activePage = props.activePage;
        this._currentPage = this.props.location.pathname.replace( '/p/', '' );
        this.updatePageIfURL();
    }

    buildPageData( currentPage:string ){
        /* Check if the current page slug matches known pages. Return that data */
        const cases:any = {
            'bms': {
                title: 'Blackie Mini Storage',
                subtitle: 'A small, responsive website for a small, rural business',
                backdrop: bmsImg,
                content: <Bms links={[
                    <LinkButton
                        title='Live Site'
                        url='https://blackieministorage.com/'
                        icon={Icons.external} />,
                    <LinkButton
                        title='Github'
                        url='https://github.com/astranomaly/bms-jade'
                        icon={Icons.github} />,
                ]} />,
                stack: toolsets.bms,
                imgAtr: 'Image C/O Pexels',
            },
            'graphics': {
                title: 'Graphic Design',
                subtitle: 'Modifying the physical world',
                backdrop: graphicsImg,
                content: <Graphics links={[
                    <LinkButton
                        title='ViaFoods'
                        url='http://viafoods.com/'
                        icon={Icons.external} />,
                    <LinkButton
                        title='Space: 93 AU'
                        url='https://www.dropbox.com/s/rir6mdone2sto2u/Space%2093%20AU.zip?dl=0'
                        icon={Icons.file} />,
                ]} />,
                stack: toolsets.graphics,
            },
            'landman': {
                title: 'Landman',
                subtitle: 'A modern, mobile-responsive landing page',
                backdrop: landmanImg,
                content: <Landman links={[
                    <LinkButton
                        title='Live Site'
                        url='https://landmanltd.com/'
                        icon={Icons.external} />,
                    <LinkButton
                        title='Github'
                        url='https://github.com/astranomaly/landman-files'
                        icon={Icons.github} />,
                ]} />,
                links: [],
                screenshots: [],
                stack: toolsets.landman,
            },
            'maxq': {
                title: 'Max Q Live',
                subtitle: 'A tech ecosystem to change the world',
                backdrop: maxqImg,
                content: <MaxQ links={[
                    <LinkButton
                        title='Kerry McLuhan'
                        url='https://www.linkedin.com/in/kerry-mcluhan-962722106/'
                        icon={Icons.linkedin} />,
                ]} />,
                stack: toolsets.maxq,
                imgAtr: 'Image C/O USGS/NASA Landsat',
            },
            'outpost': {
                title: 'The Outpost',
                subtitle: 'A fresh start',
                backdrop: outpostImg,
                content: <Outpost links={[]} />,
                stack: toolsets.outpost,
                imgAtr: 'Image C/O NASA'
            },
            'userscripts': {
                title: 'Userscripts',
                subtitle: 'Additional features and usability across the web',
                backdrop: userscriptsImg,
                content: <Userscripts links={[
                    <LinkButton
                        title='Userscript Builder'
                        url='https://github.com/astranomaly/ts-userscript-builder'
                        icon={Icons.github} />,
                    <LinkButton
                        title='Plextended'
                        url='https://github.com/astranomaly/plextended'
                        icon={Icons.github} />,
                    <LinkButton
                        title='Misc Scripts'
                        url='https://github.com/astranomaly/misc-userscripts'
                        icon={Icons.github} />,
                ]} />,
                stack: toolsets.userscripts,
            },
        }
        if( currentPage ){
            return cases[currentPage];
        }else{
            return <Redirect to='/' />;
        }
    }

    updatePageIfURL() {
        if ( this._activePage !== this._currentPage ) {
            this._activePage = this._currentPage;
        }
        this.props.UPDATE_PAGE_DATA( this.buildPageData( this._activePage ) );
    }

    componentDidMount(){
        this.props.UPDATE_NAV_LOCATION( -1 );
    }

    componentDidUpdate(){
        /* To allow changing pages inside the Portfolio component, we need to
        ensure the URL is checked when the component updates */
        this._currentPage = this.props.location.pathname.replace( '/p/', '' );
        if( this._activePage !== this._currentPage ){
            this.updatePageIfURL();
        }
        this.props.UPDATE_NAV_LOCATION( -1 );
        /* Always jump to the top of the portfolio page */
        window.scrollTo(window.screenTop,0);
    }

    // Draw the page
    render(){
        if(this.props.pageInfo){
            const stackArea =
                this.props.pageInfo.stack.length < 1 ?
            null : <ul>{
                this.props.pageInfo.stack.map( tool => <li key={Math.random() * 5}>{tool}</li>)
            }</ul>;
            const imgAtr =
                this.props.pageInfo.imgAtr ? this.props.pageInfo.imgAtr : undefined;

            return (
                <>
                    <AppContent>
                        <SmallHeader
                            title={this.props.pageInfo.title}
                            subtitle={this.props.pageInfo.subtitle}
                            tools={stackArea}
                            img={this.props.pageInfo.backdrop}
                            atr={imgAtr} />
                        <section className={style.PortfolioPage}>
                            {this.props.pageInfo.content}
                        </section>
                        <Footer/>
                    </AppContent>
                    <Nav/>
                </>
            );
        }else{
            return(<div>Loading...</div>);
        }
    }
}

// Manage global state
const mapStateToProps = (state:RootState) => ({
    activePage: state.activePage,
    pageInfo: state.pageInfo,
})
const mapDispatchToProps = ( dispatch: Dispatch ) => {
    return {
        UPDATE_PAGE_DATA: ( payload: any ) => dispatch( {
            type: Actions.UPDATE_PAGE_DATA,
            payload: payload,
        } ),
        UPDATE_NAV_LOCATION: (payload:any) => dispatch({
            type: Actions.UPDATE_NAV_LOCATION,
            payload: payload,
        }),
    }
}
const connector = connect(mapStateToProps,mapDispatchToProps);

export default connector(Portfolio);
