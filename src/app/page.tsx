import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { StatsSection } from "@/components/landing/stats-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { CurriculumSection } from "@/components/landing/curriculum-section";
import { StudentsCarousel } from "@/components/landing/students-carousel";
import { ParentsReviews } from "@/components/landing/parents-reviews";
import { EnrollmentProcess } from "@/components/landing/enrollment-process";
import { ResearchSection } from "@/components/landing/research-section";
import { FaqSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <FeaturesSection />
        <CurriculumSection />
        <StudentsCarousel />
        <ParentsReviews />
        <EnrollmentProcess />
        <ResearchSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
