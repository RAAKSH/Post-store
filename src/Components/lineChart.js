import React, { Component } from "react";
import { Chart } from "chart.js";

class LineChart extends Component {
  componentDidMount() {
    const ctx = this.node.getContext("2d");
    const onTooltipFire = this.props.onTooltipFire;
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["India", "USA","Japan","Australia","Korea"],
        datasets: [
          {
            label: "Traffic",
            data: [6, 15, 23, 5, 57, 4, 1,50,],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },    
        ],
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
              opacity: 3,
              left: tooltipModel.caretX - 151 / 2 + 8,
              top: tooltipModel.caretY - tooltipModel.height - 8,
              text: tooltipModel.body[0].lines.join(""),
            });
          },
        },
      },
    });
  }

  render() {
    return (
      <div>
        <canvas ref={(node) => (this.node = node)}></canvas>
      </div>
    );
  }
}

export default LineChart;
