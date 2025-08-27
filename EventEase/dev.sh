#!/bin/bash

echo "🚀 Starting EventEase Development Environment..."
echo "📁 Project: EventEase - Frontend + Backend"
echo ""

# Function to cleanup background processes
cleanup() {
    echo ""
    echo "🛑 Shutting down development servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 0
}

# Set trap to cleanup on exit
trap cleanup SIGINT SIGTERM

# Start Backend
echo "🔧 Starting Backend Server..."
cd backend
if [ ! -f .env ]; then
    echo "⚠️  Backend .env file not found. Creating from example..."
    cp env.example .env
    echo "📝 Please edit backend/.env with your database credentials"
fi

# Start backend in background
npm run dev &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 3

# Start Frontend
echo "🎨 Starting Frontend Server..."
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo ""
echo "✅ Development servers started!"
echo "📱 Frontend: http://localhost:3000"
echo "🔗 Backend:  http://localhost:8000"
echo "🗄️  Health:  http://localhost:8000/health"
echo ""
echo "Press Ctrl+C to stop all servers"

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID 