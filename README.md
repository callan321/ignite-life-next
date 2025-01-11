# Ignite Life Bowen Therapy - Booking Website

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Getting Started](#getting-started)
5. [Development Workflow](#development-workflow)
6. [Folder Structure](#folder-structure)
7. [License](#license)

---

## Overview

**Ignite Life Next** is a professional booking platform designed for the seamless scheduling for Ignite Life Bowen Therapy appointments. This website is tailored to meet the needs of clients seeking therapy services, offering an intuitive and responsive user experience while maintaining a clean and modular codebase.

---

## Features

### Core Features:
- **Online Booking System**: Add an integrated professional booking system tailed to the admins needs.
- **Service Showcase**: Highlight therapy services with detailed descriptions to inform clients.
- **Bowen Therapy Testimonials**: Display client testimonials to build trust and credibility.
- **Responsive Design**: Ensure the site is fully functional and visually appealing across desktop, tablet, and mobile devices.
---

## Technology Stack

### Frontend:
- **Framework**: React.js - Next.js 15
- **Styling**: Tailwind CSS 

### Tools & Utilities:
- **Version Control**: Git
- **Package Manager**: npm
- **Hosting**: Vercel 

---

## Getting Started

### Prerequisites:
1. Node.js


### Setup:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ignite-life-bowen-therapy.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ignite-life-bowen-therapy
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit:
   [http://localhost:3000](http://localhost:3000)

---

## Development Workflow

### Branch Strategy:
- `main`: Production-ready code.
- `dev`: Main development branch for integrating features.
- `testing`: Development branch for testing ui.
- `feature-*`: Branches individual features (e.g., `feature-button-component`).

### Creating a Feature Branch:
1. From `dev`, create a new feature branch:
   ```bash
   git checkout -b feature-<component-name>
   ```
2. Push the branch to the remote repository:
   ```bash
   git push -u origin feature-<component-name>
   ```
3. After completing the feature, merge it back into `dev`:
   ```bash
   git checkout dev
   git merge feature-<component-name>
   ```

### Testing:
- Use a dedicated `testing` branch for visual testing.
- Add dummy routes or test links for verification, ensuring they are removed before merging into `dev`.

---

## Folder Structure

```
ignite-life-next/
├── public/           # Static assets
├── src/
│   ├── app/          # Next.js 15 app directory
│   ├── components/   # Reusable UI components
└── README.md         # Documentation
```

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

