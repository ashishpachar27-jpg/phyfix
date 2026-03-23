import { useState } from "react";
import { useSeo } from "@/hooks/use-seo";
import { useTeachers } from "@/hooks/use-teachers";
import { TeacherCard } from "@/components/TeacherCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Loader2 } from "lucide-react";

export default function TeacherList() {
  useSeo({
    title: "Browse Expert Physics & Maths Tutors | PhyFix",
    description: "Browse PhyFix's verified expert tutors for Physics, Maths, Chemistry and Biology. Filter by subject, board, and rating. Free demo class available.",
    keywords: "find physics tutor, find maths tutor, online tutor for IB, IGCSE tutor online, AP tutor, CBSE online teacher",
    ogTitle: "Browse Expert Tutors — Physics, Maths, Chemistry, Biology | PhyFix",
    canonical: "https://phyfix.com/teachers",
  });
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("All");
  const [board, setBoard] = useState("All");

  const { data: teachers, isLoading } = useTeachers({ 
    search, 
    subject: subject === "All" ? undefined : subject,
    board: board === "All" ? undefined : board
  });

  const activeTeachers = teachers?.filter(t => t.isActive) || [];

  return (
    <div className="min-h-screen bg-muted/10 py-12">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold mb-4">Find Your Tutor</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our directory of expert Math & Physics tutors tailored to your curriculum.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card border rounded-2xl p-6 mb-12 shadow-sm">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by name or keyword..." 
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Subjects</SelectItem>
                <SelectItem value="Math">Math / Mathematics</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
                <SelectItem value="Biology">Biology</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="SAT Math">SAT Math</SelectItem>
                <SelectItem value="AP Calculus">AP Calculus</SelectItem>
                <SelectItem value="AP Physics">AP Physics</SelectItem>
                <SelectItem value="IB Physics">IB Physics</SelectItem>
                <SelectItem value="Linear Algebra">Linear Algebra</SelectItem>
                <SelectItem value="Calculus">Calculus</SelectItem>
                <SelectItem value="Python">Python</SelectItem>
              </SelectContent>
            </Select>
            <Select value={board} onValueChange={setBoard}>
              <SelectTrigger>
                <SelectValue placeholder="Board" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Boards</SelectItem>
                <SelectItem value="IB">IB (International Baccalaureate)</SelectItem>
                <SelectItem value="IGCSE">IGCSE</SelectItem>
                <SelectItem value="A-Level">A-Level</SelectItem>
                <SelectItem value="GCSE">GCSE</SelectItem>
                <SelectItem value="O Level">O Level</SelectItem>
                <SelectItem value="AP">AP (Advanced Placement)</SelectItem>
                <SelectItem value="MYP">MYP</SelectItem>
                <SelectItem value="Edexcel">Edexcel</SelectItem>
                <SelectItem value="Cambridge">Cambridge</SelectItem>
                <SelectItem value="CBSE">CBSE</SelectItem>
                <SelectItem value="ICSE">ICSE</SelectItem>
                <SelectItem value="ISC">ISC</SelectItem>
                <SelectItem value="JEE">JEE</SelectItem>
                <SelectItem value="NEET">NEET</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeTeachers.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </div>
            
            {activeTeachers.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg">No teachers found matching your criteria.</p>
                <Button variant="ghost" className="text-primary underline" onClick={() => { setSearch(""); setSubject("All"); setBoard("All"); }}>
                  Clear filters
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
