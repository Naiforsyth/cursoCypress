import { loginElements } from "./login.elements"
import { Logger } from "../../util/logger";

export class LoginMethods{
    static insertUsername(username){
        loginElements.textboxes.username.invoke('val', username)
    }
    static insertPassword(password){
        loginElements.textboxes.password.invoke('val', password)
    }
    static clickOnLoginButton(){
        loginElements.buttons.login.click()
    }
    static login(username, password){
        Logger.subStep('Insert username')
        this.insertUsername(username)
        
        Logger.subStep('Insert password')
        this.insertPassword(password)
        
        Logger.subStep('Click on Login button')
        this.clickOnLoginButton()
    }
}