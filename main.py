import flask
from flask import render_template, request
import flask_login
from pysondb import db

app = flask.Flask(__name__)
app.secret_key = 'super secret string'
login_manager = flask_login.LoginManager()
login_manager.init_app(app)
a=db.getDb("./database_main.json")

users = {'foo@bar.tld': {'password': 'secret'}}
users = a.getAll()[0]

class User(flask_login.UserMixin):
    pass


@login_manager.user_loader
def user_loader(email):
    if email not in users:
        return

    user = User()
    user.id = email
    return user


@login_manager.request_loader
def request_loader(request):
    email = request.form.get('email')
    if email not in users:
        return

    user = User()
    user.id = email
    return user

@app.route('/login', methods=['GET', 'POST'])
def login():
    if flask.request.method == 'GET':
        return render_template("login.html")

    email = flask.request.form['email']
    if email in users and flask.request.form['password'] == users[email]['password']:
        user = User()
        user.id = email
        flask_login.login_user(user)
        return flask.redirect(flask.url_for('protected'))

    return 'Bad login'

@app.route('/req', methods=['POST'])
def testReq():
    #EMAIL
    # sha256 ( "879BG89EGBDSJ" + email + R7EER7WDWQEK0 )
    print("email")
    print(request.json["IJIJIJJIIJIJIJJIJIJIJIJIIJJIJIJIJIJIJIJIIJIJIJIJIJJIJIJIJIIJJJJ"])
    #PASSWORD
    # sha256 ( "ERWFRTVBG4EGJ" + password + "3W4FERRBFFRED" )
    print("password")
    print(request.json["IJIJIJIJIJJJJJIJJIJIIIJIJIJIJJJJJJJJJJIJIJJIIJIJIJJJIJIIJJJJJIJ"])
    return ""

@app.route('/protected')
@flask_login.login_required
def protected():
    return 'Logged in as: ' + flask_login.current_user.id

@app.route('/logout')
def logout():
    flask_login.logout_user()
    return 'Logged out'

@login_manager.unauthorized_handler
def unauthorized_handler():
    return 'Unauthorized', 401