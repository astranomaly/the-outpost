/// <reference types="react-scripts" />

type LinkObj = {
    url: string;
    icon: 'external'|'github';
}

type Page = {
    title: string;
    subtitle: string;
    backdrop: string;
    stack: string[];
    content: JSX.Element;
    imgAtr?: string;
};

type PortfolioPage = {
    links: JSX.Element[];
}

type RootState = {
    activePage: string;
    navList: React.RefObject<any>[];
    navLocation: number;
    pageInfo?: Page;
};

type PortfolioPageProps = {
    infoRef: RefObject<any>;
    techRef:RefObject<any>;
    screensRef:RefObject<any>;
}
