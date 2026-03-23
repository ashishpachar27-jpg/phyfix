import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Resources from "@/pages/Resources";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import IbPhysicsTutor from "@/pages/landing/IbPhysicsTutor";
import IgcseMathTutor from "@/pages/landing/IgcseMathTutor";
import ALevelPhysicsTutor from "@/pages/landing/ALevelPhysicsTutor";
import OnlineMathTutor from "@/pages/landing/OnlineMathTutor";
import PhysicsClasses from "@/pages/landing/PhysicsClasses";
import MathsClasses from "@/pages/landing/MathsClasses";
import ChemistryClasses from "@/pages/landing/ChemistryClasses";
import BiologyClasses from "@/pages/landing/BiologyClasses";
import EnglishClasses from "@/pages/landing/EnglishClasses";
import CsClasses from "@/pages/landing/CsClasses";
import TestPrep from "@/pages/landing/TestPrep";
import FreeDemo from "@/pages/landing/FreeDemo";
import Subjects from "@/pages/Subjects";
import TopicPage from "@/pages/TopicPage";
import TeacherList from "@/pages/TeacherList";
import TeacherProfile from "@/pages/TeacherProfile";
import Dashboard from "@/pages/Dashboard";
import Admin from "@/pages/Admin";
import BecomeTutor from "@/pages/BecomeTutor";
import Login from "@/pages/Login";
import Contact from "@/pages/Contact";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Refund from "@/pages/Refund";
import Pricing from "@/pages/Pricing";
import HowItWorks from "@/pages/HowItWorks";
import Practice from "@/pages/Practice";
import ChemistryQuiz from "@/pages/ChemistryQuiz";
import BiologyQuiz from "@/pages/BiologyQuiz";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resources" component={Resources} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/ib-physics-tutor" component={IbPhysicsTutor} />
        <Route path="/igcse-math-tutor" component={IgcseMathTutor} />
        <Route path="/a-level-physics-tutor" component={ALevelPhysicsTutor} />
        <Route path="/online-math-tutor" component={OnlineMathTutor} />
        <Route path="/physics-classes" component={PhysicsClasses} />
        <Route path="/maths-classes" component={MathsClasses} />
        <Route path="/chemistry-classes" component={ChemistryClasses} />
        <Route path="/biology-classes" component={BiologyClasses} />
        <Route path="/english-classes" component={EnglishClasses} />
        <Route path="/cs-classes" component={CsClasses} />
        <Route path="/test-prep" component={TestPrep} />
        <Route path="/subjects" component={Subjects} />
        <Route path="/free-demo" component={FreeDemo} />
        <Route path="/topics/:slug" component={TopicPage} />
        <Route path="/teachers" component={TeacherList} />
        <Route path="/teachers/:id" component={TeacherProfile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/admin" component={Admin} />
        <Route path="/become-tutor" component={BecomeTutor} />
        <Route path="/login" component={Login} />
        <Route path="/contact" component={Contact} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/refund" component={Refund} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/practice" component={Practice} />
        <Route path="/practice/chemistry-quiz" component={ChemistryQuiz} />
        <Route path="/practice/biology-quiz" component={BiologyQuiz} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
