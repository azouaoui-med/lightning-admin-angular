import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lineChart: Chart;
  barChart: Chart;
  doughnutChart: Chart;

  constructor(private elementRef: ElementRef) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.renderChartLine();
    this.renderChartBar();
    this.renderChartDoughnut();
  }

  renderChartLine(): void {
    let htmlRef = this.elementRef.nativeElement.querySelector(`#chart-line`);
    if (htmlRef) {
      this.lineChart = new Chart(htmlRef, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  renderChartBar(): void {
    let htmlRef = this.elementRef.nativeElement.querySelector(`#chart-bar`);
    if (htmlRef) {
      this.barChart = new Chart(htmlRef, {
        type: 'bar',
        data: {
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          datasets: [{
            label: 'Premium',
            data: [50, 80, 60, 120, 80, 100, 60],
            backgroundColor: '#5b6582',
            borderColor: '#5b6582',
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
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  renderChartDoughnut(): void {

    let htmlRef = this.elementRef.nativeElement.querySelector(`#chart-doughnut`);
    if (htmlRef) {
      this.doughnutChart = new Chart(htmlRef, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [6, 12, 10],
            backgroundColor: ["#5b6582", "#98a4c7", "#36a2eb"],
          }],
          labels: [
            'html',
            'css',
            'javascript'
          ]

        }
      });
    }
  }
}
