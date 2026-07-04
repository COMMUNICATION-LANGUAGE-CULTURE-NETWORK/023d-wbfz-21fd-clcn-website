import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Programs from "./pages/Programs";
import GlobalTalentIncubator from "./pages/GlobalTalentIncubator";
import Events from "./pages/Events";
import Opportunities from "./pages/Opportunities";
import Impact from "./pages/Impact";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import CareerLaunchProgram from "./pages/CareerLaunchProgram";

function CLPRedirect() {
  useEffect(() => {
    window.location.replace("/global-talent-incubator#clp");
  }, []);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="career-launch-program" component={CareerLaunchProgram} />
      <Route path="/clp" component={CLPRedirect} />
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/programs" component={Programs} />
      <Route path="/programs/:slug" component={Programs} />
      <Route path="/global-talent-incubator" component={GlobalTalentIncubator} />
      <Route path="/events" component={Events} />
      <Route path="/opportunities" component={Opportunities} />
      <Route path="/impact" component={Impact} />
      <Route path="/resources" component={Resources} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-use" component={TermsOfUse} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const currentPath = location.split("#")[0];

  useEffect(() => {
  const hash = window.location.hash;

  if (hash) {
    const target = document.querySelector(hash);

    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);

        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
