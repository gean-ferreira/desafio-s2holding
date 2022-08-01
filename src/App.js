import { Banner } from './components/Banner/index.js';
import { Footer } from './components/Footer/index.js';
import { Middle } from './components/Middle/index.js';
import { Products } from './components/ProductsSection/index.js';
import { ScrollTopButton } from './components/ScrollTopButton/index.js';
import { Title } from './components/Title/index.js';

function App() {
  return (
    <>
      <Banner />
      <Middle />
      <Products />
      <Title />
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export default App;
