import React, { Component } from 'react';
import style from './Card.module.scss';
import Actions from '../../../store/actions';

import { ReactComponent as Server } from '../../../assets/img/fa-server.svg';
import { ReactComponent as Code } from '../../../assets/img/fa-code.svg';
import { ReactComponent as Design } from '../../../assets/img/fa-pen-nib.svg';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

type CardProps = {
    title: string;
    slug: string;
    image: string;
    type: 'code'|'server'|'design';
    tools: string[];
}

class Card extends Component<CardProps & ConnectedProps<typeof connector>,{}>{
    render(){
        let toolList: string = this.props.tools.join( ' · ' );
        let icon: JSX.Element | undefined = undefined;

        const cases = {
            'code': () => icon = <Code />,
            'server': () => icon = <Server />,
            'design': () => icon = <Design />,
        }
        if ( this.props.type ) cases[ this.props.type ]();

        const styleObj = {
            backgroundImage: `url(${this.props.image})`,
        }

        return (
            <article className={style.Card}>
                <Link to={{
                    pathname: `/p/${this.props.slug}`
                }}
                onClick={() => {
                    this.props.PAGE_CHANGE(this.props.slug)
                }}>
                    <div className={style.Thumb} style={styleObj} aria-hidden='true'></div>
                </Link>
                <header>{this.props.title}</header>
                <p>
                    <span className={`${this.props.type}-icon`}>{icon}</span>
                    <span className='balance-text'>{toolList}</span>
                </p>
            </article>
        );
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        PAGE_CHANGE: (payload: string) => dispatch({
            type: Actions.PAGE_CHANGE,
            payload: payload,
        })
    }
}

const connector = connect( null, mapDispatchToProps );

export default connector(Card);
