import Header from './Components/Header/header.component';
import { AppContainer } from './app.styles';
import routes from './routes';

function App() {
  return (
    <AppContainer>
      <Header />
      {routes}
    </AppContainer>
  );
}

export default App;
