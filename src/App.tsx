import React, { useState, useEffect } from 'react';
import { Moon, Sun, Flame, Sword, Shield, Crown, Zap, Image, Palette, Users, Clock, MapPin, Phone, Mail, Calendar, Star } from 'lucide-react';

interface Event {
  id: string;
  name: string;
  house: string;
  motto: string;
  description: string;
  coordinators: { name: string; phone: string }[];
  color: string;
  icon: React.ReactNode;
}

const events: Event[] = [
  {
    id: 'data-maze',
    name: 'Data Maze',
    house: 'House Stark',
    motto: 'Winter is Coming',
    description: 'Navigate through complex data structures and algorithms. Only the sharpest minds survive the frozen challenges.',
    coordinators: [
      { name: 'Jon Snow', phone: '+91 98765 43210' },
      { name: 'Arya Stark', phone: '+91 98765 43211' }
    ],
    color: 'from-blue-900 to-slate-800',
    icon: <Sword className="w-8 h-8" />
  },
  {
    id: 'codex',
    name: 'Codex',
    house: 'House Lannister',
    motto: 'Hear Me Roar!',
    description: 'Golden coding challenges that separate the lions from the lambs. Show your programming prowess.',
    coordinators: [
      { name: 'Tyrion Lannister', phone: '+91 98765 43212' },
      { name: 'Jaime Lannister', phone: '+91 98765 43213' }
    ],
    color: 'from-yellow-600 to-red-800',
    icon: <Crown className="w-8 h-8" />
  },
  {
    id: 'slide-storm',
    name: 'Slide Storm',
    house: 'House Targaryen',
    motto: 'Fire and Blood',
    description: 'Present with the fury of dragons. Burn through presentations with passion and power.',
    coordinators: [
      { name: 'Daenerys Targaryen', phone: '+91 98765 43214' },
      { name: 'Viserys Targaryen', phone: '+91 98765 43215' }
    ],
    color: 'from-red-900 to-black',
    icon: <Flame className="w-8 h-8" />
  },
  {
    id: 'proto-spark',
    name: 'Proto Spark',
    house: 'House Baratheon',
    motto: 'Ours is the Fury',
    description: 'Forge prototypes with the strength of storms. Innovation meets determination.',
    coordinators: [
      { name: 'Robert Baratheon', phone: '+91 98765 43216' },
      { name: 'Stannis Baratheon', phone: '+91 98765 43217' }
    ],
    color: 'from-yellow-500 to-orange-800',
    icon: <Zap className="w-8 h-8" />
  },
  {
    id: 'pixel-prompt',
    name: 'Pixel Prompt',
    house: 'House Greyjoy',
    motto: 'What is Dead May Never Die',
    description: 'Dive deep into AI prompting like the depths of the Iron Islands. Master the art of communication with machines.',
    coordinators: [
      { name: 'Theon Greyjoy', phone: '+91 98765 43218' },
      { name: 'Yara Greyjoy', phone: '+91 98765 43219' }
    ],
    color: 'from-teal-800 to-slate-900',
    icon: <Image className="w-8 h-8" />
  },
  {
    id: 'design-sphere',
    name: 'Design Sphere',
    house: 'House Tyrell',
    motto: 'Growing Strong',
    description: 'Bloom with creativity in design challenges. Beauty and functionality intertwined like roses.',
    coordinators: [
      { name: 'Margaery Tyrell', phone: '+91 98765 43220' },
      { name: 'Loras Tyrell', phone: '+91 98765 43221' }
    ],
    color: 'from-green-700 to-yellow-600',
    icon: <Palette className="w-8 h-8" />
  }
];

const coreTeam = [
  { role: 'President', name: 'Akash Kumar Singh O', contact: '+91 98765 43200' },
  { role: 'Vice President', name: 'Poorani S', contact: '+91 98765 43201' },
  { role: 'Treasurer', name: 'Madhan Kumar P', contact: '+91 98765 43202' },
  { role: 'Student Coordinator', name: 'Coordinator 1', contact: '+91 98765 43203' },
  { role: 'Student Coordinator', name: 'Coordinator 2', contact: '+91 98765 43204' },
];

