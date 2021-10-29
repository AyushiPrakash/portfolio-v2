import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Title, Header } from "../shared/";
import ReactMarkdown from "react-markdown";
import { ExperienceData } from "../../content/experienceData.js";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { isWindows } from "react-device-detect";

const Container = styled.main`
	background-color: ${(props) => props.theme.backgroundPrimary};

	.title {
		text-align: right;
	}

	.tabContainer {
		display: flex;
		flex-direction: row;

		.tab {
			flex: 0.3;
		}

		.tab button {
			display: block;
			background-color: inherit;
			color: ${(props) => props.theme.textPrimary};
			position: relative;
			padding: 24px 22px;
			width: 100%;
			border: none;
			outline: none;
			transition: 0.3s;
			font-size: 12pt;
			text-align: left;

			&::before {
				content: "";
				display: block;
				position: absolute;
				left: 0;
				top: 0;
				bottom: 0;
				width: 1px;
				background-color: ${(props) => props.theme.textPrimary};
			}

			&:hover {
				background-color: #f0ecec;
			}

			&.active {
				color: ${(props) => props.theme.accentColor};
				background-color: #f0ecec;
			}

			&.active::before {
				content: "";
				display: block;
				position: absolute;
				left: -1px;
				top: 0;
				bottom: 0;
				width: 3px;
				background-color: ${(props) => props.theme.accentColor};
			}
		}

		.tabcontent {
			flex: 0.7;
			padding: 0px 48px;
			border-left: none;
			display: flex;
			flex-direction: column;
			color: ${(props) => props.theme.textPrimary};

			&.active {
				display: block;
			}

			&:not(.active) {
				display: none;
			}

			header {
				display: flex;
				justify-content: space-between;

				.titleContainer {
					margin-bottom: 0.25rem;

					.role {
						font-size: 18pt;
					}

					.name {
						font-size: 18pt;
						color: ${(props) => props.theme.accentColor};
					}
				}
				.link {
					height: calc(18pt * 1.2);
					display: grid;
					place-items: center;
					.icon {
						font-size: 16pt;
						color: ${(props) => props.theme.textPrimary};
					}
				}
			}

			.details {
				color: ${(props) => props.theme.textSecondary};
				font-size: 13pt;
				margin-bottom: 1rem;
			}

			.desc {
				font-size: 13pt;
				font-weight: 400;
				opacity: 0.9;
				line-height: 1.6;
			}

			.desc ul,
			.desc ol {
				padding-inline-start: 24px !important;
			}
		}
	}

	@media only screen and (max-width: 840px) {
		.tabContainer {
			flex-direction: column;

			.tab {
				display: flex;
				flex-direction: row;
				margin-bottom: 2rem;
				overflow-y: hidden;
				overflow-x: auto;

				&::-webkit-scrollbar {
					${(props) =>
						props.showCustomScroll &&
						`height: 5px;
          `}
				}

				&::-webkit-scrollbar-thumb {
					${(props) =>
						props.showCustomScroll &&
						`border-radius:       1rem;
            background-color: #b4b4b4;
          `}
				}
			}

			.tab button {
				white-space: nowrap;
				padding: 20px 18px;

				&::before {
					left: 0;
					top: unset;
					bottom: 0;
					right: 0;
					width: unset;
					height: 0.5px;
				}

				&.active::before {
					left: 0;
					top: unset;
					right: 0;
					bottom: -1px;
					height: 3px;
					width: unset;
				}
			}

			.tabcontent {
				padding: 0px;
			}
		}
	}

	@media only screen and (max-width: 600px) {
		.tabContainer {
			.tab button {
				padding: 18px 16px;
			}
			.tabcontent {
				header {
					.titleContainer {
						.role {
							font-size: 16pt;
						}

						.name {
							font-size: 16pt;
						}
					}

					.link {
						height: calc(16pt * 1.2);

						.icon {
							font-size: 14pt;
						}
					}
				}

				.details {
					font-size: 12pt;
					margin-bottom: 1rem;
				}

				.desc {
					font-size: 13pt;
				}
			}
		}
	}

	@media only screen and (max-width: 420px) {
		.tabContainer {
			.tab button {
				padding: 16px 14px;
			}

			.tabcontent {
				header {
					.titleContainer {
						.role {
							font-size: 15pt;
						}

						.name {
							font-size: 15pt;
						}
					}

					.link {
						height: calc(15pt * 1.2);

						.icon {
							font-size: 13pt;
						}
					}
				}

				.details {
					font-size: 11.5pt;
					margin-bottom: 1rem;
				}

				.desc {
					font-size: 12pt;
				}
			}
		}
	}
`;

const Experience = () => {
	const [active, setActive] = useState(ExperienceData[0].id);
	const [showCustomScroll, setShowCustomScroll] = useState(true);

	useEffect(() => {
		if (isWindows) {
			setShowCustomScroll(true);
		} else {
			setShowCustomScroll(false);
		}
	}, []);

	const handleTabChange = (e) => {
		setActive(e.target.id);
	};

	return (
		<Container id="experience" showCustomScroll={showCustomScroll}>
			<Title className="title">Experience</Title>
			<div className="tabContainer">
				<div className="tab">
					{ExperienceData.map((exp) => {
						return (
							<button
								id={exp.id}
								className={`interactive tablinks ${
									active === `${exp.id}` ? "active" : ""
								}`}
								onClick={handleTabChange}
							>
								{exp.name}
							</button>
						);
					})}
				</div>
				{ExperienceData.map((exp) => {
					return (
						<div
							className={`tabcontent ${active === `${exp.id}` ? "active" : ""}`}
						>
							<header>
								<div className="titleContainer">
									<span className="role">{exp.role}</span>
									<span className="name">&thinsp;@{exp.name}</span>
								</div>
								{exp.link && (
									<a
										className="link interactive"
										href={exp.link}
										target="_blank"
									>
										<BsBoxArrowUpRight className="icon" />
									</a>
								)}
							</header>

							<div className="details">
								<span className="duration">{exp.duration}&ensp;</span>
								<span className="type">|&ensp;{exp.type}</span>
							</div>
							<div className="desc">
								<ReactMarkdown className="markdown" linkTarget="_blank">
									{exp.description}
								</ReactMarkdown>
							</div>
						</div>
					);
				})}
			</div>
		</Container>
	);
};

export default Experience;
