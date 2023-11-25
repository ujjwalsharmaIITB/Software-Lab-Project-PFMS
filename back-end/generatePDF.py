import os
import sys
import matplotlib.pyplot as plt
from database import get_expenses

def generateLineChart(data, location):
    # Extract expenses by date
    expenses_by_date = {}
    for expense in data:
        date = expense['date']
        if date not in expenses_by_date:
            expenses_by_date[date] = []
        expenses_by_date[date].append(expense)

    # Prepare data for line chart
    dates = list(expenses_by_date.keys())
    total_expenses = [sum(expense['amount'] for expense in expenses) for expenses in expenses_by_date.values()]

    # Generate line chart
    plt.figure(figsize=(10, 6))
    plt.plot(dates, total_expenses)
    plt.xlabel('Date')
    plt.ylabel('Total Expense')
    plt.title('Line Chart of Expenses')
    plt.grid(True)
    plt.savefig(location)
    plt.close()

def generatePieChart(data, location):
    # Extract expenses by category
    categories = ['food', 'transport', 'entertainment', 'shopping', 'miscellaneous', 'gift', 'investment',
                   'education', 'healthcare', 'insurance', 'tax', 'rent', 'utilities']
    expenses_by_category = {category: 0 for category in categories}

    for expense in data:
        category = expense['category']
        expenses_by_category[category] += expense['amount']

    # Prepare data for pie chart
    labels = list(expenses_by_category.keys())
    expenses = list(expenses_by_category.values())

    # Generate pie chart
    plt.figure(figsize=(8, 8))
    plt.pie(expenses, labels=labels, autopct='%1.1f%%')
    plt.title('Pie Chart of Expenses')
    plt.axis('equal')  # Equal aspect ratio ensures that the pie chart is circular.
    plt.savefig(location)
    plt.close()

def generatePDF(username):
    # Get expenses for different periods
    one_month = get_expenses(username, 1)
    three_months = get_expenses(username, 3)
    six_months = get_expenses(username, 6)
    one_year = get_expenses(username, 12)

    # Check if any error occurred while fetching expenses
    if one_month is None or three_months is None or six_months is None or one_year is None:
        return False, "Error while getting expenses from MySQL"

    # Generate line and pie charts for each period
    try:
        generateLineChart(one_month, './latex/oneMonthLineChart.png')
        generatePieChart(one_month, './latex/oneMonthPieChart.png')

        generateLineChart(three_months, './latex/threeMonthsLineChart.png')
        generatePieChart(three_months, './latex/threeMonthsPieChart.png')

        generateLineChart(six_months, './latex/sixMonthsLineChart.png')
        generatePieChart(six_months, './latex/sixMonthsPieChart.png')

        generateLineChart(one_year, './latex/oneYearLineChart.png')
        generatePieChart(one_year, './latex/oneYearPieChart.png')
    except Exception as e:
        print(e)
        return False, "Error while generating charts"

    # Generate PDF report
    os.system('pdflatex ./latex/report.tex')

    return True, None

