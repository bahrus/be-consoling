// @ts-check
import { BeHive, seed, MountObserver } from 'be-hive/be-hive.js';
/** @import {EMC} from './ts-refs/trans-render/be/types' */
/** @import {Actions, PAP, AllProps, AP} from './ts-refs/be-consoling/types' */;

/**
 * @type {EMC<any, AP>}
 */
export const emc = {
    base: 'be-consoling',
    branches: ['', 'level', 'ignore'],
    map: {
        '0.0': {
            instanceOf: 'Object',
            mapsTo: '.',
        },
        '1.0': {
            instanceOf: 'String',
            mapsTo: 'level'
        },
        '2.0': {
            instanceOf: 'Object',
            mapsTo: 'ignore'
        }


    },
    enhPropKey: 'beConsoling',
    importEnh: async () => {
        const { BeConsoling } = await import('./be-consoling.js');
        return BeConsoling;
    },
};
const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);
