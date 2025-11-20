```instructions
# Copilot instructions — tcredex-Backend

Repository snapshot
- Current state: minimal. `README.md` exists; the repository has been scaffolded with a small Python (Flask) app, `Dockerfile`, and `docker-compose.yml` for MySQL.

Repository decisions (made with owner input)
- Runtime: **Python** (3.11+ recommended)
- Service run modes: **direct (venv)** and **Docker / docker-compose**
- Database for examples: **MySQL** (service name `db` in compose)

Quick agent checklist (first actions)
- Run a repo inventory to list files and detect language/runtime. Example (PowerShell):
  - `Get-ChildItem -Recurse -Force | Select-Object FullName`
- Important files created / to inspect now:
  - `requirements.txt` — Python dependencies
  - `src/` — application source (see `src/app.py`, `src/config.py`, `src/run.py`)
  - `Dockerfile` — image build for the app
  - `docker-compose.yml` — brings up `app` and `db` (MySQL)
  - `tests/` — simple pytest unit tests (`tests/test_app.py`)
  - `README.md` — run and dev instructions

How this repo is structured (big picture)
- Small single-service backend (Flask) with a DB integration example.
- App exposes a lightweight HTTP surface: `/health` (liveness) and `/db-test` (simple DB connectivity check).
- Configuration is environment-driven (`src/config.py`), loaded via `python-dotenv` when present. This keeps credentials out of source and supports both local venv and container runs.

Developer workflows and commands
- Direct (local) development:
  - Create venv and install: `python -m venv .venv` then `. .venv\Scripts\Activate; pip install -r requirements.txt`
  - Run locally: `python -m src.run` (binds to 0.0.0.0:8000)
  - Run unit tests: `pytest`
- Docker / Compose:
  - Build and start services: `docker-compose up --build`
  - App is reachable at `http://localhost:8000`
  - MySQL is reachable on `localhost:3306` (compose maps the port)

Project-specific conventions and patterns
- Config: `src/config.py` defines a `Config` class (uppercase keys) and reads env vars. Agents should set environment variables rather than editing code for environment-specific values.
- DB access: sample code uses `PyMySQL` directly for a small connectivity example. For larger work, follow this pattern: encapsulate DB access in a separate module and avoid creating connections at import time.
- Tests: use `pytest` and Flask's `test_client()` for endpoint tests (see `tests/test_app.py`). Keep tests small and hermetic where possible.

Integration and external dependencies
- MySQL (image `mysql:8.0`) is the example DB used. The compose file creates a user/database (`tcredex` / password `password`). Update `docker-compose.yml` or env vars for production credentials.
- Dependencies live in `requirements.txt`; use pinned versions for reproducibility.

Editing and PR guidance for agents
- Make small, focused changes. When adding or changing runtime-level files, update `README.md` and this instructions file to document decisions.
- If you add migrations (Alembic/Flask-Migrate), place them in `migrations/` and document migration commands in `README.md`.

When uncertain
- Ask the repository owner quick targeted questions (runtime, run mode, DB choice) before scaffolding major components. The current scaffold used the owner's choices: Python + Docker + MySQL.

Where to document discovered decisions
- Update `README.md` with runtime, how to run locally, and DB details. Also update this file (`.github/copilot-instructions.md`) so future agents find the decisions.

Contact / follow-up
- After making a scaffold or change, open a PR and include a short checklist in the PR description listing the changes and any manual setup steps.

```
