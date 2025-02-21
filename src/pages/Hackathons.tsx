
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Calendar, Users, Clock } from "lucide-react";

const Hackathons = () => {
  return (
    <div className="container py-8 animate-fadeIn">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Upcoming Hackathons</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join exciting hackathons, showcase your skills, and win amazing prizes.
        </p>
      </div>

      {/* Hackathon Categories */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
        <Button variant="outline" className="rounded-full">All Hackathons</Button>
        <Button variant="outline" className="rounded-full">Web Dev</Button>
        <Button variant="outline" className="rounded-full">AI/ML</Button>
        <Button variant="outline" className="rounded-full">Mobile</Button>
        <Button variant="outline" className="rounded-full">Blockchain</Button>
      </div>

      {/* Hackathon Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Web Development Challenge */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-accent-dark flex items-center justify-center">
            <Trophy className="h-12 w-12 text-accent-light" />
          </div>
          <div className="p-6">
            <div className="inline-block px-3 py-1 bg-accent-light/10 text-accent-light rounded-full text-sm mb-4">
              Web Development
            </div>
            <h3 className="text-xl font-semibold mb-2">Frontend Masters Challenge</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Build innovative web applications using modern frameworks.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Starts April 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">48 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-sm">1.2k participants</span>
              </div>
            </div>
            <Button className="w-full">Register Now</Button>
          </div>
        </Card>

        {/* AI Challenge */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-accent-dark flex items-center justify-center">
            <Trophy className="h-12 w-12 text-accent-light" />
          </div>
          <div className="p-6">
            <div className="inline-block px-3 py-1 bg-accent-light/10 text-accent-light rounded-full text-sm mb-4">
              AI/ML
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Innovation Sprint</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Create AI solutions for real-world problems.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Starts May 1, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">72 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-sm">800 participants</span>
              </div>
            </div>
            <Button className="w-full">Register Now</Button>
          </div>
        </Card>

        {/* Mobile Challenge */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-accent-dark flex items-center justify-center">
            <Trophy className="h-12 w-12 text-accent-light" />
          </div>
          <div className="p-6">
            <div className="inline-block px-3 py-1 bg-accent-light/10 text-accent-light rounded-full text-sm mb-4">
              Mobile
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile App Challenge</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Design and develop innovative mobile applications.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Starts June 1, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">48 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-sm">650 participants</span>
              </div>
            </div>
            <Button className="w-full">Register Now</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Hackathons;
