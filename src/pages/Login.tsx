
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GithubIcon, Mail, Share2 } from "lucide-react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="w-full flex flex-col lg:flex-row max-w-7xl gap-8">
        {/* Left Side - Hero Section */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="animate-float">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">
              {isSignUp ? "Join TECHXERA Today" : "Welcome Back!"}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Join our community of developers and start your learning journey. Access courses, 
              join hackathons, and build your career in tech.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="glass-card p-4 rounded-lg text-center">
                <h3 className="font-bold text-2xl text-primary mb-1">500+</h3>
                <p className="text-sm text-muted-foreground">Courses</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <h3 className="font-bold text-2xl text-secondary mb-1">1M+</h3>
                <p className="text-sm text-muted-foreground">Students</p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <h3 className="font-bold text-2xl text-accent mb-1">50+</h3>
                <p className="text-sm text-muted-foreground">Hackathons</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1">
          <Card className="p-8 glass-card">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">
                {isSignUp ? "Create Account" : "Sign In"}
              </h2>
              <img 
                src="/lovable-uploads/266feaba-b8d4-4b71-ab68-64232840d392.png" 
                alt="TECHXERA" 
                className="h-8 w-8"
              />
            </div>

            <div className="space-y-6">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>

              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" placeholder="••••••••" />
                </div>
              )}

              <Button className="w-full text-lg py-6" size="lg">
                {isSignUp ? "Create Account" : "Sign In"}
              </Button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" className="w-full">
                  <Mail className="h-5 w-5" />
                </Button>
                <Button variant="outline" className="w-full">
                  <GithubIcon className="h-5 w-5" />
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <div className="text-center mt-4">
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-sm text-primary hover:underline"
                >
                  {isSignUp
                    ? "Already have an account? Sign in"
                    : "Don't have an account? Sign up"}
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
