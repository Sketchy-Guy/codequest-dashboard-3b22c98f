
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, Lock, User, Globe, Moon } from "lucide-react";

const Settings = () => {
  return (
    <div className="container py-8 animate-fadeIn">
      <h1 className="text-4xl font-bold mb-8">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Sidebar */}
        <Card className="p-4 h-fit">
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Lock className="mr-2 h-4 w-4" />
              Security
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Globe className="mr-2 h-4 w-4" />
              Language
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Moon className="mr-2 h-4 w-4" />
              Appearance
            </Button>
          </nav>
        </Card>

        {/* Main Settings Area */}
        <div className="col-span-2 space-y-6">
          {/* Profile Section */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" placeholder="Tell us about yourself" />
              </div>
            </div>
          </Card>

          {/* Notifications Section */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive updates about your courses
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Course Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified about new course content
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Hackathon Reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive reminders about upcoming hackathons
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
