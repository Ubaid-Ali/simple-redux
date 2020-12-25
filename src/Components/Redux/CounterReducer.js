import { increment, decrement } from './Action'


const initialState = {
    counter: 0
};

export default function CounterReducer(state = initialState, action) {

    switch (action.type) {
        case increment:
            return { ...state, counter: state.counter + 1 };
        case decrement:
            return { ...state, counter: state.counter - 1 };
        case 'USER_NUMBER':
            return { ...state, counter: state.counter + action.payload.value }
        default:
            return state;
    }
}