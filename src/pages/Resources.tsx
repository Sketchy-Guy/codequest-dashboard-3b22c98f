
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Video, Download, ExternalLink } from "lucide-react";

const Resources = () => {
  return (
    <div className="container py-8 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our curated collection of learning materials, tutorials, and documentation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Documentation */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent-light/10 rounded-full">
              <BookOpen className="h-6 w-6 text-accent-light" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive guides and API references for popular technologies.
              </p>
              <Button variant="outline" className="w-full">
                <ExternalLink className="h-4 w-4 mr-2" />
                Browse Docs
              </Button>
            </div>
          </div>
        </Card>

        {/* Video Tutorials */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent-light/10 rounded-full">
              <Video className="h-6 w-6 text-accent-light" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
              <p className="text-muted-foreground mb-4">
                Step-by-step video guides for learning new technologies.
              </p>
              <Button variant="outline" className="w-full">
                <ExternalLink className="h-4 w-4 mr-2" />
                Watch Tutorials
              </Button>
            </div>
          </div>
        </Card>

        {/* Downloads */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent-light/10 rounded-full">
              <Download className="h-6 w-6 text-accent-light" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Downloads</h3>
              <p className="text-muted-foreground mb-4">
                Starter templates, cheat sheets, and learning materials.
              </p>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Resources
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Featured Resources */}
      <h2 className="text-2xl font-bold mt-12 mb-6">Featured Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="p-6 hover:border-primary transition-colors cursor-pointer">
            <h3 className="font-semibold mb-2">Resource Title {i + 1}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Brief description of the resource and what you can learn from it.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-accent-light">Updated 2 days ago</span>
              <Button variant="ghost" size="sm">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Resources;
