import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import LakeView from "@/components/LakeView";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import ErrorBoundary from "@/components/ErrorBoundary";

const Testimonials = React.lazy(() => import("@/components/Testimonials"));
const Location = React.lazy(() => import("@/components/Location"));
const Reservation = React.lazy(() => import("@/components/Reservation"));
const Footer = React.lazy(() => import("@/components/Footer"));

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <LakeView />
      <Gallery />
      <Events />
      <ErrorBoundary>
        <Suspense fallback={<div className="h-64 flex items-center justify-center text-muted-foreground">Loading sections...</div>}>
          <Testimonials />
          <Location />
          <Reservation />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
