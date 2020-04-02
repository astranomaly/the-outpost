import React from 'react';
import style from './SmallHeader.module.scss';

type SmallHeaderProps = {
    title: string;
    subtitle: string;
    img: string;
    tools: JSX.Element|null;
    atr?:string;
}

const smallHeader: React.FC<SmallHeaderProps> = (props) => {
    const headerStyle:React.CSSProperties = {
        backgroundImage: ` linear-gradient(to bottom, rgba(0,0,0,0) 25%, rgba(23,0,47,1) 95%), url(${props.img})`,
    };
    return (
        <header role='banner' className={style.SmallHeader} style={headerStyle}>
            <h2>{props.title}</h2>
            <p className='balance-text'>{props.subtitle}</p>
            {props.tools}
            <small>{props.atr}</small>
        </header> );
}

export default smallHeader;
