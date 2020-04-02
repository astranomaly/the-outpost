import Actions from './actions';

type Action = {
    type: keyof typeof Actions;
    payload: any;
}

const initialState:RootState = {
    activePage: "Home",
    navList: [],
    navLocation: -1,
}

const reducer = (state:RootState = initialState, action:Action) => {
    if( action.type === Actions.PAGE_CHANGE ){
        return {
            ...state,
            activePage: action.payload,
        }
    }
    if( action.type === Actions.UPDATE_PAGE_DATA ){
        document.title = `The Outpost • ${action.payload.title}`;
        return {
            ...state,
            pageInfo: action.payload,
        }
    }
    if( action.type === Actions.UPDATE_NAV_LIST ){
        return {
            ...state,
            navList: action.payload
        }
    }
    if ( action.type === Actions.UPDATE_NAV_LOCATION ) {
        return {
            ...state,
            navLocation: action.payload,
        }
    }
    return state;
}

export default reducer;
