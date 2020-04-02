import React from 'react';

type LinkBlockProps = {
    links: JSX.Element[];
}

const LinkBlock: React.FC<LinkBlockProps> = ( props ) => {

    const buttonArea =
        props.links.length < 1 ?
            null :
            <ul>{
                props.links.map( link => <li key={Math.random() * 5}>{link}</li> )
            }</ul>;

    return (
        <>
            {buttonArea}
        </>
    );
}

// Exports
export default LinkBlock;
