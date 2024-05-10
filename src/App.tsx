import  { useState } from 'react';
import LoginForm from './Formularios/LoginForm';
import RegisterForm from './Formularios/RegisterForm';
import './Styles/App.css'

function App() {
  const [route, setRoute] = useState(window.location.pathname);

  const handleRouteChange = () => {
    setRoute(window.location.pathname);
  };

  window.onpopstate = handleRouteChange;

  let Component;
  if (route === '/login') {
    Component = LoginForm;
  } else if (route === '/register') {
    Component = RegisterForm;
  } else {
    Component = () => <div>404 Not Found</div>;
  }

  return (
    <div className="app">
      <Component />
    </div>
  );
}

export default App;
