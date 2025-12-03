import { COLOR_PALETTE } from "./colorPalette";

const prepareChartDataExpenses = (data: ExpenseData[]): { series: any[], options: any } => {
    const categories = data.map(item => item.name);
    const expenseSeries = data.map(item => item.expense);
    const series: any = [
        {
            name: 'Expenses',
            data: expenseSeries,
        },
    ];

    const options: any = {
        chart: {
            toolbar: { show: false },
            background: 'transparent',
        },
        // CHANGED: Using the updated standard class
        colors: [COLOR_PALETTE.Expense.replace('text-', '#')],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '60%',
                borderRadius: 4,
                dataLabels: { position: 'top' },
            },
        },
        dataLabels: { enabled: false },
        xaxis: {
            categories: categories,
            labels: { style: { colors: '#6b7280' } },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: {
                formatter: (value: number) => `$${value.toFixed(0)}`,
                style: { colors: '#6b7280' }
            },
            title: {
                text: 'Amount ($)',
                style: { color: '#6b7280', fontSize: '12px', fontWeight: 600 }
            }
        },
        grid: {
            show: true,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: true } },
            borderColor: '#e5e7eb',
            padding: { left: 0, right: 5 }
        },
        tooltip: {
            y: { formatter: (value: number) => `$${value.toFixed(2)}` },
            theme: 'light',
        },
        responsive: [{
            breakpoint: 600,
            options: {
                plotOptions: { bar: { columnWidth: '70%' } },
            }
        }]
    };


    return { series, options };
}

export default prepareChartDataExpenses;