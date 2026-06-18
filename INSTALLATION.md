# 📋 Installation & Setup Guide

## Prerequisites

- **Node.js 18+** (LTS recommended) - [Download](https://nodejs.org/)
- **PostgreSQL 15+** - [Download](https://www.postgresql.org/download/)
- **npm** or **yarn** (comes with Node.js)
- **Git**

## Step 1: Clone Repository

```bash
git clone https://github.com/w9823478-cpu/joblinkplatform.git
cd joblinkplatform
```

## Step 2: Database Setup

### 2.1 Install PostgreSQL

**macOS (Homebrew)**
```bash
brew install postgresql@15
brew services start postgresql@15
```

**Ubuntu/Debian**
```bash
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
sudo systemctl start postgresql
```

**Windows**
- Download from [postgresql.org](https://www.postgresql.org/download/windows/)
- Run installer and note the password you set

**Docker (easiest)**
```bash
docker run --name joblink-postgres -e POSTGRES_PASSWORD=SecurePassword123 -d -p 5432:5432 postgres:15
```

### 2.2 Create Database & User

```bash
# Connect to PostgreSQL
psql -U postgres
```

Inside psql, run:
```sql
-- Create database
CREATE DATABASE social_career_platform;

-- Create user
CREATE USER scp_user WITH PASSWORD 'SecurePassword123';

-- Grant privileges
ALTER ROLE scp_user SET client_encoding TO 'utf8';
ALTER ROLE scp_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE scp_user SET default_transaction_deferrable TO on;
ALTER ROLE scp_user SET default_time_zone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE social_career_platform TO scp_user;

-- Exit
\q
```

### 2.3 Initialize Database Schema

```bash
# From project root
psql -U scp_user -d social_career_platform -f database/schema.sql
```

Verify:
```bash
psql -U scp_user -d social_career_platform -c "\\dt"
# Should show all tables
```

## Step 3: Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

**Edit `backend/.env`:**

Update with your values:
```env
DATABASE_URL=postgresql://scp_user:SecurePassword123@localhost:5432/social_career_platform
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=social_career_platform
DATABASE_USER=scp_user
DATABASE_PASSWORD=SecurePassword123

NODE_ENV=development
PORT=3001

JWT_SECRET=your_random_secret_key_min_32_chars_12345678
JWT_EXPIRATION=7d

FRONTEND_URL=http://localhost:3000
```

**Start Backend:**

```bash
npm run build
npm run dev
```

You should see:
```
✅ Server running on http://localhost:3001
```

**Test Backend:**

```bash
# In another terminal
curl http://localhost:3001/api/health
# Should return: {"status":"ok"}
```

## Step 4: Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

**Edit `frontend/.env.local`:**

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
NEXT_PUBLIC_WS_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME=BuildHub
NEXT_PUBLIC_LOGO_URL=/logo.png
```

**Start Frontend:**

```bash
npm run dev
```

You should see:
```
▲ Next.js 14.0.0
  - Local:        http://localhost:3000
```

## Step 5: Verify Setup

### ✅ Backend Health Check

```bash
curl -s http://localhost:3001/api/health | jq
# Should return: {"status":"ok"}
```

### ✅ Frontend Loads

Open [http://localhost:3000](http://localhost:3000) in browser.
You should see the home page.

## Step 6: (Optional) Docker Setup

If you prefer Docker:

```bash
# Start all services
docker-compose up -d

# Wait for services to start (about 30 seconds)
sleep 30

# View logs
docker-compose logs -f
```

**Access:**
- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- API Docs: http://localhost:3001/api/docs
- PostgreSQL: localhost:5432

**Stop everything:**
```bash
docker-compose down
```

## 🔧 Troubleshooting

### PostgreSQL Connection Error

**Error:** `connect ECONNREFUSED 127.0.0.1:5432`

**Solution:**
```bash
# Check if PostgreSQL is running
sudo systemctl status postgresql

# Start if not running
sudo systemctl start postgresql

# Or for Homebrew:
brew services start postgresql@15

# Test connection
psql -U scp_user -d social_career_platform -c "SELECT 1"
```

### Port Already in Use

**Error:** `Port 3000 is already in use`

**Solution:**
```bash
# Find process using port
lsof -i :3000   # Frontend
lsof -i :3001   # Backend
lsof -i :5432   # Database

# Kill process (replace PID)
kill -9 <PID>
```

### Module Not Found Error

**Error:** `Cannot find module 'nest'`

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

## Development Commands

### Backend

```bash
cd backend

# Development server
npm run dev

# Build
npm run build

# Testing
npm run test

# Linting
npm run lint
```

### Frontend

```bash
cd frontend

# Development
npm run dev

# Build
npm run build

# Production
npm run start

# Testing
npm run test
```

## Next Steps

1. **Customize your app:** Edit `frontend/config/app.config.ts`
2. **Add your logo:** Place logo in `frontend/public/logo.png`
3. **Configure OAuth:** Set up Google & GitHub OAuth (optional)
4. **Configure email:** Set up SMTP for notifications (optional)
5. **Deploy:** Follow production deployment guidelines

Good luck! 🚀
