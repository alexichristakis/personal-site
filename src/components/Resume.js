import React from "react";

const resume_link =
	"https://drive.google.com/uc?authuser=0&id=1TkXsFwqSSTloQX7oSnBewpa6WwgZ5qfq&export=download";

const Resume = ({ visible, onClickBackground }) => {
	if (visible) {
		return (
			<div className={"resume-container"} onClick={onClickBackground}>
				<img
					className={"resume"}
					src={require("../assets/resume.png")}
					onClick={() => window.open(resume_link)}
				/>
			</div>
		);
	} else {
		return <div />;
	}
};

export default Resume;
