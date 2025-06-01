
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Heart, Users, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  city: string;
  experience: string;
  availability: string[];
  interests: string[];
  motivation: string;
  emergencyContact: string;
  emergencyPhone: string;
}

const VolunteerForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<VolunteerFormData>();

  const availabilityOptions = [
    'Weekends only',
    'Weekdays after 6 PM',
    'Flexible schedule',
    'Monthly commitment',
    'Special events only'
  ];

  const interestOptions = [
    'Beach cleanups',
    'Educational workshops',
    'Mangrove plantation',
    'Social media advocacy',
    'Event organization',
    'Research & documentation'
  ];

  const onSubmit = async (data: VolunteerFormData) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Volunteer registration:', data);
    
    toast({
      title: "Registration Successful! 🎉",
      description: "Welcome to the OceanOwe family! We'll contact you within 48 hours.",
    });
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
        <CardContent className="p-12 text-center">
          <CheckCircle className="h-20 w-20 text-emerald-600 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Welcome to OceanOwe! 🌊</h3>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for joining our mission to protect India's coastlines. Our team will reach out to you within 48 hours with your next steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm font-medium">Make Impact</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <p className="text-sm font-medium">Meet Like-minded People</p>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="text-sm font-medium">Flexible Scheduling</p>
            </div>
          </div>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline" 
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
          >
            Register Another Volunteer
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto glass-morphism border-emerald-200">
      <CardHeader className="text-center pb-8">
        <div className="mx-auto mb-4">
          <div className="w-16 h-16 nature-gradient rounded-full flex items-center justify-center">
            <Heart className="h-8 w-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
          Become a Volunteer
        </CardTitle>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Join thousands of passionate individuals making a real difference to our oceans. 
          Every action counts, every volunteer matters.
        </p>
      </CardHeader>
      
      <CardContent className="px-8 pb-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Badge className="bg-emerald-100 text-emerald-800">Personal Information</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input 
                  id="firstName"
                  {...register('firstName', { required: 'First name is required' })}
                  className="border-emerald-200 focus:border-emerald-500"
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-sm text-red-600">{errors.firstName.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input 
                  id="lastName"
                  {...register('lastName', { required: 'Last name is required' })}
                  className="border-emerald-200 focus:border-emerald-500"
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-sm text-red-600">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email"
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="border-emerald-200 focus:border-emerald-500"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input 
                  id="phone"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="border-emerald-200 focus:border-emerald-500"
                  placeholder="+91 9876543210"
                />
                {errors.phone && (
                  <p className="text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="age">Age *</Label>
                <select 
                  id="age"
                  {...register('age', { required: 'Age is required' })}
                  className="w-full px-3 py-2 border border-emerald-200 rounded-md focus:outline-none focus:border-emerald-500"
                >
                  <option value="">Select your age group</option>
                  <option value="18-25">18-25 years</option>
                  <option value="26-35">26-35 years</option>
                  <option value="36-45">36-45 years</option>
                  <option value="46-55">46-55 years</option>
                  <option value="55+">55+ years</option>
                </select>
                {errors.age && (
                  <p className="text-sm text-red-600">{errors.age.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input 
                  id="city"
                  {...register('city', { required: 'City is required' })}
                  className="border-emerald-200 focus:border-emerald-500"
                  placeholder="Mumbai, Delhi, Chennai..."
                />
                {errors.city && (
                  <p className="text-sm text-red-600">{errors.city.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Volunteer Preferences */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Badge className="bg-blue-100 text-blue-800">Volunteer Preferences</Badge>
            </div>
            
            <div className="space-y-4">
              <Label>Availability (select all that apply) *</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {availabilityOptions.map((option) => (
                  <label key={option} className="flex items-center space-x-3 p-3 border border-emerald-200 rounded-lg hover:bg-emerald-50 cursor-pointer">
                    <input
                      type="checkbox"
                      value={option}
                      {...register('availability', { required: 'Please select at least one availability option' })}
                      className="text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
              {errors.availability && (
                <p className="text-sm text-red-600">{errors.availability.message}</p>
              )}
            </div>

            <div className="space-y-4">
              <Label>Areas of Interest (select all that apply) *</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {interestOptions.map((option) => (
                  <label key={option} className="flex items-center space-x-3 p-3 border border-emerald-200 rounded-lg hover:bg-emerald-50 cursor-pointer">
                    <input
                      type="checkbox"
                      value={option}
                      {...register('interests', { required: 'Please select at least one area of interest' })}
                      className="text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
              {errors.interests && (
                <p className="text-sm text-red-600">{errors.interests.message}</p>
              )}
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Badge className="bg-purple-100 text-purple-800">Additional Information</Badge>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="experience">Previous volunteering experience (optional)</Label>
              <Textarea 
                id="experience"
                {...register('experience')}
                className="border-emerald-200 focus:border-emerald-500"
                placeholder="Tell us about any previous volunteering experience you have..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="motivation">Why do you want to volunteer with OceanOwe? *</Label>
              <Textarea 
                id="motivation"
                {...register('motivation', { required: 'Please share your motivation' })}
                className="border-emerald-200 focus:border-emerald-500"
                placeholder="Share what motivates you to join our ocean conservation mission..."
                rows={4}
              />
              {errors.motivation && (
                <p className="text-sm text-red-600">{errors.motivation.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                <Input 
                  id="emergencyContact"
                  {...register('emergencyContact', { required: 'Emergency contact is required' })}
                  className="border-emerald-200 focus:border-emerald-500"
                  placeholder="Full name"
                />
                {errors.emergencyContact && (
                  <p className="text-sm text-red-600">{errors.emergencyContact.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                <Input 
                  id="emergencyPhone"
                  {...register('emergencyPhone', { required: 'Emergency contact phone is required' })}
                  className="border-emerald-200 focus:border-emerald-500"
                  placeholder="+91 9876543210"
                />
                {errors.emergencyPhone && (
                  <p className="text-sm text-red-600">{errors.emergencyPhone.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-emerald-200">
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full nature-gradient text-white hover:opacity-90 py-4 text-lg font-semibold ripple-effect"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting Registration...
                </>
              ) : (
                <>
                  <Heart className="mr-2 h-5 w-5" />
                  Join OceanOwe Family
                </>
              )}
            </Button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              By registering, you agree to our volunteer guidelines and safety protocols.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default VolunteerForm;
