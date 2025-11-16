# Budget Bathroom Website

A modern, responsive website clone of Long Home Products, rebranded as Budget Bathroom - specializing in affordable bathroom remodeling and renovation services.

Built with **React** (frontend) and **Node.js/Express** (backend).

## Tech Stack

- **Frontend**: React 18, Vite, Axios
- **Backend**: Node.js, Express.js
- **Styling**: CSS3 with CSS Variables

## Project Structure

```
BudgetBathroom/
├── frontend/          # React application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── App.jsx       # Main app component
│   │   ├── main.jsx      # Entry point
│   │   └── index.css     # Global styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/           # Node.js/Express API
│   ├── server.js      # Express server
│   └── package.json
├── package.json       # Root package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install all dependencies** (root, frontend, and backend):
   ```bash
   npm run install:all
   ```

   Or manually:
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```

2. **Set up environment variables** (optional):
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Running the Application

**Development Mode** (runs both frontend and backend):
```bash
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

**Run separately:**

Frontend only:
```bash
npm run dev:frontend
```

Backend only:
```bash
npm run dev:backend
```

### Building for Production

```bash
npm run build
```

This builds the React app for production. The built files will be in `frontend/dist/`.

To serve the production build:
```bash
cd backend
npm start
```

## API Endpoints

### POST `/api/estimate`
Submit an estimate request.

**Request Body:**
```json
{
  "service": "shower|bathtub|full",
  "zipcode": "12345",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "consent": true
}
```

### POST `/api/contact`
Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "message": "Your message here"
}
```

### GET `/api/health`
Health check endpoint.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern React components with hooks
- ✅ RESTful API with Express
- ✅ Form handling with validation
- ✅ Smooth scrolling navigation
- ✅ Modal popups
- ✅ Mobile-friendly navigation menu
- ✅ API integration ready

## Customization

- **Colors**: Edit CSS variables in `frontend/src/index.css` (`:root` section)
- **Content**: Update component files in `frontend/src/components/`
- **API**: Modify routes in `backend/server.js`
- **Images**: Replace placeholder images with actual bathroom photos

## Development Notes

- The frontend uses Vite for fast development
- The backend uses Express with CORS enabled
- Forms currently log to console and return success messages
- To integrate with email/database, update the backend routes in `server.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
