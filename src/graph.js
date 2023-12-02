
import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";


class Dot{
    x = 0
    y = 0
    r = 0
    result = false

    constructor(x, y, r, result) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
    }
}

function Graph(){
    return(
        <div>
            <div className={'graph'}>
                <button id = "show-btn" className={"show-btn"} onClick={drawOrCat}>Show Graph</button>
                <button id = "log-out" className={"log-out"} onClick={logOut} >Log Out</button>
                <br/>
                <img id={"graph-cat"} className={"graph-cat"} src={require('./image/plink-cat.gif')} alt={""}/><br/>
                <canvas id={"graph"}></canvas>
            </div>
            <div id={"choose-block"} className={"choose-block"}>
                <div className={"x-block"}>
                    <label className={"x-label"}> Choose X: </label>
                    <div className={"x-stack"}>
                        <button onClick={setXM2} className={"choose-button"} id={"x-button-1"} value={"-2.0"}>-2.0</button>
                        <button onClick={setXM15} className={"choose-button"} id={"x-button-2"} value={"-1.5"}>-1.5</button>
                        <button onClick={setXM1} className={"choose-button"} id={"x-button-3"} value={"-1.0"}>-1.0</button>
                    </div>
                    <div>
                        <button onClick={setXM05} className={"choose-button"} id={"x-button-4"} value={"-0.5"}>-0.5</button>
                        <button onClick={setX0} className={"choose-button"} id={"x-button-5"} value={"0.0"}>0.0</button>
                        <button onClick={setX05} className={"choose-button"} id={"x-button-6"} value={"0.5"}>0.5</button>
                    </div>
                    <div>
                        <button onClick={setX1} className={"choose-button"} id={"x-button-7"} value={"1.0"}>1.0</button>
                        <button onClick={setX15} className={"choose-button"} id={"x-button-8"} value={"1.5"}>1.5</button>
                        <button onClick={setX2} className={"choose-button"} id={"x-button-9"} value={"2.0"}>2.0</button>
                    </div>
                </div>
                <div className={"y-block"}>
                    <label className={"y-label"}>Choose Y:</label>
                    <div className={"y-input"}>
                        <input id={"Y"} onChange={setY} className={"spinner"} type={"number"} defaultValue={0} step={0.1} min={-5} max={3}></input>
                    </div>
                </div>
                <div className={"r-block"}>
                    <label className={"r-label"}>Choose R:</label>
                    <div className={"r-stack"}>
                        <button onClick={setRM2} className={"choose-button"} id={"r-button-1"}>-2.0</button>
                        <button onClick={setRM15} className={"choose-button"} id={"r-button-2"}>-1.5</button>
                        <button onClick={setRM1} className={"choose-button"} id={"r-button-3"}>-1.0</button>
                    </div>
                    <div>
                        <button onClick={setRM05} className={"choose-button"} id={"r-button-4"}>-0.5</button>
                        <button onClick={setR0} className={"choose-button"} id={"r-button-5"}>0.0</button>
                        <button onClick={setR05} className={"choose-button"} id={"r-button-6"}>0.5</button>
                    </div>
                    <div>
                        <button onClick={setR1} className={"choose-button"} id={"r-button-7"}>1.0</button>
                        <button onClick={setR15} className={"choose-button"} id={"r-button-8"}>1.5</button>
                        <button onClick={setR2} className={"choose-button"} id={"r-button-9"}>2.0</button>
                    </div>
                </div>
                <div className={"buttons-block"}>
                    <button onClick={shoot} className={"shoot"} type={"submit"}>SHOOT</button><br/>
                    <button onClick={clear} className={"clear"} type={"submit"}>Clear Graph</button><br/>
                    <button onClick={del} className={"delete"} type={"submit"}>Delete All</button><br/>
                </div>
                <a onClick={start_click_graph} id={"hidden"} ></a>
                <Link id={"go-to-home-page"} to={"/"}></Link>
            </div>
        </div>

    )
}
export default Graph

