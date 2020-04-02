import React from 'react';

import style from './InfoBlock.module.scss';

type InfoBlockProps = {
    title: string;
    children?: JSX.Element;
}

const infoBlock = ( props: InfoBlockProps ) => {
    return (
        <div className={style.InfoBlock}>
            <div className={style.TitleBox}>
                <h3>{props.title}</h3>
            </div>
            <div className={style.InfoBox}>
                {props.children}
            </div>
        </div>
    );
}

export default infoBlock;
