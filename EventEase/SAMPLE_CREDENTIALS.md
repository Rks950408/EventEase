# Sample Credentials for EventEase Evaluation

## 🧪 Test Accounts

### Demo User Account
- **Email**: demo@eventease.com
- **Password**: demo123456
- **Role**: Event Owner
- **Access**: Create, manage, and monitor events

### Admin Account (Future Implementation)
- **Email**: admin@eventease.com
- **Password**: admin123456
- **Role**: Admin
- **Access**: Full application control, user management

### Staff Account (Future Implementation)
- **Email**: staff@eventease.com
- **Password**: staff123456
- **Role**: Staff
- **Access**: Moderate events and attendee interactions

## 🔑 Authentication Flow

### Registration Process
1. Navigate to `/auth/register`
2. Fill in the registration form:
   - Full Name: Your Name
   - Email: your.email@example.com
   - Password: (minimum 6 characters)
   - Confirm Password: (must match)
3. Click "Create Account"
4. You'll be automatically logged in and redirected to dashboard

### Login Process
1. Navigate to `/auth/login`
2. Enter your credentials:
   - Email: your.email@example.com
   - Password: your_password
3. Click "Sign In"
4. You'll be redirected to dashboard

## 📱 Demo Features to Test

### 1. User Authentication
- ✅ User registration
- ✅ User login/logout
- ✅ Persistent sessions
- ✅ Protected routes

### 2. Event Management
- ✅ Create new events
- ✅ Add custom fields
- ✅ Event categorization
- ✅ Date and time selection

### 3. Dashboard
- ✅ Event overview
- ✅ Statistics display
- ✅ Quick actions
- ✅ Recent events table

### 4. Event Browsing
- ✅ Event listing
- ✅ Search functionality
- ✅ Category filtering
- ✅ Sorting options

### 5. Responsive Design
- ✅ Mobile-friendly interface
- ✅ Tablet optimization
- ✅ Desktop experience
- ✅ Cross-browser compatibility

## 🚀 Quick Start for Evaluators

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd EventEase
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

4. **Test Features**
   - Register a new account
   - Create an event
   - Browse events
   - Test responsive design

## 📊 Evaluation Checklist

### Functionality ✅
- [ ] User registration and login
- [ ] Event creation and management
- [ ] Event browsing and search
- [ ] Dashboard functionality
- [ ] Responsive design

### Code Quality ✅
- [ ] TypeScript implementation
- [ ] Component structure
- [ ] Error handling
- [ ] Form validation
- [ ] State management

### UI/UX ✅
- [ ] Professional design
- [ ] Intuitive navigation
- [ ] Mobile responsiveness
- [ ] Accessibility features
- [ ] Consistent styling

### Security ✅
- [ ] Authentication system
- [ ] Protected routes
- [ ] Input validation
- [ ] Session management

## 🔧 Technical Notes

- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **State**: React Context API
- **Authentication**: Custom JWT-based system

## 📞 Support

For any issues during evaluation:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Ensure Node.js version is 18.18.0+
4. Contact the developer if problems persist

---

**Note**: This is a demonstration version with mock data. In production, it would include a real database, proper authentication, and additional security measures. 