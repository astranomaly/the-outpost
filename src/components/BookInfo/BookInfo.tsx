import React from 'react';

type BookInfoProps = {
    data: BookInfoType[];
}

const bookInfo: React.FC<BookInfoProps> = ( props ) => {
    return (
        <>
            {props.data.map( book => (
                <p key={book.link}>&ldquo;<a href={book.link}>{book.title}</a>&rdquo; <span className='no-break'>({book.authors.join( ' <abbr className="amp" title="and">&amp;</abbr> ' )}).</span></p>
            ) )}
        </>
    )
}

export default bookInfo;
