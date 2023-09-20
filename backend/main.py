# Import the Flask class from the flask module
from flask import Flask, request, jsonify

# Create an instance of the Flask class
app = Flask(__name__)
users = {
    'divyanshu@gmail.com': 'akku',
    'user2': 'password2'
}
# Define a route and a function to handle the route
@app.route('/')
def hello_world():
    return 'Hello, World!'



@app.route('/signup', methods=['POST'])
def signup():
    username = request.json.get('username')
    password = request.json.get('password')
    
    # Check if the username is already taken
    if username in users:
        return jsonify({'error': 'Username already exists. Please choose a different username.'}), 400

    users[username] = password

    return jsonify({'message': 'Signup successful. You can now log in.'}), 201



@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    print(request.json)
    # Check if the username and password match in the user database
    if username in users and users[username] == password:
        # In a real application, you would typically generate a secure token here.
        # For this example, we'll use a simple approach.
        token = f'token_{username}'
        users[username] = token
        return jsonify({'token': token}), 200
    else:
        return jsonify({'error': 'Login failed. Please check your username and password.'}), 401

# Run the application if this script is executed
if __name__ == '__main__':
    app.run(debug=True)
