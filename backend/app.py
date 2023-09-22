from flask import Flask, request, jsonify
import random

app = Flask(__name__)

# Sample data (replace this with a database)
users = []
poems = []

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()

    if 'username' not in data or 'password' not in data:
        return jsonify({'message': 'Both username and password are required'}), 400

    username = data['username']
    password = data['password']

    # Check if the username already exists
    if any(user['username'] == username for user in users):
        return jsonify({'message': 'Username already exists'}), 400

    # Insert the new user
    user_data = {'username': username, 'password': password}
    users.append(user_data)

    return jsonify({'message': 'User registered successfully'}), 201


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    if 'username' not in data or 'password' not in data:
        return jsonify({'message': 'Both username and password are required'}), 400

    username = data['username']
    password = data['password']

    # Check if the user exists and if the password matches
    if any(user['username'] == username and user['password'] == password for user in users):
        return jsonify({'message': username+password}), 200

    return jsonify({'message': 'Invalid username or password'}), 401


@app.route('/poems', methods=['GET'])
def get_poems_by_category():
    # Get query parameters from the URL
    category = request.args.get('category')
    page = int(request.args.get('page', 1))  # Default to page 1 if not provided
    page_size = int(request.args.get('page_size', 1))  # Default to 10 items per page if not provided
    print(page,page_size)
    # Calculate the start and end indices for pagination
    start_idx = (page - 1) * page_size
    end_idx = start_idx + page_size
    print(poems)
    # Filter poems by category and perform pagination
    category_poems = [poem for poem in poems if poem.get('category') == category]
    paginated_poems = category_poems[start_idx:end_idx]

    # Check if there are more pages
    has_more = end_idx < len(category_poems)

    # Create a response JSON
    response = {
        'poems': paginated_poems,
        'page': page,
        'page_size': page_size,
        'has_more': has_more
    }

    return jsonify(response), 200


@app.route('/random-poem', methods=['GET'])
def get_random_poem():
    if not poems:
        return jsonify({'message': 'No poems found in the collection'}), 404

    # Generate a random index within the range of total poems
    random_index = random.randint(0, len(poems) - 1)

    # Retrieve the random poem
    random_poem = poems[random_index]

    return jsonify(random_poem), 200


@app.route('/create-poem', methods=['POST'])
def create_poem():
    data = request.get_json()
    print(data)
    if 'title' not in data or 'writer' not in data or 'content' not in data:
        return jsonify({'message': 'Title, writer, and content are required'}), 400

    title = data['title']
    writer = data['writer']
    content = data['content']
    category = data.get('category', '')  # Optional category

    # Create a new poem dictionary
    new_poem = {
        'title': title,
        'writer': writer,
        'content': content,
        'category': category
    }

    # Append the new poem to the list
    poems.append(new_poem)

    return jsonify({'message': 'Poem created successfully'}), 201


if __name__ == '__main__':
    app.run(debug=True)
