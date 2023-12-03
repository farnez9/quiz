package main

import (
	"encoding/json"
	"io"

	// "errors"
	"fmt"
	"net/http"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Quiz struct {
	Id       uint   `json:"id"`
	Question string `json:"question"`
	Answer   bool   `json:"answer"`
}

type Question struct {
	Id       uint   `json:"id"`
	Question string `json:"question"`
}

type Answer struct {
	Id     uint `json:"id"`
	Answer bool `json:"answer"`
}

// Get quizzes from json
func getJsonQuizzes(subject string) (quizzes []Quiz, errorMsg string) {
	fileName := "./quizzes/" + subject + ".json"

	data, err := os.ReadFile(fileName)
	if err != nil {
		return nil, "Error reading the file"
	}

	err = json.Unmarshal(data, &quizzes)
	if err != nil {
		errorMsg = "Error unmarshaling the file"
		return
	}

	return
}

// Get quiz from json file
func getJsonQuestions(subject string) ([]Question, string) {
	quizzes, errorMsg := getJsonQuizzes(subject)

	if errorMsg != "" {
		return nil, "Error reading json questions"
	}

	var questions []Question

	for _, quiz := range quizzes {
		var question Question = Question{
			Question: quiz.Question,
			Id:       quiz.Id,
		}

		questions = append(questions, question)
	}

	return questions, ""
}

// return quiz to client
func getQuestions(c *gin.Context) {
	subject := c.Param("subject")
	quiz, errorMsg := getJsonQuestions(subject)

	if errorMsg != "" {
		fmt.Println(errorMsg)
	}
	c.IndentedJSON(http.StatusOK, quiz)
}

func checkAnswers(c *gin.Context) {
	subject := c.Param("subject")

	body, err := io.ReadAll(c.Request.Body)

	if err != nil {
		fmt.Println("error reading the bytes")
	}
	var answers []Answer

	err = json.Unmarshal(body, &answers)

	if err != nil {
		fmt.Println("error reading request body")
	}

	if len(answers) < 10 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "You didn't respond to all the questions"})
		return
	}

	quizzes, errorMsg := getJsonQuizzes(subject)

	if errorMsg != "" {
		fmt.Println(errorMsg)
	}

	rightAnswers := 0

	for idx, quiz := range quizzes {
		clientAnswer := answers[idx].Answer
		quizAnswer := quiz.Answer
		if quizAnswer == clientAnswer {
			rightAnswers++
		}
	}

	c.IndentedJSON(http.StatusOK, rightAnswers)
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
	router.POST("/quiz/:subject", checkAnswers)
	router.Run("localhost:8080")
}
