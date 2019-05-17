import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  chart1 = {
    data :{
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
          label: 'Premium',
          data: [50, 80, 60, 120, 80, 100, 60],
          backgroundColor: 'transparent',
          borderColor: '#f74d71',
          borderWidth: 2
      },
      {
        label: 'Free',
        data: [100, 60, 80, 50, 140, 60, 100],
        backgroundColor: 'transparent',
        borderColor: '#36a2eb',
        borderWidth: 2
      }
    ]
    },
    options:{
      scales: {
          yAxes: [{
            ticks: {
                fontColor: 'rgba(0,0,0,.6)',
                fontStyle: 'bold',
                beginAtZero: true,
                maxTicksLimit: 8,
                padding: 10
            }          
        }]       
      },
      responsive: true,
      legend: {          
        position:'bottom',
        display:false
      },
    }
  };
  chart2 = {
    data :{
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
          label: 'Premium',
          data: [50, 80, 60, 120, 80, 100, 60],
          backgroundColor: '#f74d71',
          borderColor: '#f74d71',
          borderWidth: 2
      },
      {
        label: 'Free',
        data: [100, 60, 80, 50, 140, 60, 100],
        backgroundColor: '#36a2eb',
        borderColor: '#36a2eb',
        borderWidth: 2
      }
    ]
    },
    options:{
      barValueSpacing: 1,
      scales: {
          yAxes: [{
            ticks: {
                fontColor: 'rgba(0,0,0,.6)',
                fontStyle: 'bold',
                beginAtZero: true,
                maxTicksLimit: 8,
                padding: 10
            }          
        }],
        xAxes: [{
          barPercentage: 0.4      
      }]       
      },
      responsive: true,
      legend: {          
        position:'bottom',
        display:false
      },
    }
  };
  chart3 = {
    data:{
      datasets: [{
          data: [10, 20, 30],
          backgroundColor: ["#f74d71","#ffc107","#36a2eb"],
      }],
      labels: [
          'Red',
          'Yellow',
          'Blue'
      ]
      
    },
    options:{
      legend: {          
        position:'bottom'
      },
    }
  };

  constructor() { }

  ngOnInit() {

 new Chart('chart-line',  {
      type: 'line',
      data: this.chart1.data,
      options: this.chart1.options
    });
 new Chart('chart-bar',  {
      type: 'bar',
      data: this.chart2.data ,
      options: this.chart2.options
    });
    new Chart('chart-pie',  {
      type: 'pie',
      data: this.chart3.data,
      options:this.chart3.options
    });
 new Chart('chart-doughnut',  {
      type: 'doughnut',
      data: this.chart3.data,
      options:this.chart3.options
    });
 new Chart('chart-polar',  {
      type: 'polarArea',
      data: this.chart3.data,
      options:this.chart3.options
    });
  }

}
