import AppHeader from "./components/shared/AppHeader";
import AppHome from "./views/home";
import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
    </Layout>
  );
}

export default App;
