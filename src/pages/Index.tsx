
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import ImpactSection from '@/components/ImpactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EducationalSection from '@/components/EducationalSection';
import AuthenticPhotosSection from '@/components/AuthenticPhotosSection';
import DynamicSocialSection from '@/components/DynamicSocialSection';
import HashnodeBlogSection from '@/components/HashnodeBlogSection';
import QuickStatsSection from '@/components/QuickStatsSection';
import PartnersSection from '@/components/PartnersSection';
import CallToActionSection from '@/components/CallToActionSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QuickStatsSection />
      <MissionSection />
      <AuthenticPhotosSection />
      <EducationalSection />
      <ImpactSection />
      <PartnersSection />
      <DynamicSocialSection />
      <HashnodeBlogSection />
      <ActivitiesSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default Index;
