import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuestion } from "../service/apiService";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizzid = params.id;
  // console.log(params);
  const fetchQuestions = async () => {
    const res = await getDataQuestion(quizzid);
    console.log("Check res", res);
  };
  useEffect(() => {
    fetchQuestions();
  }, [quizzid]); // after quizzid when load data quizzid
  return <div className="detail-quiz-container">Heheheh</div>;
};
export default DetailQuiz;
