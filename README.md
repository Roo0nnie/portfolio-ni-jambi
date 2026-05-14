# M.A.K.A E-Portfolio System — UI/UX Blueprint + Improved Development Prompt

## Project Overview

Create a modern, responsive, animated web-based e-portfolio system for the:

**Bicol University, Gubat Campus**
**Bachelor of Secondary Education Major in Social Studies 1**
**National Service Training Program (Literacy Training Service)**

The system should follow the visual branding, colors, typography, and layout inspiration from the provided sample designs while improving the overall UI/UX into a more modern, interactive, and user-friendly experience.

The system should support:

* Responsive design
* Smooth animations and transitions
* Modern portfolio-style presentation
* Organized folder structure
* Reusable components
* Easy content replacement later
* Dummy data and temporary assets for now
* Clean scalable architecture

---

# Website Structure

## Main Website Layout

The website should contain:

### 1. Landing / Front Website (Single Page)

This is the main homepage composed of:

* Navigation Bar
* Hero Section
* Student Profile Section
* Preface Section

These sections should behave like a one-page scrolling landing page.

---

### 2. Separate Pages

Each of these should have its own dedicated page:

* Acknowledgement Page
* Kick Off Page
* Maka-Diyos Page
* Maka-Tao Page
* Maka-Kalikasan Page
* Maka-Bansa Page

Each page should:

* Have its own hero banner
* Follow the same theme/branding
* Include animations
* Support gallery sections
* Support text content
* Support cards/timeline/gallery layouts
* Be responsive and modern

---

# Design Direction

## Visual Theme

Use the uploaded designs as inspiration.

### Primary Theme Colors

Based on the sample design:

* Deep Maroon / Dark Red
* Gold / Metallic Yellow
* White
* Light Gray Background
* Black accents

### UI Style

Combine:

* Academic portfolio design
* Modern landing page aesthetic
* Elegant gold accents
* Soft shadows
* Large typography
* Card-based sections
* Clean spacing
* Smooth scrolling
* Animated transitions

---

# UI/UX Improvements

## Navigation Bar

### Requirements

* Sticky top navigation
* Transparent on top initially
* Changes background on scroll
* Smooth scroll to sections
* Mobile responsive hamburger menu
* Active section highlight
* Logo on left
* Navigation links on right

### Navigation Menu

* Home
* Student Profile
* Preface
* Acknowledgement
* Kick Off
* Maka-Diyos
* Maka-Tao
* Maka-Kalikasan
* Maka-Bansa

### Extra Features

* Hover underline animation
* Smooth fade transitions
* Mobile slide animation

---

# Hero Section

## Goal

Create a strong first impression.

### Layout

* Full viewport height
* Large M.A.K.A title
* Animated subtitle
* Background decorative shapes inspired by the sample
* Floating particles/light effects
* Group image showcase
* Scroll indicator animation

### Content

Use temporary content:

#### Title

M.A.K.A

#### Subtitle

Made to Aspire Kabataan in Adhering to the Filipino Core Values

#### Buttons

* Explore Portfolio
* View Student Profile

### Animation Ideas

* Fade in
* Text reveal animation
* Floating background elements
* Parallax scrolling
* Scale transitions

---

# Student Profile Section

## Layout

Two-column responsive layout:

### Left Side

* Student Information
* Labels and values
* Decorative cards

### Right Side

* Student picture
* Floating border effects
* Animated glow

### Information Fields

Use dummy data:

* Student Name
* Year/Course
* Committee
* MAKA Group
* Role
* Contact
* Skills

### UI Suggestions

* Glassmorphism cards
* Gold accent borders
* Animated hover cards
* Profile image animation

---

# Preface Section

## Layout

* Large heading
* Background image with overlay
* Readable content card
* Scroll reveal animation

### Features

* Text animation
* Section fade-in
* Highlight important keywords
* Responsive typography

### Optional Enhancements

* Typewriter effect
* Timeline introduction
* Animated decorative lines

---

# Separate Page Structure

Each page should follow a reusable layout system.

---

# Acknowledgement Page

## Suggested Sections

* Hero Banner
* Appreciation Message
* Officers/Teachers Cards
* Contributors Grid
* Thank You Section

### Animation

* Staggered card animations
* Fade up content
* Hover effects

---

# Kick Off Page

## Suggested Sections

* Event Introduction
* Timeline
* Photo Gallery
* Event Highlights
* Video Section Placeholder

### UI Features

* Interactive timeline
* Masonry gallery
* Modal image viewer

---

# Maka-Diyos Page

## Suggested Sections

* Introduction Banner
* Activities Showcase
* Reflection Section
* Gallery
* Quotes Section

### Visual Theme

* Calm elegant layout
* Gold light accents
* Soft animation

---

# Maka-Tao Page

## Suggested Sections

* Community Activities
* Team Collaboration
* Event Cards
* Student Participation

### Animation

* Sliding cards
* Hover expansion
* Scroll-triggered reveal

---

# Maka-Kalikasan Page

## Suggested Sections

* Environmental Activities
* Tree Planting
* Cleanup Drive
* Awareness Campaigns

### Design

* Nature-inspired accents
* Green mixed with gold/maroon
* Leaf/parallax animations

---

# Maka-Bansa Page

## Suggested Sections

* National Identity Activities
* Citizenship Awareness
* Leadership Activities
* Closing Reflection

### UI

* Patriotic styling
* Elegant modern layout
* Interactive sections

---

# Recommended Tech Stack

## Frontend

### Recommended

* Next.js 14+
* TypeScript
* Tailwind CSS
* Framer Motion
* ShadCN UI
* Lucide Icons

