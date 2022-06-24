import Footer  from "./components/Footer";
import Header from "./components/Header"
import Content from "./components/Content";
import "./scss/_main.scss"
import data from "./util/data"
import  "./scss/reset.scss"


function App() {
  return (
    <div>
      <Header />
      <Content data={ data } />
      <Footer />
    </div>
  );
}

export default App 
