# Room Booking Web App

A responsive room booking application built with **React, TypeScript, and Supabase**. Users can explore available rooms, view room details, create reservations, and manage their bookings. The project also includes an admin dashboard for managing rooms, users, and bookings.

## Live Demo

[Open the Room Booking App](https://booking-project-psxo.vercel.app/)

## Features

### Client

- Browse featured rooms and view the available rooms list.
- View room details, including images, description, location, capacity, and amenities.
- Sort rooms by name, price, or square footage.
- Create an account and sign in using Supabase Authentication.
- Book a room by selecting check-in and check-out dates.
- Check for overlapping bookings before submitting a reservation.
- View personal booking history.
- View and update profile information.
- Change account password.

### Admin Dashboard

- View dashboard statistics for users, rooms, bookings, and check-ins.
- Browse and search registered users.
- Browse and search rooms.
- View and search bookings.
- Add new rooms, including uploading room images.
- Add new user accounts.

## Tech Stack

| Technology | Usage |
|---|---|
| React 19 | Building the user interface |
| TypeScript | Type-safe development |
| Vite | Development server and build tooling |
| Tailwind CSS 4 | Styling and responsive layouts |
| React Router | Client-side routing |
| TanStack Query | Server-state fetching and caching |
| Supabase | Authentication, database, and image storage |
| Axios | HTTP requests |
| Lucide React | Icons |

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm
- A Supabase project

### 1. Clone the repository

```bash
git clone https://github.com/youssefibrahimahmed/booking-project-.git
cd booking-project-
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and add your Supabase project credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Use your own Supabase project values. Do not commit your `.env` file.

### 4. Run the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Run the TypeScript build and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Application Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/rooms` | Browse rooms |
| `/rooms/:id` | Room details |
| `/book-room/:id` | Book a selected room |
| `/my-bookings` | Current user's bookings |
| `/profile-details` | Profile information |
| `/profile-details/change-password` | Change password |
| `/login` | Sign in |
| `/register` | Create an account |
| `/admin` | Admin dashboard |
| `/admin/users` | Manage users |
| `/admin/bookings` | Manage bookings |
| `/admin/rooms` | Manage rooms |
| `/admin/add-room` | Add a room |
| `/admin/add-user` | Add a user |

## Supabase Configuration

The application uses Supabase for:

- User authentication.
- Reading and writing room, profile, and booking data.
- Uploading room images to the `room-images` Storage bucket.

Configure the corresponding database tables, Storage bucket, and access policies in your own Supabase project before running the application.

## Author

**Youssef Ibrahim Ahmed**

- GitHub: [@youssefibrahimahmed](https://github.com/youssefibrahimahmed)
- LinkedIn: [Youssef Ibrahim Ahmed](https://www.linkedin.com/in/youssef-ibrahim-048961286/)
