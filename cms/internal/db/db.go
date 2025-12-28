package db

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/tursodatabase/libsql-client-go/libsql"
)

var DB *sql.DB

func Init() {
	var err error
	
	dbUrl := os.Getenv("TURSO_DATABASE_URL")
	authToken := os.Getenv("TURSO_AUTH_TOKEN")

	var dsn string
	if dbUrl != "" && authToken != "" {
		dsn = fmt.Sprintf("%s?authToken=%s", dbUrl, authToken)
		log.Println("Connecting to Turso DB...")
	} else {
		dsn = "file:./cms.db"
		log.Println("TURSO_DATABASE_URL not found, falling back to local SQLite: ./cms.db")
	}

	DB, err = sql.Open("libsql", dsn)
	if err != nil {
		log.Fatal("Failed to open database:", err)
	}

	if err := DB.Ping(); err != nil {
		log.Fatal("Failed to ping database:", err)
	}

	log.Println("Database connection established")
	
	initSchema()
}

func initSchema() {
	schema := `
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		email TEXT UNIQUE NOT NULL,
		password_hash TEXT NOT NULL
	);

	CREATE TABLE IF NOT EXISTS content (
		page_id TEXT PRIMARY KEY,
		data TEXT NOT NULL
	);
	`

	_, err := DB.Exec(schema)
	if err != nil {
		log.Fatal("Failed to create schema:", err)
	}
	log.Println("Database schema initialized")
}
