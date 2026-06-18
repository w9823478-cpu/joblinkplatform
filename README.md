# 🚀 BuildHub - Social Career Platform

A production-ready hybrid of LinkedIn + Instagram + X + GitHub. **Users are defined by what they build, not job titles.**

## ✨ Features

- 👤 **User Profiles** with verification & skills
- 📝 **Social Feed** with posts, images, videos, PDFs
- 🎬 **Reels System** (vertical swipe feed)
- 🏗️ **Projects System** (startups, SaaS, open source)
- 💼 **Job System** with AI matching (0-100%)
- 💬 **Real-time Messaging**
- ⭐ **Reputation System**
- 🏢 **Company Profiles**
- 🤝 **Connection/Follow System**

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TailwindCSS, TypeScript
- **Backend**: Node.js, NestJS, WebSockets, Socket.io
- **Database**: PostgreSQL 15+
- **Auth**: JWT + OAuth 2.0 (Google, GitHub)
- **Realtime**: Socket.io
- **Storage**: AWS S3 (optional)

## 📦 Project Structure

```
joblinkplatform/
├── frontend/                 # Next.js application
│   ├── app/                 # App router pages
│   ├── components/          # Reusable UI components
│   ├── config/              # Application config (CENTRAL CONFIG!)
│   ├── lib/                 # Utilities & helpers
│   ├── styles/              # Global styles & tokens
│   ├── public/              # Static assets
│   └── package.json
├── backend/                  # NestJS API
│   ├── src/
│   │   ├── modules/         # Feature modules
│   │   ├── config/          # Configuration
│   │   ├── database/        # ORM & migrations
│   │   ├── common/          # Shared utilities
│   │   └── main.ts
│   ├── .env.example
│   └── package.json
├── database/                 # PostgreSQL setup
│   ├── migrations/          # SQL migrations
│   ├── seeds/               # Initial data
│   └── schema.sql           # Full schema
├── docker-compose.yml       # Docker setup
├── INSTALLATION.md          # Setup guide
├── DEPLOYMENT.md            # Deployment guide
├── .gitignore
└── package.json             # Root package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 15+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/w9823478-cpu/joblinkplatform.git
cd joblinkplatform

# See INSTALLATION.md for detailed setup
```

### Development

```bash
# Start everything with Docker
docker-compose up

# Or manually:

# Terminal 1: Backend
cd backend
npm install
cp .env.example .env
npm run dev

# Terminal 2: Frontend
cd frontend
npm install
cp .env.example .env.local
npm run dev

# Access:
# Frontend: http://localhost:3000
# Backend: http://localhost:3001
# API Docs: http://localhost:3001/api/docs
```

## 🎯 Configuration

All app configuration is **centralized** in:
```
frontend/config/app.config.ts
```

Update this single file to customize:
- Brand name & logo
- Navigation labels
- Profile tabs
- Job system settings
- Feature flags
- System text

## 🔑 Environment Variables

See `.env.example` files in backend and frontend folders.

## 📚 Documentation

- [INSTALLATION.md](./INSTALLATION.md) - Complete setup guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Production deployment

## 🎯 Key Concepts

### Config-Driven Architecture
No hardcoded text anywhere. Everything goes through `app.config.ts`. Change labels, add/remove features, update text in one place.

### Modular Backend
Each feature (Auth, Users, Posts, Jobs, etc.) is a self-contained module with controllers, services, and entities.

### Responsive Design
Matches the provided design. Works on desktop, tablet, and mobile.

## 🤝 Contributing

Please read our contributing guidelines before submitting PRs.

## 📄 License

MIT

## 💬 Support

For issues:
1. Check [INSTALLATION.md](./INSTALLATION.md) troubleshooting section
2. Check backend logs: `backend/logs/`
3. Check browser console: Browser DevTools
4. Open an issue on GitHub
