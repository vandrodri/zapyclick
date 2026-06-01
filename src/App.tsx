/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { WhatIs } from './components/WhatIs';
import { BeforeAfter } from './components/BeforeAfter';
import { WhyItMatters } from './components/WhyItMatters';
import { ForWhom } from './components/ForWhom';
import { Investment } from './components/Investment';
import { Offers } from './components/Offers';
import { Differential } from './components/Differential';
import { Faq } from './components/Faq';
import { CtaSection, Footer } from './components/CtaFooter';

export default function App() {
  return (
    <main className="min-h-screen selection:bg-[#B68B5E33] selection:text-primary">
      <Header />
      <Hero />
      <Problem />
      <WhatIs />
      <BeforeAfter />
      <WhyItMatters />
      <ForWhom />
      <Investment />
      <Offers />
      <Differential />
      <Faq />
      <CtaSection />
      <Footer />
    </main>
  );
}

