import { useEffect } from "react";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { ThunderEffects } from "./components/ThunderEffects";
import { Navigation } from "./components/Navigation";
import { LavaButton } from "./components/LavaButton";
import { SectionHeading } from "./components/SectionHeading";
import { ScheduleCard } from "./components/ScheduleCard";
import { PrizeCard } from "./components/PrizeCard";
import { SponsorGrid } from "./components/SponsorGrid";
import { ScrollProgress } from "./components/ScrollProgress";
import { GlowCard } from "./components/GlowCard";
import { FireIcon } from "./components/FireIcon";
import { LightningBolt } from "./components/LightningBolt";
import { EmberParticle } from "./components/EmberParticle";
import {
  Mail,
  MapPin,
  Calendar,
} from "lucide-react";

export default function App() {
  // Load Devfolio SDK
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      console.log("Devfolio SDK loaded successfully");
    };
    
    script.onerror = () => {
      console.error("Failed to load Devfolio SDK");
    };
    
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-[#F8F1E7] overflow-x-hidden">
      {/* Background Effects */}
      <ParticlesBackground />
      <ThunderEffects />

      {/* Navigation */}
      <Navigation />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-20 px-4"
      >
        {/* Decorative thunder bolts in corners */}
        <div className="absolute top-32 left-8 opacity-20 animate-lightning-strike">
          <LightningBolt className="w-16 h-16 text-[#FFA559]" />
        </div>
        <div
          className="absolute top-40 right-12 opacity-20 animate-lightning-strike"
          style={{ animationDelay: "2s" }}
        >
          <LightningBolt className="w-20 h-20 text-[#FF6A00]" />
        </div>

        {/* Decorative fire icons */}
        <div className="absolute bottom-32 left-16 opacity-20">
          <FireIcon className="w-24 h-24" />
        </div>
        <div className="absolute bottom-40 right-20 opacity-20">
          <FireIcon className="w-28 h-28" />
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          {/* Subtle decorative ember particles */}
          <div className="mb-8 flex items-center justify-center gap-6 opacity-50">
            <EmberParticle className="w-3 h-3" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#FF6A00]/40 to-transparent" />
            <EmberParticle className="w-2 h-2" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#FFA559]/40 to-transparent" />
            <EmberParticle className="w-3 h-3" />
          </div>

          {/* Main Wordmark */}
          <h1
            className="text-7xl md:text-8xl lg:text-9xl mb-6 uppercase tracking-tight relative"
            style={{
              fontFamily: "'Saira Condensed', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            <span className="block relative">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8F1E7] via-[#FFA559] to-[#FF6A00] animate-shimmer drop-shadow-[0_0_30px_rgba(255,106,0,0.5)]"
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                CODE BLAZE
              </span>

              {/* Subtle lightning accents */}
              <div className="absolute -top-12 left-1/4 opacity-30 animate-lightning-strike">
                <LightningBolt className="w-10 h-10 text-[#FFA559]" />
              </div>
              <div
                className="absolute -bottom-12 right-1/4 opacity-30 animate-lightning-strike"
                style={{ animationDelay: "1.5s" }}
              >
                <LightningBolt className="w-10 h-10 text-[#FF6A00]" />
              </div>

              {/* Ember particles floating */}
              <div className="absolute top-0 left-0 opacity-40">
                <EmberParticle className="w-4 h-4" />
              </div>
              <div className="absolute bottom-0 right-0 opacity-40">
                <EmberParticle className="w-3 h-3" />
              </div>
            </span>
          </h1>

          {/* Presented by */}
          <p className="text-[#F8F1E7] mb-3 tracking-wider uppercase text-sm drop-shadow-[0_0_10px_rgba(248,241,231,0.5)]">
            Presented by GGSIPU Dwarka
          </p>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-[#FFA559] mb-12 tracking-wide italic">
            Set Your Heart Ablaze!
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 relative" style={{ zIndex: 100 }}>
            <div 
              className="apply-button" 
              data-hackathon-slug="codeblaze" 
              data-button-theme="dark"
            ></div>
          </div>

          {/* Quick Jump Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <LavaButton
              variant="chip"
              onClick={() =>
                document
                  .getElementById("schedule")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Schedule
            </LavaButton>
            <LavaButton
              variant="chip"
              onClick={() =>
                document
                  .getElementById("prizes")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Prizes
            </LavaButton>
          </div>
        </div>

        {/* Animated lava cracks at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FF6A00]/5 to-transparent pointer-events-none" />
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="relative py-32 px-4">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/30 to-transparent" />

        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            preTitle="SCHEDULE: THE TRIAL BEGINS"
            title="Timeline"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <ScheduleCard
              day="Day 1"
              subtitle="Ignition"
              accentColor="orange"
              items={[
                {
                  time: "9:00–10:00",
                  title: "Registration & Check-in",
                },
                {
                  time: "10:00",
                  title: "Opening Ceremony & Theme Reveal",
                },
                {
                  time: "10:30",
                  title: "Team Formation / Problem Picking",
                },
                { time: "11:00", title: "Hacking Begins" },
                { time: "2:00 & 5:00", title: "Mentor Rounds" },
                { time: "7:30", title: "Dinner" },
              ]}
            />

            <ScheduleCard
              day="Overnight"
              subtitle="Unwavering Will"
              accentColor="red"
              items={[
                { time: "12:00", title: "Midnight Snacks" },
                { title: "Optional Mini-Challenges" },
                { title: "Quiet Pods / Power-Nap Zones" },
                { title: "Sponsor Office Hours (late night)" },
              ]}
            />

            <ScheduleCard
              day="Day 2"
              subtitle="Final Form"
              accentColor="glow"
              items={[
                { time: "10:00", title: "Submission Freeze" },
                {
                  time: "10:30–1:00",
                  title: "Judging & Demos",
                },
                { time: "1:30", title: "Awards & Closing" },
              ]}
            />
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-[#9AA0A6] text-sm italic">
              <div className="w-2 h-2 rounded-full bg-[#FF6A00]/30" />
              <span>Schedule subject to change</span>
              <div className="w-2 h-2 rounded-full bg-[#FF6A00]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section
        id="prizes"
        className="relative py-32 px-4 bg-[#15161A]/30"
      >
        {/* Decorative particles */}
        <div className="absolute top-20 left-10 opacity-10">
          <FireIcon className="w-16 h-16" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <FireIcon className="w-20 h-20" />
        </div>

        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            preTitle="PRIZES: REWARDS OF THE PILLAR"
            title="Glory Awaits"
          />

          {/* Main Prizes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            <PrizeCard
              place="First"
              amount="₹25,000"
              benefits={[
                "Trophy",
                "Exclusive Swag",
                "Fast-track Interviews",
              ]}
            />

            <PrizeCard
              place="Second"
              amount="₹15,000"
              benefits={["Trophy", "Exclusive Swag"]}
            />

            <PrizeCard
              place="Third"
              amount="₹10,000"
              benefits={["Trophy", "Exclusive Swag"]}
            />
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-[#FF6A00]/30 to-transparent" />
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-[#FF6A00]" />
              <div className="w-1 h-1 rounded-full bg-[#FFA559]" />
              <div className="w-1 h-1 rounded-full bg-[#FF6A00]" />
            </div>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent via-[#FF6A00]/30 to-transparent" />
          </div>

          {/* Special Awards */}
          <div>
            <h3
              className="text-2xl uppercase tracking-wide mb-8 text-center text-[#FFA559]"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              Special Awards
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <PrizeCard
                place="Best Fresher Team"
                amount="₹5,000"
                benefits={[]}
                isSpecial
              />
              <PrizeCard
                place="Best All-Girls Team"
                amount="₹5,000"
                benefits={[]}
                isSpecial
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="relative py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            preTitle="| GGSIPU DWARKA"
            title="Sponsors"
          />

          <SponsorGrid />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-24 px-4 bg-[#15161A]/30"
      >
        <div className="container mx-auto max-w-2xl">
          <SectionHeading
            preTitle="REACH OUT"
            title="Get In Touch"
          />

          {/* Event Details - Centered */}
          <div className="flex justify-center">
            <GlowCard className="w-full max-w-lg">
              <h3
                className="text-2xl mb-6 uppercase text-[#FFA559] text-center"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                Event Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF6A00] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-[#9AA0A6] mb-1">
                      Venue
                    </p>
                    <p className="text-[#F8F1E7]">
                      GGSIPU, Dwarka, New Delhi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#FF6A00] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-[#9AA0A6] mb-1">
                      Dates
                    </p>
                    <p className="text-[#F8F1E7]">
                      6–7 November 2025
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#FF6A00] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-[#9AA0A6] mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:arkinkansra@gmail.com"
                      className="text-[#FFA559] hover:text-[#FF6A00] transition-colors"
                    >
                      arkinkansra@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-[#FF6A00]/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div>
              <span
                className="text-2xl tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FFA559]"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                CODEBLAZE
              </span>
              <p className="text-sm text-[#9AA0A6] mt-1">
                © 2025 Code Blaze • GGSIPU Dwarka
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="#schedule"
                className="text-[#9AA0A6] hover:text-[#FFA559] transition-colors text-sm"
              >
                Schedule
              </a>
              <a
                href="#prizes"
                className="text-[#9AA0A6] hover:text-[#FFA559] transition-colors text-sm"
              >
                Prizes
              </a>
              <a
                href="#sponsors"
                className="text-[#9AA0A6] hover:text-[#FFA559] transition-colors text-sm"
              >
                Sponsors
              </a>
              <a
                href="#contact"
                className="text-[#9AA0A6] hover:text-[#FFA559] transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}