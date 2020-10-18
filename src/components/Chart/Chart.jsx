import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({data:{confirmed, deaths, recovered}, country}) => {
    const [dailyData, setDailyData] = useState({});
  
    useEffect(() => {
      const fetchAPI = async () => {
        const currentData = await fetchDailyData();
        setDailyData(currentData);
      };
  
      fetchAPI();
    }, []);


const lineChart = (
    dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
            
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#77b603',
            borderRadius: '.5px',
            backgroundColor: 'rgba(119, 182, 3, .2)',
            fill: true,
          },{
            data: dailyData.map((data) => data.recovered),
            label: 'Recovered',
            borderColor: '#00a6d1',
            backgroundColor: 'rgba(0, 166, 209, .2)',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: '#b7001b',
            backgroundColor: 'rgba(183, 0, 27, .5)',
            fill: true,
          },  
          ],
  
        }
        }
        options ={{
            legend: {
                labels: {
                    fontColor: 'rgb(151, 151, 151)',
                    fontSize: 12,
                }
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        color: 'rgb(151, 151, 151)'
                    },
                    ticks: {
                        fontColor: "rgb(151, 151, 151)",
                    }
                }],
                xAxes: [{
                    gridLines: {
                        color: 'rgb(151, 151, 151)'
                    },
                    ticks: {
                        fontColor: "rgb(151, 151, 151)",

                    }  
                }],
            },
        }}
        />
    ) : null
  );

    const barChart = (
        
         confirmed
            ? (
                <Bar 
                    data = {{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: ['#77b603', '#00a6d1', '#b7001b'],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]

                    }}
                    options ={{
                        legend: {display: false},
                        title: {display: true, text:`Current state of ${country}`},
                    }}
                />
                
            ) : null
            
    );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;