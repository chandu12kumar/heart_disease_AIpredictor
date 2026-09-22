"""
CardioGuard AI Root Runner
Delegates execution to backend/app.py
"""
import os
import sys

backend_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "backend")
sys.path.insert(0, backend_dir)
os.chdir(backend_dir)

from app import app, port, host

if __name__ == "__main__":
    print(f"CardioGuard AI Server starting from root runner on http://{host}:{port}")
    app.run(host=host, port=port, debug=False)
