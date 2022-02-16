import MobileNavBar from "./components/MobileNavbar";
import NavBar from "./components/Navbar";
import Content from "./pages/Content";

function App() {

    // xl is the cutoff point of side menus
    return (
        <>
            <NavBar/>
            <MobileNavBar/>
            <Content/>
        </>
    );
}

export default App;
