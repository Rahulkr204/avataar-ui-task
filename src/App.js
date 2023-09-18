import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import "./styles.css";

const navigationItems = [
    "Home",
    "Electronics",
    "Clothes",
    "Vehicles",
    "Household",
    "Home",
    "Electronics",
    "Clothes",
    "Vehicles",
    "Household",
    "Home",
    "Electronics",
    "Clothes",
    "Vehicles",
    "Household",
].map((item, index) => {
    return { id: index, text: item };
});

function App() {
    return (
        <div className="App">
            <Navbar menuItems={navigationItems} />
            <div className="container">
                <Carousel />
            </div>
        </div>
    );
}

export default App;
