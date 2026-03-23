import { useAuth } from "@/hooks/use-auth";
import { useMyTeacherProfile } from "@/hooks/use-teachers";
import { TeacherForm } from "@/components/TeacherForm";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Dashboard() {
  const { user, isLoading: isAuthLoading } = useAuth();
  const { data: profile, isLoading: isProfileLoading } = useMyTeacherProfile();

  if (isAuthLoading || isProfileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    window.location.href = "/api/login";
    return null;
  }

  return (
    <div className="min-h-screen bg-muted/10 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-2">Teacher Dashboard</h1>
        <p className="text-muted-foreground mb-8">Manage your profile and settings.</p>

        {profile ? (
          <div className="space-y-6">
            {!profile.isActive && (
              <Alert variant="destructive" className="bg-amber-50 border-amber-200 text-amber-800">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <AlertTitle>Profile Under Review</AlertTitle>
                <AlertDescription>
                  Your profile is currently waiting for admin approval. It is not visible to students yet.
                </AlertDescription>
              </Alert>
            )}
            
            <Card>
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
                <CardDescription>Update your information to attract more students.</CardDescription>
              </CardHeader>
              <CardContent>
                <TeacherForm initialData={profile} isEditing />
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card className="border-primary/20 shadow-lg shadow-primary/5">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">Create Your Teaching Profile</CardTitle>
              <CardDescription>
                Join our community of expert educators. Fill out the form below to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <TeacherForm 
                initialData={{
                  name: `${user.firstName} ${user.lastName}`.trim(),
                  email: user.email || "",
                  bio: "",
                  photoUrl: user.profileImageUrl ? user.profileImageUrl.split('/').pop() : "", // Rough attempt to use auth image if suitable
                  videoUrl: "",
                  whatsappNumber: "",
                  experienceYears: 0,
                  charges: "",
                  subjects: [],
                  boards: [],
                  qualifications: [],
                }} 
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
