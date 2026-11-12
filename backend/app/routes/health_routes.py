
from flask import Blueprint, jsonify

health_bp = Blueprint(
    "health",
    __name__,
    url_prefix="/api/v1"
)


@health_bp.route("/health", methods=["GET"])
def health_check():

    return jsonify({    
        "success": True,
        "message": "HireLens API is running",
        "version": "1.0"
    }), 200


@health_bp.route("/about", methods=["GET"])
def about():

    return jsonify({
        "project": "HireLens",
        "description": "AI Powered Resume Analyzer",
        "backend": "Python Flask"
    }), 200
