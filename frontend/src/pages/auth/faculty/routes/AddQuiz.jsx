import React, { useState, useEffect } from "react";
import Loader from "../../../../components/Loader";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const creatorOptions = {
  showLogicTab: false,
  isAutoSave: true,
};

function AddQuiz() {
  const [loading, setLoading] = useState(true);
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    // Initialize the SurveyCreator instance and set it to state
    const surveyCreator = new SurveyCreator(creatorOptions);
    setCreator(surveyCreator);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Function to log the survey JSON to the console
  const handleJSON = () => {
    if (creator) {
      console.log(JSON.stringify(creator.JSON, null, 2));
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <SurveyCreatorComponent creator={creator} />
          <button onClick={handleJSON} className="absolute right-8 bottom-8 bg-blue-700 text-white p-4 px-8 rounded-2xl">
            Add Quizz
          </button>
        </div>
      )}
    </div>
  );
}

export default AddQuiz;
