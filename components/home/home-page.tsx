'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useUserInfo } from '../../hooks/useUserInfo';
import '../../styles/home-page.css';
import { LocalizationBanner } from './header/localization-banner';
import Header from './header/header';
import { HeroSection } from './hero-section/hero-section';
import { Pricing } from './pricing/pricing';
import { HomePageBackground } from '../gradients/home-page-background';
import { Footer } from './footer/footer';

export function HomePage() {
  const supabase = createClient();
  const { user } = useUserInfo(supabase);
  const [country, setCountry] = useState('US');

  return (
    <>
      <LocalizationBanner country={country} onCountryChange={setCountry} />
      <div>
        <HomePageBackground />
        <Header user={user} />
        <HeroSection />
        <Pricing country={country} />
        <Footer />
      </div>
    </>
  );
}
