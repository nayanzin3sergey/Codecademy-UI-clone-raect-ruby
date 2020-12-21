/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import quizSvg_1 from "../../assests/svg/quiz/quiz-2.svg";
import quizSvg_2 from "../../assests/svg/quiz/quiz-1.svg";

const Quiz = () => {
	return (
		<div className="quiz">
			<button className="quiz__catalog-btn">Catalog Menu →</button>

			<a href="#" className="quiz__box">
				<div className="quiz__box-items">
					<img src={quizSvg_1} alt="quiz svg" className="quizSvg_1" />
					<img
						src={quizSvg_2}
						alt="quiz svg"
						className="quizSvg_2--bg"
					/>
					{/* <div className="quiz__box-content"> */}
					<p>Not sure where to begin?</p>
					<p className="quiz__box-items-link">Take our quiz →</p>
					{/* </div> */}

					<img src={quizSvg_2} alt="quiz svg" className="quizSvg_2" />
				</div>
			</a>
		</div>
	);
};

export default Quiz;
