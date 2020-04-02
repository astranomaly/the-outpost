import React from 'react';

import style from './Footer.module.scss';

const footer: React.FC = () => {
    return (
    <footer className={style.Footer} role='contentinfo'>
        <p>&copy; 2020 Jon Reimer</p>
        <blockquote className='balance-text'>&ldquo;We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time.&rdquo; <span className='no-break'>&mdash;T. S. Eliot</span></blockquote>
    </footer> );
}

export default footer;
