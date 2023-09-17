import { Header } from "../components/Header";

import { GitHubIcon } from "../assets/icons/GitHubIcon";
import { DatabaseIcon } from "../assets/icons/DatabaseIcon";
import { CloudIcon } from "../assets/icons/CloudIcon";
import { ReactIcon } from "../assets/icons/ReactIcon";
import { ServerIcon } from "../assets/icons/ServerIcon";
import { ToolsIcon } from "../assets/icons/ToolsIcon";

import "./index.css";

export const Index = () => {
	return (
		<div>
			<Header />
			<main
				style={{
					background: "rgba(34,36,56, 0.95)",
					minHeight: "100vh",
					padding: "5px 20px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<div className="principal centry">
					<h3 style={{ fontWeight: "600", fontSize: "1.5em" }}>
						Hello, I'm a Full Stack Developer
					</h3>
					<span style={{ fontWeight: "200" }}>
						I am a developer who is enthusiastic about web technologies, with
						the ability to work as a team and always continue learning.
					</span>
				</div>
				<div className="skill-set centry">
					<h2>Skill-Set</h2>
					<div className="card-container">
						<SkillCard
							icon={<ReactIcon />}
							title="Web development"
							text="Development of UI interfaces, handling user interaction"
						/>
						<SkillCard
							icon={<ServerIcon />}
							title="Backend"
							text="API development, with knowledge of serverless and monolith applications"
						/>
						<SkillCard
							icon={<CloudIcon />}
							title="Cloud servers"
							text="Knowledge about the AWS cloud, interacting with different services and connecting them to each other"
						/>
						<SkillCard
							icon={<DatabaseIcon />}
							title="Databases"
							text="Experience in relational and non-relational databases"
						/>
						<SkillCard
							icon={<GitHubIcon />}
							title="Git version control"
							text="Using version control systems to handle different development flows"
						/>
						<SkillCard
							icon={<ToolsIcon />}
							title="Still working..."
							text="I'm still working in this section"
						/>
					</div>
				</div>
			</main>
		</div>
	);
};

const SkillCard = ({
	icon,
	title,
	text,
}: {
	icon: React.ReactElement;
	title: string;
	text: string;
}) => {
	return (
		<div
			className="card"
			style={
				{
					// minWidth: "%",
					// maxWidth: "100%"
					// maxWidth: "49%"
				}
			}>
			<div className="left">
				<span>{icon}</span>
			</div>
			<div className="rigth">
				<h5>{title}</h5>
				<p>{text}</p>
			</div>
		</div>
	);
};
