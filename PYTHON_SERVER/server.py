from flask import Flask
print(__name__)

app = Flask(__name__)

@app.route('/')
def home():
    return "hello world"

if __name__ == '__main__':
    app.run(debug=True, port=5000)
