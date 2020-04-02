import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import scrollToRef from '../../helpers/scrollToRef';

import style from './Nav.module.scss';
import {ReactComponent as Arrow} from '../../assets/img/nav-arrow.svg';
import {ReactComponent as Logo} from '../../assets/img/logo.svg';
import Actions from '../../store/actions';

interface INavState {
    prevDisabled:boolean;
    nextDisabled:boolean;
}

type NavProps = ConnectedProps<typeof connector>;

class Nav extends Component<NavProps,{}>{

    state= {
        prevDisabled: true,
        nextDisabled: false,
    } as INavState

    prevHandler = () => {
        let newLoc = this.props.navLocation - 1;
        if ( newLoc >= 0 ) {
            scrollToRef( this.props.navList[ newLoc ] );
            this.props.UPDATE_NAV_LOCATION( newLoc );
            this.toggleButtons(newLoc);
        }
    }
    nextHandler = () => {
        let newLoc = this.props.navLocation + 1;
        if( newLoc <= this.props.navList.length - 1 ){
            scrollToRef( this.props.navList[newLoc] );
            this.props.UPDATE_NAV_LOCATION(newLoc);
            this.toggleButtons(newLoc);
        }
    }

    toggleButtons = (index:number) => {
        if(index - 1 < 0){
            this.setState({
                prevDisabled: true
            });
        }else{
            this.setState( {
                prevDisabled: false
            } );
        }
        if ( index + 1 > this.props.navList.length - 1 ) {
            this.setState( {
                nextDisabled: true
            } );
        }else{
            this.setState( {
                nextDisabled: false
            } );
        }
    }

    render(){
        return (
            <nav className={style.Nav}>
                <div className={style.NavContent}>
                    <button
                        onClick={this.prevHandler}
                        className={`${style.ArrowPrev}`}
                        disabled={this.state.prevDisabled}
                    ><Arrow /></button>
                    <a
                        id='top'
                        href="/"
                        aria-current='page'
                        className={style.Logo}>
                        <Logo />
                    </a>
                    <button
                        onClick={this.nextHandler}
                        className={style.ArrowNext}
                        disabled={this.state.nextDisabled}
                    ><Arrow /></button>
                </div>

            </nav>
        );
    }
}

const mapStateToProps = (state:RootState) => ({
    navList: state.navList,
    navLocation: state.navLocation,
});
const mapDispatchToProps = (dispatch:Dispatch) => {
    return{
        UPDATE_NAV_LOCATION: (payload:any) => dispatch({
            type: Actions.UPDATE_NAV_LOCATION,
            payload: payload
        })
    }
}

const connector = connect(mapStateToProps,mapDispatchToProps);

export default connector(Nav);
