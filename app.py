from flask import Flask, jsonify, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class User(Resource):
    # TODO: connect to MySQL database to get info about certain user
    def get(self):
        data = "User information"
        return jsonify({'data': data})

class Users(Resource):
    # TODO: connect to MySQL database to read all users info
    def get(self):
        data = "hello world"
        return jsonify({'data': data})

    # TODO: create new user
    # for sign up function
    def post(self):
        data = request.get_json()  # status code
        return jsonify({'data': data}), 201


class Posts(Resource):
    # TODO: connect to MySQL database to read all posts info
    # for feed page
    def get(self):
        data = "hello world"
        return jsonify({'data': data})

    # TODO: create new post
    def post(self):
        data = request.get_json()  # status code
        return jsonify({'data': data}), 201

class Profile(Resource):
    # TODO: get all posts made by certain user
    def get(self):
        data = "user's posts"
        return jsonify({'data': data}), 201


@app.route('/')
def index():
    return 'Hello World!'

api.add_resource(Users, '/api/v1/users/')
api.add_resource(User, '/api/v1/users/<int:id>/')
api.add_resource(Posts, '/api/v1/posts/')
api.add_resource(Profile, '/api/v1/posts/<int:id>')

if __name__ == '__main__':
    app.run(debug=True)