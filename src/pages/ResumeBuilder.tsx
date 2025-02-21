
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Download, Share2 } from "lucide-react";

const ResumeBuilder = () => {
  return (
    <div className="container py-8 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Resume Builder</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Create a professional resume that stands out with our easy-to-use builder.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Template Selection */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Choose Template</h2>
          <div className="space-y-4">
            {["Modern", "Professional", "Creative", "Simple"].map((template) => (
              <div key={template} className="relative rounded-lg border p-4 hover:border-primary cursor-pointer transition-colors">
                <FileText className="h-8 w-8 mb-2 text-accent-light" />
                <h3 className="font-medium">{template}</h3>
                <p className="text-sm text-muted-foreground">Clean and minimal design</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Resume Editor */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Resume Editor</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-8 min-h-[600px] flex items-center justify-center border-2 border-dashed">
            <p className="text-muted-foreground">Resume editor coming soon...</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ResumeBuilder;
