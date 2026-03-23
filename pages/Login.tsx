import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Shield, CheckCircle2, Mail } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import phyfixLogo from "@assets/Screenshot_2026-01-21_at_7.08.35_AM_1768959521728.png";

export default function Login() {
  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="p-8 shadow-xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img 
                src={phyfixLogo} 
                alt="PhyFix" 
                className="h-20 w-20 rounded-full object-cover shadow-lg"
              />
            </div>
            <h1 className="text-2xl font-display font-bold text-foreground mb-2">
              Welcome to PhyFix
            </h1>
            <p className="text-muted-foreground">
              Sign in to manage your teacher profile
            </p>
          </div>

          <Button 
            onClick={handleLogin}
            className="w-full h-12 text-base font-semibold gap-3 rounded-lg shadow-md hover:shadow-lg transition-all"
            data-testid="button-google-login"
          >
            <SiGoogle className="w-5 h-5" />
            Continue with Google
          </Button>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">For Teachers</p>
                <p className="text-xs text-muted-foreground">Create and manage your tutoring profile</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Secure Login</p>
                <p className="text-xs text-muted-foreground">Powered by secure OAuth authentication</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Admin Verified</p>
                <p className="text-xs text-muted-foreground">Your profile will be reviewed before going live</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t text-center">
            <p className="text-xs text-muted-foreground">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Looking for a tutor instead?{" "}
            <a href="/teachers" className="text-primary font-medium hover:underline">
              Browse Tutors
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
