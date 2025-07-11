# Raksha Ramesh - Personal Website

A newspaper-themed personal portfolio website showcasing my professional journey, projects, and technical expertise.

## 🚀 Live Site

Visit the live site at: [https://raksha-ramesh.github.io](https://raksha-ramesh.github.io)

## 🛠️ Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **Lucide React** - Icon library

## 📰 Features

- **Newspaper Theme**: Classic newspaper design with modern web technologies
- **Responsive Design**: Optimized for all device sizes
- **Static Export**: Optimized for GitHub Pages hosting
- **Professional CV**: Detailed resume with downloadable PDF option
- **Blog Section**: Editorial-style blog layout
- **Social Integration**: Links to professional profiles

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── cv/page.tsx          # CV/Resume page
│   ├── blog/page.tsx        # Blog listing page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/ui/           # shadcn/ui components
├── .github/workflows/       # GitHub Actions for deployment
└── next.config.mjs          # Next.js configuration
\`\`\`

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions whenever changes are pushed to the main branch.

### Manual Setup

1. Create a repository named `Raksha-Ramesh.github.io`
2. Push this code to the repository
3. Enable GitHub Pages in repository settings
4. Set source to "GitHub Actions"
5. The site will be available at `https://raksha-ramesh.github.io`

## 💻 Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Email**: rakshar@seas.upenn.edu
- **Location**: Philadelphia, PA
- **GitHub**: [@Raksha-Ramesh](https://github.com/Raksha-Ramesh)
\`\`\`

```text file=".gitignore"
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
