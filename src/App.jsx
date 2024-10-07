// import Cart from "./components/Cart";
import { EventProps } from "./components/EventProps";
// import Profile from "./components/Profile";

function App() {
  return (
    <section className="container">
      <h1 className="cart-heading">List of Movies:</h1>
      {/* <Cart /> */}
      <EventProps />
      {/* <Profile /> */}
    </section>
  );
}

export default App;
