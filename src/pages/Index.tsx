
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Code, Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col gap-16 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-light to-accent-dark bg-clip-text text-transparent">
            Level Up Your Tech Career
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master programming languages, join hackathons, and build your future in tech with industry-leading courses and hands-on practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/courses">Explore Courses</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/hackathons">Join Hackathons</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-glass rounded-lg p-6 text-center">
              <div className="mb-4 inline-block p-3 bg-accent-light/10 rounded-full">
                <GraduationCap className="h-6 w-6 text-accent-light" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert-Led Courses</h3>
              <p className="text-muted-foreground">
                Learn from industry professionals with real-world experience.
              </p>
            </div>
            <div className="card-glass rounded-lg p-6 text-center">
              <div className="mb-4 inline-block p-3 bg-accent-light/10 rounded-full">
                <Code className="h-6 w-6 text-accent-light" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-on Practice</h3>
              <p className="text-muted-foreground">
                Build real projects and solve practical coding challenges.
              </p>
            </div>
            <div className="card-glass rounded-lg p-6 text-center">
              <div className="mb-4 inline-block p-3 bg-accent-light/10 rounded-full">
                <Trophy className="h-6 w-6 text-accent-light" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Hackathons</h3>
              <p className="text-muted-foreground">
                Compete in hackathons and showcase your skills to potential employers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
