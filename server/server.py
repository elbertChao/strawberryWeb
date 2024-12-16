from flask import Flask, jsonify

# creating an app instance
app = Flask(__name__)

# GET method at /api/home route
@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'message': "Hello World!"
    })

if __name__ == "__main__":
    app.run(debug = True) # REMOVE debug=True once you want to deploy to production
