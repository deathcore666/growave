import Immutable from 'seamless-immutable';
import SeamlessImmutable from 'seamless-immutable';

import { StateInterface } from '../interfaces/state.interface';

// transformer for redux-persist
const convertToJs = (state: SeamlessImmutable.Immutable<StateInterface>) => state.asMutable({deep: true});
const fromImmutable = (raw: any) => {
    if (SeamlessImmutable.isImmutable(raw)) {
        return convertToJs(raw);
    }
    return raw;
}
const toImmutable = (raw: StateInterface) => Immutable(raw);

export default {
    out: (state: StateInterface) => toImmutable(state),
    in: (raw: any) => fromImmutable(raw)
};