from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def hello():
    """the only function exposed here"""
    return jsonify(poem="asdf asdf asdf",
                   somethingelse="slkslkjfdsjkl",
                   lastthing="asdfkljsdfkljsfd")

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
