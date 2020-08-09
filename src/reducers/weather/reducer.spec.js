import weatherReducer from './reducer';
import {GET_WEATHER} from "../../actions";

describe('Weather Reducer', () => {

    test('DEVRAIT RETOURNER LE STATE PAR DEFAUT', () => {
        const newState = weatherReducer(undefined, {})
        expect(newState).toEqual({
            data: null,
            error: '',
            loading: false
        })
    });

});