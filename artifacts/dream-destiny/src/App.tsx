import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Gallery from "@/pages/gallery";
import Videos from "@/pages/videos";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

const pageTransition = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.3 }
};

function Router() {
  const [location] = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <Switch location={location} key={location}>
            <Route path="/">
              <motion.div {...pageTransition}><Home /></motion.div>
            </Route>
            <Route path="/about">
              <motion.div {...pageTransition}><About /></motion.div>
            </Route>
            <Route path="/gallery">
              <motion.div {...pageTransition}><Gallery /></motion.div>
            </Route>
            <Route path="/videos">
              <motion.div {...pageTransition}><Videos /></motion.div>
            </Route>
            <Route path="/contact">
              <motion.div {...pageTransition}><Contact /></motion.div>
            </Route>
            <Route>
              <motion.div {...pageTransition}><NotFound /></motion.div>
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
