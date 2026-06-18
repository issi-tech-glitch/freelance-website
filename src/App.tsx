import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjektEmail from "./pages/ProjektEmail";
import ProjektReporting from "./pages/ProjektReporting";
import ProjektBestell from "./pages/ProjektBestell";
import Pia from "./pages/Pia";
import { ChatProvider } from "./contexts/ChatContext";
import { ChatWidget } from "./components/ChatWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ChatProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pia" element={<Pia />} />
            <Route path="/projekte/email-kundendaten-erfassung" element={<ProjektEmail />} />
            <Route path="/projekte/automatisiertes-wochen-reporting" element={<ProjektReporting />} />
            <Route path="/projekte/bestell-lager-automatisierung" element={<ProjektBestell />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <ChatWidget />
        </ChatProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
