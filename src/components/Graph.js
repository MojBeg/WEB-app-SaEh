import { Component } from "react";
import './Graph.css';
import { Line } from 'react-chartjs-2';
import './SettingMenu';
import React, { useState } from 'react';
import styled from "styled-components";

const chartColor = '#FFFFFF';
const data1 = (canvas) => {
    var ctx = canvas.getContext("2d");

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "Transparent");
    return {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [{
            label: "Signal",
            borderColor: "orange",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "orange",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [0, 1, 0, -1, 0, 1, 0, -1, 0],
            tension: 0
        },
        {
            label: "Ua",
            borderColor: "green",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "green",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [0.63, 0.63, 0.63, 0.63, 0.63, 0.63, 0.63, 0.63, 0.63], 
            tension: 0            
        },
        {
            label: "Uef",
            borderColor: "red",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "red",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707], 
            tension: 0            
        }]
    }
};
const data2 = (canvas) => {
    var ctx = canvas.getContext("2d");

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "Transparent");
    return {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [{
            label: "Signal",
            borderColor: "orange",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "orange",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [0, 1, 0, -1, 0, 1, 0, -1, 0],
            
        },
        {
            label: "Ua",
            borderColor: "green",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "green",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [0.63, 0.63, 0.63, 0.63, 0.63, 0.63, 0.63, 0.63, 0.63], 
            tension: 0            
        },
        {
            label: "Uef",
            borderColor: "red",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "red",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707], 
            tension: 0            
        }]
    }
};const data3 = (canvas) => {
    var ctx = canvas.getContext("2d");

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "Transparent");
    return {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 
            9, 10, 11, 12, 13, 14, 15, 16, 17, 
            18, 19, 20, 21, 22, 23, 24, 25, 26,
            27, 28, 29, 30      
        ],
        datasets: [{
            label: "Signal",
            borderColor: "orange",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "orange",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [1, 1, 1, 1, -1, -1, -1, -1,  
                1, 1, 1, 1, -1, -1, -1, -1, 
                1, 1, 1, 1, -1, -1, -1, -1, 
                1, 1, 1, 1, -1, -1, -1, -1,     
            ],
            tension: 0
        },       
        {
            label: "Ua",
            borderColor: "green",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "green",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [0.63, 0.63, 0.630, 0.63, 0.63, 0.63, 0.63, 0.63, 0.63,
                0.63, 0.63, 0.630, 0.63, 0.63, 0.63, 0.63, 0.63, 0.63,
                0.63, 0.63, 0.630, 0.63, 0.63, 0.63, 0.63, 0.63, 0.63,
                0.63, 0.63, 0.630, 0.63, 0.63, 0.63, 0.63, 0.63, 0.63
            ], 
            tension: 0            
        },
        {
            label: "Uef",
            borderColor: "red",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "red",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707,
                0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707,
                0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707,
                0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707, 0.707
            ], 
            tension: 0            
        }]
    }
};

const options = {
    maintainAspectRatio: true,
    legend: {
        display: true
    },
    tooltips: {
        bodySpacing: 4,
        mode:"nearest",
        intersect: 0,
        position:"nearest",
        xPadding:10,
        yPadding:10,
        caretPadding:10
    },
    responsive: 1,
    scales: {
        yAxes: [{
            title:"Amplituda [V/A]",
            //yAxesID: "Amplituda [V/A]",
            display:1,
            ticks: {
                display: true
            },
            gridLines: {
                zeroLineColor: 'black',
                drawTicks: true,
                display: true,
                drawBorder: true
            }
        }],
        xAxes: [{
            xAxesID: "Cas t [s]",
            display:1,
            ticks: {
                display: true
            },
            gridLines: {
                zeroLineColor: "black",
                drawTicks: true,
                display: true,
                drawBorder: true
            }
        }]
    },
    layout:{
        padding:{left:0,right:0,top:15,bottom:15}
    }
   

};

class Graph extends Component {
    
    render(){
        return(
            <header className="Graph">
                <div className="Graph-position">
                    
                    <Line data={data1} options={options} height={400} width={800}></Line>
                    <Line data={data2} options={options} height={400} width={800}></Line>
                    <Line data={data3} options={options} height={400} width={800}></Line>
                </div>
            </header>
            
        );
    }
    
}

export default Graph