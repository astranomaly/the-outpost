import React from 'react';
import Tool from './Tool/Tool';

import style from './Tools.module.scss';

import {ReactComponent as Adobe} from '../../assets/img/tools/adobe.svg';
import {ReactComponent as Affinity} from '../../assets/img/tools/affinity.svg';
import {ReactComponent as Apache} from '../../assets/img/tools/apache.svg';
import {ReactComponent as Css3} from '../../assets/img/tools/css3.svg';
import {ReactComponent as Git} from '../../assets/img/tools/git.svg';
import {ReactComponent as Gulp} from '../../assets/img/tools/gulp.svg';
import {ReactComponent as Html5} from '../../assets/img/tools/html5.svg';
import {ReactComponent as Javascript} from '../../assets/img/tools/javascript.svg';
import {ReactComponent as Mysql} from '../../assets/img/tools/mysql.svg';
import {ReactComponent as Node} from '../../assets/img/tools/node.svg';
import {ReactComponent as Php} from '../../assets/img/tools/php.svg';
import {ReactComponent as ReactLogo} from '../../assets/img/tools/react.svg';
import {ReactComponent as Sass} from '../../assets/img/tools/sass.svg';
import {ReactComponent as Typescript} from '../../assets/img/tools/typescript.svg';
import {ReactComponent as Ubuntu} from '../../assets/img/tools/ubuntu.svg';
import {ReactComponent as Vscode} from '../../assets/img/tools/vscode.svg';

type ToolsProps = {
}

const tools = ( props: ToolsProps ) => {

    return (
        <>
            <ul className={`${style.Tools} front`}>
                <Tool
                    class='front'
                    img={Html5}
                    color='E34F26'>HTML5</Tool>
                <Tool
                    class='front'
                    img={Css3}
                    color='1572B6'>CSS3</Tool>
                <Tool
                    class='front'
                    img={Javascript}
                    color='F7DF1E'>ES6+</Tool>
                <Tool
                    class='front'
                    img={ReactLogo}
                    color='61DAFB'>React</Tool>
                <Tool
                    class='front'
                    img={Sass}
                    color='CC6699'>Sass</Tool>
                <Tool
                    class='front'
                    img={Typescript}
                    color='007ACC'>Typescript</Tool>
            </ul>
            <ul className={`${style.Tools} app`}>
                <Tool
                    class='app'
                    img={Adobe}
                    color='FF0000'>Adobe</Tool>
                <Tool
                    class='app'
                    img={Affinity}
                    color='ffffff'>Affinity</Tool>
                <Tool
                    class='app'
                    img={Vscode}
                    color='007ACC'>VS Code</Tool>
                <Tool
                    class='app'
                    img={Git}
                    color='F05032'>Git</Tool>
                <Tool
                    class='app'
                    img={Gulp}
                    color='DA4648'>Gulp</Tool>
                <Tool
                    class='app'
                    img={Node}
                    color='339933'>Node</Tool>
            </ul>
                <ul className={`${style.Tools} app`}>
                <Tool
                    class='back'
                    img={Ubuntu}
                    color='E95420'>Ubuntu</Tool>
                <Tool
                    class='back'
                    img={Apache}
                    color='D22128'>Apache</Tool>
                <Tool
                    class='back'
                    img={Php}
                    color='777BB4'>PHP</Tool>
                <Tool
                    class='back'
                    img={Mysql}
                    color='4479A1'>MySQL</Tool>
            </ul>
        </>
    );
}

export default tools;
