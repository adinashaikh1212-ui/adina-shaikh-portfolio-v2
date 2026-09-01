# Adina Shaikh — Engineering Portfolio

A responsive engineering portfolio presenting my education, professional experience, scholarships, awards and selected projects in marine, offshore and mechanical engineering.

The portfolio highlights work involving ship design, offshore structures, computational fluid dynamics, finite element analysis, CAD, parametric modelling, experimental testing and sustainable engineering systems.

## Portfolio Sections

- About and core engineering competencies
- Education
- Professional and research experience
- Scholarships
- Awards and distinctions
- Featured engineering projects
- Additional academic and team projects
- Contact information and résumé

## Featured Engineering Areas

- Naval architecture and ship design
- Marine and offshore engineering
- Computational fluid dynamics
- Finite element and structural analysis
- Ship hydrodynamics and seakeeping
- Parametric modelling and CAD
- Advanced manufacturing
- Sustainable transportation and energy systems

## Technology Stack

- React
- Vite
- JavaScript and JSX
- Tailwind CSS
- React Router
- ESLint
- Prettier

## Running the Portfolio Locally

### Prerequisites

- Node.js 24 or later
- npm 10 or later

### Install dependencies

```bash
npm install
```

On Windows PowerShell, if script execution is restricted, use:

```powershell
npm.cmd install
```

### Start the development server

```bash
npm run dev
```

On Windows PowerShell, if necessary:

```powershell
npm.cmd run dev
```

Open the local address displayed in the terminal, normally:

```text
http://localhost:5173
```

## Production Build

Create a production build:

```bash
npm run build
```

On Windows PowerShell:

```powershell
npm.cmd run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
public/
├── featured-projects/        # Featured engineering project images
├── adina.png                 # Profile photograph

└── manifest.json             # Web-app metadata

src/
├── components/
│   ├── common/               # Shared headings and icons
│   ├── layout/               # Header, footer and page layout
│   ├── sections/             # Portfolio page sections
│   └── ui/                   # Reusable buttons and project cards
├── hooks/                    # Scrolling and intersection hooks
├── utils/
│   ├── constants.js          # Portfolio data and personal information
│   └── helpers.js            # Shared utility functions
├── App.jsx
└── main.jsx
```

## Primary Content File

Most portfolio information is maintained in:

```text
src/utils/constants.js
```

This includes:

- Navigation
- Professional links
- Skills
- Education
- Scholarships
- Awards
- Work experience
- Featured projects
- Additional projects
- Personal information

## Contact

- Email: [adeena.shykh1@gmail.com](mailto:adeena.shykh1@gmail.com)
- LinkedIn: [Adina Shaikh](https://www.linkedin.com/in/adeena-shykh2/)

## License and Attribution

This project is distributed under the terms of the [MIT License](LICENSE.md).

The portfolio was adapted from the open-source portfolio created by [Nishad Kindre](https://github.com/nishadkindre/portfolio), whose original copyright notice remains in `LICENSE.md`.

The interface also draws design inspiration from [Brittany Chiang](https://brittanychiang.com/).