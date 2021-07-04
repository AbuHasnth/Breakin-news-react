

import './App.css';
import Header from './Components/Header/Header';
import News from './Components/News/News';
import TopHeadline from './Components/TopHeadlines/TopHeadline';



function App() {
  return (
    <div>
        <h1 className='bg-primary'>This is news</h1>
        <Header></Header>
        <TopHeadline></TopHeadline>
        <News></News>
       
        
        
    </div>
  );
}

export default App;
