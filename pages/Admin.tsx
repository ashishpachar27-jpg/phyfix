import { useAuth } from "@/hooks/use-auth";
import { useAdminTeachers, useToggleTeacherActive, useDeleteTeacher, useIsAdmin } from "@/hooks/use-teachers";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Check, X, Trash2, ExternalLink, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "wouter";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Admin() {
  const { user } = useAuth();
  const { data: adminStatus, isLoading: isAdminLoading } = useIsAdmin();
  const { data: teachers, isLoading } = useAdminTeachers();
  const toggleMutation = useToggleTeacherActive();
  const deleteMutation = useDeleteTeacher();

  if (isLoading || isAdminLoading) {
    return <div className="p-12 text-center"><Loader2 className="animate-spin inline" /></div>;
  }

  if (!user) {
    return (
      <div className="p-12 text-center">
        <p className="text-lg mb-4">Please log in to access the admin dashboard.</p>
        <Button asChild>
          <a href="/api/login">Login</a>
        </Button>
      </div>
    );
  }

  if (!adminStatus?.isAdmin) {
    return (
      <div className="p-12 text-center">
        <p className="text-lg text-destructive">You do not have admin access.</p>
        <p className="text-muted-foreground mt-2">Only authorized administrators can access this page.</p>
      </div>
    );
  }

  const getPhotoUrl = (photoUrl: string | null) => {
    if (!photoUrl) return "";
    if (photoUrl.startsWith("http")) return photoUrl;
    return `/objects/${photoUrl}`;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage all tutor profiles</p>
        </div>
        <Badge variant="secondary" className="text-sm">
          {teachers?.length || 0} Total Tutors
        </Badge>
      </div>
      
      <div className="space-y-4">
        {teachers?.map((teacher: any) => (
          <Card key={teacher.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 gap-4">
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <Avatar className="w-14 h-14">
                    <AvatarImage src={getPhotoUrl(teacher.photoUrl)} />
                    <AvatarFallback className="text-lg">{teacher.name?.[0] || "?"}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Link href={`/teachers/${teacher.id}`} className="font-bold text-lg hover:underline">
                        {teacher.name}
                      </Link>
                      {teacher.teacherOnUrl && (
                        <a 
                          href={teacher.teacherOnUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{teacher.email}</p>
                    <div className="flex items-center gap-2 mt-1 text-sm">
                      {teacher.rating && (
                        <span className="flex items-center gap-1 text-amber-600">
                          <Star className="w-3 h-3 fill-current" />
                          {teacher.rating}
                        </span>
                      )}
                      {teacher.reviewCount > 0 && (
                        <span className="text-muted-foreground">({teacher.reviewCount} reviews)</span>
                      )}
                      <span className="text-muted-foreground">• {teacher.experienceYears} yrs exp</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                  <Badge variant={teacher.isActive ? "default" : "secondary"} className="shrink-0">
                    {teacher.isActive ? "Active" : "Pending"}
                  </Badge>
                  
                  <div className="flex gap-2">
                    {!teacher.isActive && (
                      <Button 
                        size="sm" 
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => toggleMutation.mutate({ id: teacher.id, isActive: true })}
                        disabled={toggleMutation.isPending}
                        data-testid={`button-approve-${teacher.id}`}
                      >
                        <Check className="w-4 h-4 mr-1" /> Approve
                      </Button>
                    )}
                    {teacher.isActive && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => toggleMutation.mutate({ id: teacher.id, isActive: false })}
                        disabled={toggleMutation.isPending}
                        data-testid={`button-deactivate-${teacher.id}`}
                      >
                        <X className="w-4 h-4 mr-1" /> Deactivate
                      </Button>
                    )}
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          disabled={deleteMutation.isPending}
                          data-testid={`button-delete-${teacher.id}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Tutor Profile</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete <strong>{teacher.name}</strong>'s profile? 
                            This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteMutation.mutate(teacher.id)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {(!teachers || teachers.length === 0) && (
          <div className="text-center py-12 text-muted-foreground">
            No tutors found in the system.
          </div>
        )}
      </div>
    </div>
  );
}
