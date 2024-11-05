import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ChevronDown, CheckCircle2, GraduationCap, User, Briefcase, Code, Phone } from 'lucide-react';
import { fadeIn, staggerContainer } from './utils/motion';
import { ThemeToggle } from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();
  useSmoothScroll();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'About', icon: User },
    { name: 'Education', icon: GraduationCap },
    { name: 'Experience', icon: Briefcase },
    { name: 'Projects', icon: Code },
    { name: 'Contact', icon: Phone }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold dark:text-white"
            >
              Abhitosh Anand
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ name }) => (
                <motion.a
                  key={name}
                  href={`#${name.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  {name}
                </motion.a>
              ))}
              <ThemeToggle isDark={isDark} toggle={toggle} />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle isDark={isDark} toggle={toggle} />
              <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-gray-900"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ name, icon: Icon }) => (
                <a
                  key={name}
                  href={`#${name.toLowerCase()}`}
                  className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  onClick={toggleMenu}
                >
                  <Icon size={20} />
                  {name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="pt-20 min-h-screen flex items-center justify-center"
        id="about"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="relative w-40 h-40 mx-auto mb-8"
            >
              <img
                src="https://i.ibb.co/Jc2Nw0h/profile.jpg"
                alt="Profile"
                className="rounded-full object-cover w-full h-full shadow-lg"
              />
            </motion.div>

            <motion.h1
              variants={fadeIn('up', 'tween', 0.3, 1)}
              className="text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl"
            >
              Physics Teacher
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 'tween', 0.4, 1)}
              className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Transforming complex physics concepts into engaging learning experiences
            </motion.p>

            <motion.div
              variants={fadeIn('up', 'tween', 0.5, 1)}
              className="mt-8 flex justify-center gap-4"
            >
              <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                Download CV
              </button>
              <a href="#contact" className="border-2 border-black dark:border-white px-6 py-3 rounded-full text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                Contact Me
              </a>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 'tween', 0.6, 1)}
              className="mt-8 flex justify-center gap-6"
            >
              <a href="tel:+916200413098" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <Phone size={24} />
              </a>
              <a href="mailto:example@email.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="text-3xl font-bold text-center mb-12 dark:text-white"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={fadeIn('up', 'tween', 0.3, 1)}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              As a Physics enthusiast with five years of experience, I specialize in making complex physics concepts accessible and engaging for students. My teaching methodology has evolved significantly, enhanced by my microteaching training during my Bachelor's in Education and a five-month JCERT internship at government schools. The research experience gained through various projects during my B.Sc. and M.Sc. programs has been instrumental in developing effective and comprehensive lesson plans for my students.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">Experienced Educator</h3>
                <p className="text-gray-600 dark:text-gray-300">5+ years of teaching experience with proven results</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">Research Background</h3>
                <p className="text-gray-600 dark:text-gray-300">Strong foundation in physics research and methodology</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">Innovative Teaching</h3>
                <p className="text-gray-600 dark:text-gray-300">Modern approach to physics education</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20 bg-gray-50 dark:bg-gray-900"
        id="education"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="text-3xl font-bold text-center mb-12 dark:text-white"
          >
            Education
          </motion.h2>

          <motion.div
            variants={fadeIn('up', 'tween', 0.3, 1)}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className="text-blue-500" size={24} />
                <h3 className="text-xl font-semibold dark:text-white">Bachelor's in Education</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">2022 - 2024</p>
              <p className="text-gray-600 dark:text-gray-300">Jamshedpur Co-operative College, Kolhan University, Chaibasa</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className="text-blue-500" size={24} />
                <h3 className="text-xl font-semibold dark:text-white">Master's in Physics</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">2020 - 2022</p>
              <p className="text-gray-600 dark:text-gray-300">Jamshedpur Co-operative College, Kolhan University, Chaibasa</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className="text-blue-500" size={24} />
                <h3 className="text-xl font-semibold dark:text-white">Bachelor's in Science with Physics Hons.</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">2017 - 2020</p>
              <p className="text-gray-600 dark:text-gray-300">Jamshedpur Co-operative College, Kolhan University, Chaibasa</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20 bg-white dark:bg-gray-800"
        id="experience"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="text-3xl font-bold text-center mb-12 dark:text-white"
          >
            Professional Experience & Internships
          </motion.h2>

          <div className="space-y-8">
            <motion.div
              variants={fadeIn('up', 'tween', 0.3, 1)}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-xl font-semibold dark:text-white">Teaching Intern</h3>
                <span className="text-gray-600 dark:text-gray-300">Nov 2023 - Present</span>
              </div>
              <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">Middle School Deogarh, Jamshedpur (JCERT Government Affiliated)</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Developed and implemented 50 comprehensive lesson plans with dedicated teaching-learning materials</li>
                <li>Simplified complex Physics concepts through engaging teaching methods</li>
                <li>Integrated microteaching skills into daily lesson delivery</li>
                <li>Conducted regular student assessments and provided constructive feedback</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 'tween', 0.4, 1)}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-xl font-semibold dark:text-white">Micro-teaching Workshop</h3>
                <span className="text-gray-600 dark:text-gray-300">Oct 2023 - Nov 2023</span>
              </div>
              <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">Jamshedpur Co-Operative College, Jamshedpur, Jharkhand</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Took part in intense teaching practice sessions where I worked on core skills like asking good questions and managing classroom time</li>
                <li>Conducted peer teaching sessions to refine instructional strategies and lesson delivery</li>
                <li>Engaged in collaborative feedback exchanges to adapt teaching methods for diverse learning styles</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 'tween', 0.5, 1)}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-xl font-semibold dark:text-white">Private Physics Tutor</h3>
                <span className="text-gray-600 dark:text-gray-300">Aug 2018 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Mentored students from grades 6-12 in Physics fundamentals</li>
                <li>Created personalized learning strategies and resources</li>
                <li>Maintained parent communication and fostered effective study habits</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 'tween', 0.6, 1)}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-xl font-semibold dark:text-white">Physics Internship</h3>
                <span className="text-gray-600 dark:text-gray-300">17 Aug 2022 - 26 Sep 2022</span>
              </div>
              <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">National Metallurgical Laboratory, Jamshedpur</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Conducted research on sustainable hydrogen production through water splitting under the mentorship of Dr. Animesh Jana. The project focused on developing efficient electrocatalysts for water electrolysis to generate clean hydrogen fuel.</li>
                <li>Contributed to the investigation of novel materials and optimization of electrochemical parameters to enhance hydrogen evolution reaction (HER) efficiency.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20 bg-gray-50 dark:bg-gray-900"
        id="projects"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="text-3xl font-bold text-center mb-12 dark:text-white"
          >
            Teaching Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Physics Lab Setup",
                description: "Designed and implemented a comprehensive physics laboratory setup for practical demonstrations.",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop"
              },
              {
                title: "Interactive Learning Modules",
                description: "Developed interactive learning modules for complex physics concepts.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
              },
              {
                title: "Research Projects",
                description: "Guided students through various physics research projects and experiments.",
                image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&h=400&fit=crop"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'tween', 0.3 + index * 0.1, 1)}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20 bg-white dark:bg-gray-800"
        id="contact"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="text-3xl font-bold text-center mb-12 dark:text-white"
          >
            Get in Touch
          </motion.h2>

          <motion.div
            variants={fadeIn('up', 'tween', 0.3, 1)}
            className="flex flex-col items-center gap-6"
          >
            <a
              href="tel:+916200413098"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Phone size={24} />
              +91 6200413098
            </a>
            <a
              href="mailto:example@email.com"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Mail size={24} />
              example@email.com
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Linkedin size={24} />
              LinkedIn Profile
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Abhitosh Anand. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-600"
      >
        <ChevronDown className="animate-bounce" />
      </motion.div>
    </div>
  );
}