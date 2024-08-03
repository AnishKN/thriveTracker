import React, { useEffect, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();
  const [surveyData, setSurveyData] = useState(null);

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/tests/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSurveyData(JSON.parse(data.testData));
      } catch (error) {
        console.error("Error fetching test data:", error);
        // Optionally, display an error message or redirect
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

  const survey = new Model(surveyData);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
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
