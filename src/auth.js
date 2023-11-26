import React from "react";
import {Link} from "react-router-dom";

function Auth(){
    return(
        <div className={'auth-block'}>
            <Link to="/signUp">
                <button id={"register-button"} className={"register-button"} type={'button'}>First Time? Let's Register!</button>
            </Link>
            <div className={'auth-form'}>
                <label className={'label'}>Login</label>
                <input id={'login'} className={'input'} type={'text'}></input>
                <label className={'label'}>Password</label>
                <input id={'password'} className={'input'} type={"password"}></input>
                <button onClick={auth} id={"submit-button"} className={"submit-button"} type={'submit'}>Submit</button>
                <div className={'forgot'}>
                    <p>Forgot your password? ↓Click on this cat!↓</p>
                    <img className={"cat"} src={require('./image/cats.gif')} alt={""}/>
                </div>
            </div>
            <Link id={"linkToGraph"} to={"graph"}></Link>
        </div>
    )
}
export default Auth

function auth(){
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    console.log(login, password)


    //Отсылаем на бне и валидируем данные

    //Если чел зологинен, то переадресуем на Graph Page

    document.getElementById("linkToGraph").click()
}