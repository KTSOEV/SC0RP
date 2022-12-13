import flask
import json
from flask import render_template, request
import flask_login
from pysondb import db

app = flask.Flask(__name__)
app.secret_key = 'supersecretstring'
login_manager = flask_login.LoginManager()
login_manager.init_app(app)
a=db.getDb("./database_main.json")

users = a.getAll()[0]

class User(flask_login.UserMixin):
    pass


@login_manager.user_loader
def user_loader(email):
    data = a.getByQuery({"email":email})
    if data == '[]':
        return

    user = User()
    user.id = email
    return user


@login_manager.request_loader
def request_loader(request):
    email = request.form.get('email')
    data = a.getByQuery({"email":email})
    if data == '[]':
        return

    user = User()
    user.id = email
    return user

@app.route('/', methods=['GET'])
def main():
    return render_template("index.html")

@app.route('/login', methods=['GET', 'POST'])
def login():
    if flask.request.method == 'GET':
        return render_template("login.html")
    
    #LOGIN
    #EMAIL
    # sha256( "389R09J3FCRFLD3" + email + "93WNRE93F32GD34" )
    email = request.json["EMAIL"]
    print(email)
    #PASSWORD
    # sha256( "78ER03HER0JDCJD" + pwd + "9ER8NFF98WJRFS" )
    password = request.json["PASSWORD"]
    print(password)
    
    data = a.getByQuery({"email":email})[0]
    print (data)
    if data != '' and password == data['password']:
        user = User()
        user.id = email
        flask_login.login_user(user)
        return flask.redirect(flask.url_for('protected'))
    return "Auth error", 400

@app.route('/register', methods=['GET', 'POST'])
def register():
    if flask.request.method == 'GET':
        return render_template("register.html")
    #REGISTER
    #EMAIL
    # sha256( "389R09J3FCRFLD3" + email + "93WNRE93F32GD34" )
    email = request.json["EMAIL"]
    print(email)
    #PASSWORD
    # sha256( "78ER03HER0JDCJD" + pwd + "9ER8NFF98WJRFS" )
    password = request.json["PASSWORD"]
    print(password)
    #NAME
    name = request.json["NAME"]
    
    data = a.getByQuery({"email":email})
    if data == '[]':
        user = User()
        user.id = email
        id = a.add({
            "email": email,
            "name": name,
            "password": password
        })
        print(id)
        flask_login.login_user(user)
        return flask.redirect(flask.url_for('protected'))
    return '''User already exist
    <br><button  onclick="location.href='/register';">Back</button>
    '''

@app.route('/auth', methods=['POST'])
def auth():
    #EMAIL
    # sha256( "389R09J3FCRFLD3" + email + "93WNRE93F32GD34" )
    email = request.json["EMAIL"]
    print(email)
    #PASSWORD
    # sha256( "78ER03HER0JDCJD" + pwd + "9ER8NFF98WJRFS" )
    password = request.json["PASSWORD"]
    print(password)
    
    if email in users and password == users[email]['password']:
        user = User()
        user.id = email
        flask_login.login_user(user)
        return flask.redirect(flask.url_for('protected'))
    return "Auth error", 400

@app.route('/protected')
@flask_login.login_required
def protected():
    data = a.getByQuery({"email":flask_login.current_user.id})[0]
    return 'Logged in as: ' + '<br>ID: ' + flask_login.current_user.id + '<br>Name: ' + data["name"] + '''
    <br><button  onclick="location.href='/logout';">Logout</button>
    '''

@app.route('/logout')
def logout():
    flask_login.logout_user()
    return '''Logged out
    <br><button  onclick="location.href='/';">Go To Main</button>
    '''

@login_manager.unauthorized_handler
def unauthorized_handler():
    return 'Unauthorized', 401

if "__name__" == "__main__":
    app.run(debug=True)