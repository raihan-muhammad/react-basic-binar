import './App.css';
// import Card from './components/Card';
// import Layout from './components/Layout';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">

      <Counter/>
      {/* <Layout>
        <h1>Di bawah adalah card</h1>
        <Card title="ini content" bio="ini description" textButton="Lihat Detail"/>
      </Layout> */}

      {/* <Card title="Raihan" bio="Pemuda" textButton="Lihat Profile Raihan"/>
      <Card title="Santoso" bio="Pemuda juga" textButton="Lihat Profile Santoso"/> */}
    </div>
  );
}

export default App;
