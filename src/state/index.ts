import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

type State = {
    isLoggedIn?: boolean;
    userName?: string;
};

export const stateAtom = atomWithStorage<State>('state', {});

export const stateAtomWithReset = atom(null, (_, set) => set(stateAtom, {}));
