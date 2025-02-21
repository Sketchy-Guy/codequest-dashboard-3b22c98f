
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Hackathons from "./pages/Hackathons";
import Practice from "./pages/Practice";
import Settings from "./pages/Settings";
import ResumeBuilder from "./pages/ResumeBuilder";
import ApplicationTracker from "./pages/ApplicationTracker";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/application-tracker" element={<ApplicationTracker />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
