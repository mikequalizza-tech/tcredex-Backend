from flask import Flask, jsonify
import pymysql


def create_app():
    app = Flask(__name__)
    app.config.from_object('src.config.Config')

    @app.route('/health')
    def health():
        return jsonify({'status': 'ok'})

    @app.route('/db-test')
    def db_test():
        cfg = app.config
        try:
            conn = pymysql.connect(
                host=cfg['MYSQL_HOST'],
                user=cfg['MYSQL_USER'],
                password=cfg['MYSQL_PASSWORD'],
                database=cfg['MYSQL_DATABASE'],
                port=int(cfg['MYSQL_PORT'])
            )
            with conn.cursor() as cur:
                cur.execute('SELECT 1')
                res = cur.fetchone()
            conn.close()
            return jsonify({'db': 'ok', 'result': res})
        except Exception as e:
            return jsonify({'db': 'error', 'error': str(e)}), 500

    return app
