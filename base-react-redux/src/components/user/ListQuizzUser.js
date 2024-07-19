import React, { useEffect, useState } from "react";
import { getQuizByUser } from "../service/apiService";
import "./ListQuizzUser.scss";

const ListQuizzUser = () => {
  const [arrQuizz, setArrQuizz] = useState([]);

  useEffect(() => {
    getQuizData();
  }, []);

  const getQuizData = async () => {
    try {
      const res = await getQuizByUser();
      if (res && res.data && res.data.EC === 0) {
        console.log("Quiz data received:", res.data.DT);
        setArrQuizz(res.data.DT);
      } else {
        console.error("Failed to fetch quizzes:", res.data.EM);
      }
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  };

  return (
    <div className="container-design">
      <div className="main">
        {arrQuizz &&
          arrQuizz.length > 0 &&
          arrQuizz.map((quiz, index) => (
            <div className="card" key={index}>
              <img
                style={{ display: "block", width: "100px" }}
                id="base64image"
                src={`data:image/jpeg;base64,${quiz.image}`}
              />
              <div className="card-body">
                <h5 className="card-title">{quiz.description}</h5>
                <p className="card-text">
                  Quiz ID: {quiz.id}, Start: {quiz.time_start}, End:{" "}
                  {quiz.time_end}
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListQuizzUser;
