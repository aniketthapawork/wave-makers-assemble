
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import ImpactSection from '@/components/ImpactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EducationalSection from '@/components/EducationalSection';
import AuthenticPhotosSection from '@/components/AuthenticPhotosSection';
import DynamicSocialSection from '@/components/DynamicSocialSection';
import HashnodeBlogSection from '@/components/HashnodeBlogSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <AuthenticPhotosSection />
      <EducationalSection />
      <ImpactSection />
      <DynamicSocialSection />
      <HashnodeBlogSection />
      <ActivitiesSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
