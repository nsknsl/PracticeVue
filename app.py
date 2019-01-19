from flask import render_template

from flask import Flask
app = Flask(__name__, static_folder='static')


@app.route('/')
def hello(name=None):
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)