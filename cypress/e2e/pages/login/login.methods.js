import { loginElements } from "./login.elements"

export class loginMethods{
    static insertUsername(username){
        loginElements.textboxes.username.type(username)
    }
    static insertPassword(password){
        loginElements.textboxes.password.type(password)
    }
    static clickOnLoginButton(){
        loginElements.buttons.login.click()
    }
    static login(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
}