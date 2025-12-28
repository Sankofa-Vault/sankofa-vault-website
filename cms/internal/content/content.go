package content

import (
	"cms-backend/internal/db"
	"database/sql"
	"encoding/json"
	"io"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

func GetContent(c *gin.Context) {
	pageId := c.Param("pageId")

	// Try to get from DB
	var data string
	err := db.DB.QueryRow("SELECT data FROM content WHERE page_id = ?", pageId).Scan(&data)

	if err == nil {
		// Found in DB, return as JSON
		c.Header("Content-Type", "application/json")
		c.String(http.StatusOK, data)
		return
	} else if err != sql.ErrNoRows {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database error"})
		return
	}

	// Not found in DB, try to read from JSON file (Fallback/Seeding)
	// Path relative to where main.go is run (CMS root) -> ../src/api/mockData/
	jsonPath := filepath.Join("..", "website", "src", "api", "mockData", pageId+".json")

	fileContent, err := os.ReadFile(jsonPath)
	if err != nil {
		if os.IsNotExist(err) {
			c.JSON(http.StatusNotFound, gin.H{"error": "Content not found"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read fallback content"})
		}
		return
	}

	// Calculate and store in DB for next time? Or just return.
	// Let's just return for now.
	c.Data(http.StatusOK, "application/json", fileContent)
}

func UpdateContent(c *gin.Context) {
	pageId := c.Param("pageId")

	// Bind raw JSON body
	body, err := io.ReadAll(c.Request.Body)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to read body"})
		return
	}

	// Validate it's valid JSON
	var js map[string]interface{}
	if json.Unmarshal(body, &js) != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON format"})
		return
	}

	// Insert or Update into DB
	_, err = db.DB.Exec("INSERT OR REPLACE INTO content (page_id, data) VALUES (?, ?)", pageId, string(body))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save content"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Content updated successfully"})
}
