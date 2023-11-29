import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

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
                <p id={"error"}></p>
                <div className={'forgot'}>
                    <p id={"forgot-text"} >Forgot your password? ↓Click on this cat!↓</p>
                    <img onClick={thForClick} className={"cat"} src={require('./image/cats.gif')} alt={""}/>
                </div>
            </div>
            <Link id={"linkToGraph"} to={"graph"}></Link>
        </div>
    )
}
export default Auth

function thForClick(){
    document.getElementById("forgot-text").innerText = "Thanks for click on cat! Let's create new account!"
}

function auth(){
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    console.log(login, password)


    axios({
        method: 'post', //you can set what request you want to be
        url: 'http://localhost:8080/auth',
        data: {
            login : login,
            password : password
        }
    }).then( function (response) {
        if (response.data.success){
            document.getElementById("error").innerText = ""
            sessionStorage.setItem("token", response.data.token)
            sessionStorage.setItem("id", response.data.id)
            document.getElementById("linkToGraph").click()
        }else{
            document.getElementById("error").innerText = response.data.error.description
        }
    })
}