import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Award,
  Users,
  Heart,
  ChevronDown,
  Stethoscope,
  BookOpen,
  Trophy,
} from "lucide-react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const achievements = [
    {
      icon: GraduationCap,
      title: "Johns Hopkins University",
      description:
        "Distinguished graduate from one of the world's most prestigious medical institutions",
      year: "Medical Education",
    },
    {
      icon: Award,
      title: "Father of Robotic Surgery",
      description:
        "Pioneer and innovator in robotic-assisted surgical procedures",
      year: "Innovation Leader",
    },
    {
      icon: Users,
      title: "6,000+ Surgeries",
      description:
        "Over 6,000 robotic prostatectomy surgeries performed with exceptional outcomes",
      year: "Surgical Excellence",
    },
  ];

  const stats = [
    { number: "6,000+", label: "Robotic Surgeries" },
    { number: "30+", label: "Years Experience" },
    { number: "1", label: "Surgical Pioneer" },
    { number: "∞", label: "Lives Impacted" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                Dr. Mani Menon
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection("legacy")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Legacy
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="space-y-8">
            {/* Profile Image Placeholder */}
            <div className="mx-auto w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border-4 border-primary/20">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full flex items-center justify-center">
                <Heart className="w-16 h-16 text-primary" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="text-sm px-4 py-2">
                  Pioneer in Medical Innovation
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                  Dr. Mani Menon
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Visionary surgeon, educator, and the pioneering force behind
                  modern robotic surgery
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                  Johns Hopkins Graduate
                </Badge>
                <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2">
                  Father of Robotic Surgery
                </Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                  6,000+ Surgeries
                </Badge>
              </div>

              <Button
                size="lg"
                onClick={() => scrollToSection("achievements")}
                className="mt-8 px-8 py-6 text-lg rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Explore His Legacy
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-sm px-4 py-2">
              Distinguished Career
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Groundbreaking Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A legacy built on innovation, excellence, and an unwavering
              commitment to advancing medical science
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-gradient-to-br from-card via-card to-card/50"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      <achievement.icon className="w-8 h-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {achievement.year}
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section
        id="legacy"
        className="py-20 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-sm px-4 py-2">
                  Lasting Impact
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  A Legacy of Innovation
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Dr. Mani Menon's pioneering work in robotic surgery has
                  revolutionized patient care, setting new standards for
                  precision and outcomes in urological procedures.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Educational Excellence
                    </h4>
                    <p className="text-muted-foreground">
                      Johns Hopkins University graduate with distinction in
                      medical excellence
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Surgical Innovation
                    </h4>
                    <p className="text-muted-foreground">
                      Pioneered robotic surgical techniques that have become the
                      gold standard
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Patient Care
                    </h4>
                    <p className="text-muted-foreground">
                      Over 6,000 successful procedures with exceptional patient
                      outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-16 h-16 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">
                      Excellence
                    </div>
                    <div className="text-muted-foreground">
                      in Medical Innovation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                Connect
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Honor His Legacy
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Learn more about Dr. Mani Menon's contributions to medicine and
                robotic surgery innovation
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("home")}
                className="px-8 py-6 text-lg rounded-xl cursor-pointer"
              >
                Back to Top
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://scholar.google.com/scholar?q=mani+menon+robotic+surgery",
                    "_blank",
                  )
                }
                className="px-8 py-6 text-lg rounded-xl cursor-pointer"
              >
                Research Publications
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Stethoscope className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">
                Dr. Mani Menon
              </span>
            </div>
            <p className="text-muted-foreground">
              Honoring a pioneer in robotic surgery and medical excellence
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 manimenon.com - A tribute to medical innovation
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
