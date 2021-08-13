import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ report, month }) => {

    const data = {
        labels: Object.keys(report).map(key => key.charAt(0).toUpperCase() + key.slice(1)),
        datasets: [
            {
                label: 'Expenses by Categories',
                data: Object.values(report),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(0, 129, 167, 0.3)',
                    'rgba(217, 237, 146, 0.5)',
                    'rgba(204, 25, 174, 0.2)',
                    'rgba(20, 160, 100, 0.2)',
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(0, 129, 167, 0.4)',
                    'rgba(217, 237, 146, 0.4)',
                    'rgba(204, 25, 174, 0.4)',
                    'rgba(20, 160, 100, 0.4)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 129, 167, 1)',
                    'rgba(217, 237, 146, 1)',
                    'rgba(204, 25, 174, 1)',
                    'rgba(20, 160, 100, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(0, 129, 167, 1)',
                    'rgba(217, 237, 146, 1)',
                    'rgba(204, 25, 174, 1)',
                    'rgba(20, 160, 100, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <div className='header'>
                <h1 className='title'>  {month} Expense Chart </h1>
            </div>
            <Doughnut data={data} style={{ textTransform: "capitalize" }} />
        </div>
    );
}




export default Chart;