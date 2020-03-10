from flask import Flask, render_template, request, Response, abort
from flask_cors import CORS
import json
import connect

app = Flask(__name__, static_folder="./build/static",
            template_folder="./build")
CORS(app)
cur = connect.getServerConnect()


@app.route("/")
def index():
    return render_template("index.html")


@app.route('/login', methods=['POST', 'GET'])
def login():
    if(request.method == "POST"):
        param = json.loads(request.data.decode("utf-8")).get("params")
        cur.execute("SELECT * FROM users WHERE username = " + "\'" + param["email"] + "\'" + " and password = " + "\'" + param["password"] + "\'")
        results = cur.fetchall()
        if (len(results) > 0):
            return Response(
                "true"
            )
        else:
            # return abort(401)
            return Response(
                "false"
            )
    else:
        return Response(
            "false"
        )

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
