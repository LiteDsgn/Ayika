# Ayika — Cycle‑Aware Scheduling

Ayika is a cycle‑aware scheduling add‑in and landing site designed to help users align their productivity with their natural energy rhythms. This project showcases the features, resources, and provides an early‑access waitlist for the upcoming product.

## 🚀 Overview

Ayika empowers users to schedule tasks and events based on their menstrual cycle or lunar rhythms (Ghost Cycle). By providing energy forecasts and intelligent scheduling tips, Ayika helps optimize productivity and well-being.

## ✨ Key Features

-   **Smart Scheduling**: Phase‑aware scheduling suggestions with energy match scores.
-   **Energy Forecasting**: 7‑day forecasts to anticipate energy highs and lows.
-   **Cycle Tracking**: Support for menstrual tracking and "Ghost Cycle" for lunar rhythm alignment.
-   **Quick Insights**: Daily overviews with task recommendations.
-   **Intelligent Alerts**: Notifications for phase changes and scheduling tips.
-   **Privacy First**: Encrypted data storage with no external data sharing.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Fonts**: Inter & Museo Moderno

## 🏁 Getting Started

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ayika.git
    cd ayika
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## 📂 Project Structure

```
ayika/
├── app/                  # Next.js App Router pages and global styles
├── components/           # Reusable React components
│   ├── sections/         # Landing page sections (Hero, Features, etc.)
│   └── ui/               # Generic UI components (Buttons, Inputs, etc.)
├── lib/                  # Utility functions and CMS clients
├── public/               # Static assets (images, fonts)
├── types/                # TypeScript type definitions
└── package.json          # Project dependencies and scripts
```

## 📄 License

[MIT](LICENSE)
