import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed.jsx";
import LoginForm from "./components/LoginForm.jsx";
import "./App.css";

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="707d08aa-babd-4662-ac09-71adeebd6578"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(e) => <ChatFeed {...e} />}
    />
  );
};

export default App;
