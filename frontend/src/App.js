import { Box } from '@mui/system';
import Header from "./components/Header/Header"
import Home from './components/Header/Home/Home';

function App() {
  return (
    <div>
      <Header/>
      <Box style = {{marginTop:54}}>
        <Home/>
      </Box>
    </div>
  );
}

export default App;