function logOut(){
    sessionStorage.removeItem("id")
    sessionStorage.removeItem("token")
    document.getElementById("go-to-home-page").click()
}

function clear(){
    dots = []
    const canvas = new Canvas()
    canvas.drawGraph(R)
}

function del(){
    const id = sessionStorage.getItem("id")
    axios({
        method: 'delete',
        url: `http://localhost:8080/results/user/${id}`,
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token")
        }
    }).then( function () {
        clear()
        clearTable()
    })
}

let dots = []

function clearTable(){
    document.getElementById("table").innerHTML = "<div id='x-column' class='column'><div class='head'>X</div></div> <div id='y-column' class='column'><div class='head'>Y</div></div> <div id='r-column' class='column'><div class='head'>R</div></div> <div id='date-column' class='column'><div class='head'>Date</div></div> <div id='result-column' class='column'><div class='head'>Result</div></div> <div id='resend-column' class='column'><div class='head'>Try Again</div></div>"
}
function shoot(){
    sendDot(X, Y, R)
}



let Y = 0


function setY(){
    Y =  Number(document.getElementById("Y").value.replace(",", "."))
    console.log(Y)
}


let X = 0
function setXM2(){
    clearXButtons()

    const button = document.getElementById("x-button-1")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    X = -2.0
    console.log(X)
}
function setXM15(){
    clearXButtons()

    const button = document.getElementById("x-button-2")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    X = -1.5
    console.log(X)
}
function setXM1(){
    clearXButtons()

    const button = document.getElementById("x-button-3")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    X = -1.0
    console.log(X)
}
function setXM05(){
    clearXButtons()

    const button = document.getElementById("x-button-4")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    X = -0.5
    console.log(X)
}
function setX0(){
    clearXButtons()

    const button = document.getElementById("x-button-5")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    X = 0.0
    console.log(X)
}
function setX05(){
    clearXButtons()

    const button = document.getElementById("x-button-6")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    X = 0.5
    console.log(X)
}
function setX1(){
    clearXButtons()

    const button = document.getElementById("x-button-7")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    X = 1
    console.log(X)
}
function setX15(){
    clearXButtons()

    const button = document.getElementById("x-button-8")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    X = 1.5
    console.log(X)
}
function setX2(){
    clearXButtons()

    const button = document.getElementById("x-button-9")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    X = 2.0
    console.log(X)
}

let R = 2

let connect = false

function clearButton(button){
    button.style.backgroundColor = "#605CB1"
    button.style.color = "#91FD7E"
}

function clearXButtons(){
    const x1 = document.getElementById("x-button-1")
    clearButton(x1)
    const x2 = document.getElementById("x-button-2")
    clearButton(x2)
    const x3 = document.getElementById("x-button-3")
    clearButton(x3)
    const x4 = document.getElementById("x-button-4")
    clearButton(x4)
    const x5 = document.getElementById("x-button-5")
    clearButton(x5)
    const x6 = document.getElementById("x-button-6")
    clearButton(x6)
    const x7 = document.getElementById("x-button-7")
    clearButton(x7)
    const x8 = document.getElementById("x-button-8")
    clearButton(x8)
    const x9 = document.getElementById("x-button-9")
    clearButton(x9)
}

function clearRButtons(){
    const r1 = document.getElementById("r-button-1")
    clearButton(r1)
    const r2 = document.getElementById("r-button-2")
    clearButton(r2)
    const r3 = document.getElementById("r-button-3")
    clearButton(r3)
    const r4 = document.getElementById("r-button-4")
    clearButton(r4)
    const r5 = document.getElementById("r-button-5")
    clearButton(r5)
    const r6 = document.getElementById("r-button-6")
    clearButton(r6)
    const r7 = document.getElementById("r-button-7")
    clearButton(r7)
    const r8 = document.getElementById("r-button-8")
    clearButton(r8)
    const r9 = document.getElementById("r-button-9")
    clearButton(r9)
}