---

# Recommended Folder Structure

```txt
src/
│
├── app/
│   ├── page.tsx
│   ├── acknowledgement/
│   │   └── page.tsx
│   ├── kickoff/
│   │   └── page.tsx
│   ├── maka-diyos/
│   │   └── page.tsx
│   ├── maka-tao/
│   │   └── page.tsx
│   ├── maka-kalikasan/
│   │   └── page.tsx
│   ├── maka-bansa/
│   │   └── page.tsx
│   └── layout.tsx
│
├── components/
│   ├── navbar/
│   ├── hero/
│   ├── student-profile/
│   ├── preface/
│   ├── gallery/
│   ├── timeline/
│   ├── cards/
│   ├── animations/
│   └── ui/
│
├── data/
│   ├── student.ts
│   ├── preface.ts
│   ├── gallery.ts
│   └── events.ts
│
├── lib/
│   └── utils.ts
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── profile/
│   │   ├── gallery/
│   │   └── logos/
│   └── videos/
│
├── styles/
│   └── globals.css
│
└── types/
    └── index.ts
```

---

# Animation Requirements

Use Framer Motion.

## Required Animations

### Global

* Page transition animation
* Smooth scrolling
* Fade transitions
* Section reveal on scroll

### Hero

* Floating background elements
* Text reveal animation
* Parallax movement

### Cards

* Hover scale
* Shadow glow
* Fade up stagger animation

### Gallery

* Image zoom hover
* Lightbox animation
* Masonry transition

---

# Responsive Design Requirements

## Mobile First

Support:

* Mobile
* Tablet
* Desktop
* Large Screens

### Requirements

* Adaptive typography
* Flexible grid layouts
* Mobile navigation drawer
* Optimized images
* Smooth touch interaction

---

# Suggested Homepage Flow

```txt
Navbar
↓
Hero Section
↓
Student Profile
↓
Preface
↓
Footer
```

---

# Suggested Component Architecture

## Reusable Components

Create reusable:

* SectionHeader
* AnimatedCard
* HeroBanner
* PageContainer
* GalleryGrid
* TimelineCard
* FloatingShapes
* MotionWrapper
* GoldButton
* ProfileCard

---

# Content Management

For now:

* Use dummy text
* Use placeholder images
* Use temporary gallery assets
* Use JSON or TypeScript mock data

Later:

* Easily replace images
* Easily replace content
* Easily add new pages

---

# Typography Recommendation

## Headings

Use elegant serif font:

* Cinzel
* Playfair Display

## Body

Use clean readable font:

* Poppins
* Inter

---

# Footer

## Include

* School name
* Project title
* Social links placeholder
* Copyright
* Quick links

---

# Improved Development Prompt

## Final Prompt

You are a senior frontend engineer, UI/UX designer, and Next.js architect.

Create a modern, responsive, animated e-portfolio website system for the M.A.K.A project of Bicol University Gubat Campus.

The system must follow the visual branding and theme from the provided sample images while significantly improving the UI/UX into a modern academic portfolio website.

Use:

* Next.js App Router
* TypeScript
* Tailwind CSS
* Framer Motion
* ShadCN UI
* Lucide React Icons

The website structure should include:

### Main Landing Page (Single Page Scroll)

This page should contain:

* Sticky Navigation Bar
* Hero Section
* Student Profile Section
* Preface Section

The navigation bar must remain visible at the top and smoothly scroll to sections.

---

### Separate Pages

Create dedicated pages for:

* Acknowledgement
* Kick Off
* Maka-Diyos
* Maka-Tao
* Maka-Kalikasan
* Maka-Bansa

Each page should:

* Have a unique hero banner
* Follow the same branding/theme
* Include animations
* Support image galleries
* Use responsive layouts
* Have reusable components

---

### UI/UX Requirements

* Elegant academic portfolio design
* Modern card-based layouts
* Responsive on all devices
* Smooth scrolling
* Scroll-triggered animations
* Hover animations
* Page transitions
* Gold and maroon branding
* Decorative corner elements inspired by the sample
* Glassmorphism effects where appropriate
* Strong typography hierarchy
* Spacious layouts

---

### Hero Section Requirements

* Full-screen height
* Animated M.A.K.A title
* Subtitle:
  “Made to Aspire Kabataan in Adhering to the Filipino Core Values”
* Decorative background elements
* Group image showcase
* CTA buttons
* Floating animation effects

---

### Student Profile Section

Create a modern student profile card with:

* Student image
* Student information
* Animated profile card
* Responsive two-column layout
* Gold accent design

Use temporary placeholder data and images.

---

### Preface Section

Create a modern readable section with:

* Background image overlay
* Animated text reveal
* Elegant typography
* Responsive content layout

---

### Technical Requirements

* Proper folder structure
* Reusable components
* Clean code architecture
* Type-safe TypeScript code
* Modular styling
* Optimized image handling
* Scalable page structure

---

### Folder Structure

Use a clean scalable folder structure with:

* app/
* components/
* data/
* public/images/
* styles/
* lib/
* types/

---

### Animation Requirements

Use Framer Motion for:

* Fade animations
* Scroll reveal
* Floating effects
* Hover interactions
* Page transitions
* Staggered card animations

---

### Important

For now:

* Use dummy data
* Use placeholder images
* Use temporary gallery images
* Make content easy to replace later

Focus heavily on:

* UI/UX quality
* Clean modern layout
* Animation smoothness
* Responsive behavior
* Maintainable architecture
* Professional academic portfolio appearance
#   p o r t f o l i o - n i - j a m b i  
 