import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import Actions from '../../../store/actions';
import { Link } from 'react-router-dom';
import SectionBlock, {values} from '../../../components/UI/SectionBlock/SectionBlock';
// import LightboxBlock from '../../../components/UI/LightboxBlock/LightboxBlock';
import LinkBlock from '../../../components/UI/LinkBlock/LinkBlock';

type UserscriptsProps = PortfolioPage & ConnectedProps<typeof connector>;

const userscripts: React.FC<UserscriptsProps> = ( props ) => {

    const infoRef = React.createRef();
    const techRef = React.createRef();

    props.UPDATE_NAV_LIST( [ infoRef, techRef ] );

    return (
        <>
            <SectionBlock theRef={infoRef} title={values.info}>
                <p>My passion project through the majority of 2017&ndash;18 was the development of custom userscripts to streamline my web browsing experience. At the same time, I took it as an opportunity to move away from using jQuery and begin focusing on writing vanilla JavaScript, as ES6 was quickly improving the front-end development&nbsp;landscape.</p>
                <p>Once accustomed to plain JavaScript, I began experimenting with <a href='https://coffeescript.org/'>CoffeeScript</a> and found that the terse, Pythonic language structure increased my enjoyment of the development process, much as Pug had done while developing <Link to='/p/bms'>Blackie Mini Storage</Link>. On the other hand, it also complicated my workflow, requiring <a href='https://nodejs.org/en/'>Node</a> <abbr className='amp' title='and'>&amp;</abbr> <a href='https://gulpjs.com/'>Gulp</a> to generate the userscript files. I now use those two technologies as a foundation for most of my&nbsp;projects.</p>
                <p>In 2018, I came across <a href='https://www.typescriptlang.org/'>TypeScript</a> which&mdash;while much less fun to write than CoffeeScript&mdash;was far more widespread, used professionally, and promoted better coding practices, prompting me to switch. Since I was already using Node/Gulp in my CoffeeScript workflow, transitioning to TypeScript wasn't a large&nbsp;step.</p>
                <p>Unfortunately, documentation for userscripts is sparse and outdated at best, so I've been forced to develop my own custom workflows and create atypical solutions to problems that could otherwise be easily-solved with access to the source code. As I plan on developing many more userscripts in the future, I created a TypeScript Userscript Builder that allows a userscript project to be set up quickly and painlessly. It includes TypeScript <abbr className='amp' title='and'>&amp;</abbr> <a href='sass-lang.com/'>Sass</a>, automatic timestamping/version incrementing, build/watch/release commands, easy metadata configuration, and other helpful features to quickly bootstrap a new&nbsp;project.</p>
                <p>The largest userscripting project I've undertaken is a complex script for a small, private hobby community. The script&mdash;which is used by many dozens of people&mdash;inserts its own settings page, adds buttons, tweaks layouts, filters messages, and fixes small bugs. I've also contributed to some scripts that link books/movies on database sites (like Goodreads) to others, or created scripts simply for my own day-to-day browsing. One current, but unfinished project aims to add quality-of-life features to Plex that are present in other media&nbsp;libraries.</p>
            </SectionBlock>
            <SectionBlock theRef={techRef} title={values.tech}>
                <p>The userscripts are tested in Chrome <abbr className='amp' title='and'>&amp;</abbr> Firefox using both <a href='https://www.tampermonkey.net/'>Tampermonkey</a> and <a href='https://violentmonkey.github.io/'>Violentmonkey</a>, but will likely work in any modern web browser since ES6 support is now commonplace. The scripts are loaded into Violentmonkey in Chrome during development to take advantage of how Violentmonkey auto-refreshes the script when changes are&nbsp;made.</p>
                <p>While the scripts can be run using any userscript extension that implements <a href='https://www.tampermonkey.net/documentation.php?ext=dhdg'>Greasemonkey API v3</a>, they no longer run using Greasemonkey itself since API v4 is not backwards compatible and is unsupported by any other&nbsp;extension.</p>
                <p>The scripts typically use Git for version control or Greasyfork for hosting, depending on their scopes and&nbsp;needs.</p>
            </SectionBlock>
            <LinkBlock links={props.links} />
            {/* <LightboxBlock
                srcs={[]}
                thumb={[]}
                theRef={}
            /> */}
        </>
    );
}

// State
const mapDispatchToProps = ( dispatch: Dispatch ) => {
    return {
        UPDATE_NAV_LIST: ( payload: any ) => dispatch( {
            type: Actions.UPDATE_NAV_LIST,
            payload: payload,
        } )
    }
}
const connector = connect( null, mapDispatchToProps );

// Exports
export default connector( userscripts );
