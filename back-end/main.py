from flask import Flask , request , jsonify
import json


import database as db

app = Flask(__name__)


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
        return jsonify({'message' : message})
    

    return jsonify({
        'message' : 'success',
        'user' : user
    })


@app.route('/api/addData' , methods=['get'])
def addData():
    return jsonify({'message' : 'addData'})

if __name__ == '__main__':
    app.run(debug=True)