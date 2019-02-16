import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartLine = [];
  chartBar = [];
  chartHbar = [];
  data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [{
        label: '# of Votes',
        data: [50, 100, 60, 120, 80, 100, 60, 120, 60, 100, 80, 150],
        backgroundColor: 'rgba(255, 99, 132, 0.4)',
        borderColor: 'rgba(255,99,132,.6)',
        borderWidth: 1
    }]
  };
  data2 = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
        label: '# of Votes',
        data: [0.5, 0.8, 0.4, 0.6, 0.5, 0.3, 0.9],
        backgroundColor: 'rgba(255, 99, 132, 0.4)',
        borderColor: 'rgba(255,99,132,.6)',
        borderWidth: 1
    }]
  };
  options = {
    scales: {
        yAxes: [{
          ticks: {
              fontColor: 'rgba(0,0,0,.6)',
              fontStyle: 'bold',
              beginAtZero: true,
              maxTicksLimit: 8,
              padding: 10
          },
          gridLines: {
              drawTicks: true,
              drawBorder: true,
              display: true,
              color: 'rgba(0,0,0,.1)',
              // zeroLineColor: 'transparent'
          }

      }],
        xAxes: [{
          gridLines: {
              // zeroLineColor: 'transparent',
              display: true,

          },
          ticks: {
              padding: 0,
              fontColor: 'rgba(0,0,0,0.6)',
              fontStyle: 'bold'
          }
      }]
    },
    responsive: true
  };
  constructor() { }

  ngOnInit() {

    this.chartLine = new Chart('sales-line',  {
      type: 'line',
      data: this.data ,
      options: this.options
    });

    this.chartBar = new Chart('sales-bar',  {
      type: 'bar',
      data: this.data ,
      options: this.options
    });
    this.chartHbar = new Chart('sales-hbar',  {
      type: 'horizontalBar',
      data: this.data2 ,
      options: this.options
    });
  }

}
