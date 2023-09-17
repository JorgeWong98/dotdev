export const Header = () => {
	return (
		<header
			style={{
				background: "rgb(32,35,53)",
				padding: "10px 50px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "center",
				width: "100%",
        gap: "15px"
			}}>
			<h2 style={{ fontWeight: 900, color: "#fff", fontSize: "1em" }}>JorgeWongDev</h2>
			<ul style={{ display: "flex", listStyle: "none", gap: "15px", fontSize: "0.8em" }}>
				<li>Home</li>
				<li>About</li>
				<li>Skills</li>
				<li>Portfolio</li>
				<li>Contact</li>
			</ul>
		</header>
	);
};
