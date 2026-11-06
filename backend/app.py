from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({
        "message": "Welcome to the HireLens API!",
        "status": "Backend is running"
    })

@app.route("/api/health")
def health_check():
    return jsonify({
        "status": True,
        "message": "HireLens backend is healthy"
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)