from flask import Flask, render_template, request, Response
import json
import connect

app = Flask(__name__, static_folder="./build/static", template_folder="./build")
cur = connect.getServerConnect()

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/user', methods=['POST', 'GET'])
def load():
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
        # return render_template('index.html', result=result)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
