// @ts-check
import { propInfo, rejected, resolved } from 'be-enhanced/cc.js';
import { BE } from 'be-enhanced/BE.js';
import {dispatchEvent as de} from 'trans-render/positractions/dispatchEvent.js';
/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types.d.ts' */
/** @import {Actions, PAP, AllProps, AP, BAP, dispatch} from './ts-refs/be-consoling/types' */;

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
            level: 'log'
        },
        propInfo: {
            ...propInfo,
            ignore: {
                def: ['mouseover', 'mouseout', 'mousemove']
            }
        },
        positractions: [resolved, rejected],
        actions: {
            hydrate:{
                ifAllOf: ['level', 'ignore']
            }
        }
    };

    de = de;

    /**
     * @type {AbortController | undefined}
     */
    #abortController;

    /**
     * @type {dispatch | undefined}
     */
    #originalDispatch; 

    /**
     * 
     * @param {BAP} self 
     * @returns 
     */
    hydrate(self) {
        let abortController = this.#abortController;
        if(abortController !== undefined){
            abortController.abort();
            abortController = new AbortController();
        }else{
            abortController = new AbortController();
        }
        this.#abortController = abortController;
        const { enhancedElement,level, ignore} = self;
        let originalDispatch = this.#originalDispatch;
        if(originalDispatch === undefined){
            let proto = enhancedElement;
            let prop = Object.getOwnPropertyDescriptor(proto, 'dispatchEvent');
            while(proto && !prop){
                proto = Object.getPrototypeOf(proto);
                prop = Object.getOwnPropertyDescriptor(proto, 'dispatchEvent');
            }
            if(prop === undefined){
                throw "Can't find dispatchEvent.";
            }
            originalDispatch = proto.dispatchEvent;
            if(originalDispatch === undefined) throw 500;
            proto.dispatchEvent = function(event){
                if(!ignore.includes(event.type)){
                    console[level](`Dispatched event: ${event.type}`, event, this);
                }
                
                return /** @type {boolean} */ ( originalDispatch.call(this, event));
            }
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
            if(ignore.includes(eventType)) return;
            enhancedElement.addEventListener(eventType, e => {
                console[level](`Event: ${eventType}`, e);
            }, {signal: abortController.signal}); // useCapture = true to catch events in capture phase
        });
        return /** @type {PAP} */ ({
            resolved: true,
        });
    }
}

await BeConsoling.bootUp();
export {BeConsoling};