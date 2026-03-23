# PhyFix Teaching Platform

## Overview

PhyFix is a multi-teacher tutoring platform focused on Math, Physics, Chemistry and Biology education across international curricula (IB, IGCSE, AP, A-Level, CBSE, ICSE, Edexcel, GCSE, MYP, SAT). The platform allows teachers to create and manage their profiles while students can browse, filter, and contact tutors directly via WhatsApp or email. Key features include teacher profile management, admin approval workflow for new teachers, zero commission model, free demo sessions, and tier-based pricing (School $10/hr, College Aspirant $15/hr, College $20/hr, Beyond College $25/hr).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for page transitions and UI effects
- **Fonts**: Inter (body) and Outfit (display headings)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints under `/api/*`
- **Build Tool**: Vite for frontend, esbuild for server bundling

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for shared types between client and server
- **Migrations**: Drizzle Kit with `drizzle-kit push` command

### Authentication
- **Provider**: Replit Auth (OpenID Connect)
- **Session Storage**: PostgreSQL-backed sessions via connect-pg-simple
- **Pattern**: Passport.js with custom Replit OIDC strategy

### File Storage
- **Service**: Google Cloud Storage via Replit's object storage integration
- **Upload Pattern**: Presigned URL workflow (request URL from backend, upload directly to storage)
- **Routes**: `/api/uploads/request-url` for getting upload URLs, `/objects/*` for serving files

### Key Data Models
- **Teachers**: Core entity with profile info, subjects, boards, contact details, and admin approval status
- **Users**: Auth users table linked to teacher profiles via `userId`
- **Sessions**: PostgreSQL session storage for authentication

### API Structure
- Routes defined in `shared/routes.ts` with Zod schemas for type safety
- Teacher endpoints: list, get, create, update, toggle active status
- Protected routes use `isAuthenticated` middleware

## External Dependencies

### Database
- PostgreSQL (required, connection via `DATABASE_URL` environment variable)

### Authentication
- Replit Auth OIDC provider
- Requires `ISSUER_URL`, `REPL_ID`, and `SESSION_SECRET` environment variables

### File Storage
- Google Cloud Storage via Replit sidecar (connects to `http://127.0.0.1:1106`)
- `PUBLIC_OBJECT_SEARCH_PATHS` environment variable for public file access

### Third-Party Services
- WhatsApp deep links for teacher contact (client-side only)
- Gmail API via Replit's gmail connector for email notifications

### Email Notifications
- **Service**: Gmail API via Replit's google-mail connector
- **Implementation**: `server/email.ts`
- **Notifications sent**:
  - Admin notification when new teacher registers (to ashishpachar27@gmail.com)
  - Teacher notification when profile is approved
- **Admin Email**: ashishpachar27@gmail.com

### UI Components
- Full shadcn/ui component library (Radix UI primitives)
- Uppy for advanced file upload interface
- Lucide React and React Icons for iconography

### Board Resources Data
- **Location**: `client/src/data/boards.ts`
- **Purpose**: Centralized configuration for educational boards with official URLs and subject-wise resource links
- **Boards Included**: IB, IGCSE, A-Level, AP, CBSE, ICSE, Edexcel, GCSE, MYP, SAT
- **Usage**: Powers the "Official Exam Boards" section on the home page with floating logos and subject links

### Blog System
- **Data Location**: `client/src/data/blog.ts`
- **Pages**: `client/src/pages/Blog.tsx` (route: `/blog`) and `client/src/pages/BlogPost.tsx` (route: `/blog/:slug`)
- **Articles**: 10 expert articles on IB Physics, IGCSE Maths, A-Level Physics, AP Physics, CBSE vs ICSE, 1-on-1 tutoring, etc.
- **Features**: Category filter chips, full-text search, featured post, related articles, CTA in every post
- **How to add articles**: Edit `client/src/data/blog.ts` — add entries to the `blogPosts` array

### SEO Landing Pages
- `/ib-physics-tutor` → `client/src/pages/landing/IbPhysicsTutor.tsx`
- `/igcse-math-tutor` → `client/src/pages/landing/IgcseMathTutor.tsx`
- `/a-level-physics-tutor` → `client/src/pages/landing/ALevelPhysicsTutor.tsx`
- `/online-math-tutor` → `client/src/pages/landing/OnlineMathTutor.tsx`
- `/physics-classes` → `client/src/pages/landing/PhysicsClasses.tsx`
- `/maths-classes` → `client/src/pages/landing/MathsClasses.tsx`
- `/chemistry-classes` → `client/src/pages/landing/ChemistryClasses.tsx` (IB/IGCSE/A-Level/AP/CBSE/NEET)
- `/biology-classes` → `client/src/pages/landing/BiologyClasses.tsx` (IB/IGCSE/A-Level/AP/CBSE/NEET)
- `/english-classes` → `client/src/pages/landing/EnglishClasses.tsx` (IELTS/TOEFL/IB English/A-Level/ESL)
- `/cs-classes` → `client/src/pages/landing/CsClasses.tsx` (IB CS/IGCSE CS/AP CS/Python/Data Science)
- `/test-prep` → `client/src/pages/landing/TestPrep.tsx` (SAT/ACT/IELTS/TOEFL/GRE/GMAT/NEET/JEE)
- `/subjects` → `client/src/pages/Subjects.tsx` (Hub page listing all 20+ subjects with links)
- `/free-demo` → `client/src/pages/landing/FreeDemo.tsx`

