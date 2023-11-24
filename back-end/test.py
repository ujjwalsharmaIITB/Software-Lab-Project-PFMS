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
    userPrefix = 'user'
    id = [1,2,3]
    namePrefix = 'name'
    d1 = datetime.strptime('2020/01/01', '%Y/%m/%d')
    d2 = datetime.strptime('2023/11/24', '%Y/%m/%d')
    categories = ['food','transport','entertainment','shopping','miscellaneous' , 
    'salary' , 'gift' , 'bonus' , 'investment' ,
    'education','healthcare','insurance','tax','rent','utilities'] 
    for _ in range(n):
        userId = random.choice(id)
        newUser = userPrefix + str(userId)
        newName = namePrefix + str(userId)
        category = random.choice(categories)
        date = random_date(d1, d2)
        print(f"INSERT INTO expenses (username, expense, date, category) VALUES ('{newUser}', {random.randint(1,10000)},'{date}','{category}');")


generateRandomData(100)


