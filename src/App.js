import Header from './Components/Header/header.component';
import Footer from './Components/Footer/footer.component';
import { AppContainer } from './app.styles';
import { RouteContainer } from './app.styles';
import routes from './routes';

function App() {
  return (
    <AppContainer>
      <Header />
      <RouteContainer>
        {routes}
      </RouteContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