function setRM2(){

    clearRButtons()

    const button = document.getElementById("r-button-1")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    R = -2.0
    drawByR(R)
    console.log(R)
}
function setRM15(){

    clearRButtons()

    const button = document.getElementById("r-button-2")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    R = -1.5
    drawByR(R)
    console.log(R)
}
function setRM1(){

    clearRButtons()

    const button = document.getElementById("r-button-3")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    R = -1.0
    drawByR(R)
    console.log(R)
}
function setRM05(){

    clearRButtons()

    const button = document.getElementById("r-button-4")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    R = -0.5
    drawByR(R)
    console.log(R)
}
function setR0(){

    clearRButtons()

    const button = document.getElementById("r-button-5")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    R = 0.0
    drawByR(R)
    console.log(R)
}
function setR05(){

    clearRButtons()

    const button = document.getElementById("r-button-6")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    R = 0.5
    drawByR(R)
    console.log(R)
}
function setR1(){

    clearRButtons()

    const button = document.getElementById("r-button-7")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    R = 1
    drawByR(R)
    console.log(R)
}
function setR15(){

    clearRButtons()

    const button = document.getElementById("r-button-8")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    R = 1.5
    drawByR(R)
    console.log(R)
}
var socket

function setR2(){

    clearRButtons()

    const button = document.getElementById("r-button-9")
    button.style.backgroundColor = "#91FD7E"
    button.style.color = "#605CB1"
    R = 2.0
    drawByR(R)
    console.log(R)
}

function drawByR(r){
    const canvas = new Canvas()

    canvas.drawGraph(r)
    canvas.drawOldDots(dots)
}


let f = true

function start_click_graph(){
    if (f){
        f = false
        const click_canvas = document.getElementById("graph")
        click_canvas.addEventListener("click", ev =>{
            const xOffset = ev.offsetX;
            const yOffset = ev.offsetY;
            const r = R
            const x = (xOffset - 200) / (40)
            const y = (yOffset - 200) * (-1) / (40)

            sendDot(x, y, r)
        })
    }
}

let send = false
let block = false
function sendDot(x, y, r){

    socket.send(`${sessionStorage.getItem("id")} dot`)
    if (!block){
        axios({
            method: 'post',
            url: 'http://localhost:8080/results/check',
            data: {
                x : x,
                y : y,
                r : r,
                id : sessionStorage.getItem("id")
            },
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token")
            }
        }).then( function (response) {
            dots.push(new Dot(x, y, r, response.data.result))
            send = true
            addInTable(response.data)
            drawOrCat()
        })
    }
}

function addInTable(dot){
    const x_column = document.getElementById("x-column")
    const y_column = document.getElementById("y-column")
    const r_column = document.getElementById("r-column")
    const result_column = document.getElementById("result-column")
    const date_column = document.getElementById("date-column")
    const resend_column = document.getElementById("resend-column")

    let res = ""
    if (dot.result){
        res = "<br><div class='hit'>HIT</div>"
    }else{
        res = "<br><div class='miss'>MISS</div>"
    }

    x_column.innerHTML = x_column.innerHTML + "<br><div class='item'>" + dot.x + "</div>"
    y_column.innerHTML = y_column.innerHTML + "<br><div class='item'>" + dot.y + "</div>"
    r_column.innerHTML = r_column.innerHTML + "<br><div class='item'>" + dot.r + "</div>"
    result_column.innerHTML = result_column.innerHTML + res
    date_column.innerHTML = date_column.innerHTML + "<br><div class='item'>" + Date.now() + "</div>"

    const button = "<br><button class='again' onclick='resendDot' type='submit'>*</button>"

    resend_column.innerHTML = resend_column.innerHTML + button


}

function resendDot(x, y, r){
    sendDot(x, y, r)
}


function setSocket(){
    socket = new WebSocket("ws://localhost:8080/ws")
    socket.onmessage = (event) => {
        console.log(event.data)
    };
    socket.onclose = () => {
        document.getElementById("go-to-home-page").click()
    }
    socket.onopen = () => {
        socket.send(`${sessionStorage.getItem("id")} connect`)
    }
}

