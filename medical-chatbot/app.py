from flask import Flask, render_template, request, jsonify

app = Flask(_name_)

# Dummy user data for demonstration
users = {}

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if users.get(username) == password:
        return jsonify(success=True)
    else:
        return jsonify(success=False)

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in users:
        return jsonify(success=False, message='Username already exists.')
    else:
        users[username] = password
        return jsonify(success=True, message='Registration successful!')

if _name_ == '_main_':
    app.run(debug=True)