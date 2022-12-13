from pysondb import db
import hashlib
from werkzeug.security import generate_password_hash, check_password_hash
from flask_httpauth import HTTPBasicAuth
from flask import request, Flask, jsonify

a=db.getDb("./database_main.json")
app = Flask(__name__)
auth = HTTPBasicAuth()
authToken = 'abc'

users = {
    "oleg": generate_password_hash("root"),
    "zero": generate_password_hash("toor")
}


@auth.verify_password
def verify_password(username, password):
    if username in users and \
            check_password_hash(users.get(username), password):
        return username

@app.route('/')
@auth.login_required
def index():
    return "Hello, {}!".format(auth.current_user())

@app.route('/get', methods=['GET'])
def get():
    if(request.args.get("auth") == authToken):
        name = a.getAll()[0]['oleg']['name']
        return f'<h1>Name: {name}'
    else:
        return "<h1 style=\"color:red\">ERROR: not authenticated</h1>"

@app.route('/login', methods=['POST'])
def login():
    if(request.args.get("type") == "default"):
        user = a.getAll()[0][request.args.get("username")]
        pas = a.getAll()[0][request.args.get("username")]["password"]
        if(user != '' and pas != '' and request.args.get("password") != ''):
            print(pas)
            pwned = hashlib.sha256(("p0p0p0p30nn444444"+request.args.get("password")+"23r!08*,8!**02@").encode('utf-8')).hexdigest()
            print(pwned)
            if(pwned == pas):
                return "Authed"
            else:
                return "password error"
        else:
           return "password can't be null"
    else:
        return "errror"
            


@app.route('/register', methods=['POST'])
def register():
    return "register"

@app.route('/', methods=['POST'])
def put():
    if(request.args.get("auth") == authToken):
        #loads(a.getAll)[""][0].pop()
        a.addMany(request.json)
        request.json[0].pop("id")
        a.deleteAll()
        a.addMany(request.json)
        return jsonify(request.json)
    else:
        return "<h1 style=\"color:red\">ERROR: not authenticated</h1>"

def test():
    a.addMany([{"name":"pysondb","type":"DB"},{"name":"pysondb-cli","type":"CLI"}])
    a.getAll()
    [{"name":"pysondb","type":"DB"},{"name":"pysondb-cli","type":"CLI"}]

if "__name__" == "__main__":
    app.run(debug=True)