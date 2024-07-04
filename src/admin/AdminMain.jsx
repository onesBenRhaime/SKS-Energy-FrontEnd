import "./style-admin.css";
export default function AdminMain() {
	return (
		<>
			<div className="container">
				{/*     SIDE AREA */}
				<div className="sideArea">
					<div className="avatar">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNOdyoIXDDBztO_GC8MFLmG_p6lZ2lTDh1ZnxSDawl1TZY_Zw"
							alt
						/>
						<div className="avatarName">
							Welcome,
							<br />
							SKS Energy
						</div>
					</div>
					<ul className="sideMenu">
						<li>
							<a href="javascript:void(0)" className="has-submenu">
								<span className="fa fa-table" />
								PRODUCT
							</a>
						</li>
						<li>
							<a href="Admin_news.html">
								<span className="fa fa-sitemap" />
								News List
							</a>
						</li>
						<li>
							<a href="Admin_Contact.html">
								<span className="fa fa-envelope-o" />
								Contact
							</a>
						</li>
					</ul>
				</div>
				{/*     SIDE AREA */}
				<div className="mainArea">
					{/* BEGIN NAV */}
					<nav className="navTop row">
						<div className="menuIcon fl">
							<span className="fa fa-bars" />
						</div>
						<div className="account fr">
							<div className="name has-submenu">
								SKS Energy
								<span className="fa fa-angle-down" />
							</div>
							<ul className="accountLinks submenu">
								<li>
									<a href="index.html">View website</a>
								</li>
								<li>
									<a href="login.html">
										Log out
										<span className="fa fa-sign-out fr" />
									</a>
								</li>
							</ul>
						</div>
					</nav>
					{/* END NAV */}
					{/* CONTAINER  */}
					<div className="mainContent">
						<div className="formHeader row py-5">
							<h2 className=" col-6 text-1 fl">Product List</h2>
							<div className="col-2"></div>
							<div className="fr col-4">
								<button
									type="submit"
									className="btnSave bg-1 text-fff text-bold fr"
								>
									<a href="admin_ajoutProduit.html">Add Product</a>
								</button>
							</div>
						</div>
						<div className="table">
							<div className="row bg-1">
								<div className="cell cell-50 text-center text-fff">Code</div>
								<div className="cell cell-100 text-center text-fff">
									Libelle
								</div>
								<div className="cell cell-100 p text-fff">Description</div>
								<div className="cell cell-50 text-center text-fff">Active</div>
								<div className="cell cell-50 text-center text-fff">Prix</div>
								<div className="cell cell-100 text-center text-fff">EDIT</div>
							</div>
							{/* Container for dynamically generated rows */}
							<div id="productList" />
						</div>
						{/*</form> */}
						<div id="pagination">
							<ul className="pagination list-inline text-center">
								<li>
									<a href="?page=1">1</a>
								</li>
								<li className="is-active">
									<a href="?page=2">2</a>
								</li>
								<li>
									<a href="?page=3">3</a>
								</li>
								<li>
									<a href="?page=4">4</a>
								</li>
								<li>
									<a href="?page=5">5</a>
								</li>
							</ul>
						</div>
					</div>
					{/* END CONTAINER  */}
				</div>
			</div>
		</>
	);
}
