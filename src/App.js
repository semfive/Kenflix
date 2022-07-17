import AuthProvider from './context/auth';
import PageRouting from './routes';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <PageRouting />
      </AuthProvider>
    </div>
  );
}

export default App;
