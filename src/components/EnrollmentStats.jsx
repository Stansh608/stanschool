import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const EnrollmentStats = () => {
  const pieChartRef = useRef(null);
  const histogramRef = useRef(null);
  const chartContainerRef = useRef(null);
  const [shouldRenderCharts, setShouldRenderCharts] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRenderCharts(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2
      }
    );

    if (chartContainerRef.current) {
      observer.observe(chartContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldRenderCharts) return;

    // Pie Chart Animation
    const pieCtx = pieChartRef.current.getContext('2d');
    const pieChart = new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels: ['Form 1', 'Form 2', 'Form 3', 'Form 4'],
        datasets: [{
          data: [0, 400, 354, 512],
          backgroundColor: [
            '#2E7D32',
            '#4CAF50',
            '#FFD700',
            '#1B5E20'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 2000,
          easing: 'easeOutQuart'
        },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
              padding: 15,
              color: '#212121',
              font: {
                size: window.innerWidth < 768 ? 10 : 12
              }
            }
          },
          title: {
            display: true,
            text: 'Student Distribution by Form',
            color: '#212121',
            font: {
              size: window.innerWidth < 768 ? 14 : 16
            },
            padding: {
              top: 10,
              bottom: 10
            }
          }
        },
        layout: {
          padding: {
            top: 20,
            bottom: 20,
            left: 10,
            right: 10
          }
        }
      }
    });

    // Histogram Animation
    const histCtx = histogramRef.current.getContext('2d');
    const histChart = new Chart(histCtx, {
      type: 'bar',
      data: {
        labels: ['2021', '2022', '2023', '2024', '2025'],
        datasets: [{
          label: 'Total Enrollment',
          data: [980, 1050, 1150, 1200, 1266],
          backgroundColor: '#2E7D32',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 2000,
          easing: 'easeOutQuart',
          delay: (context) => context.dataIndex * 100
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: '#E0E0E0'
            },
            ticks: {
              color: '#212121',
              font: {
                size: window.innerWidth < 768 ? 10 : 12
              }
            },
            title: {
              display: true,
              text: 'Number of Students',
              color: '#212121',
              font: {
                size: window.innerWidth < 768 ? 12 : 14
              }
            }
          },
          x: {
            grid: {
              color: '#E0E0E0'
            },
            ticks: {
              color: '#212121',
              font: {
                size: window.innerWidth < 768 ? 10 : 12
              }
            },
            title: {
              display: true,
              text: 'Academic Year',
              color: '#212121',
              font: {
                size: window.innerWidth < 768 ? 12 : 14
              }
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#212121',
              font: {
                size: window.innerWidth < 768 ? 10 : 12
              }
            }
          },
          title: {
            display: true,
            text: 'Yearly Enrollment Trends',
            color: '#212121',
            font: {
              size: window.innerWidth < 768 ? 14 : 16
            },
            padding: {
              top: 10,
              bottom: 10
            }
          }
        },
        layout: {
          padding: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10
          }
        }
      }
    });

    const handleResize = () => {
      pieChart.resize();
      histChart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      pieChart.destroy();
      histChart.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, [shouldRenderCharts]);

  return (
    <section className="enrollment-stats">
      <div className="container">
        <h2>Enrollment Statistics</h2>
        <div className="charts-container" ref={chartContainerRef}>
          <div className="chart-box">
            <canvas ref={pieChartRef}></canvas>
          </div>
          <div className="chart-box">
            <canvas ref={histogramRef}></canvas>
          </div>
        </div>
        <div className="stats-summary">
          <div className="stat-item">
            <h3>1,266</h3>
            <p>Current Students</p>
          </div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Graduation Rate</p>
          </div>
          <div className="stat-item">
            <h3>15:1</h3>
            <p>Student-Teacher Ratio</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>College Acceptance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentStats; 