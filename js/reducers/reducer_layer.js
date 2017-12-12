
export default function (state = [],action) {
    switch (action.type){
        case 'FETCH_GET':
            console.log(action.payload)
            return action.payload.data;
        default:
            return state;
    }
}