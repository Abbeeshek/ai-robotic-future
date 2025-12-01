import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  RefreshCw, 
  Cpu, 
  Bot, 
  MessageSquare, 
  Shield,
  Rocket,
  BarChart3,
  Search,
  Lock
} from "lucide-react";
import heroImage from "@/assets/hero-ai-robotics.jpg";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="AI and Robotics Technology" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-glow">
              Empowering the Future with{" "}
              <span className="text-primary">AI & Robotics</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Smart, Autonomous, and Transformative – Redefining How the World Interacts with Technology.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-glow">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                  Intelligent Automation
                </h3>
                <p className="text-muted-foreground">
                  Streamline blockchain operations using AI-driven robotics.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                  Predictive Insights
                </h3>
                <p className="text-muted-foreground">
                  Machine learning to anticipate trends and optimize performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                  Smart Integration
                </h3>
                <p className="text-muted-foreground">
                  Merge AI intelligence with MiniBitcoin infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <RefreshCw className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                  Adaptive Systems
                </h3>
                <p className="text-muted-foreground">
                  Self-learning algorithms evolving with the network.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-glow">
            Our Technology
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                      Machine Learning & Deep Learning
                    </h3>
                    <p className="text-muted-foreground">
                      Advanced data analysis & blockchain optimization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                      Autonomous Robotics
                    </h3>
                    <p className="text-muted-foreground">
                      Smart bots handling tasks with precision.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                      Natural Language Processing
                    </h3>
                    <p className="text-muted-foreground">
                      Intuitive interaction & decision-making.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                      Scalable & Secure Infrastructure
                    </h3>
                    <p className="text-muted-foreground">
                      Designed to grow with MiniBitcoin, maintaining top-tier security.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-glow">
            Why Choose AI & Robotics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-6 text-center">
                <Rocket className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">
                  Drive innovation across the blockchain ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-6 text-center">
                <Brain className="w-12 h-12 mx-auto mb-4 text-accent" />
                <p className="text-muted-foreground">
                  Make intelligent decisions with AI-powered insights.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">
                  Automate repetitive tasks to save time and resources.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-accent" />
                <p className="text-muted-foreground">
                  Future-ready technology to keep MiniBitcoin ahead.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-glow">
            Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                      Automated Trading Bots
                    </h3>
                    <p className="text-muted-foreground">
                      Execute faster and smarter crypto trades.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                      Blockchain Monitoring
                    </h3>
                    <p className="text-muted-foreground">
                      Detect anomalies & prevent threats.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                      Data-Driven Insights
                    </h3>
                    <p className="text-muted-foreground">
                      Predict market trends & optimize strategies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-glow-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2 text-foreground">
                      Smart Contract Automation
                    </h3>
                    <p className="text-muted-foreground">
                      Reduce errors & increase efficiency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-glow">
              Step Into the Future of{" "}
              <span className="text-accent text-glow-accent">AI & Robotics</span>
              {" "}with MiniBitcoin
            </h2>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-display text-lg px-12 py-6 rounded-full btn-glow animate-glow-pulse"
            >
              Discover AI Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
