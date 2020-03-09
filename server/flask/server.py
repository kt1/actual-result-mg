from flask import Flask, render_template, request, Response, abort
# from flask_login import LoginManager, login_user, logout_user, login_required, UserMixin
import json
import connect

app = Flask(__name__, static_folder="./build/static", template_folder="./build")
# login_manager = LoginManager()
# login_manager.init_app(app)
# app.config['SECRET_KEY'] = "secret"
cur = connect.getServerConnect()

# class User(UserMixin):
#     def __init__(self, id, name, password):
#         self.id = id
#         self.name = name
#         self.password = password

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/login', methods=['POST', 'GET'])
def login():
    if(request.method == "POST"):
        cur.execute("SELECT * FROM users WHERE username = " + request.form["email"] + "password = " + request.form["password"])
        results = cur.fetchall()
        if (len(results) > 0):
            return Response('''
            login success!<br />
            <a href="/protected/">protected</a><br />
            <a href="/logout/">logout</a>
            ''')
        else:
            # return abort(401)
            return render_template("index.html")
    else:
        return render_template("index.html")

# user 一覧取得
@app.route('/user', methods=['POST', 'GET'])
def userload():
    if request.method == 'GET':
        cur.execute("SELECT * from users")
        results = cur.fetchall()
        dict_result = []
        for row in results:
            dict_result.append(dict(row))
        return Response(
            json.dumps(dict_result),  # Check3!
            mimetype='application/json',
            headers={
                'Cache-Control': 'no-cache',
                'Access-Control-Allow-Origin': '*'
            }
        )

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
