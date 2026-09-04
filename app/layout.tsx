import type { Metadata } from 'next';
import './globals.css';
import { VigilProvider } from '@/lib/store';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StoryGuidedTour } from '@/components/story-guided-tour';
import { SosModal } from '@/components/sos-modal';
import { RecruitmentShowcaseModal } from '@/components/recruitment-showcase';

export const metadata: Metadata = {
  title: 'VIGIL — Always aware. Always with you.',
  description: 'AI-powered tourist safety intelligence platform connecting travelers, risk analysis, emergency response, and authority command centers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050508] text-zinc-100 min-h-screen flex flex-col font-sans selection:bg-brand-500/30 selection:text-brand-300 bg-radial-gradient">
        <VigilProvider>
          <StoryGuidedTour />
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
            {children}
          </main>
          <SosModal />
          <RecruitmentShowcaseModal />
          <Footer />
        </VigilProvider>
      </body>
    </html>
  );
}
