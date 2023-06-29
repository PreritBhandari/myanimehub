import HomePage from "./Pages";
import Header from "./Pages/header";


const Home = () => {
  return (
    <div className="bg-my-bg-image bg-cover bg-center bg-blend-darken bg-green-200 text-black h-screen snap-y snap-mandatory overflow-scroll z-0">

      {/* Header */}
      <Header />

      {/* HomePage */}
      <section id="hero" className="snap-start">
        <HomePage />
      </section>

    </div>
  );
};

export default Home;