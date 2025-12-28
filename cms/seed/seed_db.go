package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

const API_URL = "http://localhost:8080/api"

func main() {
	// 1. Login to get token
	token, err := login("test@example.com", "password123")
	if err != nil {
		log.Fatalf("Login failed: %v. Make sure server is running and user exists.", err)
	}
	fmt.Println("Logged in successfully.")

	// 2. List of pages to seed
	pages := []string{
		"common", "home", "about", "mission", "service", "team", "portfolio", "contact",
	}

	// 3. Loop and seed
	for _, page := range pages {
		err := seedPage(page, token)
		if err != nil {
			log.Printf("Failed to seed %s: %v\n", page, err)
		} else {
			fmt.Printf("Seeded %s successfully.\n", page)
		}
	}
}

func login(email, password string) (string, error) {
	data := map[string]string{"email": email, "password": password}
	jsonData, _ := json.Marshal(data)

	resp, err := http.Post(API_URL+"/auth/login", "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		body, _ := io.ReadAll(resp.Body)
		return "", fmt.Errorf("status %d: %s", resp.StatusCode, string(body))
	}

	var resMap map[string]string
	if err := json.NewDecoder(resp.Body).Decode(&resMap); err != nil {
		return "", err
	}
	return resMap["token"], nil
}

func seedPage(page string, token string) error {
	// Read JSON file
	// Assuming running from CMS root, path matches what the server uses:
	path := filepath.Join("..", "..", "website", "src", "api", "mockData", page+".json")
	content, err := os.ReadFile(path)
	if err != nil {
		return fmt.Errorf("failed to read file %s: %v", path, err)
	}

	// Send PUT request
	req, err := http.NewRequest("PUT", fmt.Sprintf("%s/content/%s", API_URL, page), bytes.NewBuffer(content))
	if err != nil {
		return err
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+token)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		body, _ := io.ReadAll(resp.Body)
		return fmt.Errorf("server error %d: %s", resp.StatusCode, string(body))
	}

	return nil
}
