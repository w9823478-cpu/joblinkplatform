/**
 * 🎯 CENTRAL APP CONFIGURATION
 * 
 * All brand names, labels, feature flags, and system text
 * are configured here. NO HARD-CODED TEXT IN COMPONENTS!
 */

export const appConfig = {
  // 🏢 Brand Configuration
  brand: {
    name: 'BuildHub',
    tagline: 'Users defined by what they build',
    logo: '/logo.png',
    favicon: '/favicon.ico',
    primaryColor: '#1B4D8C',
    accentColor: '#7FA8E0',
  },

  // 🎨 Theme & Design
  theme: {
    mode: 'light',
    colors: {
      brand: {
        50: '#EAF1FB',
        100: '#D6E4F7',
        300: '#7FA8E0',
        500: '#1B4D8C',
        600: '#143C70',
        700: '#0F2E57',
      },
    },
  },

  // 🧭 Navigation
  navigation: {
    mainNav: [
      { id: 'home', label: 'Home', icon: 'home' },
      { id: 'explore', label: 'Explore', icon: 'search' },
      { id: 'reels', label: 'Reels', icon: 'video' },
      { id: 'messages', label: 'Messages', icon: 'chat' },
      { id: 'notifications', label: 'Notifications', icon: 'bell' },
      { id: 'jobs', label: 'Jobs', icon: 'briefcase' },
      { id: 'profile', label: 'Profile', icon: 'user' },
    ],
  },

  // 👤 User Profile
  profile: {
    defaultTab: 'about',
    tabs: [
      { id: 'about', label: 'About' },
      { id: 'posts', label: 'Posts' },
      { id: 'projects', label: 'Projects' },
      { id: 'education', label: 'Education' },
      { id: 'experience', label: 'Experience' },
      { id: 'media', label: 'Media' },
    ],
  },

  // 📝 Posts
  posts: {
    types: [
      { id: 'text', label: 'Text' },
      { id: 'image', label: 'Image' },
      { id: 'video', label: 'Video' },
      { id: 'project', label: 'Project' },
      { id: 'job', label: 'Job' },
    ],
    maxCharacters: 500,
    attachmentMaxSize: 52428800,
  },

  // 🎬 Reels
  reels: {
    name: 'Reels',
    maxDuration: 300,
  },

  // 🏗️ Projects
  projects: {
    types: [
      { id: 'startup', label: 'Startup' },
      { id: 'saas', label: 'SaaS' },
      { id: 'opensource', label: 'Open Source' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'gameserver', label: 'Game Server' },
    ],
    statuses: [
      { id: 'idea', label: 'Idea' },
      { id: 'building', label: 'Building' },
      { id: 'beta', label: 'Beta' },
      { id: 'launched', label: 'Launched' },
      { id: 'archived', label: 'Archived' },
    ],
  },

  // 💼 Jobs
  jobs: {
    types: [
      { id: 'fulltime', label: 'Full-time' },
      { id: 'parttime', label: 'Part-time' },
      { id: 'contract', label: 'Contract' },
      { id: 'freelance', label: 'Freelance' },
      { id: 'internship', label: 'Internship' },
    ],
    levels: [
      { id: 'entry', label: 'Entry Level' },
      { id: 'mid', label: 'Mid Level' },
      { id: 'senior', label: 'Senior' },
      { id: 'lead', label: 'Lead' },
      { id: 'executive', label: 'Executive' },
    ],
  },

  // 🔐 Auth
  auth: {
    providers: ['google', 'github', 'email'],
  },

  // 📱 API
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api',
    wsUrl: process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:3001',
  },

  // 🎯 Feature Flags
  features: {
    postsEnabled: true,
    reelsEnabled: true,
    projectsEnabled: true,
    jobsEnabled: true,
    messagingEnabled: true,
  },
};
