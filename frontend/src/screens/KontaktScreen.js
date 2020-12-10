import React from "react";
import "../kontakt.css";

export default function KontaktScreen() {
	return (
		<body>
			<section id="kontakt">
				<h2>Kontakt</h2>
				<form>
					<div className="form-control">
						<label for="mail">Email</label>
						<input
							type="email"
							name="email"
							id="mail"
							placeholder="example@mail.hr"
						></input>
					</div>
					<div className="form-control">
						<label for="naslov">Title</label>
						<input
							type="text"
							name="subject"
							id="naslov"
							placeholder="Naslov poruke"
						></input>
					</div>
					<div className="form-control">
						<label for="poruka">Poruka</label>
						<textarea
							id="poruka"
							name="message"
							rows="4"
							placeholder="Vaša poruka..."
						></textarea>
					</div>
					<button className="btn" type="submit">
						Send
					</button>
				</form>
			</section>
		</body>
	);
}
