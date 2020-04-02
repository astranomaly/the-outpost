import React, { FunctionComponent, SVGProps } from 'react';
type ToolProps = {
    class: string;
    img: FunctionComponent<SVGProps<SVGSVGElement>>;
    color:string;
    children?:any;
}

const tools = ( props: ToolProps ) => {
    return (
    <li className={props.class} style={{color: `#${props.color}`}}>
        <props.img aria-hidden='true'/>
        <span>{props.children}</span>
    </li>
    );
}

export default tools;
