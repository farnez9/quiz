package main

import (
	"encoding/json"
	// "errors"
	"fmt"
	"net/http"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Question struct {
	Question string `json:"question"`
	Answer   bool   `json:"answer"`
}

// Get quiz from json file
func getJsonSubjectQuiz(subject string) (quiz []Question, errorMsg string) {
	fileName := "./quizzes/" + subject + ".json"

	data, err := os.ReadFile(fileName)
	if err != nil {
		return nil, "Error reading the file"
	}

	err = json.Unmarshal(data, &quiz)
	if err != nil {
		errorMsg = "Error unmarshaling the file"
		return
	}

	return
}

// return quiz to the client
func getQuestions(c *gin.Context) {
	subject := c.Param("subject")
	quiz, errorMsg := getJsonSubjectQuiz(subject)

	if errorMsg != "" {
		fmt.Println(errorMsg)
	}
	c.IndentedJSON(http.StatusOK, quiz)
}

func main() {
	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"POST", "GET"},
		AllowHeaders:     []string{"Content-Type"},
		AllowCredentials: true,
	}))
	router.GET("/quiz/:subject", getQuestions)
	router.Run("localhost:8080")
}
