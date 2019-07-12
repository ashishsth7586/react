const initState = {
    posts: [
        {id: '1', title: 'This is first Title', body: 'Lorem ipsum this is first body here is conent'},
        {id: '2', title: 'This is Second Title', body: 'Lorem ipsum this is first body here is conent'},
        {id: '3', title: 'This is third Title', body: 'Lorem ipsum this is third body here is conent'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}
export default rootReducer