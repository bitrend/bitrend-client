import { Layout } from "./Layout/Layout";
import BarChart from "./components/BarChart/BarChart";

function App() {
  return (
    <Layout>
      <BarChart distribution="Distribution" percent1={58} percent2={25} percent3={17}/>
    </Layout>
  );
}

export default App;
