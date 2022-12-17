import React, { Component } from "react";
import { Chart } from "chart.js";

class OtherChart extends Component {
  componentDidMount() {
    var chartType = this.props.type;
    const ctx = this.node.getContext("2d");
    const onTooltipFire = this.props.onTooltipFire;
    const scatterData = {
      datasets: [
        {
          label: "Scatter Dataset",
          data: [
            {
              x: -10,
              y: 0,
            },
            {
              x: 0,
              y: 10,
            },
            {
              x: 10,
              y: 5,
            },
            {
              x: 0.5,
              y: 5.5,
            },
          ],
          backgroundColor: "rgb(255, 99, 132)",
        },
      ],
    };
    const radarData = {
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running",
      ],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)",
        },
        {
          label: "My Second Dataset",
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBackgroundColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(54, 162, 235)",
        },
      ],
    };
    const columnData = {
      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: "rounded",
          columnWidth: "55%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    };
    const areaData = {
      labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
      datasets: [
        {
          label: "My First Dataset",
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(75, 192, 192)",
            "rgb(255, 205, 86)",
            "rgb(201, 203, 207)",
            "rgb(54, 162, 235)",
          ],
        },
      ],
    };
    if (chartType == "scatter") {
      const chart = new Chart(ctx, {
        type: "scatter",
        data: scatterData,
        options: {
          events: ["mousemove", "click", "touchstart", "touchmove", "touchend"],
          scales: {
            x: {
              type: "linear",
              position: "bottom",
            },
          },
        },
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
      });
    } else if (chartType == "radar") {
      const chart = new Chart(ctx, {
        type: "radar",
        data: radarData,
        options: {
          events: ["mousemove", "click", "touchstart", "touchmove", "touchend"],
          scales: {
            x: {
              type: "linear",
              position: "bottom",
            },
          },
        },
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
      });
    } else if (chartType == "area") {
      const chart = new Chart(ctx, {
        type: "polarArea",
        data: areaData,
        options: {
          events: ["mousemove", "click", "touchstart", "touchmove", "touchend"],
          scales: {
            x: {
              type: "linear",
              position: "bottom",
            },
          },
        },
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
      });
    } else if (chartType == "bar") {
      const chart = new Chart(ctx, {
        chart: {
          height: 350,
          type: "bar",
        },
        type: "bar",
        data: columnData,
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: "rounded",
            columnWidth: "55%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        series: [
          {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          },
          {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          },
          {
            name: "Free Cash Flow",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
          },
        ],
        options: {
          events: ["mousemove", "click", "touchstart", "touchmove", "touchend"],
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        yaxis: {
          title: {
            text: "$ (thousands)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltips: {
          enabled: true,
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
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

export default OtherChart;
