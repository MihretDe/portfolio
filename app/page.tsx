import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-500">Mihret Desalegn</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Front-End Developer | Problem Solver | UI/UX Enthusiast
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-96">
              <Image
                src="/profile-placeholder.svg"
                alt="Profile"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                I am a dedicated front-end developer passionate about building 
                interactive, responsive, and user-friendly web applications. With a strong 
                foundation in modern technologies, I love crafting seamless digital experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Job App */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg ">
                <div className="relative h-48 p-2">
                <Image src="/assets/joblist.png" alt="Job List App" fill className="object-cover" />
                </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Job App</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Built a job listing app with 4 main pages for easy job browsing and detailed views.
                  Secured user authentication with NextAuth, improving data protection. Led testing with Cypress and Jest, validating 15+ critical features.
                  Improved loading times by 30% with code splitting and lazy loading.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Technologies Used: React, Next.js, Tailwind CSS
                </p>
              </div>
            </div>
            {/* E-Commerce Web Application */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image src="/ecommerce.svg" alt="E-Commerce Web Application" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-Commerce Web Application</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Developed a front-end-only e-commerce web app based on a Figma design. Deployed the application on Vercel for optimal performance and accessibility.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Technologies Used: Next.js, Tailwind CSS, TypeScript, Vercel
                </p>
              </div>
            </div>
            {/* Music App */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image src="/musicapp.svg" alt="Music App" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Music App</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Developed a feature-rich audio player with search functionality to quickly find songs by artist name or title. Enabled users to create and play custom playlists.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Technologies Used: Flutter, Dart
                </p>
              </div>
            </div>
            {/* Smart Bike Sharing System */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image src="/bike-sharing.svg" alt="Smart Bike Sharing System" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Smart Bike Sharing System</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Developed a smart bike-sharing system to improve urban mobility. Designed a mobile platform with secure bike locks, GPS tracking, and real-time bike availability.
                  Built a Flutter app with Firebase backend, enabling authentication, real-time database, and cloud storage.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Technologies Used: Flutter, Firebase
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I'm open to discussing new projects, collaboration, and opportunities.
          </p>
          <a
            href="mailto:mihretdesalegn98@gmail.com"
            className="inline-block px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            Send me an email
          </a>
        </div>
      </section>
    </div>
  );
}
