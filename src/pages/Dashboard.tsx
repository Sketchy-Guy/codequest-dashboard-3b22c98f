
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Trophy, Code, Medal, Timer, Star } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="container py-8 animate-fadeIn">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Welcome back, User!</h1>
          <p className="text-muted-foreground">Track your progress and achievements</p>
        </div>
        <div className="card-glass p-4 rounded-lg mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-accent-light" />
            <span className="font-semibold">Rank: 1,234</span>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent-light/10 rounded-full">
              <Code className="h-6 w-6 text-accent-light" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Problems Solved</h3>
              <p className="text-2xl font-bold">156</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent-light/10 rounded-full">
              <Medal className="h-6 w-6 text-accent-light" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Certificates Earned</h3>
              <p className="text-2xl font-bold">4</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent-light/10 rounded-full">
              <Timer className="h-6 w-6 text-accent-light" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Learning Hours</h3>
              <p className="text-2xl font-bold">124</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Current Courses */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Current Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent-light/10 rounded-full">
                <GraduationCap className="h-6 w-6 text-accent-light" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Python for Beginners</h3>
                <Progress value={65} className="mb-2" />
                <p className="text-sm text-muted-foreground">65% Complete</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent-light/10 rounded-full">
                <GraduationCap className="h-6 w-6 text-accent-light" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">JavaScript Fundamentals</h3>
                <Progress value={32} className="mb-2" />
                <p className="text-sm text-muted-foreground">32% Complete</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Achievements */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Recent Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent-light/10 rounded-full">
                <Star className="h-6 w-6 text-accent-light" />
              </div>
              <div>
                <h3 className="font-semibold">Python Master</h3>
                <p className="text-sm text-muted-foreground">Completed 50 Python challenges</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent-light/10 rounded-full">
                <Trophy className="h-6 w-6 text-accent-light" />
              </div>
              <div>
                <h3 className="font-semibold">Hackathon Winner</h3>
                <p className="text-sm text-muted-foreground">1st place in Web Dev Challenge</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent-light/10 rounded-full">
                <Medal className="h-6 w-6 text-accent-light" />
              </div>
              <div>
                <h3 className="font-semibold">Problem Solver</h3>
                <p className="text-sm text-muted-foreground">Solved 100 coding challenges</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