function drawOrCat(){

    const canvas = new Canvas()

    if (!connect){
        block = false
        connect = true
        setSocket()
    }

    if (send){
        canvas.drawGraph(R)
        send = false
        canvas.drawOldDots(dots)
    }else{
        document.getElementById("hidden").click()

        const btn = document.getElementById("show-btn")

        const graph = document.getElementById("graph")
        const cat = document.getElementById("graph-cat")

        if (btn.innerText === "Show Graph"){
            btn.innerText = "Show Cat"
            cat.style.display = "none"
            graph.style.display = "block"
            graph.style.marginBottom = "30px"
            canvas.drawGraph(2)
            const id = sessionStorage.getItem("id")

            axios({
                method: 'get',
                url: `http://localhost:8080/results/user/${id}`,
                headers: {
                    Authorization: "Bearer " + sessionStorage.getItem("token")
                }
            }).then( function (response) {
                for(let i = 0; i < response.data.length; i++){
                    dots.push(new Dot(response.data[i].x, response.data[i].y, response.data[i].r, response.data[i].result))
                    addInTable(response.data[i])
                }
                send = true
                drawOrCat()
            })
        }else{
            btn.innerText = "Show Graph"
            cat.style.display = "block"
            cat.style.marginLeft = "35.5%"
            cat.style.marginTop = "57px"
            graph.style.display = "none"
            clearTable()
        }
    }
}

class Canvas {
    size = 400;
    // red = "#FF0000"
    // gray = "#696969"
    // green = "#19ff19"

    constructor() {
        this.canvas = document.getElementById("graph");
        this.canvas.setAttribute("width", this.size.toString())
        this.canvas.setAttribute("height", this.size.toString())
        this.ctx = this.canvas.getContext("2d");
        this.ctx.font = `20px Arial`
    }

    drawOldDots(dots){
        console.log(dots)
        for (let i = 0; i < dots.length; i++){
            console.log(dots[i])
            if (R === dots[i].r){
                this.drawDot(dots[i].x, dots[i].y, dots[i].r, dots[i].result)
            }
        }
    }

