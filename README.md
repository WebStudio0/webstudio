# Web Studio

Web Studio is a modern, full-stack web application built with Next.js 16 that serves as a platform for a website development company. The application showcases services, portfolio projects, and provides an interface for client engagement through contact forms and testimonials.

## Features

- **Modern UI/UX**: Built with Tailwind CSS and Radix UI components for a sleek, responsive design
- **Dynamic Content Sections**: Hero, Features, Services, Portfolio, Testimonials, and Call-to-Action sections
- **Database Integration**: Prisma ORM with PostgreSQL adapter for robust data management
- **Form Handling**: TanStack Form with Zod validation for reliable form submissions
- **Theme Support**: Dark/light mode with next-themes
- **Optimized Assets**: Geist fonts and optimized image handling
- **Type Safety**: Full TypeScript support throughout the application
- **Notification System**: Toast notifications using Sonner
- **Responsive Design**: Mobile-first approach with responsive layouts

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Tailwind Merge, Class Variance Authority
- **UI Components**: Radix UI, Lucide React Icons
- **ORM**: Prisma with PostgreSQL
- **Forms**: TanStack Form with Zod validation
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Theming**: next-themes

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio section
│   ├── services/          # Services section
│   ├── favicon.ico        # Site favicon
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with navbar and footer
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── shared/            # Shared components (navbar, footer, home sections)
│   └── ui/                # UI components (buttons, forms, etc.)
├── lib/                   # Utility functions and configurations
│   ├── prisma.ts          # Prisma client setup
│   ├── utils.ts           # Utility functions
│   ├── generated/         # Generated files
│   └── validation/        # Validation schemas
├── public/                # Static assets
└── prisma/                # Prisma schema and migrations
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- PostgreSQL database
- pnpm package manager (recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd web-studio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```env
   DATABASE_URL="your-postgresql-database-url"
   NEXT_PUBLIC_BASE_URL="http://localhost:3000"
   ```

4. Set up the database:
   ```bash
   npx prisma db push
   # or for initial migration
   npx prisma migrate dev
   ```

5. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check for code issues

## Environment Variables

The application requires the following environment variables:

- `DATABASE_URL` - Connection string for the PostgreSQL database
- `NEXT_PUBLIC_BASE_URL` - Base URL of the application

## Database Schema

The application uses Prisma ORM with the following main entities (defined in `prisma/schema.prisma`):

- Users
- Projects
- Services
- Testimonials
- Contacts

Run `npx prisma studio` to view and edit data in a GUI.

## Deployment

The application is ready for deployment on platforms that support Next.js applications such as:

- Vercel (recommended)
- Netlify
- AWS
- Google Cloud
- Railway
- Render

For Vercel deployment, connect your GitHub repository and configure the environment variables in the project settings.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License.
