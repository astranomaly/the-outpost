import React from 'react';
import style from './SmallHeader.module.scss';

type SmallHeaderProps = {
    title: string;
    subtitle: string;
    page: string;
    tools: JSX.Element|null;
    atr?:string;
}

const smallHeader: React.FC<SmallHeaderProps> = (props) => {
    return (
        <header role='banner' className={`${style.SmallHeader} ${props.page}`}>
            <a className='visually-hidden' href='/'>Go back to home page</a>
            <h2>{props.title}</h2>
            <p className='balance-text'>{props.subtitle}</p>
            {props.tools}
            <small>{props.atr}</small>
        </header> );
}

export default smallHeader;
