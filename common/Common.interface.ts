import {BrowserContext} from "@playwright/test";

interface CommonInterface{
    readonly context: BrowserContext
    getLoopIndexAndValue: (object:Array<any>)=> any
}

export default CommonInterface