
import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function SignUp(){
    return(
        <div className={'auth-block'}>
            <div className={'auth-form'}>
                <label className={'label-name'}>Name</label>
                <input onChange={checkName} id={'name'} className={'input'} type={'text'}></input>

                <label className={'label-surname'}>Surname</label>
                <input onChange={checkSur} id={'surname'} className={'input'} type={'text'}></input>

                <label className={'label-date'}>Birthday</label><br/>
                <input onChange={checkDate} id={'date'} className={'input'} type={'date'}></input><br/>
                <p id={"incorrect-date"}>Incorrect Date</p>
                <label className={'label-email'}>Email</label>
                <input onChange={checkEmail} id={"email"} className={"input"} type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}" />
                <p id={"incorrect-email"} >Incorrect Email Format</p>

                <label className={'label-login'}>Login</label>
                <input onChange={checkLogin} id={'login'} className={'input'} type={'text'}></input>
                <p id={"bad-login"}></p>
                <label className={'label-pass'}>Password</label>
                <input onChange={checkPass} minLength={8} maxLength={64} id={'password'} className={'input'} type={"password"}></input>
                <p id={"incorrect-password"} >The password must be at least 8 characters long</p>

                <p id={"incorrect-form"}>Attention, some fields are not filled in! Click the "Submit" when you're done </p>


                <button onClick={
                    getValues
                } id={"signup-button"} className={"submit-button"} type={'submit'}>Submit</button>
            </div>
            <Link id={"linkToGraph"} to={"/graph"}></Link>
        </div>
    )
}
export default SignUp

class Form {
    name
    surname
    login
    password
    email
    date

    nameValue = ""
    surnameValue = ""
    loginValue = ""
    passwordValue = ""
    emailValue = ""
    dateValue = ""

    constructor() {
        this.name = false
        this.surname = false
        this.password = false
        this.email = false
        this.login = false
        this.date = false
    }

    checkForm(){
        return !!(this.name && this.surname && this.login && this.password && this.email);
    }
}

const form = new Form()


function checkDate(){
    const date =  document.getElementById("date").value
    const text = document.getElementById("incorrect-date")
    console.log(date.slice(0,3))
    if (date.slice(0,4) >= 2023){
        text.style.display = "block"
        form.date = false
        form.dateValue = ""
    }else{
        text.style.display = "none"
        form.date = true
        form.dateValue = date
    }
}

function checkLogin(){
    const login = document.getElementById("login").value
    if (login.length >= 1){
        form.login = true
        form.loginValue = login
    }else{
        form.login = false
        form.loginValue = ""
    }
}

function checkName() {
    const name = document.getElementById("name").value
    if (name.length >= 1){
        form.name = true
        form.nameValue = name
    }else{
        form.name = false
        form.nameValue = ""
    }
}

function checkSur() {
    const surname = document.getElementById("surname").value
    if (surname.length >= 1){
        form.surname = true
        form.surnameValue = surname
    }else{
        form.surname = false
        form.surnameValue = ""
    }
}
function checkPass(){
    const text = document.getElementById("incorrect-password")
    const password = document.getElementById("password").value
    if (password.length >= 8 && password.length <= 64){
        text.style.display = "none"
        form.password = true;
        form.passwordValue = password
    }else{
        text.style.display = "block";
        form.password = false
        form.passwordValue = ""
    }
}
function checkEmail(){
    const invalidEmail = document.getElementById("incorrect-email")
    const pattern = new RegExp("[a-z0-9._%+-]*@[a-z0-9.-]*.[a-z]{2,4}")
    const email = document.getElementById("email").value
    if (pattern.test(email) && email.indexOf(".") > 0){
        form.email = true
        form.emailValue = email
        invalidEmail.style.display = "none"
    }else{
        form.email = false
        form.emailValue = ""
        invalidEmail.style.display = "block"
    }
}

function getValues(){

    if (form.checkForm()){
        console.log(
            form.nameValue,
            form.surnameValue,
            form.dateValue,
            form.emailValue,
            form.loginValue,
            form.passwordValue
        )

        axios({
            method: 'post',
            url: 'http://localhost:8080/auth/register',
            data: {
                name : form.nameValue,
                surname : form.surnameValue,
                birthday : form.dateValue,
                email : form.emailValue,
                login : form.loginValue,
                password : form.passwordValue
            }
        }).then( function (response) {
            if (response.data.success){
                sessionStorage.setItem("token", response.data.token)
                sessionStorage.setItem("id", response.data.id)
                document.getElementById("linkToGraph").click()
            }else{
                document.getElementById("bad-login").innerText = response.data.error.description
            }
        })
    }else{
        document.getElementById("incorrect-form").style.display = "block"
    }
}