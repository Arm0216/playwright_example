import CommonInterface from "./Common.interface";
import {BrowserContext, expect, request} from "@playwright/test";

class Common implements CommonInterface{
    readonly context: BrowserContext
    constructor(context: BrowserContext) {
        this.context = context;
    }
    async login(): Promise<void>{
        const requestContext = await request.newContext();
        await requestContext.post('http://stage.dlns.us/api/login', {
            headers: {
                "Content-Type": "application/json"
            },
            form: {
                "email": "arman.poghosyan16@gmail.com",
                "password": "test2002"
            }
        })
        const cookies = await requestContext.storageState()
        console.log(cookies.cookies, '==========================')
        await this.context.addCookies(cookies.cookies)
        // await requestContext.dispose();
        // console.log(await requestContext, '=============')
        // expect(requestContext).toBeTruthy()
    }
}

export default Common