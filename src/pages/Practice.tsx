
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Timer, Trophy, Star } from "lucide-react";

const Practice = () => {
  return (
    <div className="container py-8 animate-fadeIn">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Practice & Improve</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Enhance your coding skills with our curated collection of programming challenges.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent-light/10 rounded-full">
              <Code className="h-6 w-6 text-accent-light" />
            </div>
            <div>
              <p className="text-2xl font-bold">156</p>
              <h3 className="text-sm text-muted-foreground">Problems Solved</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent-light/10 rounded-full">
              <Timer className="h-6 w-6 text-accent-light" />
            </div>
            <div>
              <p className="text-2xl font-bold">124</p>
              <h3 className="text-sm text-muted-foreground">Practice Hours</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent-light/10 rounded-full">
              <Trophy className="h-6 w-6 text-accent-light" />
            </div>
            <div>
              <p className="text-2xl font-bold">15</p>
              <h3 className="text-sm text-muted-foreground">Contests Joined</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent-light/10 rounded-full">
              <Star className="h-6 w-6 text-accent-light" />
            </div>
            <div>
              <p className="text-2xl font-bold">1,234</p>
              <h3 className="text-sm text-muted-foreground">Global Rank</h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Practice Categories */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
        <Button variant="outline" className="rounded-full">All Problems</Button>
        <Button variant="outline" className="rounded-full">Easy</Button>
        <Button variant="outline" className="rounded-full">Medium</Button>
        <Button variant="outline" className="rounded-full">Hard</Button>
        <Button variant="outline" className="rounded-full">Contests</Button>
      </div>

      {/* Problem List */}
      <div className="space-y-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">Two Sum</h3>
              <p className="text-sm text-muted-foreground">
                Given an array of integers nums and an integer target...
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Easy</span>
              <Button>Solve</Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">Longest Substring Without Repeating Characters</h3>
              <p className="text-sm text-muted-foreground">
                Given a string s, find the length of the longest substring...
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Medium</span>
              <Button>Solve</Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">Regular Expression Matching</h3>
              <p className="text-sm text-muted-foreground">
                Given an input string s and a pattern p, implement regular expression...
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Hard</span>
              <Button>Solve</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Practice;
