// @ts-check
import { propInfo, rejected, resolved } from 'be-enhanced/cc.js';
import { BE } from 'be-enhanced/BE.js';
import {dispatchEvent as de} from 'trans-render/positractions/dispatchEvent.js';
/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types.d.ts' */
/** @import {Actions, PAP, AllProps, AP, BAP} from './ts-refs/be-consoling/types' */;

/**
 * @implements {Actions}
 * 
 */
class BeConsoling extends BE {
        /**
     * @type {BEConfig<BAP, Actions & IEnhancement>}
     */
    static config = {
        propDefaults: {
            logLevel: 'log'
        },
        propInfo: {
            ...propInfo,
        },
        positractions: [resolved, rejected],
        compacts: {
            when_logLevel_changes_call_hydrate: 0,
        }
    };

    de = de;

        /**
     * 
     * @param {BAP} self 
     * @returns 
     */
    hydrate(self) {
        const { enhancedElement} = self;
        const originalDispatch = enhancedElement.dispatchEvent;

        enhancedElement.dispatchEvent = function(event){
            console.log(`Dispatched event: ${event.type}`, event, 'on', this);
            return originalDispatch.call(this, event);
        };
        return /** @type {PAP} */ ({
            resolved: true,
        });
    }
}

await BeConsoling.bootUp();
export {BeConsoling};