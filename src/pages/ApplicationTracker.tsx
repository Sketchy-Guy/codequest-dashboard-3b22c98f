
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Plus, Building, Clock, CheckCircle, XCircle } from "lucide-react";

const ApplicationTracker = () => {
  return (
    <div className="container py-8 animate-fadeIn">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Application Tracker</h1>
          <p className="text-muted-foreground">Track and manage your job applications</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Application
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Total Applications</h3>
          <p className="text-3xl font-bold">24</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">In Progress</h3>
          <p className="text-3xl font-bold text-blue-500">12</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Interviews</h3>
          <p className="text-3xl font-bold text-yellow-500">5</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Offers</h3>
          <p className="text-3xl font-bold text-green-500">2</p>
        </Card>
      </div>

      <div className="space-y-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent-light/10 rounded-lg">
                <Building className="h-6 w-6 text-accent-light" />
              </div>
              <div>
                <h3 className="font-semibold">Senior Frontend Developer</h3>
                <p className="text-sm text-muted-foreground mb-2">Tech Corp Inc.</p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Applied 2 days ago</span>
                </div>
              </div>
            </div>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
              Interview Scheduled
            </span>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent-light/10 rounded-lg">
                <Building className="h-6 w-6 text-accent-light" />
              </div>
              <div>
                <h3 className="font-semibold">Full Stack Developer</h3>
                <p className="text-sm text-muted-foreground mb-2">Startup Labs</p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Applied 5 days ago</span>
                </div>
              </div>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              Offer Received
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ApplicationTracker;
