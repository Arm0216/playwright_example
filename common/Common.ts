import CommonInterface from "./Common.interface";
import {BrowserContext, expect, request} from "@playwright/test";

class Common implements CommonInterface{
    readonly context: BrowserContext
    constructor(context?: BrowserContext) {
        this.context = context;
    }

    getLoopIndexAndValue(object:Array<any>): any{
        return object.map((value:string, index:number) => ({ index, value }))
    }
}

export default Common