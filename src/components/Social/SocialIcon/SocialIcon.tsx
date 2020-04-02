import React from 'react';

type SocialIconProps = {
    children?: any;
    url: string;
    icon: JSX.Element;
}

const socialIcon = ( props: SocialIconProps ) => {
    return (
        <li><a href={props.url}>{props.icon}<span className='visually-hidden'>{props.children}</span></a></li> );
}

export default socialIcon;
