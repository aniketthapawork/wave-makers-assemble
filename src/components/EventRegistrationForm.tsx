
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Calendar, MapPin, Users, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EventRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  emergencyContact: string;
  emergencyPhone: string;
  dietaryRestrictions: string;
  tshirtSize: string;
  transportation: string;
  experience: string;
  groupSize: string;
  specialNeeds: string;
}

interface EventRegistrationFormProps {
  event?: {
    title: string;
    date: string;
    time: string;
    location: string;
    spotsLeft: string;
  };
}

const EventRegistrationForm = ({ event }: EventRegistrationFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<EventRegistrationData>();

  const defaultEvent = {
    title: "Beach Yoga + Cleanup",
    date: "June 7, 2025",
    time: "6:00 AM - 9:00 AM",
    location: "Juhu Beach, Mumbai",
    spotsLeft: "45 spots left"
  };

  const eventDetails = event || defaultEvent;

  const onSubmit = async (data: EventRegistrationData) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Event registration:', data);
    
    toast({
      title: "Registration Successful! 🎉",
      description: `You're registered for ${eventDetails.title}. We'll send you details soon!`,
    });
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
        <CardContent className="p-12 text-center">
          <CheckCircle className="h-20 w-20 text-emerald-600 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">See You There! 🌊</h3>
          <p className="text-lg text-gray-600 mb-8">
            You're all set for <strong>{eventDetails.title}</strong>! We'll send you event details and updates via email.
          </p>
          
          <div className="bg-white/50 rounded-xl p-6 mb-8">
            <h4 className="font-semibold text-gray-900 mb-4">Event Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-emerald-600" />
                <span>{eventDetails.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-emerald-600" />
                <span>{eventDetails.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <span>{eventDetails.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-emerald-600" />
                <span>{eventDetails.spotsLeft}</span>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline" 
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
          >
            Register for Another Event
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
            <Calendar className="h-8 w-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
          Join Our Event
        </CardTitle>
        
        {/* Event Details Card */}
        <div className="bg-white/50 rounded-xl p-6 mb-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{eventDetails.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-emerald-600" />
              <span>{eventDetails.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-emerald-600" />
              <span>{eventDetails.time}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-emerald-600" />
              <span>{eventDetails.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-red-500" />
              <span className="text-red-600 font-medium">{eventDetails.spotsLeft}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-lg">
          Fill out the form below to secure your spot at this amazing event!
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
                <Label htmlFor="age">Age Group *</Label>
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
                <Label htmlFor="tshirtSize">T-shirt Size (for event merchandise)</Label>
                <select 
                  id="tshirtSize"
                  {...register('tshirtSize')}
                  className="w-full px-3 py-2 border border-emerald-200 rounded-md focus:outline-none focus:border-emerald-500"
                >
                  <option value="">Select size</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
            </div>
          </div>

          {/* Event Specific Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Badge className="bg-blue-100 text-blue-800">Event Details</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="transportation">How will you reach the venue? *</Label>
                <select 
                  id="transportation"
                  {...register('transportation', { required: 'Transportation method is required' })}
                  className="w-full px-3 py-2 border border-emerald-200 rounded-md focus:outline-none focus:border-emerald-500"
                >
                  <option value="">Select transportation</option>
                  <option value="own-vehicle">Own Vehicle</option>
                  <option value="public-transport">Public Transport</option>
                  <option value="shared-transport">Shared Transport</option>
                  <option value="need-assistance">Need Transportation Assistance</option>
                </select>
                {errors.transportation && (
                  <p className="text-sm text-red-600">{errors.transportation.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="groupSize">Group Size</Label>
                <select 
                  id="groupSize"
                  {...register('groupSize')}
                  className="w-full px-3 py-2 border border-emerald-200 rounded-md focus:outline-none focus:border-emerald-500"
                >
                  <option value="individual">Just me</option>
                  <option value="2-3">2-3 people</option>
                  <option value="4-5">4-5 people</option>
                  <option value="6+">6+ people</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Previous cleanup/volunteer experience</Label>
              <Textarea 
                id="experience"
                {...register('experience')}
                className="border-emerald-200 focus:border-emerald-500"
                placeholder="Tell us about your previous experience with cleanup activities or volunteering..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dietaryRestrictions">Dietary restrictions/allergies (if any)</Label>
              <Input 
                id="dietaryRestrictions"
                {...register('dietaryRestrictions')}
                className="border-emerald-200 focus:border-emerald-500"
                placeholder="Please mention any dietary restrictions or allergies"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialNeeds">Special needs or accessibility requirements</Label>
              <Textarea 
                id="specialNeeds"
                {...register('specialNeeds')}
                className="border-emerald-200 focus:border-emerald-500"
                placeholder="Let us know if you have any special needs or accessibility requirements..."
                rows={2}
              />
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Badge className="bg-red-100 text-red-800">Emergency Contact</Badge>
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
                  Confirming Registration...
                </>
              ) : (
                <>
                  <Calendar className="mr-2 h-5 w-5" />
                  Confirm My Spot
                </>
              )}
            </Button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              By registering, you agree to our event guidelines and safety protocols.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EventRegistrationForm;
