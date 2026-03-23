import { useRoute } from "wouter";
import { useTeacher } from "@/hooks/use-teachers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, MessageCircle, Clock, BookOpen, Award, CheckCircle, Star, ExternalLink } from "lucide-react";
import NotFound from "./not-found";

export default function TeacherProfile() {
  const [match, params] = useRoute("/teachers/:id");
  const id = params?.id ? parseInt(params.id) : 0;
  const { data: teacher, isLoading } = useTeacher(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!teacher) return <NotFound />;

  const handleWhatsApp = () => {
    const contactNumber = teacher.whatsappNumber || "8684901516";
    const message = `Hi ${teacher.name}, I found your profile on PhyFix and would like to inquire about tuition.`;
    const url = `https://wa.me/${contactNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-muted/10 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="bg-primary/10 h-32 w-full absolute top-0 z-0" />
              <CardContent className="pt-16 pb-6 px-6 relative z-10 flex flex-col items-center text-center">
                <Avatar className="w-32 h-32 border-4 border-background shadow-xl mb-4">
                  {teacher.photoUrl ? (
                    <AvatarImage src={teacher.photoUrl.startsWith('http') ? teacher.photoUrl : `/objects/${teacher.photoUrl}`} className="object-cover" />
                  ) : (
                    <AvatarFallback className="text-4xl bg-primary/20 text-primary">
                      {teacher.name.charAt(0)}
                    </AvatarFallback>
                  )}
                </Avatar>
                
                <h1 className="text-2xl font-bold font-display mb-1">{teacher.name}</h1>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold">{teacher.rating}</span>
                  <span className="text-muted-foreground text-sm">({teacher.reviewCount} reviews)</span>
                </div>
                <p className="text-muted-foreground mb-4">{teacher.experienceYears} Years Experience</p>
                
                <div className="w-full space-y-3">
                  <Button onClick={handleWhatsApp} className="w-full shadow-lg shadow-green-500/20 bg-green-600 hover:bg-green-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact via WhatsApp
                  </Button>
                  <p className="text-xs text-muted-foreground font-medium">
                    Contact: {teacher.whatsappNumber || "8684901516"}
                  </p>
                  {teacher.teacherOnUrl && (
                    <Button variant="outline" className="w-full" asChild>
                      <a href={teacher.teacherOnUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        TeacherOn Profile
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Hourly Rate
                  </span>
                  <span className="font-semibold">{teacher.charges}</span>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" /> Qualifications
                  </h4>
                  <ul className="space-y-1">
                    {teacher.qualifications?.map((qual, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold font-display mb-4">About Me</h2>
              <div className="prose prose-blue max-w-none text-muted-foreground bg-card p-6 rounded-2xl border shadow-sm">
                <p className="whitespace-pre-line leading-relaxed">{teacher.bio}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-display mb-4">Teaching Profile</h2>
              <div className="bg-card p-6 rounded-2xl border shadow-sm space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" /> Subjects
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {teacher.subjects?.map(subject => (
                      <Badge key={subject} className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 border-transparent">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" /> Boards Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {teacher.boards?.map(board => (
                      <Badge key={board} variant="outline" className="px-3 py-1">
                        {board}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {teacher.reviewCount && teacher.reviewCount > 0 && (
              <section className="bg-primary/5 p-8 rounded-3xl border-2 border-primary/10">
                <div className="flex flex-col items-center text-center gap-4">
                  <h2 className="text-2xl font-bold">Verified Student Reviews</h2>
                  <div className="flex items-center gap-3 bg-background px-6 py-4 rounded-2xl border shadow-sm">
                    <div className="flex">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <div className="text-left">
                      <span className="font-bold text-2xl">{teacher.rating}</span>
                      <p className="text-muted-foreground text-sm">{teacher.reviewCount} verified reviews</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground max-w-md">
                    Read authentic student reviews and feedback for {teacher.name} on their verified TeacherOn profile.
                  </p>
                  
                  {teacher.teacherOnUrl && (
                    <Button className="mt-2" asChild>
                      <a href={teacher.teacherOnUrl} target="_blank" rel="noopener noreferrer">
                        Read All Reviews on TeacherOn <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  )}
                </div>
              </section>
            )}

            {teacher.videoUrl && (
              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Demo Video</h2>
                <div className="bg-card p-1 rounded-2xl border shadow-sm overflow-hidden aspect-video relative">
                   {teacher.videoUrl.includes("youtube") || teacher.videoUrl.includes("youtu.be") ? (
                      <iframe 
                        className="w-full h-full rounded-xl"
                        src={teacher.videoUrl.replace("watch?v=", "embed/")} 
                        title="Demo Video" 
                        allowFullScreen
                      />
                   ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <a href={teacher.videoUrl} target="_blank" rel="noopener noreferrer">
                           <Button variant="outline">Watch Demo Video</Button>
                        </a>
                      </div>
                   )}
                </div>
              </section>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
