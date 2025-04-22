# 📝 Karya – To-Do List Web App

**Karya** is a minimalist and elegant to-do list web application designed to help users organize tasks with ease. It is built with modern technologies like Next.js, TypeScript, and Convex for real-time backend operations. The UI is styled using Tailwind CSS, offering a responsive and seamless experience across devices.

---

## 🚀 Features

- ✅ Add, update, and delete tasks
- 🔄 Real-time updates using Convex backend
- 🎨 Clean, modern UI built with Tailwind and Shadcn UI
- 📱 Fully responsive and mobile-friendly
- 🗃️ Organized code structure for easy scalability

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Backend**: [Convex](https://www.convex.dev/) (real-time backend)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Database**: Convex's built-in real-time DB
- **Tooling**: ESLint, Prettier, pnpm or npm

## 🔐 Environment Variables

To run this project locally or in production, you’ll need to set the following environment variables in a `.env.local` file at the root of the project:

````env
# Convex configuration
CONVEX_DEPLOYMENT=your-convex-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-project-id.convex.cloud

# Clerk (Authentication) configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key

# Edge Store (File uploads) configuration
EDGE_STORE_ACCESS_KEY=your-edge-store-access-key
EDGE_STORE_SECRET_KEY=your-edge-store-secret-key
````

---
## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/capeofhope/Karya.git
   cd Karya
2. **Install dependencies**<br>
npm install
3. **Run the development server**<br>
npm run dev
Open your browser and navigate to `http://localhost:3000` to view the app.
4. **Build for production**<br>
npm run build
After building, you can start the production server with:<br>
npm start
5. **Usage**<br>
Once the app is running, you can add tasks to your to-do list by entering them in the input field and clicking the "Add" button. You can update or delete tasks as needed. Enjoy organizing your tasks with Karya!
6. **Contributing**<br>
We welcome contributions! Please fork the repository, make your changes, and submit a pull request. For larger changes, please open an issue first to discuss what you would like to change.
7. **License**<br>
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
