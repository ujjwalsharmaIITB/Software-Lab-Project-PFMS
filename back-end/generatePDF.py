import os
import sys
import database as db

def generateLineChart(data , location):

    return True

def generatePieChart(data , location):

    return True


def generatePDF(username):
    oneMonth = get_expenses(username, 1)
    threeMonths = get_expenses(username, 3)
    sixMonths = get_expenses(username, 6)
    oneYear = get_expenses(username, 12)
    if oneMonth is None:
        return False, "Error while getting expenses from MySQL"
    if threeMonths is None:
        return False, "Error while getting expenses from MySQL"
    if sixMonths is None:
        return False, "Error while getting expenses from MySQL"
    if oneYear is None:
        return False, "Error while getting expenses from MySQL"
    try:

        generateLineChart(oneMonth , './latex/oneMonthLineChart.png')
        generatePieChart(oneMonth , './latex/oneMonthPieChart.png')
        generateLineChart(threeMonths , './latex/threeMonthsLineChart.png')
        generatePieChart(threeMonths , './latex/threeMonthsPieChart.png')
        generateLineChart(sixMonths , './latex/sixMonthsLineChart.png')
        generatePieChart(sixMonths , './latex/sixMonthsPieChart.png')
        generateLineChart(oneYear , './latex/oneYearLineChart.png')
        generatePieChart(oneYear , './latex/oneYearPieChart.png')

        os.system('pdflatex ./latex/report.tex')
        
        return True , None


        