
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GithubIcon, Mail, Share2, ChevronRight, CheckCircle } from "lucide-react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary via-secondary to-accent text-white text-xs sm:text-sm py-2 px-4 text-center">
        Join our next hackathon starting in 3 days! 🚀
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="w-full flex flex-col lg:flex-row max-w-7xl gap-6 sm:gap-8 lg:gap-12">
          {/* Left Side - Hero Section */}
          <div className="flex-1 flex flex-col justify-center relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative">
              <div className="animate-float">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
                  <span className="gradient-text">Code. Learn. Achieve.</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl">
                  Join millions of developers mastering coding with TECHXERA. 
                  Start your journey today!
                </p>

                {/* Feature List */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    "500+ Interactive Coding Challenges",
                    "Live Coding Sessions & Contests",
                    "Industry Expert Mentorship",
                    "Interview Preparation Tools"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Cards - Hidden on smallest screens */}
                <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  <div className="glass-card p-3 sm:p-4 rounded-lg text-center transform hover:scale-105 transition-all">
                    <h3 className="font-bold text-xl sm:text-2xl text-primary mb-1">500K+</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Active Users</p>
                  </div>
                  <div className="glass-card p-3 sm:p-4 rounded-lg text-center transform hover:scale-105 transition-all">
                    <h3 className="font-bold text-xl sm:text-2xl text-secondary mb-1">1000+</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Daily Challenges</p>
                  </div>
                  <div className="glass-card p-3 sm:p-4 rounded-lg text-center transform hover:scale-105 transition-all">
                    <h3 className="font-bold text-xl sm:text-2xl text-accent mb-1">98%</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex-1 w-full max-w-md mx-auto order-1 lg:order-2">
            <Card className="p-4 sm:p-6 lg:p-8 glass-card shadow-2xl">
              <div className="flex justify-between items-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold">
                  {isSignUp ? "Create Account" : "Welcome Back"}
                </h2>
                <img 
                  src="/lovable-uploads/266feaba-b8d4-4b71-ab68-64232840d392.png" 
                  alt="TECHXERA" 
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </div>

              <div className="space-y-4 sm:space-y-6">
                {isSignUp && (
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe"
                      className="bg-white/50 border-gray-200 focus:border-primary h-9 sm:h-10"
                    />
                  </div>
                )}
                
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com"
                    className="bg-white/50 border-gray-200 focus:border-primary h-9 sm:h-10"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••"
                    className="bg-white/50 border-gray-200 focus:border-primary h-9 sm:h-10"
                  />
                </div>

                {isSignUp && (
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input 
                      id="confirm-password" 
                      type="password" 
                      placeholder="••••••••"
                      className="bg-white/50 border-gray-200 focus:border-primary h-9 sm:h-10"
                    />
                  </div>
                )}

                <Button 
                  className="w-full text-base sm:text-lg py-4 sm:py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity mt-2" 
                  size="lg"
                >
                  {isSignUp ? "Create Account" : "Sign In"}
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>

                <div className="relative my-4 sm:my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs sm:text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <Button variant="outline" className="w-full hover:bg-gray-50 p-2 sm:p-3">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button variant="outline" className="w-full hover:bg-gray-50 p-2 sm:p-3">
                    <GithubIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button variant="outline" className="w-full hover:bg-gray-50 p-2 sm:p-3">
                    <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>

                <div className="text-center mt-4 sm:mt-6">
                  <button
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    {isSignUp
                      ? "Already have an account? Sign in"
                      : "Don't have an account? Sign up"}
                  </button>
                </div>
              </div>
            </Card>

            {/* Trust Indicators - Hidden on smallest screens */}
            <div className="hidden sm:block mt-6 text-center text-xs sm:text-sm text-gray-500">
              <p>Trusted by developers from</p>
              <div className="flex justify-center items-center gap-4 sm:gap-6 mt-3">
                <img src="https://via.placeholder.com/80x20" alt="Company 1" className="h-4 sm:h-5 opacity-50 hover:opacity-100 transition-opacity" />
                <img src="https://via.placeholder.com/80x20" alt="Company 2" className="h-4 sm:h-5 opacity-50 hover:opacity-100 transition-opacity" />
                <img src="https://via.placeholder.com/80x20" alt="Company 3" className="h-4 sm:h-5 opacity-50 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
