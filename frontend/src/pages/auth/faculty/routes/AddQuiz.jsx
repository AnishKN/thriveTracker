import React, { useState, useEffect } from "react";
import Loader from "../../../../components/Loader";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import useData from "../../AllData";
import axios from "axios";
import Swal from "sweetalert2";

const creatorOptions = {
  showLogicTab: false,
  isAutoSave: true,
};

function AddQuiz() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState(true);
  const [creator, setCreator] = useState(null);
  const [facultyName,setFacultyName] = useState("");
  const data = useData();

  useEffect(() => {
    const surveyCreator = new SurveyCreator(creatorOptions);
    setCreator(surveyCreator);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleJSON = () => {
    let allowedStudents = "";

    if(facultyName == ""){
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Enter faculty Name",
      });
      return;
    }

    if (creator) {
      const faculty_id = localStorage.getItem("id");
      const faculties = data.faculty;

      faculties.forEach((faculty) => {
        if (faculty._id == faculty_id) {
          // facultyName = faculty.name;
          allowedStudents = faculty.mentees.toString();
        }
      });

      const testData = JSON.stringify(creator.JSON, null, 2);
      console.log("Payload:", {
        facultyName: facultyName,
        allowedStudents: allowedStudents,
        testData: testData,
        active: true,
      });

      axios
        .request({
          method: "post",
          maxBodyLength: Infinity,
          url: `${BASE_URL}tests`,
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            facultyName: facultyName,
            allowedStudents: allowedStudents,
            testData: testData,
            active: true,
          },
        })
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: response.data.message,
          });
        })
        .catch((error) => {
          console.log("Request Error:", error.response.data); // Log error response data
          Swal.fire({
            icon: "warning",
            title: "Warning",
            text: error.response.data.message, // Show detailed error message
          });
        });
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="h-[89vh] flex flex-col gap-1 ">
          <SurveyCreatorComponent creator={creator} />
          <div className="flex justify-between items-center mt-4 p-4 bg-white shadow-md rounded-lg">
            <p className="text-gray-700 ml-4">
              ! Please enter the faculty name and click "Add Quiz" to generate a
              new quiz.
            </p>
            <div className="px-4 flex gap-4">
              <input
                className="shadow appearance-none border rounded py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={facultyName}
                onChange={(e)=> setFacultyName(e.target.value)}
                placeholder="Faculty Name"
              />
              <button
                onClick={handleJSON}
                className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                Add Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddQuiz;
