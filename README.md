# The Right to AI

**The Right to AI** is a Next.js web application that promotes community participation in the design, deployment and governance of artificial intelligence. It contains interactive content about the Right to AI declaration and provides resources such as papers and workshop material.

## Features

- **Next.js 14** with React 18 and TypeScript
- **Tailwind CSS** for rapid UI styling
- **Framer Motion** animations
- Sample pages including an About section, poster viewer and book preview
- Example contact form logic using Nodemailer

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000` by default.

### Other scripts

- `npm run build` – compile the production build
- `npm start` – run the compiled app
- `npm run lint` – check for linting errors

## Project Structure

```
app/        # Next.js routes and pages
components/ # Reusable React components
public/     # Static assets (images, PDFs, etc.)
```

## Deployment

Build the application and serve the `/.next` output with your preferred hosting provider.

```bash
npm run build
npm start
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## Contact

For questions or collaboration, please reach out to [contact@therighttoai.org](mailto:contact@therighttoai.org).

