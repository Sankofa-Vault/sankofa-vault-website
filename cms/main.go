package main

import (
	"cms-backend/internal/auth"
	"cms-backend/internal/content"
	"cms-backend/internal/db"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

func main() {
	// Load .env from root if possible, or from CMS dir
	// We might be running from CMS dir, so we look for ../.env or .env
	_ = godotenv.Load()          // .env in current dir
	_ = godotenv.Load("../.env") // .env in root

	db.Init()

	r := gin.Default()

	// CORS Setup
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173", "http://localhost:3000"}, // React Dev Servers
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Authorization", "Content-Type"},
		AllowCredentials: true,
	})

	// Convert rs/cors to gin middleware manually or use gin-cors (using wrapper here for simplicity)
	r.Use(func(ctx *gin.Context) {
		c.HandlerFunc(ctx.Writer, ctx.Request)
		ctx.Next()
	})

	api := r.Group("/api")
	{
		// Auth Routes
		authGroup := api.Group("/auth")
		{
			authGroup.POST("/register", auth.Register)
			authGroup.POST("/login", auth.Login)
		}

		// Content Routes (Protected)
		contentGroup := api.Group("/content")
		contentGroup.Use(auth.AuthMiddleware())
		{
			contentGroup.GET("/:pageId", content.GetContent)
			contentGroup.PUT("/:pageId", content.UpdateContent)
		}
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server running on port %s", port)
	r.Run(":" + port)
}
