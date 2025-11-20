# tcredex-Backend

Minimal Python backend scaffold (Flask) with optional Docker + MySQL compose.

Getting started (direct - Windows PowerShell)

1. Create a virtual environment and install deps:

```powershell
python -m venv .venv
. .venv\Scripts\Activate; pip install -r requirements.txt
```

2. Run the app locally:

```powershell
python -m src.run
```

3. Run tests:

```powershell
pytest
```

Running with Docker (recommended for MySQL integration)

```powershell
docker-compose up --build
```

Endpoints
- `GET /health` — basic liveness check
- `GET /db-test` — attempts a simple `SELECT 1` against configured MySQL

Environment variables (examples)

- `MYSQL_HOST` (default: `db` when using compose)
- `MYSQL_PORT` (default: `3306`)
- `MYSQL_DATABASE` (default: `tcredex`)
- `MYSQL_USER` (default: `tcredex`)
- `MYSQL_PASSWORD` (default: `password`)

Notes
- This repository was scaffolded by an AI agent per repository owner input. If you prefer a different runtime or database, update `.github/copilot-instructions.md` and the repository accordingly.

```
# tcredex-Backend