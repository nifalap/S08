import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  chart: any;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.getGlobalSolarAdoption().subscribe(data => {
      this.createChart(data);
    });
  }

  private createChart(data: any[]) {
    this.chart = new Chart('adoptionChart', {
      type: 'bar',
      data: {
        labels: data.map(d => d.year),
        datasets: [{
          label: 'Global Solar Energy Adoption (%)',
          data: data.map(d => d.percentage),
          backgroundColor: '#2196F3'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Global Solar Energy Adoption Trends'
          }
        }
      }
    });
  }
}
