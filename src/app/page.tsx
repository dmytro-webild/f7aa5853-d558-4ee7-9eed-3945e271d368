"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { MousePointer, Rocket, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumSizeLargeTitles"
        background="none"
        cardStyle="gradient-bordered"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "About",          id: "about"},
        {
          name: "Features",          id: "features"},
        {
          name: "Proof",          id: "social-proof"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Apex Digital"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "gradient-bars"}}
      title="Scaling Businesses Through Custom Web & Marketing"
      description="We build high-converting websites and data-driven marketing campaigns that turn visitors into loyal customers. Let us scale your digital presence today."
      testimonials={[
        {
          name: "Alice M.",          handle: "@alice",          testimonial: "The best web development team I've ever worked with. Results are immediate.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-senior-businessman-with-arms-crossed_1262-1751.jpg"},
        {
          name: "Bob D.",          handle: "@bob",          testimonial: "Marketing strategies that actually yield ROI. Highly recommended.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/female-logo-designer-working-her-office-graphic-tablet_23-2149119226.jpg"},
        {
          name: "Charlie R.",          handle: "@charlie",          testimonial: "Modern, sleek design and professional service. A true partner in growth.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-asian-girl-barista-working-cafe-holding-cup-tea-giving-client-their-order_1258-199281.jpg"},
        {
          name: "Diana K.",          handle: "@diana",          testimonial: "Exceptional development skills and data-driven insight. We saw 2x leads.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/data-center-admins-monitoring-artificial-intelligence-llm-visualization_482257-130422.jpg"},
        {
          name: "Ethan L.",          handle: "@ethan",          testimonial: "They transformed our online store into a growth engine. Fantastic work.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-programmer-indoors_23-2149101154.jpg"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/hands-using-tablet-screen-showing-statistics-business-data_53876-42762.jpg"
      imageAlt="tech dashboard dark mode"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/content-senior-businessman-with-arms-crossed_1262-1790.jpg",          alt: "Content Senior Businessman with Arms Crossed"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5399.jpg",          alt: "Portrait of a smiling blonde businesswoman formal dressed. Isolated on a dark textured background."},
        {
          src: "http://img.b2bpic.net/free-photo/successful-senior-businessman-standing-window_1262-3120.jpg",          alt: "Successful senior businessman standing at window"},
        {
          src: "http://img.b2bpic.net/free-photo/glasses-smiling-arm-horizontal-front_1262-2739.jpg",          alt: "glasses smiling arm horizontal front"},
        {
          src: "http://img.b2bpic.net/free-photo/interior-designer-working-out-office_52683-112924.jpg",          alt: "Interior designer working out of the office"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Performance Driven"},
        {
          type: "text",          text: "Scalable Solutions"},
        {
          type: "text",          text: "Data Optimized"},
        {
          type: "text",          text: "Modern Web Tech"},
        {
          type: "text",          text: "Marketing Excellence"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Expertise Where Tech Meets Creative"
      description="We combine rigorous development standards with intuitive marketing strategies to ensure your business doesn't just launch, but succeeds in competitive markets."
      bulletPoints={[
        {
          title: "Custom Development",          description: "High-performance web apps built for scale."},
        {
          title: "Conversion Marketing",          description: "Data-backed campaigns focused on growth."},
        {
          title: "Strategic SEO",          description: "Climb rankings with optimized architecture."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-doing-it-support-job-from-home-walking-around-personal-office-with-laptop_482257-92977.jpg"
      mediaAnimation="blur-reveal"
      imageAlt="developer working dark office"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Advanced Digital Solutions"
      description="From frontend performance to backend scalability, we ensure every interaction works for your goals."
      accordionItems={[
        {
          id: "1",          title: "Responsive Design",          content: "Mobile-first layouts ensuring a perfect experience on every device."},
        {
          id: "2",          title: "Analytics Integration",          content: "Full tracking of every user click and conversion point."},
        {
          id: "3",          title: "SEO Optimized",          content: "Building architecture that search engines prioritize and users find easily."},
      ]}
      imageSrc="http://img.b2bpic.net/free-vector/futuristic-modern-web-fiber-cable-background-wavy-style-vector_1017-48463.jpg"
      mediaAnimation="slide-up"
      imageAlt="digital growth concept lines"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",          value: "150%",          title: "Average Traffic Increase",          description: "Year-over-year growth across clients.",          icon: TrendingUp,
        },
        {
          id: "2",          value: "45%",          title: "Conversion Uplift",          description: "Improved checkout performance.",          icon: MousePointer,
        },
        {
          id: "3",          value: "200+",          title: "Projects Delivered",          description: "Scaling products globally.",          icon: Rocket,
        },
      ]}
      title="Data That Drives Growth"
      description="Proven performance metrics from our latest partnerships."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Alpha Corp",        "Beta Tech",        "Gamma Ventures",        "Delta Analytics",        "Epsilon Systems",        "Zeta Growth",        "Theta Media"]}
      title="Trusted by Leading Brands"
      description="We are proud partners with industry leaders across tech, finance, and lifestyle sectors."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          title: "Excellent Service",          quote: "Apex Digital changed how we look at online acquisition.",          name: "Sarah Miller",          role: "CEO",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-successful-middle-aged-business-leader_1262-5690.jpg"},
        {
          id: "2",          title: "Data Driven",          quote: "The metrics speak for themselves. We are growing fast.",          name: "James Chen",          role: "CMO",          imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-business-coach-posing-training-room_74855-3026.jpg"},
        {
          id: "3",          title: "Creative Team",          quote: "Their design process is collaborative and insightful.",          name: "Elena Rossi",          role: "Product Lead",          imageSrc: "http://img.b2bpic.net/free-photo/pensive-tailor-sitting-table-with-hand-chin-sewing-workshop_613910-5306.jpg"},
        {
          id: "4",          title: "Scalable Code",          quote: "Reliable and high-quality development every time.",          name: "Marcus Thorne",          role: "CTO",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg"},
        {
          id: "5",          title: "Best ROI",          quote: "Professional marketing strategies that show results.",          name: "Jessica Lee",          role: "Director",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-holding-coffee-cup-looking-away-with-laptop-table_23-2147859788.jpg"},
      ]}
      title="Client Success Stories"
      description="Don't just take our word for it. Hear from our partners about the impact we've made."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "What is your typical project timeline?",          content: "Projects usually range from 4 to 12 weeks depending on complexity."},
        {
          id: "q2",          title: "Do you offer marketing support?",          content: "Yes, we provide end-to-end management, SEO, and paid media."},
        {
          id: "q3",          title: "Can you handle existing projects?",          content: "We offer code auditing and optimization services for current sites."},
      ]}
      sideTitle="Common Questions"
      sideDescription="Everything you need to know about our process, pricing, and project timelines."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      tag="Get Started"
      title="Ready to Scale Your Digital Impact?"
      description="Let's build something remarkable together. Contact us for a consultation today."
      buttons={[
        {
          text: "Contact Us",          href: "mailto:hello@example.com"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Development",              href: "#"},
            {
              label: "Marketing",              href: "#"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About",              href: "#"},
            {
              label: "Contact",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy",              href: "#"},
            {
              label: "Terms",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Apex Digital"
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}