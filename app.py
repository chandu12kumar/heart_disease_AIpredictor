"""
CardioGuard AI Root Runner
Delegates execution to backend/app.py
"""
import os
import sys

root_dir = os.path.dirname(os.path.abspath(__file__))
backend_dir = os.path.join(root_dir, "backend")

if root_dir not in sys.path:
    sys.path.insert(0, root_dir)
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

from backend.app import app, host, port

if __name__ == "__main__":
    print(f"CardioGuard AI Server starting from root runner on http://{host}:{port}")
    app.run(host=host, port=port, debug=False)

