import React from 'react';
import style from './LinkButton.module.scss';
// Assets
import { ReactComponent as Github } from '../../../assets/img/fa-github.svg';
import { ReactComponent as External } from '../../../assets/img/fa-external.svg';
import { ReactComponent as File } from '../../../assets/img/fa-file.svg';
import { ReactComponent as LinkedIn } from '../../../assets/img/fa-linkedin.svg';



type LinkButtonProps = {
    title: string;
    url: string;
    icon: JSX.Element;
}

const linkButton: React.FC<LinkButtonProps> = ( props ) => {
    return (
        <>
            <a className={style.LinkButton} href={props.url}>
                <span aria-hidden='true'>{props.icon}</span>
                {props.title}
            </a>
        </>
    );
}

export const Icons = {
    external: <External/>,
    github: <Github/>,
    file: <File/>,
    linkedin: <LinkedIn/>,
}

export default linkButton;