const schedule = [
  { time: '9:00 AM', event: 'Inauguration Ceremony', description: 'Opening ceremony with keynote speech' },
  { time: '10:00 AM', event: 'Data Maze Begins', description: 'House Stark challenges commence' },
  { time: '11:30 AM', event: 'Codex Competition', description: 'House Lannister coding battle' },
  { time: '1:00 PM', event: 'Lunch Break', description: 'Feast fit for kings and queens' },
  { time: '2:00 PM', event: 'Slide Storm', description: 'House Targaryen presentation fury' },
  { time: '3:30 PM', event: 'Proto Spark', description: 'House Baratheon innovation storm' },
  { time: '5:00 PM', event: 'Awards Ceremony', description: 'Crowning the champions of each house' },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [dragonAnimation, setDragonAnimation] = useState(false);

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2025-10-11T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);
  
  const triggerDragonAnimation = () => {
    setDragonAnimation(true);
    setTimeout(() => setDragonAnimation(false), 3000);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const registerUrl = "https://forms.google.com/your-registration-form-url"; // Replace with actual Google Forms URL

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode 
        ? 'bg-gradient-to-b from-slate-900 via-red-950 to-black text-gold-400' 
        : 'bg-gradient-to-b from-amber-50 via-red-50 to-amber-100 text-slate-800'
    }`}>
      
      {/* Dragon Animation Overlay */}
      {dragonAnimation && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div className="animate-pulse">
            <div className="absolute inset-0 bg-red-500/20 animate-ping"></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 animate-bounce">
              <Flame className="w-20 h-20 text-red-500 animate-spin" />
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        darkMode ? 'bg-black/80 backdrop-blur-md border-b border-red-900/30' : 'bg-white/80 backdrop-blur-md border-b border-amber-200'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button 
              onClick={triggerDragonAnimation}
              className="hover:scale-110 transition-transform duration-300"
            >
              <Flame className={`w-8 h-8 ${darkMode ? 'text-red-500' : 'text-red-600'} hover:text-yellow-500 transition-colors`} />
            </button>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-gold-400' : 'text-slate-800'}`} style={{ fontFamily: 'serif' }}>
              DRACARYS 2025
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['about', 'events', 'schedule', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-red-400 transition-colors font-semibold ${
                  darkMode ? 'text-gold-300 hover:text-red-400' : 'text-slate-700 hover:text-red-600'
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              darkMode ? 'bg-gold-400/20 text-gold-400' : 'bg-slate-200 text-slate-600'
            }`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-gradient-to-br from-black via-red-950 to-slate-900' : 'bg-gradient-to-br from-amber-100 via-red-100 to-yellow-50'
      }`}>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 ${darkMode ? 'bg-red-500' : 'bg-amber-600'} rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${
            darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-600' 
            : 'text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-600 to-red-700'
          }`} style={{ fontFamily: 'serif' }}>
            DRACARYS 2025
          </h1>
          
          <h2 className={`text-2xl md:text-4xl mb-8 font-semibold ${
            darkMode ? 'text-gold-300' : 'text-slate-700'
          }`}>
            Fire and Blood Meets Innovation
          </h2>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className={`text-xl mb-6 ${darkMode ? 'text-gold-400' : 'text-slate-600'}`}>
              The Great War Begins In:
            </h3>
            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className={`${
                  darkMode ? 'bg-black/50 border-red-900/50' : 'bg-white/50 border-amber-300'
                } border-2 rounded-lg p-4 backdrop-blur-sm`}>
                  <div className={`text-3xl font-bold ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                    {value}
                  </div>
                  <div className={`text-sm capitalize ${darkMode ? 'text-gold-300' : 'text-slate-600'}`}>
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 transform ${
                darkMode 
                  ? 'bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-500 hover:to-red-700 shadow-lg shadow-red-900/50' 
                  : 'bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-400 hover:to-red-600 shadow-lg shadow-red-500/50'
              }`}
            >
              🔥 Join the War - Register Now
            </a>
            <button
              onClick={() => scrollToSection('events')}
              className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 transform border-2 ${
                darkMode 
                  ? 'border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black' 
                  : 'border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white'
              }`}
            >
              ⚔️ Explore Events
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${
        darkMode ? 'bg-gradient-to-r from-slate-900 to-red-950' : 'bg-gradient-to-r from-amber-50 to-red-50'
      }`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className={`text-4xl md:text-6xl font-bold text-center mb-16 ${
            darkMode ? 'text-gold-400' : 'text-slate-800'
          }`} style={{ fontFamily: 'serif' }}>
            The Great Houses Unite
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${
                darkMode ? 'text-red-400' : 'text-red-600'
              }`}>
                Department of Artificial Intelligence & Data Science
              </h3>
              <p className={`text-lg leading-relaxed mb-6 ${
                darkMode ? 'text-gold-200' : 'text-slate-700'
              }`}>
                In the realm of technology, where data flows like rivers and algorithms reign supreme, 
                we gather the greatest minds to forge the future. DRACARYS 2025 is not merely a symposium—it is 
                a convergence of innovation, creativity, and collaboration.
              </p>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gold-200' : 'text-slate-700'
              }`}>
                Like the great houses of Westeros, each event challenges different aspects of your skills, 
                testing your mettle in the fires of competition and emerging stronger through fellowship.
              </p>
            </div>
            <div className={`${
              darkMode ? 'bg-black/30 border-red-900/50' : 'bg-white/30 border-amber-300'
            } border-2 rounded-lg p-8 backdrop-blur-sm`}>
              <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gold-400' : 'text-slate-800'}`}>
                The Small Council
              </h4>
              <div className="space-y-4">
                {coreTeam.map((member, index) => (
                  <div key={index} className={`flex justify-between items-center p-3 rounded ${
                    darkMode ? 'bg-red-900/20' : 'bg-amber-100/50'
                  }`}>
                    <div>
                      <div className={`font-semibold ${darkMode ? 'text-gold-300' : 'text-slate-800'}`}>
                        {member.name}
                      </div>
                      <div className={`text-sm ${darkMode ? 'text-gold-400' : 'text-slate-600'}`}>
                        {member.role}
                      </div>
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                      {member.contact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className={`py-20 ${
        darkMode ? 'bg-gradient-to-b from-black to-slate-900' : 'bg-gradient-to-b from-white to-amber-50'
      }`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className={`text-4xl md:text-6xl font-bold text-center mb-16 ${
            darkMode ? 'text-gold-400' : 'text-slate-800'
          }`} style={{ fontFamily: 'serif' }}>
            The Six Great Houses
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className={`group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 transform ${
                  darkMode ? 'bg-black/50 border border-red-900/30 hover:border-gold-400/50' : 'bg-white/50 border border-amber-200 hover:border-red-400/50'
                } backdrop-blur-sm hover:shadow-2xl`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                <div className="relative p-6 z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full ${darkMode ? 'bg-gold-400/20' : 'bg-amber-200/50'}`}>
                      {event.icon}
                    </div>
                    <div className={`text-right text-sm ${darkMode ? 'text-gold-300' : 'text-slate-600'}`}>
                      {event.house}
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                    {event.name}
                  </h3>
                  
                  <p className={`text-sm font-semibold mb-3 italic ${darkMode ? 'text-gold-400' : 'text-amber-600'}`}>
                    "{event.motto}"
                  </p>
                  
                  <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gold-200' : 'text-slate-700'}`}>
                    {event.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gold-300' : 'text-slate-800'}`}>
                      Coordinators:
                    </h4>
                    {event.coordinators.map((coordinator, index) => (
                      <div key={index} className={`text-sm flex justify-between ${darkMode ? 'text-gold-200' : 'text-slate-600'}`}>
                        <span>{coordinator.name}</span>
                        <span className="font-mono">{coordinator.phone}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform ${
                      darkMode 
                        ? 'bg-red-600 text-white hover:bg-red-500' 
                        : 'bg-red-500 text-white hover:bg-red-400'
                    }`}
                  >
                    Join This House
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className={`py-20 ${
        darkMode ? 'bg-gradient-to-r from-red-950 to-black' : 'bg-gradient-to-r from-red-50 to-amber-50'
      }`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className={`text-4xl md:text-6xl font-bold text-center mb-16 ${
            darkMode ? 'text-gold-400' : 'text-slate-800'
          }`} style={{ fontFamily: 'serif' }}>
            The Battle Timeline
          </h2>
          
          <div className={`relative ${
            darkMode ? 'bg-black/30 border-red-900/50' : 'bg-white/30 border-amber-300'
          } border-2 rounded-lg p-8 backdrop-blur-sm`}>
            <div className="space-y-8">
              {schedule.map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className={`flex-shrink-0 w-20 text-center ${
                    darkMode ? 'text-red-400' : 'text-red-600'
                  } font-bold text-lg`}>
                    {item.time}
                  </div>
                  <div className="flex-grow">
                    <h3 className={`text-xl font-bold mb-2 ${
                      darkMode ? 'text-gold-300' : 'text-slate-800'
                    } group-hover:text-red-500 transition-colors`}>
                      {item.event}
                    </h3>
                    <p className={`${darkMode ? 'text-gold-200' : 'text-slate-600'}`}>
                      {item.description}
                    </p>
                  </div>
                  <div className={`w-4 h-4 rounded-full ${
                    darkMode ? 'bg-red-500' : 'bg-red-400'
                  } group-hover:scale-125 transition-transform`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${
        darkMode ? 'bg-gradient-to-b from-slate-900 to-black' : 'bg-gradient-to-b from-amber-50 to-white'
      }`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className={`text-4xl md:text-6xl font-bold text-center mb-16 ${
            darkMode ? 'text-gold-400' : 'text-slate-800'
          }`} style={{ fontFamily: 'serif' }}>
            Summon the Ravens
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`${
              darkMode ? 'bg-black/30 border-red-900/50' : 'bg-white/30 border-amber-300'
            } border-2 rounded-lg p-8 backdrop-blur-sm`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                The Citadel
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className={`w-6 h-6 ${darkMode ? 'text-gold-400' : 'text-amber-600'}`} />
                  <div>
                    <div className={`font-semibold ${darkMode ? 'text-gold-300' : 'text-slate-800'}`}>
                      Department of Artificial Intelligence & Data Science
                    </div>
                    <div className={`${darkMode ? 'text-gold-200' : 'text-slate-600'}`}>
                      [Your College Name], [City]
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className={`w-6 h-6 ${darkMode ? 'text-gold-400' : 'text-amber-600'}`} />
                  <div>
                    <div className={`font-semibold ${darkMode ? 'text-gold-300' : 'text-slate-800'}`}>
                      October 11, 2025
                    </div>
                    <div className={`${darkMode ? 'text-gold-200' : 'text-slate-600'}`}>
                      The day of reckoning arrives
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${
              darkMode ? 'bg-black/30 border-red-900/50' : 'bg-white/30 border-amber-300'
            } border-2 rounded-lg p-8 backdrop-blur-sm`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                The Maesters
              </h3>
              <div className="space-y-4">
                {coreTeam.slice(0, 3).map((member, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Phone className={`w-5 h-5 ${darkMode ? 'text-gold-400' : 'text-amber-600'}`} />
                    <div>
                      <div className={`font-semibold ${darkMode ? 'text-gold-300' : 'text-slate-800'}`}>
                        {member.name} ({member.role})
                      </div>
                      <div className={`${darkMode ? 'text-gold-200' : 'text-slate-600'}`}>
                        {member.contact}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <a
              href={registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-12 py-6 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105 transform ${
                darkMode 
                  ? 'bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-500 hover:to-red-700 shadow-lg shadow-red-900/50' 
                  : 'bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-400 hover:to-red-600 shadow-lg shadow-red-500/50'
              }`}
            >
              🐉 Claim Your Throne - Register Now
            </a>
            <p className={`mt-4 text-sm ${darkMode ? 'text-gold-300' : 'text-slate-600'}`}>
              "When you play the game of innovation, you win or you learn."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center ${
        darkMode ? 'bg-black border-t border-red-900/30 text-gold-400' : 'bg-white border-t border-amber-200 text-slate-600'
      }`}>
        <p className="text-sm">
          © 2025 DRACARYS - Department of Artificial Intelligence & Data Science. 
          <span className="italic"> "Fire cannot kill a dragon." </span>
        </p>
      </footer>
    </div>
  );
}

export default App;