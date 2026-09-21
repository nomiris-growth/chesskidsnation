import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { StatsSection } from "@/components/landing/stats-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { CurriculumSection } from "@/components/landing/curriculum-section";
import { StudentsCarousel } from "@/components/landing/students-carousel";
import { EnrollmentProcess } from "@/components/landing/enrollment-process";
import { ResearchSection } from "@/components/landing/research-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { FloatingCta } from "@/components/landing/floating-cta";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white pb-[72px] sm:pb-0">
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <div className="flex justify-center bg-white px-4 py-5 sm:py-6">
          <a href="#book-demo" className="kid-cta-btn inline-flex rounded-full px-7 py-3.5 text-sm font-black uppercase tracking-wide min-h-[44px] sm:py-3">
            Book a Demo Class
          </a>
        </div>
        <FeaturesSection />
        <div className="flex justify-center bg-[#fdfbf7] px-4 py-5 sm:py-6">
          <a href="#book-demo" className="kid-cta-btn inline-flex rounded-full px-7 py-3.5 text-sm font-black uppercase tracking-wide min-h-[44px] sm:py-3">
            Book a Demo Class
          </a>
        </div>
        <CurriculumSection />
        <div className="flex justify-center bg-white px-4 py-5 sm:py-6">
          <a href="#book-demo" className="kid-cta-btn inline-flex rounded-full px-7 py-3.5 text-sm font-black uppercase tracking-wide min-h-[44px] sm:py-3">
            Book a Demo Class
          </a>
        </div>
        <StudentsCarousel />
        <EnrollmentProcess />
        <div className="flex justify-center bg-white px-4 py-5 sm:py-6">
          <a href="#book-demo" className="kid-cta-btn inline-flex rounded-full px-7 py-3.5 text-sm font-black uppercase tracking-wide min-h-[44px] sm:py-3">
            Book a Demo Class
          </a>
        </div>
        <ResearchSection />
        <FinalCta />
        <FaqSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
