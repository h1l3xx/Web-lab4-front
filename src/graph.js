
import React from "react";

class Dot{
    x = 0
    y = 0
    r = 0
    result = "false"

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
                <button id = "show-btn" className={"show-btn"} onClick={drawOrCat}> Show Graph</button><br/>
                <p className={"text"}>*If you want to delete all the dots, then just click on the "Show Cat"</p>
                <img id={"graph-cat"} className={"graph-cat"} src={require('./image/plink-cat.gif')} alt={""}/><br/>
                <canvas id={"graph"}></canvas>
            </div>
            <div id={"choose-block"} className={"choose-block"}>
                <div className={"x-block"}>
                    <label className={"x-label"}> Choose X: </label>
                    <div className={"x-stack"}>
                        <button onClick={setXM2} className={"choose-button"} id={"x-button"} value={"-2.0"}>-2.0</button>
                        <button onClick={setXM15} className={"choose-button"} id={"x-button"} value={"-1.5"}>-1.5</button>
                        <button onClick={setXM1} className={"choose-button"} id={"x-button"} value={"-1.0"}>-1.0</button>
                    </div>
                    <div>
                        <button onClick={setXM05} className={"choose-button"} id={"x-button"} value={"-0.5"}>-0.5</button>
                        <button onClick={setX0} className={"choose-button"} id={"x-button"} value={"0.0"}>0.0</button>
                        <button onClick={setX05} className={"choose-button"} id={"x-button"} value={"0.5"}>0.5</button>
                    </div>
                    <div>
                        <button onClick={setX1} className={"choose-button"} id={"x-button"} value={"1.0"}>1.0</button>
                        <button onClick={setX15} className={"choose-button"} id={"x-button"} value={"1.5"}>1.5</button>
                        <button onClick={setX2} className={"choose-button"} id={"x-button"} value={"2.0"}>2.0</button>
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
                        <button onClick={setRM2} className={"choose-button"} id={"r-button"}>-2.0</button>
                        <button onClick={setRM15} className={"choose-button"} id={"r-button"}>-1.5</button>
                        <button onClick={setRM1} className={"choose-button"} id={"r-button"}>-1.0</button>
                    </div>
                    <div>
                        <button onClick={setRM05} className={"choose-button"} id={"r-button"}>-0.5</button>
                        <button onClick={setR0} className={"choose-button"} id={"r-button"}>0.0</button>
                        <button onClick={setR05} className={"choose-button"} id={"r-button"}>0.5</button>
                    </div>
                    <div>
                        <button onClick={setR1} className={"choose-button"} id={"r-button"}>1.0</button>
                        <button onClick={setR15} className={"choose-button"} id={"r-button"}>1.5</button>
                        <button onClick={setR2} className={"choose-button"} id={"r-button"}>2.0</button>
                    </div>
                </div>
                <button onClick={shoot} className={"shoot"} type={"submit"}>SHOOT</button>
                <a onClick={start_click_graph} id={"hidden"} ></a>
            </div>
        </div>

    )
}
export default Graph

let dots = []


function shoot(){
    dots.push(new Dot(X, Y, R, "mb"))
    sendDot(X, Y, R)
}



let Y = 0


function setY(){
    Y =  Number(document.getElementById("Y").value.replace(",", "."))
    console.log(Y)
}


let X = 0
function setXM2(){
    X = -2.0
    console.log(X)
}
function setXM15(){
    X = -1.5
    console.log(X)
}
function setXM1(){
    X = -1.0
    console.log(X)
}
function setXM05(){
    X = -0.5
    console.log(X)
}
function setX0(){
    X = 0.0
    console.log(X)
}
function setX05(){
    X = 0.5
    console.log(X)
}
function setX1(){
    X = 1
    console.log(X)
}
function setX15(){
    X = 1.5
    console.log(X)
}
function setX2(){
    X = 2.0
    console.log(X)
}

let R = 2

function setRM2(){
    R = -2.0
    drawByR(R)
    console.log(R)
}
function setRM15(){
    R = -1.5
    drawByR(R)
    console.log(R)
}
function setRM1(){
    R = -1.0
    drawByR(R)
    console.log(R)
}
function setRM05(){
    R = -0.5
    drawByR(R)
    console.log(R)
}
function setR0(){
    R = 0.0
    drawByR(R)
    console.log(R)
}
function setR05(){
    R = 0.5
    drawByR(R)
    console.log(R)
}
function setR1(){
    R = 1
    drawByR(R)
    console.log(R)
}
function setR15(){
    R = 1.5
    drawByR(R)
    console.log(R)
}
function setR2(){
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

            dots.push(new Dot(x, y, r, "mb"))
            sendDot(x, y, r)
        })
    }
}

let send = false
function sendDot(x, y, r){
    send = true
    console.log(dots)
    console.log(dots[dots.length-1])
    drawOrCat()
}

function drawOrCat(){



    const canvas = new Canvas()

    if (send){
        canvas.drawGraph(R)
        send = false
        canvas.drawOldDots(dots)
    }else{

        dots = []

        console.log(dots.length)

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
        }else{
            btn.innerText = "Show Graph"
            cat.style.display = "block"
            cat.style.marginLeft = "35.5%"
            cat.style.marginTop = "57px"
            graph.style.display = "none"
        }
    }
}

class Canvas {
    size = 400;
    red = "#FF0000"
    gray = "#696969"
    green = "#19ff19"

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
    drawGrey(x, y){
        this.ctx.fillStyle = "#696969"
        this.ctx.beginPath();
        this.ctx.arc(200 + (x * 40), 200- (y * 40), 4, 0, 2*Math.PI, false);
        this.ctx.fill();
        this.ctx.closePath()
    }
}

