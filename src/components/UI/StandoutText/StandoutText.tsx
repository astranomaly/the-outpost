import React from 'react';
import style from './StandoutText.module.scss';

type InfoBlockProps = {
    children?: string|JSX.Element;
}

const standoutText = ( props: InfoBlockProps ) => {
    return (
        <>
            <p className={`balance-text ${style.Standout}`}>{props.children}</p>
        </>
    );
}

export default standoutText;
