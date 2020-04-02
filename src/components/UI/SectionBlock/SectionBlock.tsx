import React, {RefObject} from 'react';

type InfoBlockProps = {
    title: string;
    theRef:RefObject<any>;
}

const sectionBlock: React.FC<InfoBlockProps> = ( props ) => {
    return (
        <>
            <h3 ref={props.theRef}>{props.title}</h3>
            {props.children}
        </>
    );
}

export const values = {
    info: 'Information',
    tech: 'Technology',
}

export default sectionBlock;
