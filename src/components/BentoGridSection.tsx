import { motion } from "framer-motion";
import { Zap, GitCommit, Shield, Clock, Server, Activity } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const BentoGridSection = () => (
  <section className="section-padding relative">
    <div className="container-narrow relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Deploy Pipeline Card */}
        <ScrollReveal delay={0}>
          <div className="glass rounded-2xl p-6 h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">Deploy Pipeline</h3>
            <div className="space-y-3">
              {[
                { label: "Build", status: "✓", color: "text-green-400" },
                { label: "Tests", status: "✓", color: "text-green-400" },
                { label: "Deploy", status: "✓", color: "text-green-400" },
              ].map((step) => (
                <div key={step.label} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{step.label}</span>
                  <span className={`font-mono font-semibold ${step.color}`}>{step.status}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border/30">
              <p className="text-xs font-mono text-muted-foreground">prod → live in <span className="text-primary font-semibold">8s</span></p>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Card */}
        <ScrollReveal delay={0.1}>
          <div className="glass rounded-2xl p-6 h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">Performance</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Uptime", value: "99.9%", icon: Activity },
                { label: "APIs Built", value: "50+", icon: Server },
                { label: "Hotels", value: "1000+", icon: Zap },
                { label: "Experience", value: "2+ yrs", icon: Clock },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-4 w-4 text-primary mx-auto mb-1.5" />
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Commits Card */}
        <ScrollReveal delay={0.2}>
          <div className="glass rounded-2xl p-6 h-full">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">Engineering</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <GitCommit className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Clean Architecture</p>
                  <p className="text-xs text-muted-foreground">SOLID principles, DDD</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Production Grade</p>
                  <p className="text-xs text-muted-foreground">Fault-tolerant, scalable</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">High Performance</p>
                  <p className="text-xs text-muted-foreground">Optimized & cached</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default BentoGridSection;
