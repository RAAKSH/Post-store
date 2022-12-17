import React, { Component } from "react";
import { Chart } from "chart.js";

class PieChart extends Component {
   
  componentDidMount() {
    var chartType=this.props.type;
    const ctx = this.node.getContext("2d");
    const onTooltipFire = this.props.onTooltipFire;
    if(chartType=='pie'){
        const chart = new Chart(ctx, {
            type: 'pie' ,
            data: {
              labels: ["India", "USA","Japan","Korea"],
              datasets: [{
                  label: 'My First Dataset',
                  data: [300, 50, 100,200],
                  backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(220, 150, 16)'
                  ],
                  hoverOffset: 4
                }]
            },
            options: {
              events: ["mousemove", "click", "touchstart", "touchmove", "touchend"],
              scales: {
                yAxes: [
                  {
                    display: true,
                    ticks: {
                      beginAtZero: true,
                      max: 100,
                    },
                  },
                ],
              },
              responsive: true,
              tooltips: {
                enabled: true,
                mode: "nearest",
                position: "nearest",
                intersect: false,
                custom: function (tooltipModel) {
                  if (tooltipModel.opacity === 0) {
                    onTooltipFire({ opacity: 0, left: 0, top: 0, text: "" });
                    return;
                  }
      
                  const position = this._chart.canvas.getBoundingClientRect();
      
                  onTooltipFire({
                    opacity: 1,
                    left: tooltipModel.caretX - 151 / 2 + 8,
                    top: tooltipModel.caretY - tooltipModel.height - 8,
                    text: tooltipModel.body[0].lines.join(""),
                  });
                },
              },
            },
          });
    }
    else{
        const chart = new Chart(ctx, {
            type: 'doughnut' ,
            data: {
              labels: ["India", "USA","Japan","Korea"],
              datasets: [{
                  label: 'My First Dataset',
                  data: [300, 50, 100,200],
                  backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(220, 150, 16)'
                  ],
                  hoverOffset: 4
                }]
            },
            options: {
              events: ["mousemove", "click", "touchstart", "touchmove", "touchend"],
              scales: {
                yAxes: [
                  {
                    display: true,
                    ticks: {
                      beginAtZero: true,
                      max: 100,
                    },
                  },
                ],
              },
              responsive: true,
              tooltips: {
                enabled: true,
                mode: "nearest",
                position: "nearest",
                intersect: false,
                custom: function (tooltipModel) {
                  if (tooltipModel.opacity === 0) {
                    onTooltipFire({ opacity: 0, left: 0, top: 0, text: "" });
                    return;
                  }
      
                  const position = this._chart.canvas.getBoundingClientRect();
      
                  onTooltipFire({
                    opacity: 1,
                    left: tooltipModel.caretX - 151 / 2 + 8,
                    top: tooltipModel.caretY - tooltipModel.height - 8,
                    text: tooltipModel.body[0].lines.join(""),
                  });
                },
              },
            },
          });
    }
   
  }

  render() {
    return (
      <div>
        <canvas ref={(node) => (this.node = node)}></canvas>
      </div>
    );
  }
}

export default PieChart;
