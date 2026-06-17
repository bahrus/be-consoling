//@ts-check

/** @import {EMC} from './types/mount-observer/types' */;
/** @import {AllProps, Actions} from './types/be-consoling/types' */
/** @import {RAConfig} from './types/roundabout/types' */

/**
 * @type {EMC<any, AllProps, Element, RAConfig<AllProps, Actions> >}
 */
export const emc = {
    enhConfig: {
        enhKey: 'BeConsoling',
        spawn: 'be-consoling/be-consoling.js',
        withAttrs: {
            base: 'be-consoling',
            level: '${base}-level',
            ignore: '${base}-ignore',
            _ignore: {
                instanceOf: 'Object'
            }
        }
    },
    customData: {
        weakRef: {
            properties: ['enhancedElement']
        },
        actions: {
            hydrate: {
                ifAllOf: ['level', 'ignore', 'enhancedElement']
            }
        },
        defaultPropVals: {
            level: 'log',
            ignore: ['mouseover', 'mouseout', 'mousemove']
        }
    }
};

export function render(){
    return JSON.stringify(emc, null, 4);
}

console.log(render());
