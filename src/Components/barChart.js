import React, { Component } from 'react'
import { Chart } from 'chart.js'

class BarChart extends Component {

  componentDidMount() {
    const ctx = this.node.getContext('2d')
    const onTooltipFire = this.props.onTooltipFire
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["January", "February","March"],
        datasets: [{
            label: "Mumbai",
          data: [ 10, 1,15],
          backgroundColor: [
            "#28a745",
            "#28a745",
            "#28a745",

        ],
        },
        {
          label: "Bangalore",
          data: [ 8, 1,23],
          backgroundColor: [
            
            "#007bff", 
            "#007bff",
            "#007bff",
            
        ],
        },
        {
          label: "Delhi",
          data: [ 5, 9,6],
          backgroundColor: [
           
            "#6610f2",
            "#6610f2",
            "#6610f2",
            
        ],
        }
        ],
      },
      options: {
        events: ["mousemove", "click", "touchstart", "touchmove", "touchend"],
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              max: 10,
            },
          }],
        },
        tooltips: {
          enabled: true,
          mode: 'nearest',
          position: 'nearest',
          intersect: false,
          custom: function(tooltipModel) {
            if (tooltipModel.opacity === 0) {
              onTooltipFire({opacity: 0, left: 0, top: 0, text: ""})
              return
            }

            const position = this._chart.canvas.getBoundingClientRect();

            onTooltipFire({
              opacity: 1,
              left:  tooltipModel.caretX - 151 / 2 + 8,
              top: tooltipModel.caretY - tooltipModel.height - 8,
              text: tooltipModel.body[0].lines.join("")
            })
          }
        },
      }
    })
  }

  render() {
    return (
      <div>
        <canvas ref={(node) => this.node = node}></canvas>
      </div>
    )
  }
}

export default BarChart