import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/csw/SiteLayout";
import { ThemeProvider } from "@/components/csw/ThemeProvider";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import OurModelPage from "./pages/OurModelPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import StubPage from "./pages/StubPage";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/our-model" element={<OurModelPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Door 1 nav lock: routes exist but Priority B/C content deferred */}
              <Route path="/leadership" element={<StubPage titleKey="nav.leadership" />} />
              <Route path="/news" element={<StubPage titleKey="nav.news" />} />
              <Route path="/careers" element={<StubPage titleKey="nav.careers" />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
