import React from 'react';
import { ReactComponent as Logo } from '../../assets/img/outpost.svg';
import Standout from '../UI/StandoutText/StandoutText';

import style from './Header.module.scss';

const header: React.FC = () => {
    return (
    <header role='banner' className={style.Header}>
        <div className={style.TextWrapper}>
            <h1><Logo /></h1>
            <Standout><>
                <span className='no-break'>Front-end development,</span> <span className='no-break'>anywhere in the galaxy</span>
            </></Standout>
        </div>

    </header>);
}

export default header;
