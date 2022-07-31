import { Banner } from './components/Banner/index.js';
import { Footer } from './components/Footer/index.js';
import { Middle } from './components/Middle/index.js';
import { Navbar } from './components/Navbar/index.js'
import { Products } from './components/ProductsSection/index.js';
import { Title } from './components/Title/index.js';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Middle />
      <Products />
      <Title />
      <Footer />
    </>
  );
}

export default App;
