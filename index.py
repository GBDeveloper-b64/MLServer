from flask import Flask, render_template, request, jsonify
from color_ml import predict
import os

app = Flask(__name__)

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/ml/color', methods=['GET', 'POST'])
def color_predict():
	content = request.get_json()
	predicted = predict(content['r']/255, content['g']/255, content['b']/255)
	response = {
		"r": float(predicted[0]), 
		"g": float(predicted[1]), 
		"b": float(predicted[2])
	}
	return jsonify(response)

if __name__ == "__main__":
	port = int(os.environ.get("PORT", 8000))
	app.run(port=port)
