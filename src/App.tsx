import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/csw/SiteLayout";
import { ThemeProvider } from "@/components/csw/ThemeProvider";
import Home from "./pages/Home";

// Route-level code splitting — keeps the cinematic homepage in the
// main bundle (it's the LCP target) and lazy-loads the 7 institutional
// pages. Each interior page becomes its own chunk; navigation suspends
// on a transparent fallback so the editorial transition stays clean.
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const OurModelPage = lazy(() => import("./pages/OurModelPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LeadershipPage = lazy(() => import("./pages/LeadershipPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-[60vh] bg-background" aria-hidden />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route element={<SiteLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/our-model" element={<OurModelPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/leadership" element={<LeadershipPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/careers" element={<CareersPage />} />
              </Route>
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
