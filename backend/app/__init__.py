
from flask import Flask


from config import Config
from app.extensions import cors
from app.routes.health_routes import health_bp


def create_app():

    # Create Flask application
    app = Flask(__name__)

    # Load configuration
    app.config.from_object(Config)

    # Initialize CORS
    cors.init_app(
        app,
        resources={
            r"/api/*": {
                "origins": [
                    "http://localhost:5173",
                    "http://127.0.0.1:5173",
                    "http://10.200.39.73:5174",
                ]
            }
        }
    )

    # Register blueprints
    app.register_blueprint(health_bp)

    return app
