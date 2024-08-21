import React, { useEffect, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from 'axios';

const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};

function Quiz() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();
  const [surveyData, setSurveyData] = useState(null);
  const [testResult, setTestResult] = useState({});

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const response = await fetch(`${BASE_URL}tests/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSurveyData(JSON.parse(data.testData));
      } catch (error) {
        console.error("Error fetching test data:", error);
      }
    };

    fetchTestData();
  }, [id]);

  useEffect(() => {
    const MySwal = withReactContent(Swal);

    const enterFullscreen = () => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    };

    const isFullscreen = () => {
      return (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      );
    };

    const handleFullscreenChange = () => {
      if (!isFullscreen()) {
        MySwal.fire({
          title: "Warning",
          text: "This page can only be viewed in fullscreen mode.",
          icon: "warning",
          confirmButtonText: "Return to Fullscreen",
        }).then(() => {
          enterFullscreen();
        });
      }
    };

    enterFullscreen();

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, []);

  if (!surveyData) {
    return <div>Loading...</div>; // Show a loading message until the survey data is fetched
  }

  // Function to map questions to answers
  const mapQuestionsToAnswers = (surveyData, surveyAnswers) => {
    // Extract the test title from surveyData
    const testTitle = surveyData.title || "No Title";

    // Extract questions
    const questions = surveyData.pages[0].elements;
    const finalResults = { testTitle };

    questions.forEach((question, index) => {
      const questionTitle = question.title;
      const answerValue = surveyAnswers[`question${index + 1}`];

      // Find the corresponding answer text from choices
      const answerText = question.choices
        ? question.choices.find((choice) => choice.value === answerValue)?.text
        : "No choices available";

      // Store the question and answer in finalResults
      finalResults[questionTitle] = answerText || "No answer";
    });

    return finalResults;
  };

  const handleSurveyCompletion = (sender) => {
    const surveyAnswers = sender.data;

    // Map questions to answers
    const testPayload = mapQuestionsToAnswers(surveyData, surveyAnswers);

    // Prepare the result object
    const finalResult = {
      testName: testPayload.testTitle || "Default Test Name", // Use testTitle from testPayload as testName
      userName: "Anish",
      facultyName: "Krishna",
      testPayload: JSON.stringify(
        Object.fromEntries(
          Object.entries(testPayload).filter(([key]) => key !== "testTitle")
        )
      ) // Convert testPayload to a string and remove testTitle
    };

    // Set the test result in state
    setTestResult(finalResult);

    // Log the result for testing purposes
    console.log(finalResult);

    // Save the result to the database or perform other actions here
    // Example API call to save the data:
    // saveTestResultToDatabase(finalResult);

    axios.request({
      method: 'post',
      maxBodyLength: Infinity,
      url: `${BASE_URL}results/save`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : finalResult
    })
      .then((response) => {
        console.log(JSON.stringify(response.data.message));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Create the Survey model
  const survey = new Model(surveyData);
  survey.onComplete.add((sender) => {
    handleSurveyCompletion(sender);
    exitFullscreen();
    navigate("/student");
  });


  return (
    <div className="min-h-screen">
      <Survey model={survey} />
    </div>
  );
}

export default Quiz;
