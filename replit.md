# ResumeForge - React Application

## Overview
ResumeForge is a modern React application for building and managing resumes. This is a fresh GitHub import that has been configured to run in the Replit environment.

## Project Architecture
- **Frontend Framework**: React 18.2.0 with Vite 5.0.0 as the build tool
- **Styling**: Tailwind CSS with various plugins for enhanced styling
- **Routing**: React Router DOM for single-page application navigation
- **State Management**: Redux Toolkit
- **Form Handling**: React Hook Form
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Pages Structure
- Homepage: Main landing page
- Template Gallery: Resume template browsing
- Resume Builder Studio: Interactive resume creation tool
- User Dashboard: User account and resume management
- Pricing Premium: Subscription and pricing information
- About Resume Forge: Company information and mission

## Configuration
- **Development Server**: Vite configured to run on port 5000 with host 0.0.0.0
- **Allowed Hosts**: Configured to trust all hosts for Replit proxy compatibility
- **Build Output**: Configured to output to `build/` directory
- **Base URL**: JSConfig set to use `./src` as base for module resolution

## Deployment
- **Target**: Autoscale (stateless frontend)
- **Build Command**: `npm run build`
- **Serve Command**: `npm run serve`

## Recent Changes
- 2025-09-24: Imported from GitHub and configured for Replit environment
- Updated Vite config to use port 5000 and allow all hosts
- Set up Frontend workflow for development
- Configured deployment settings for production

## Development Workflow
The project uses a single "Frontend" workflow that runs `npm start` to serve the development server on port 5000.