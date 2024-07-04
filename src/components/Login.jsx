import EndSection from "./EndSection";
import Header from "./Header";
import "../App.css";
export default function Login() {
	return (
		<>
			<div className="hero_area">
				<Header />
			</div>
			{/* login section */}
			<div id="loginModal" className="modal">
				<div className="login-box">
					<span className="close">&times;</span>
					<h2>Login</h2>
					<form>
						<div className="user-box">
							<input type="text" name="" required />
							<label>Username</label>
						</div>
						<div className="user-box">
							<input type="password" name="" required />
							<label>Password</label>
						</div>
						<a href="admin page.html">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Submit
						</a>
					</form>
				</div>
			</div>

			{/* end login section */}
			<EndSection />
		</>
	);
}
