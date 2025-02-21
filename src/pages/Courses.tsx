
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Clock, Users, Star } from "lucide-react";

const Courses = () => {
  return (
    <div className="container py-8 animate-fadeIn">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Master programming with our comprehensive courses designed by industry experts.
        </p>
      </div>

      {/* Course Categories */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
        <Button variant="outline" className="rounded-full">All Courses</Button>
        <Button variant="outline" className="rounded-full">Python</Button>
        <Button variant="outline" className="rounded-full">JavaScript</Button>
        <Button variant="outline" className="rounded-full">Java</Button>
        <Button variant="outline" className="rounded-full">C++</Button>
        <Button variant="outline" className="rounded-full">Web Development</Button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Python Course */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-accent-dark flex items-center justify-center">
            <GraduationCap className="h-12 w-12 text-accent-light" />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm">4.8 (2.4k reviews)</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Python for Beginners</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Start your programming journey with Python fundamentals.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">20 hours</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span className="text-sm">12.4k students</span>
              </div>
            </div>
            <Button className="w-full">Enroll Now</Button>
          </div>
        </Card>

        {/* JavaScript Course */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-accent-dark flex items-center justify-center">
            <GraduationCap className="h-12 w-12 text-accent-light" />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm">4.9 (1.8k reviews)</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">JavaScript Mastery</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Master modern JavaScript with hands-on projects.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">25 hours</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span className="text-sm">9.2k students</span>
              </div>
            </div>
            <Button className="w-full">Enroll Now</Button>
          </div>
        </Card>

        {/* Java Course */}
        <Card className="overflow-hidden">
          <div className="aspect-video bg-accent-dark flex items-center justify-center">
            <GraduationCap className="h-12 w-12 text-accent-light" />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm">4.7 (1.5k reviews)</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Java Programming</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Learn Java programming from scratch to advanced.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">30 hours</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span className="text-sm">7.8k students</span>
              </div>
            </div>
            <Button className="w-full">Enroll Now</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Courses;
