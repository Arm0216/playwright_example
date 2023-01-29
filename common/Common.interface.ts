import {BrowserContext} from "@playwright/test";

interface CommonInterface{
    readonly context: BrowserContext
    login: ()=>Promise<void>
}

export default CommonInterface