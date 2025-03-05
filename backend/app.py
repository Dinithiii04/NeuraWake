from flask import Flask

from routes.tumor_classification import tumor_classification_bp

app = Flask(__name__)

# Register the blueprint
app.register_blueprint(tumor_classification_bp, url_prefix='/tumor')

@app.route('/')
def home():
    return "Brain Tumor Detection API is Running!"

if __name__ == '__main__':
    app.run(debug=True)
