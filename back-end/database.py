import mysql.connector
from mysql.connector import Error


def create_connection():
    try:
        connection = mysql.connector.connect(host='localhost',
                                            database='pfms',
                                            user='pfms',
                                            password='pfms')
        if connection.is_connected():
            db_Info = connection.get_server_info()
            print("Connected to MySQL Server version ", db_Info)
            cursor = connection.cursor()
            cursor.execute("select database();")
            record = cursor.fetchone()
            print("You're connected to database: ", record)
            return connection

    except Error as e:
        print("Error while connecting to MySQL", e)
        return None


def close_connection(connection):
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.close()
        connection.close()
        print("MySQL connection is closed")


def add_user(user):
    connection = create_connection()
    if connection is None:
        return False , "Error while connecting to MySQL"
    try:
        cursor = connection.cursor()
        cursor.execute("INSERT INTO users (username, password, name) VALUES (%s, %s, %s)", (user['username'] , user['password'] , user['name']))
        connection.commit()
        close_connection(connection)
        return True , None
    except Error as e:
        print("Error while adding user to MySQL", e)
        close_connection(connection)
        return False , str(e)


def get_user(username , password):
    connection = create_connection()
    if connection is None:
        return None
    try:
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM users WHERE username = %s and password = %s", (username,password))
        user = cursor.fetchone()
        close_connection(connection)
        return user
    except Error as e:
        print("Error while getting user from MySQL", e)
        close_connection(connection)
        return None


def add_expense(expense):
    connection = create_connection()
    if connection is None:
        return False , "Error while connecting to MySQL"
    try:
        cursor = connection.cursor()
        cursor.execute("INSERT INTO expenses (username, expense, date, category) VALUES (%s, %s, %s, %s)", (expense['username'] , expense['expense'] , expense['date'] , expense['category']))
        connection.commit()
        close_connection(connection)
        return True , None
    except Error as e:
        print("Error while adding expense to MySQL", e)
        close_connection(connection)
        return False , str(e)


def get_expenses(username , months):
    connection = create_connection()
    if connection is None:
        return None
    try:
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM expenses WHERE username = %s and date >= DATE_SUB(CURDATE(), INTERVAL %s MONTH) order by date", (username,months))
        expenses = cursor.fetchall()
        close_connection(connection)
        finalExpenses = []
        for expense in expenses:
            finalExpenses.append({
                'date' : expense[2],
                'amount' : expense[1],
                'category' : expense[3]
            })
        return finalExpenses
    except Error as e:
        print("Error while getting expenses from MySQL", e)
        close_connection(connection)
        return None