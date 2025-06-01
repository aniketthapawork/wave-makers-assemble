
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import ImpactSection from '@/components/ImpactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import EducationalSection from '@/components/EducationalSection';
import AuthenticPhotosSection from '@/components/AuthenticPhotosSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <AuthenticPhotosSection />
      <EducationalSection />
      <ImpactSection />
      <SocialMediaSection />
      <ActivitiesSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
