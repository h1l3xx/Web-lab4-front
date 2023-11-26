
import React from "react";
import {Link} from "react-router-dom";

function SignUp(){
    return(
        <div className={'auth-block'}>
            <div className={'auth-form'}>

                <label className={'label'}>Name</label>
                <input id={'name'} className={'input'} type={'text'}></input>

                <label className={'label'}>Surname</label>
                <input id={'surname'} className={'input'} type={'text'}></input>

                <label className={'label'}>Birthday</label><br/>
                <input id={'date'} className={'input'} type={'date'}></input><br/>

                <label className={'label'}>Email</label>
                <input id={'email'} className={'input'} type={'email'}></input>

                <label className={'label'}>Login</label>
                <input id={'login'} className={'input'} type={'text'}></input>

                <label className={'label'}>Password</label>
                <input id={'password'} className={'input'} type={"password"}></input>

                <button onClick={
                    getValues
                } id={"signup-button"} className={"submit-button"} type={'submit'}>Submit</button>
            </div>
            <Link id={"linkToGraph"} to={"/graph"}></Link>
        </div>
    )
}
export default SignUp

function getValues(){
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    const name = document.getElementById('name').value
    const surname = document.getElementById('surname').value
    const date = document.getElementById('date').value
    const email = document.getElementById('email').value
    console.log(name, surname, date, email, login, password)


    //Отправка на бек и ожидание ответа

    //Проверка ответа

    //Переадресация на страницу с графом

    document.getElementById("linkToGraph").click()
}