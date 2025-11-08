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
        let proto = enhancedElement;
        let prop = Object.getOwnPropertyDescriptor(proto, 'dispatchEvent');
        while(proto && !prop){
            proto = Object.getPrototypeOf(proto);
            prop = Object.getOwnPropertyDescriptor(proto, 'dispatchEvent');
        }
        if(prop === undefined){
            throw "Can't find dispatchEvent.";
        }
        const originalDispatch = proto.dispatchEvent;

        proto.dispatchEvent = function(event){
            console.log(`Dispatched event: ${event.type}`, event, 'on', this);
            return originalDispatch.call(this, event);
        };
        const allEvents = [
            "click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout",
            "keydown", "keyup", "keypress",
            "focus", "blur", "change", "input", "submit", "reset",
            "drag", "dragstart", "dragend", "dragenter", "dragleave", "dragover", "drop",
            "touchstart", "touchmove", "touchend", "touchcancel",
            "wheel", "scroll",
            "contextmenu", "resize", "error", "load"
        ];

        allEvents.forEach(eventType => {
            enhancedElement.addEventListener(eventType, e => {
                console.log(`Event: ${eventType}`, e);
            }, true); // useCapture = true to catch events in capture phase
        });
        return /** @type {PAP} */ ({
            resolved: true,
        });
    }
}

await BeConsoling.bootUp();
export {BeConsoling};