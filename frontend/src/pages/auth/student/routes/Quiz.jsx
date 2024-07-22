import React, { useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const json = 
{
  title: "IQ Test 2",
  description: "This is a IQ Test",
  logoPosition: "center",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "You regularly make new friends.",
          choices: [
            "Fully Agree",
            "Moderately Agree",
            "Somewhat Agree",
            "Neutral",
            "Somewhat Disagree",
            "Moderately Disagree",
            "Fully Disagree",
          ],
        },
        {
          type: "radiogroup",
          name: "question1",
          title:
            "Complex and novel ideas excite you more than simple and straightforward ones.\r\n",
          choices: [
            "Fully Agree",
            "Moderately Agree",
            "Somewhat Agree",
            "Neutral",
            "Somewhat Disagree",
            "Moderately Disagree",
            "Fully Disagree",
          ],
        },
        {
          type: "radiogroup",
          name: "question2",
          title:
            "You usually feel more persuaded by what resonates emotionally with you than by factual arguments.\r\n",
          choices: [
            "Fully Agree",
            "Moderately Agree",
            "Somewhat Agree",
            "Neutral",
            "Somewhat Disagree",
            "Moderately Disagree",
            "Fully Disagree",
          ],
        },
        {
          type: "radiogroup",
          name: "question3",
          title:
            "Your living and working spaces are clean and organized.\r\n\r\n",
          choices: [
            "Fully Agree",
            "Moderately Agree",
            "Somewhat Agree",
            "Neutral",
            "Somewhat Disagree",
            "Moderately Disagree",
            "Fully Disagree",
          ],
        },
        {
          type: "radiogroup",
          name: "question4",
          title: "You usually stay calm, even under a lot of pressure.\n",
          choices: [
            "Fully Agree",
            "Moderately Agree",
            "Somewhat Agree",
            "Neutral",
            "Somewhat Disagree",
            "Moderately Disagree",
            "Fully Disagree",
          ],
        },
        {
          type: "radiogroup",
          name: "question5",
          title:
            "You find the idea of networking or promoting yourself to strangers very daunting.\n",
          choices: [
            "Fully Agree",
            "Moderately Agree",
            "Somewhat Agree",
            "Neutral",
            "Somewhat Disagree",
            "Moderately Disagree",
            "Fully Disagree",
          ],
        },
      ],
    },
  ],
  cookieName: "",
};

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
  const navigate = useNavigate();
  const survey = new Model(json);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
    exitFullscreen();
    navigate("/student");
  });

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

  return (
    <div className="min-h-screen">
      <Survey model={survey} />
    </div>
  );
}

export default Quiz;
