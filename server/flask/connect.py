import psycopg2
import psycopg2.extras

host = "ec2-107-21-122-38.compute-1.amazonaws.com"
port = "5432"
dbname = "dba4ki9455v928"
user = "hodhnwforkslrp"
password = "8bcc8439780710f9ecc26d51479170737c21e8c5eb583e834f132f14655fa88f"

def getServerConnect():
    conn = psycopg2.connect(
        "host=" + host 
        + " port=" + port 
        + " dbname=" + dbname 
        + " user=" + user 
        + " password=" + password
    )

    return conn.cursor(cursor_factory=psycopg2.extras.DictCursor)