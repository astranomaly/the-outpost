import React from 'react';
import style from './AppContent.module.scss';

const appContent: React.FC = (props) => {
    return (
        <div className={style.AppContent}>
            {props.children}
        </div>
    );
}

export default appContent;
