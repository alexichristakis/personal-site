import React from "react";

const Resume = ({ visible, onClickBackground }) => {
	if (visible) {
		return (
			<div className={"resume-container"} onClick={onClickBackground}>
				<img className={"resume"} src={require("../assets/resume.png")} />
			</div>
		);
	} else {
		return <div />;
	}
};

export default Resume;
