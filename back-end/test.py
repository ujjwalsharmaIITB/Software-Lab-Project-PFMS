import random

from random import randrange
from datetime import timedelta

def random_date(start, end):
    """
    This function will return a random datetime between two datetime 
    objects.
    """
    delta = end - start
    int_delta = (delta.days * 24 * 60 * 60)
    random_second = randrange(int_delta)
    return str(start + timedelta(seconds=random_second))[0:10]


from datetime import datetime








def generateRandomData(n):
    users = ['abhay@pfms.com' , 'karan@pfms.com' ,'karun@pfms.com' , 'swapnil@pfms.com' , ' vijay@pfms.com' , 'vinay@pfms.com']
    d1 = datetime.strptime('2022/06/01', '%Y/%m/%d')
    d2 = datetime.strptime('2023/11/24', '%Y/%m/%d')
    categories = ['food','transport','entertainment','shopping','miscellaneous' , 
     'gift' , 'investment' ,
    'education','healthcare','insurance','tax','rent','utilities'] 
    for _ in range(n):
        index = random.randint(0,len(users)-1)
        category = random.choice(categories)
        date = random_date(d1, d2)
        print(f"INSERT INTO expenses (username, expense, date, category) VALUES ('{users[index]}', {random.randint(1,10000)},'{date}','{category}');")


generateRandomData(500)


