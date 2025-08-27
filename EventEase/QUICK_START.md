# 🚀 EventEase Quick Start Guide

Get EventEase running in minutes with this quick setup guide!

## ⚡ **Super Quick Start**

### **Option 1: One Command (Recommended)**
```bash
./dev.sh
```
This will start both frontend and backend automatically!

### **Option 2: Manual Start**
```bash
# Terminal 1 - Backend
cd backend
npm install
cp env.example .env
# Edit .env with your database credentials
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm install
npm run dev
```

## 🗄️ **Database Setup**

### **1. Install PostgreSQL**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib

# macOS
brew install postgresql

# Windows
# Download from https://www.postgresql.org/download/windows/
```

### **2. Create Database**
```bash
sudo -u postgres psql
CREATE DATABASE eventease_db;
CREATE USER eventease_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE eventease_db TO eventease_user;
\q
```

### **3. Configure Backend**
```bash
cd backend
cp env.example .env
```

Edit `.env`:
```env
DATABASE_URL="postgresql://eventease_user:your_password@localhost:5432/eventease_db"
JWT_SECRET="your_super_secret_jwt_key_here_make_it_long_and_random"
```

## 🔧 **Backend Setup**

```bash
cd backend
npm install
npm run db:generate
npm run db:push
npm run dev
```

**Backend will be running at:** http://localhost:8000

## 🎨 **Frontend Setup**

```bash
cd frontend
npm install
npm run dev
```

**Frontend will be running at:** http://localhost:3000

## ✅ **Verify Everything Works**

1. **Backend Health Check**: http://localhost:8000/health
2. **Frontend Homepage**: http://localhost:3000
3. **Database**: Check Prisma Studio with `npm run db:studio` in backend folder

## 🧪 **Test the API**

### **Create a Test User**
```bash
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### **Login**
```bash
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

## 🚨 **Common Issues**

### **Backend Won't Start**
- Check if PostgreSQL is running
- Verify database credentials in `.env`
- Ensure port 8000 is available

### **Frontend Won't Start**
- Check if port 3000 is available
- Ensure backend is running first
- Check Node.js version (v18.18.0+)

### **Database Connection Failed**
- Verify PostgreSQL is running
- Check database name and credentials
- Ensure database exists

## 📱 **What You'll See**

- **Frontend**: Beautiful event management interface
- **Backend**: RESTful API with JWT authentication
- **Database**: PostgreSQL with Prisma ORM
- **Real-time**: Live updates and notifications

## 🎯 **Next Steps**

1. **Explore the API**: Check http://localhost:8000/health
2. **Create Events**: Use the frontend forms
3. **Test Authentication**: Register and login users
4. **Manage RSVPs**: Test the complete flow

## 🆘 **Need Help?**

- Check the main README.md for detailed documentation
- Open an issue on GitHub
- Check the browser console and terminal for errors

---

**Happy Coding! 🎉** 