import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  chart: any;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.getSolarEfficiency().subscribe(data => {
      this.createChart(data);
    });
  }

  private createChart(data: any[]) {
    this.chart = new Chart('efficiencyChart', {
      type: 'line',
      data: {
        labels: data.map(d => d.year),
        datasets: [{
          label: 'Solar Cell Efficiency (%)',
          data: data.map(d => d.efficiency),
          borderColor: '#4CAF50',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Solar Cell Efficiency Progress'
          }
        }
      }
    });
  }
}
