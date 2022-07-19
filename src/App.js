import AuthProvider from './context/auth';
import PageRouting from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AuthProvider>
          <PageRouting />
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;
