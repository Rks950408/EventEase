# EventEase - Event Planning and Management Tool

A comprehensive **end-to-end event management solution** built with modern technologies and a clean architecture separating frontend and backend concerns.

## 🏗️ **Architecture Overview**

```
EventEase/
├── frontend/          # Next.js 15 React Application
│   ├── src/          # React components and pages
│   ├── package.json  # Frontend dependencies
│   └── ...
├── backend/           # Express.js API Server
│   ├── src/          # API routes and middleware
│   ├── prisma/       # Database schema and migrations
│   ├── package.json  # Backend dependencies
│   └── ...
├── shared/            # Common types and interfaces
│   └── types.ts      # Shared TypeScript types
└── README.md          # This file
```

## 🚀 **Features**

### **Frontend (Next.js 15)**
- **Modern UI/UX** - Responsive design with Tailwind CSS
- **User Authentication** - Login, register, and profile management
- **Event Management** - Create, edit, delete, and view events
- **Dashboard** - User overview with statistics and quick actions
- **Event Browsing** - Search, filter, and RSVP to events
- **Role-based Access** - Admin, Staff, and Event Owner interfaces

### **Backend (Express.js + Prisma)**
- **RESTful API** - Clean, documented endpoints
- **Database Management** - PostgreSQL with Prisma ORM
- **Authentication** - JWT-based security with role management
- **Data Validation** - Input sanitization and validation
- **File Upload** - Event image handling
- **Real-time Features** - WebSocket support for live updates

## 🛠️ **Tech Stack**

### **Frontend**
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: React Context API
- **Icons**: Lucide React
- **UI Components**: Custom components with shadcn/ui patterns

### **Backend**
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with bcrypt password hashing
- **Validation**: Express-validator
- **Security**: Helmet, CORS, rate limiting
- **File Handling**: Multer for uploads

### **Database Schema**
- **Users**: Authentication and role management
- **Events**: Event details with custom fields
- **RSVPs**: Attendee management and status tracking
- **Custom Fields**: Dynamic event form fields

## 📋 **Prerequisites**

- **Node.js**: v18.18.0 or higher
- **PostgreSQL**: v12 or higher
- **npm** or **yarn** package manager

## 🚀 **Getting Started**

### **1. Clone and Setup**
```bash
git clone https://github.com/yourusername/EventEase.git
cd EventEase
```

### **2. Backend Setup**
```bash
cd backend
npm install
cp env.example .env
# Edit .env with your database credentials
npm run db:generate
npm run db:push
npm run dev
```

### **3. Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

### **4. Access Applications**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **Health Check**: http://localhost:8000/health
- **Prisma Studio**: http://localhost:5555 (after `npm run db:studio`)

## 🔐 **Authentication & Roles**

### **User Roles**
- **Admin**: Full system access and user management
- **Staff**: Event moderation and attendee management
- **Event Owner**: Create and manage personal events

### **API Security**
- JWT tokens with configurable expiration
- Role-based route protection
- Input validation and sanitization
- CORS configuration for frontend communication

## 📡 **API Endpoints**

### **Authentication**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### **Events**
- `GET /api/events` - List events with pagination
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create new event
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

### **Users**
- `GET /api/users` - List users (admin only)
- `GET /api/users/:id` - Get user details
- `PATCH /api/users/:id/role` - Update user role (admin only)

### **RSVPs**
- `POST /api/rsvps` - Create RSVP
- `PUT /api/rsvps/:id` - Update RSVP status
- `DELETE /api/rsvps/:id` - Delete RSVP
- `GET /api/rsvps/event/:eventId` - Get event RSVPs

## 🗄️ **Database Schema**

### **User Model**
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String
  role      UserRole @default(EVENT_OWNER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  events    Event[]  @relation("EventOrganizer")
  rsvps     RSVP[]
}
```

### **Event Model**
```prisma
model Event {
  id          String   @id @default(cuid())
  title       String
  description String
  date        DateTime
  time        String
  location    String
  maxAttendees Int?
  category    String?
  imageUrl    String?
  status      EventStatus @default(ACTIVE)
  
  organizerId String
  organizer   User   @relation("EventOrganizer", fields: [organizerId], references: [id])
  customFields CustomField[]
  rsvps       RSVP[]
}
```

## 🔧 **Development Scripts**

### **Backend**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run database migrations
npm run db:studio    # Open Prisma Studio
```

### **Frontend**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🌐 **Environment Variables**

### **Backend (.env)**
```env
PORT=8000
NODE_ENV=development
DATABASE_URL="postgresql://username:password@localhost:5432/eventease_db"
JWT_SECRET=your_super_secret_jwt_key_here
FRONTEND_URL=http://localhost:3000
```

### **Frontend (.env.local)**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_NAME=EventEase
```

## 🚀 **Deployment**

### **Backend Deployment**
- **Railway**: Easy PostgreSQL + Node.js deployment
- **Render**: Free tier with PostgreSQL
- **Heroku**: Classic platform with add-ons
- **DigitalOcean**: Droplets with managed databases

### **Frontend Deployment**
- **Vercel**: Optimized for Next.js (recommended)
- **Netlify**: Great for static sites
- **Cloudflare Pages**: Fast global CDN

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 **License**

This project is licensed under the ISC License.

## 👨‍💻 **Developer Information**

**Developed by**: [Your Full Name]

- **GitHub**: [https://github.com/yourusername](https://github.com/yourusername)
- **LinkedIn**: [https://linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)

## 🙏 **Acknowledgments**

- Next.js team for the amazing framework
- Prisma team for the excellent ORM
- Express.js community for the robust web framework
- Tailwind CSS for the utility-first CSS framework
- The open-source community for inspiration and tools

## 📞 **Support**

For support, please open an issue on GitHub or contact the developer directly.

---

**EventEase** - Making event planning simple and efficient! 🎉

*Built with ❤️ using modern web technologies* 