from flask import Flask , request , jsonify
import json
from flask_cors import CORS

import database as db

app = Flask(__name__)

cors = CORS(app)


@app.route('/api/login' , methods=['POST'])
def getUser():
    username = request.json['username']
    password = request.json['password']
    user = db.get_user(username,password)
    if user is None:
        return jsonify({ 'status':'error' ,'message' : 'user not found' , 'user' : None})
    return jsonify({'status':'success','message' : 'success' , 'user' : user})


@app.route('/api/addUser' , methods=['POST'])
def addUser():
    user = request.json
    ret_val , message = db.add_user(user)
    if ret_val is False:
        return jsonify({'status':'error','message' : message})
    

    return jsonify({
        'status':'success',
        'message' : 'success',
        'user' : user
    })


@app.route('/api/addExpense' , methods=['POST'])
def addExpense():
    data = request.json
    ret_val , message = db.add_expense(data)
    if ret_val is False:
        return jsonify({'status':'error','message' : message , 'data' : None})
    
    return jsonify({
        'status':'success',
        'message' : 'success',
        'data' : data
    })


@app.route('/api/getExpenses/<username>/<months>' , methods=['GET'])
def get_expenses(username,months):
    expenses = db.get_expenses(username , months)
    if expenses is None:
        return jsonify({ 'status':'error' ,'message' : 'expenses not found' , 'expenses' : None})
    return jsonify({'status':'success','message' : 'success' , 'expenses' : expenses})


if __name__ == '__main__':
    app.run(debug=True)