import "./App.css";
import { Routes, Route, RouterProvider } from "react-router-dom";
import CLerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes.jsx";
import { ChallengeGenerator } from "./challenge/ChallengeGenerator.jsx";
import { Layout } from "./layout/Layout.jsx";
import { HistoryPanel } from "./history/HistoryPanel.jsx";
import { AuthenticationPage } from "./auth/AuthenticationPage.jsx";

function App() {
  return (
    <CLerkProviderWithRoutes>
      <Routes>
        <Route path="/sign-in/*" element={<AuthenticationPage />} />
        <Route path="/sign-up/" element={<AuthenticationPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<ChallengeGenerator />} />
          <Route path="/history" element={<HistoryPanel />} />
        </Route>
      </Routes>
    </CLerkProviderWithRoutes>
  );
}

export default App;