### Programmable SEO System (Topic Pages)
- **Strategy**: Data-driven auto-generated topic pages targeting specific search queries like "IB Physics Mechanics tutor"
- **Data**: `client/src/data/topics.ts` — 32 topic entries across IB, IGCSE, A-Level, AP, CBSE for Physics and Mathematics
- **Page**: `client/src/pages/TopicPage.tsx` (route: `/topics/:slug`)
- **Schema Markup**: Each page injects BreadcrumbList + Course + FAQPage JSON-LD structured data dynamically
- **Internal Linking**: PhysicsClasses and MathsClasses landing pages link directly to topic pages
- **Sitemap**: All 32 topic URLs in `client/public/sitemap.xml` with priority 0.85
- **How to add topics**: Edit `client/src/data/topics.ts` — add a new `TopicEntry` with unique slug, then add the slug to `sitemap.xml`
- **Topic entry fields**: `slug`, `h1`, `subject`, `board`, `boardShort`, `topic`, `metaTitle`, `metaDescription`, `keywords`, `intro`, `subtopics[]`, `examTips[]`, `relatedSlugs[]`

### Per-Page SEO
- **Hook**: `client/src/hooks/use-seo.ts` — updates document title, meta description, keywords, OG tags, and canonical URL dynamically
- Used on: Blog listing, BlogPost, Contact, all landing pages

### Sticky Book Demo Button
- Appears as a floating center button after the user scrolls 300px down the page
- Desktop only (mobile uses WhatsApp button on bottom-right)
- Implemented in `client/src/components/Layout.tsx`

### Contact Page
- **Location**: `client/src/pages/Contact.tsx` (route: `/contact`)
- **Features**: WhatsApp card, email card, free demo card, contact form (name, email, subject, board, grade, message)
- **Form**: Client-side submission with success state (no backend needed — primary contact is WhatsApp)

### Resources Page
- **Data Location**: `client/src/data/resources.ts`
- **Page**: `client/src/pages/Resources.tsx` (route: `/resources`)
- **Purpose**: Curated library of 60+ free resources (past papers, syllabuses, formula sheets, study notes, practice questions) organized by board and subject
- **Boards Covered**: IB, IGCSE, A-Level, AP, CBSE, ICSE/ISC, Edexcel, GCSE, SAT, plus cross-board
- **Filters**: Board, Subject, Resource Type (sidebar + quick-filter chips); full-text search
- **Navigation**: Accessible from desktop nav, mobile menu, and footer Platform section
- **How to add resources**: Edit `client/src/data/resources.ts` — add entries to the `resources` array with `id`, `title`, `board`, `subject`, `type`, `url`, `description`, `isOfficial`, `isFree`

### About Page
- **Location**: `client/src/pages/About.tsx` (route: `/about`)
- **Content**: Founder bio (Ashish Pachar), PhyFix mission, core values (6 cards), journey timeline (2009–2025), curricula covered, CTA
- **Navigation**: Accessible from desktop nav, mobile menu, and footer

### Homepage Sections
- **Subjects We Cover**: 6-card grid — Physics, Mathematics, Chemistry, Biology, English, Computer Science
- **Student Testimonials**: 6 testimonial cards from students in UK, UAE, Singapore, Canada, USA, India
- **YouTube Channel Section**: Links to https://www.youtube.com/@phyfix
- **Final CTA Section**: WhatsApp demo booking + Browse Tutors buttons

### Interactive Games / Practice & Play
- **Data Location**: `client/src/data/games.ts`
- **Page**: `client/src/pages/Practice.tsx` (route: `/practice`)
- **Purpose**: Interactive quizzes organized by subject (Physics, Math, Chemistry, Biology) and topic
- **How to add games**: Edit `client/src/data/games.ts` — add entries to the `games` array inside each subject with `title`, `topic`, `url`, and `description`
- **Navigation**: Accessible from desktop nav, mobile menu, and footer under Platform section