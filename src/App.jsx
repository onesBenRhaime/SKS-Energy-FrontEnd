import "./App.css";
import { Route, Routes } from "react-router-dom";
import Template from "./components/Template";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import News from "./components/News";
import Login from "./components/Login";
import Application from "./components/Application";
import AdminMain from "./admin/AdminMain";
import NewsDetails from "./components/NewsDetails";
import ProduitDetails from "./components/ProduitDetails";
import ProductList from "./admin/ProductList";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";
import NewsList from "./admin/NewsList";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Template />} />
				<Route path="/login" element={<Login />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/shop/:id" element={<ProduitDetails />} />
				<Route path="/news" element={<News />} />
				<Route path="/news/:id" element={<NewsDetails />} />

				<Route path="/application" element={<Application />} />
				<Route path="/admin" element={<AdminMain />} />
				<Route path="/admin/products" element={<ProductList />} />
				<Route path="/admin/addProduct" element={<AddProduct />} />
				<Route path="/admin/editProduct/:id" element={<EditProduct />} />

				<Route path="/admin/news" element={<NewsList />} />
				{/* <Route path="/template" lement={<Template />} /> */}
			</Routes>
		</>
	);
}

export default App;