    drawGraph(r){

        const radius = r * 40

        this.ctx.beginPath();

        this.ctx.strokeStyle = "#FFFFFF";
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.roundRect(0, 0, this.size, this.size, 30);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();

        //Сетка
        const scaleX = 40;
        const scaleY = 40;

        this.ctx.font = `${Math.round(scaleX/2.5)}px Arial`;
        this.ctx.textAlign = 'left';
        this.ctx.baseLine = 'top';

        this.ctx.beginPath();
        this.ctx.strokeStyle = '#C0C0C0';

        for (let i = 40; i <= this.size-40; i = i + scaleX) {
            this.ctx.moveTo(i, 0);
            this.ctx.lineTo(i, this.size);
        }

        for (let i = 40; i <= this.size-40; i = i + scaleY) {
            this.ctx.moveTo(0, i);
            this.ctx.lineTo(this.size, i);
        }
        this.ctx.stroke();
        this.ctx.closePath();

        //Ось X, ось Y

        const xAxis = Math.round(this.size / scaleX / 2) * scaleX;
        const yAxis = Math.round(this.size / scaleY /2) * scaleY;

        this.ctx.strokeStyle = '#000000'
        this.ctx.fillStyle = '#00BFFF'



        //Треугольник
        this.ctx.moveTo(this.size/2, this.size/2);
        this.ctx.lineTo(this.size/2 - radius/2, this.size/2);
        this.ctx.lineTo(this.size/2, this.size/2 - radius);
        this.ctx.fill();

        this.ctx.closePath();
        //Четверть круга

        if(radius < 0){
            this.ctx.arc(this.size/2, this.size/2, Math.abs(radius)/2, 0, -Math.PI/2, true)
        }else{
            this.ctx.arc(this.size/2, this.size/2, radius/2, -Math.PI, Math.PI/2, true);
        }
        this.ctx.fill();

        this.ctx.closePath();

        //Прямоугольник

        this.ctx.beginPath();

        this.ctx.fillRect(this.size/2, this.size/2, radius/2, -radius);

        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(xAxis, 0);
        this.ctx.lineTo(xAxis, this.size);

        this.ctx.moveTo(0, yAxis);
        this.ctx.lineTo(this.size, yAxis);

        this.ctx.stroke();
        this.ctx.closePath();




        //Разметка R и "точек" по оси X
        this.ctx.fillStyle = '#000000'

        this.ctx.beginPath();

        //Точка (0,0)

        this.ctx.fillRect(198, 198, 4, 4)

        // Обозначение оси X
        this.ctx.fillText('X', 380, 220);

        // R
        this.ctx.fillText('4', 365, 220);
        this.ctx.fillRect(360, 195, 2, 10);

        // R/2
        this.ctx.fillText('2', 285, 220);
        this.ctx.fillRect(280, 195, 2, 10);

        // -R
        this.ctx.fillText('-4', 55, 220);
        this.ctx.fillRect(40, 195, 2, 10);

        // -R/2
        this.ctx.fillText('-2', 125, 220);
        this.ctx.fillRect(120, 195, 2, 10);

        this.ctx.closePath();

        //Разметка R и "точек" по оси Y

        this.ctx.beginPath();
        // Обозначение оси Y
        this.ctx.fillText('Y', 210, 20);

        // R
        this.ctx.fillText('4', 215, 55);
        this.ctx.fillRect(195,40, 10, 2);

        // R/2
        this.ctx.fillText('2', 215, 120);
        this.ctx.fillRect(195,120, 10, 2);

        // -R/2
        this.ctx.fillText('-2', 215, 290);
        this.ctx.fillRect(195,280, 10, 2);

        // -R
        this.ctx.fillText('-4', 215, 370);
        this.ctx.fillRect(195,360, 10, 2);

        this.ctx.closePath();
    }
    drawDot(x, y, r, color){
        if (color){
            this.ctx.fillStyle = "#19ff19"
            this.ctx.beginPath();
            this.ctx.arc(200 + (x * 40), 200- (y * 40), 4, 0, 2*Math.PI, false);
            this.ctx.fill();
            this.ctx.closePath()
        }else{
            this.ctx.fillStyle = "#FF0000"
            this.ctx.beginPath();
            const arcX = 200 + (x * 40)
            const arcY =  200- (y * 40)
            this.ctx.arc(arcX, arcY, 4, 0, 2*Math.PI, false);
            this.ctx.fill();
            this.ctx.closePath()
        }

        this.ctx.beginPath();

        this.ctx.fillStyle = '#000000'

        this.ctx.fillText(`(${x.toFixed(3)}; ${y.toFixed(3)}; ${r})`, 210 + (x * 40), 195 - (y * 40));

        this.ctx.closePath();
    }
    // drawRed(x, y){
    //     this.ctx.fillStyle = "#FF0000"
    //     this.ctx.beginPath();
    //     const arcX = 200 + (x * 40)
    //     const arcY =  200- (y * 40)
    //     console.log(arcX, arcY)
    //     this.ctx.arc(arcX, arcY, 4, 0, 2*Math.PI, false);
    //     this.ctx.fill();
    //     this.ctx.closePath()
    // }
    // drawGreen(x, y){
    //     this.ctx.fillStyle = "#19ff19"
    //     this.ctx.beginPath();
    //     this.ctx.arc(200 + (x * 40), 200- (y * 40), 4, 0, 2*Math.PI, false);
    //     this.ctx.fill();
    //     this.ctx.closePath()
    // }
    // drawGrey(x, y){
    //     this.ctx.fillStyle = "#696969"
    //     this.ctx.beginPath();
    //     this.ctx.arc(200 + (x * 40), 200- (y * 40), 4, 0, 2*Math.PI, false);
    //     this.ctx.fill();
    //     this.ctx.closePath()
    // }
}

