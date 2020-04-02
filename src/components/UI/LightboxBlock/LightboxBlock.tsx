import React, {useState, RefObject} from 'react';
import FsLightbox from 'fslightbox-react';

import style from './LightboxBlock.module.scss';

type LightboxBlockProps = {
    srcs:string[];
    thumb:string[];
    theRef:RefObject<any>;
}

const LightboxBlock: React.FC<LightboxBlockProps> = ( props ) => {
    const [ lightboxController, setLightboxController ] = useState( {
        toggler: false,
        slide: 1,
    } );

    const openOnSlideNumber = (num:number) => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: num,
        });
    };

    return (
        <>
            {props.thumb.length > 0 ? <h3>Screenshots</h3> : null}
            <ul ref={props.theRef}>
                {props.thumb.map( ( val: string, key: number ) => (
                    <li
                        key={key}
                        className={style.Thumb}
                        onClick={() => openOnSlideNumber( key + 1 )
                    }>
                        <img src={val} alt='Thumbnail. Click to enlarge.' />
                    </li>
                ))}
            </ul>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={props.srcs}
                slide={lightboxController.slide}
            />
        </>
    );
}

// Exports
export default LightboxBlock;
