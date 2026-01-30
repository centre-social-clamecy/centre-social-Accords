import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Menu, 
  X,
  Facebook,
  ChevronRight,
  Users,
  Info,
  Calendar,
  Smile,
  Zap,
  BookOpen,
  Star,
  Heart,
  Music,
  Coffee
} from 'lucide-react';

// --- Composant Logo Reconstruit (Fidèle à l'image) ---
const Logo = ({ light = false }: { light?: boolean }) => (
  <div className="flex flex-col items-center cursor-pointer group select-none">
    {/* Le Carré Bleu */}
    <div className="w-[4.5rem] h-[4.5rem] bg-[#2563eb] rounded-sm flex flex-col items-center justify-center relative shadow-md overflow-hidden transition-transform group-hover:scale-105 duration-300">
      
      {/* Contenu Texte */}
      <div className="flex flex-col items-center justify-center h-full pb-2 z-10">
        <span className="text-white font-normal text-[10px] leading-none tracking-wide font-sans mb-[2px]">accords</span>
        <span className="text-white font-normal text-[9px] leading-none tracking-wide font-sans mb-[2px]">de</span>
        <div className="flex items-center leading-none">
          <span className="text-white font-bold text-[18px] tracking-wide font-sans">L</span>
          {/* Le rond vert */}
          <div className="w-[14px] h-[14px] bg-[#8bc53f] rounded-full mx-[1px] mt-[2px]"></div>
          <span className="text-white font-bold text-[18px] tracking-wide font-sans">ire</span>
        </div>
      </div>

      {/* Motif Vague en bas (Grille abstraite) */}
      <div className="absolute bottom-0 left-0 w-full h-5 opacity-40">
         <svg viewBox="0 0 100 20" className="w-full h-full text-white fill-current">
            <path d="M0,20 C30,20 20,0 50,0 C80,0 70,20 100,20 L100,20 L0,20 Z" />
         </svg>
      </div>
    </div>
    
    {/* Texte en dessous */}
    <span className={`text-[10px] mt-1.5 font-bold tracking-[0.2em] uppercase ${light ? 'text-white/90' : 'text-[#2563eb]'}`}>
      Centre Social
    </span>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'enfance', label: 'Enfance' },
    { id: 'jeunes', label: 'Jeunesse' },
    { id: 'familles', label: 'Famille' },
    { id: 'actions', label: 'Actions' },
    { id: 'contact', label: 'Contact' }
  ];

  // --- Composants de mise en page ---

  const Navigation = () => (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md text-[#00158a] px-4 md:px-6 py-2 shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20">
        <div className="flex items-center space-x-6 cursor-pointer" onClick={() => setCurrentPage('accueil')}>
          <Logo />
          <div className="hidden sm:flex flex-col border-l-2 border-gray-100 pl-6 h-12 justify-center">
             <h1 className="font-black uppercase tracking-tight text-[#00158a] text-lg md:text-xl leading-none">Accords de Loire</h1>
             <p className="text-[10px] font-bold text-[#8bc53f] uppercase tracking-widest mt-1">Nevers — Le Centre des Possibles</p>
          </div>
        </div>
        
        {/* Menu Bureau */}
        <div className="hidden lg:flex space-x-1 bg-gray-50 p-1 rounded-full border border-gray-100">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`text-[11px] font-bold uppercase tracking-wider transition-all py-3 px-6 rounded-full ${currentPage === link.id ? 'bg-[#00158a] text-white shadow-md transform scale-105' : 'hover:bg-gray-200 text-gray-600'}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Bouton Menu Mobile */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden hover:scale-110 transition-transform p-3 bg-gray-50 rounded-full text-[#00158a] border border-gray-200">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile Compact Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[85px] right-4 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 p-4 flex flex-col z-40 lg:hidden animate-fade-in origin-top-right">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => {setCurrentPage(link.id); setIsMenuOpen(false)}} 
                className={`text-left px-4 py-3 rounded-xl font-bold uppercase text-xs tracking-widest transition-all ${currentPage === link.id ? 'bg-[#00158a] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 text-center">
             <button onClick={() => setIsMenuOpen(false)} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#00158a]">Fermer</button>
          </div>
        </div>
      )}
    </nav>
  );

  const SectionHeader = ({ title, subtitle, color = "text-[#00158a]", align = "left" }: { title: string, subtitle: string, color?: string, align?: "left" | "center" }) => (
    <div className={`mb-16 md:mb-24 animate-slide-up-fade ${align === 'center' ? 'text-center flex flex-col items-center' : ''}`}>
      <h2 className={`text-5xl md:text-8xl font-black uppercase tracking-tighter ${color} leading-[0.85] mb-6 italic`}>
        {title}
      </h2>
      <div className={`flex items-center ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="w-16 h-2 bg-[#8bc53f] mr-4 rounded-full"></div>
        <p className={`text-sm md:text-lg font-bold uppercase tracking-[0.2em] ${color === 'text-white' ? 'text-white/80' : 'text-gray-500'} italic`}>{subtitle}</p>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-[#111] py-20 px-6 text-white overflow-hidden relative border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
        <div>
          <div className="mb-8 inline-block bg-white p-4 rounded-xl shadow-lg">
             <Logo />
          </div>
          <p className="text-gray-400 font-medium text-sm leading-relaxed max-w-xs">
            Un lieu d'échange, de partage et de solidarité. Le Centre Social Accords de Loire est au cœur de la vie de quartier à Nevers.
          </p>
        </div>
        <div>
          <h4 className="font-black uppercase text-[#fff200] mb-8 italic tracking-[0.2em] text-sm">Navigation</h4>
          <ul className="space-y-4 font-bold uppercase text-xs tracking-widest text-gray-500">
            {navLinks.map(link => (
              <li key={link.id} className="hover:text-white cursor-pointer transition-colors flex items-center group" onClick={() => setCurrentPage(link.id)}>
                <ChevronRight size={14} className="mr-2 text-[#8bc53f] group-hover:translate-x-1 transition-transform" /> {link.label}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-black uppercase text-[#fff200] mb-8 italic tracking-[0.2em] text-sm">Nous trouver</h4>
          <p className="flex items-center text-gray-400 mb-4"><MapPin className="mr-3 text-[#00158a] fill-white" size={18}/> 36 Rue Bernard Palissy, 58000 Nevers</p>
          <p className="flex items-center text-gray-400 mb-8"><Phone className="mr-3 text-[#00158a] fill-white" size={18}/> 03 86 61 44 27</p>
          
          <a href="#" className="inline-flex items-center space-x-2 bg-[#1877F2] hover:bg-[#166fe5] text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all">
            <Facebook size={18} /> <span>Suivez-nous</span>
          </a>
        </div>
      </div>
      <div className="mt-20 pt-10 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-600">
        <span>© 2026 Centre Social Accords de Loire</span>
        <span className="mt-2 md:mt-0">Designé pour Nevers</span>
      </div>
    </footer>
  );

  // --- Pages ---

  const HomePage = () => (
    <div className="min-h-screen pt-24 animate-fade-in">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] md:h-[80vh] bg-[#00158a] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            alt="Vie de quartier"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00158a] via-[#00158a]/80 to-transparent"></div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center z-10 pb-20">
          <div className="animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center bg-[#fff200] text-[#00158a] px-4 py-2 text-[10px] font-black uppercase tracking-widest mb-8 rounded-full shadow-lg transform -rotate-1">
              <Star size={12} className="mr-2" /> Le Centre des Possibles
            </div>
          </div>
          <div className="animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight mb-8 drop-shadow-2xl">
              Centre Social <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc53f] to-[#fff200]">Accords de Loire</span>
            </h1>
          </div>
          {/* DESCRIPTION AVEC FOND BLEU ET BLUR POUR LISIBILITE */}
          <div className="animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>
            <div className="bg-[#00158a]/60 backdrop-blur-md p-6 md:p-8 rounded-r-3xl border-l-8 border-[#8bc53f] max-w-2xl mb-12 shadow-2xl">
              <p className="text-white text-xl md:text-2xl font-medium leading-relaxed">
                Un lieu d'accueil chaleureux, de partage et de solidarité pour dynamiser notre quartier et soutenir vos projets.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => setCurrentPage('actions')}
              className="bg-[#8bc53f] text-white px-10 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-[#7ab035] transition-all shadow-xl rounded-sm flex items-center justify-center group"
            >
              Nos Actions <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-[#00158a] px-10 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-gray-100 transition-all shadow-xl rounded-sm border-2 border-transparent hover:border-[#00158a]"
            >
              Nous Rejoindre
            </button>
          </div>
        </div>

        {/* Decorative Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white clip-path-slant"></div>
      </section>

      {/* Cards Section */}
      <section className="relative z-20 py-16 px-4 pb-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 'enfance', title: 'Enfance', img: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=800', color: 'bg-[#fff200]', text: 'text-[#00158a]', desc: 'Loisirs créatifs et éducatifs.' },
            { id: 'jeunes', title: 'Jeunesse', img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800', color: 'bg-[#00158a]', text: 'text-white', desc: 'Orientation et projets.' },
            { id: 'familles', title: 'Famille', img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=800', color: 'bg-white', text: 'text-[#00158a]', desc: 'Sorties et parentalité.' }
          ].map((card, i) => (
            <div 
              key={card.id}
              onClick={() => setCurrentPage(card.id)}
              className={`${card.color} p-8 rounded-3xl shadow-2xl cursor-pointer group hover:-translate-y-4 transition-all duration-300 flex flex-col h-[400px] justify-between relative overflow-hidden`}
            >
              <div className="relative z-10">
                <h3 className={`text-4xl font-black uppercase italic tracking-tighter ${card.text} leading-none mb-4`}>{card.title}</h3>
                <p className={`font-bold text-sm uppercase tracking-wide ${card.text === 'text-white' ? 'text-white/70' : 'text-gray-500'}`}>{card.desc}</p>
              </div>
              <div className="h-48 w-full rounded-2xl overflow-hidden shadow-inner mt-auto relative z-10">
                 <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 ${card.text === 'text-white' ? 'bg-white' : 'bg-[#00158a]'}`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro Text - FOND CLAIR AJOUTÉ ICI */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16">
          <div className="flex-1">
             <h2 className="text-4xl md:text-6xl font-black uppercase text-[#00158a] tracking-tighter leading-none mb-8 italic">
               Au Cœur <br /> du Quartier
             </h2>
             <p className="text-lg text-gray-600 leading-relaxed font-medium">
               Situé rue Bernard Palissy, Accords de Loire est bien plus qu'un centre social. C'est un espace de vie où chaque habitant peut trouver une écoute, participer à des activités ou monter ses propres projets. De la petite enfance aux seniors, nous tissons les liens de demain.
             </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
             <div className="bg-white border border-gray-100 p-8 rounded-3xl text-center shadow-sm">
                <span className="block text-5xl font-black text-[#8bc53f] mb-2">30+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Partenaires</span>
             </div>
             <div className="bg-[#fff200] p-8 rounded-3xl text-center shadow-md">
                <span className="block text-5xl font-black text-[#00158a] mb-2">365</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#00158a]">Jours d'actions</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );

  const EnfancePage = () => (
    <div className="pt-32 pb-20 px-4 md:px-6 bg-blue-50/50 min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="ENFANCE 3-14 ANS" subtitle="Apprendre, jouer et grandir ensemble" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7 relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px] md:h-[500px] relative group">
              <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Enfants" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00158a] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <span className="bg-[#fff200] text-[#00158a] px-3 py-1 text-xs font-black uppercase tracking-widest rounded-sm mb-3 inline-block">Centre de Loisirs</span>
                <p className="text-3xl font-black uppercase italic tracking-tight">Mercredis & Vacances</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-[#8bc53f]">
              <Calendar className="text-[#00158a] mb-4 w-10 h-10" />
              <h3 className="text-2xl font-black uppercase text-[#00158a] mb-2">Les Mercredis</h3>
              <p className="text-gray-600 font-medium text-sm">Accueil à la journée ou demi-journée. Repas possible sur place. Activités manuelles, sportives et culturelles adaptées à chaque tranche d'âge.</p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs font-bold uppercase text-gray-400">Horaires</span>
                <span className="font-black text-[#00158a]">7h30 — 18h30</span>
              </div>
            </div>
            <div className="bg-[#00158a] p-8 rounded-3xl shadow-lg text-white">
              <Smile className="text-[#fff200] mb-4 w-10 h-10" />
              <h3 className="text-2xl font-black uppercase text-white mb-2">Vacances Scolaires</h3>
              <p className="text-white/80 font-medium text-sm">Des thématiques variées à chaque période de vacances. Sorties, mini-camps et grands jeux pour créer des souvenirs inoubliables.</p>
            </div>
          </div>
        </div>

        {/* CLAS Section */}
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
             <h3 className="text-4xl md:text-5xl font-black uppercase text-[#00158a] tracking-tighter mb-6 italic">Accompagnement à la Scolarité (CLAS)</h3>
             <p className="text-lg text-gray-600 mb-8 font-medium">Pour les enfants du primaire et du collège. Une aide aux devoirs, mais surtout un apport méthodologique et une ouverture culturelle pour redonner le goût d'apprendre.</p>
             <button className="bg-[#fff200] text-[#00158a] px-8 py-4 font-black uppercase text-xs tracking-widest rounded-full hover:bg-[#ffe600] transition-colors">
               Inscrire mon enfant
             </button>
          </div>
          <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gray-100 skew-x-12 translate-x-12 hidden md:block"></div>
          <BookOpen className="absolute right-20 bottom-20 text-[#00158a]/10 w-64 h-64 hidden md:block" />
        </div>
      </div>
    </div>
  );

  const JeunesPage = () => (
    <div className="pt-32 pb-20 px-4 md:px-6 bg-[#111] min-h-screen text-white animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="ESPACE JEUNESSE 15-25" subtitle="Construire ton avenir, vivre tes passions" color="text-white" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-[#00158a] rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group">
            <div className="relative z-10">
               <h3 className="text-5xl font-black uppercase text-[#fff200] tracking-tighter mb-2 italic">PIJ</h3>
               <p className="text-xl font-bold uppercase tracking-widest mb-8">Point Information Jeunesse</p>
               <ul className="space-y-6">
                 {['Orientation Scolaire', 'Jobs d\'été & Emploi', 'Logement & Santé', 'Mobilité Internationale'].map((item, i) => (
                   <li key={i} className="flex items-center text-lg font-bold border-b border-white/20 pb-2">
                     <ChevronRight className="text-[#fff200] mr-4" size={20} /> {item}
                   </li>
                 ))}
               </ul>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#fff200] rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
          </div>

          <div className="flex flex-col gap-6">
             <div className="bg-white text-black p-10 rounded-[2.5rem] flex-1">
                <Zap className="text-[#00158a] w-12 h-12 mb-6" />
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-[#00158a]">Projets Jeunes</h3>
                <p className="text-gray-600 font-medium">Tu as une idée ? Un projet de voyage, de création d'association ou un événement ? Nous t'accompagnons dans le montage du dossier et la recherche de financements.</p>
             </div>
             <div className="bg-[#222] border border-white/10 p-10 rounded-[2.5rem] flex-1">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Loisirs Ados</h3>
                <p className="text-gray-400 font-medium mb-6">Sorties, soirées, séjours... Le programme est construit AVEC vous.</p>
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#222] bg-gray-800 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-[#222] bg-[#fff200] flex items-center justify-center text-[#00158a] font-black text-xs">
                    +20
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FamillesPage = () => (
    <div className="pt-32 pb-20 px-4 md:px-6 bg-white min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="ESPACE FAMILLE" subtitle="Des moments privilégiés à partager" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Card 1 */}
           <div className="group">
             <div className="h-64 overflow-hidden rounded-t-[2rem] relative">
               <img src="https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="LAEP" />
               <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-[#00158a]">
                 <Heart size={20} fill="#00158a" />
               </div>
             </div>
             <div className="bg-gray-50 p-8 rounded-b-[2rem] border-t-0 border-2 border-gray-50 group-hover:border-[#00158a] transition-colors">
               <h3 className="text-2xl font-black uppercase text-[#00158a] mb-3 italic">LAEP</h3>
               <p className="text-xs font-bold text-[#8bc53f] uppercase tracking-widest mb-4">Lieu d'Accueil Enfants Parents</p>
               <p className="text-gray-600 text-sm leading-relaxed">Pour les 0-6 ans. Un espace de jeu libre et de parole, anonyme et gratuit, pour rencontrer d'autres parents et favoriser l'éveil de votre enfant.</p>
             </div>
           </div>

           {/* Card 2 */}
           <div className="group md:mt-12">
             <div className="h-64 overflow-hidden rounded-t-[2rem] relative">
               <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Cuisine" />
               <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-[#00158a]">
                 <Coffee size={20} />
               </div>
             </div>
             <div className="bg-gray-50 p-8 rounded-b-[2rem] border-t-0 border-2 border-gray-50 group-hover:border-[#00158a] transition-colors">
               <h3 className="text-2xl font-black uppercase text-[#00158a] mb-3 italic">Ateliers Cuisine</h3>
               <p className="text-xs font-bold text-[#8bc53f] uppercase tracking-widest mb-4">Partage & Saveurs</p>
               <p className="text-gray-600 text-sm leading-relaxed">Venez échanger vos recettes, astuces et savoir-faire lors de moments conviviaux. Les ateliers sont suivis d'un repas partagé.</p>
             </div>
           </div>

           {/* Card 3 */}
           <div className="group">
             <div className="h-64 overflow-hidden rounded-t-[2rem] relative">
               <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Sorties" />
               <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-[#00158a]">
                 <Users size={20} />
               </div>
             </div>
             <div className="bg-gray-50 p-8 rounded-b-[2rem] border-t-0 border-2 border-gray-50 group-hover:border-[#00158a] transition-colors">
               <h3 className="text-2xl font-black uppercase text-[#00158a] mb-3 italic">Sorties Familles</h3>
               <p className="text-xs font-bold text-[#8bc53f] uppercase tracking-widest mb-4">Découverte & Loisirs</p>
               <p className="text-gray-600 text-sm leading-relaxed">Journées à la mer, parcs d'attractions, visites culturelles... Des tarifs adaptés pour permettre à tous de s'évader.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );

  const ActionsPage = () => (
    <div className="pt-32 pb-20 px-4 md:px-6 bg-[#f0f9ff] min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="NOS ACTIONS" subtitle="Solidarité et Accompagnement au quotidien" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Inclusion Numérique */}
          <div className="bg-white p-12 rounded-[3rem] shadow-xl">
            <div className="w-16 h-16 bg-[#e0f2fe] rounded-2xl flex items-center justify-center text-[#00158a] mb-8">
              <BookOpen size={32} />
            </div>
            <h3 className="text-4xl font-black uppercase text-[#00158a] mb-6 italic tracking-tight">Inclusion Numérique</h3>
            <p className="text-gray-600 mb-8 font-medium">Ne restez pas seul face aux écrans. Nous vous proposons un accompagnement personnalisé pour vos démarches en ligne et l'apprentissage des outils informatiques.</p>
            <ul className="space-y-4">
              {['Accès aux droits (CAF, Ameli, Pôle Emploi)', 'Ateliers débutants (Mail, Internet)', 'Conseiller Numérique France Services'].map((item, i) => (
                <li key={i} className="flex items-center text-sm font-bold text-gray-800 bg-gray-50 p-3 rounded-lg">
                  <div className="w-2 h-2 bg-[#8bc53f] rounded-full mr-4"></div> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Vie Associative */}
          <div className="bg-[#00158a] p-12 rounded-[3rem] shadow-xl text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#fff200] mb-8">
                <Users size={32} />
              </div>
              <h3 className="text-4xl font-black uppercase text-white mb-6 italic tracking-tight">Vie de Quartier</h3>
              <p className="text-white/80 mb-8 font-medium">Le centre social soutient les initiatives des habitants. Bénévolat, jardins partagés, fêtes de quartier... C'est vous qui faites vivre Accords de Loire.</p>
              <button className="border-2 border-[#fff200] text-[#fff200] px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#fff200] hover:text-[#00158a] transition-all">
                Devenir Bénévole
              </button>
            </div>
            <Music className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 rotate-12" />
          </div>
        </div>

        {/* Permanences */}
        <div className="mt-12 bg-white rounded-3xl p-10 border border-gray-100">
           <h3 className="text-2xl font-black uppercase text-[#00158a] mb-8 flex items-center">
             <Info className="mr-3" /> Nos Permanences
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="border-l-4 border-[#8bc53f] pl-6">
               <h4 className="font-bold text-lg mb-1">Médiation Sociale</h4>
               <p className="text-sm text-gray-500">Aide à la résolution de conflits et au dialogue.</p>
               <p className="text-xs font-bold text-[#00158a] mt-2">Sur rendez-vous</p>
             </div>
             <div className="border-l-4 border-[#fff200] pl-6">
               <h4 className="font-bold text-lg mb-1">Écrivain Public</h4>
               <p className="text-sm text-gray-500">Aide à la rédaction de courriers et dossiers.</p>
               <p className="text-xs font-bold text-[#00158a] mt-2">Mardi matin</p>
             </div>
             <div className="border-l-4 border-[#00158a] pl-6">
               <h4 className="font-bold text-lg mb-1">Assistant Social</h4>
               <p className="text-sm text-gray-500">Accompagnement dans les difficultés du quotidien.</p>
               <p className="text-xs font-bold text-[#00158a] mt-2">Jeudi après-midi</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="pt-32 pb-20 px-4 md:px-6 bg-[#f8fafc] min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="CONTACTEZ-NOUS" subtitle="Une question ? Besoin d'un renseignement ?" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
           {/* Info Block */}
           <div className="space-y-8">
             <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-6">
                   <div className="bg-[#e0f2fe] p-4 rounded-xl text-[#00158a]">
                      <MapPin size={32} />
                   </div>
                   <div>
                      <h4 className="text-xl font-black uppercase text-[#00158a] mb-2 tracking-tight">Nous trouver</h4>
                      <p className="text-gray-600 font-medium text-lg">36 Rue Bernard Palissy<br/>58000 Nevers</p>
                   </div>
                </div>
             </div>

             <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-6">
                   <div className="bg-[#fefce8] p-4 rounded-xl text-[#ca8a04]">
                      <Phone size={32} />
                   </div>
                   <div>
                      <h4 className="text-xl font-black uppercase text-[#00158a] mb-2 tracking-tight">Par téléphone</h4>
                      <p className="text-gray-600 font-medium text-lg">03 86 61 44 27</p>
                      <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-bold">Du Lundi au Vendredi</p>
                   </div>
                </div>
             </div>

             <div className="bg-[#00158a] text-white p-10 rounded-[2rem] shadow-xl">
               <h4 className="text-xl font-black uppercase mb-6 tracking-tight">Horaires d'ouverture</h4>
               <div className="space-y-3 font-medium text-sm">
                 <div className="flex justify-between border-b border-white/20 pb-2">
                   <span>Lundi</span> <span>13h30 - 18h00</span>
                 </div>
                 <div className="flex justify-between border-b border-white/20 pb-2">
                   <span>Mar - Ven</span> <span>8h30 - 12h00 / 13h30 - 18h00</span>
                 </div>
               </div>
             </div>
           </div>

           {/* Form Block */}
           <div className="bg-white p-12 rounded-[3rem] shadow-xl">
             <h3 className="text-3xl font-black uppercase text-[#00158a] mb-8 italic tracking-tighter">Envoyer un message</h3>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Nom</label>
                   <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 font-bold text-[#00158a] focus:outline-none focus:border-[#00158a] transition-colors" />
                 </div>
                 <div>
                   <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Prénom</label>
                   <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 font-bold text-[#00158a] focus:outline-none focus:border-[#00158a] transition-colors" />
                 </div>
               </div>
               <div>
                 <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Email</label>
                 <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 font-bold text-[#00158a] focus:outline-none focus:border-[#00158a] transition-colors" />
               </div>
               <div>
                 <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Message</label>
                 <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 font-bold text-[#00158a] focus:outline-none focus:border-[#00158a] transition-colors resize-none"></textarea>
               </div>
               <button className="w-full bg-[#8bc53f] text-white font-black uppercase py-5 rounded-xl tracking-[0.2em] hover:bg-[#7ab035] transition-colors shadow-lg mt-4">
                 Envoyer
               </button>
             </form>
           </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans antialiased text-gray-900 selection:bg-[#fff200] selection:text-[#00158a]">
      <Navigation />
      <main>
        {currentPage === 'accueil' && <HomePage />}
        {currentPage === 'enfance' && <EnfancePage />}
        {currentPage === 'jeunes' && <JeunesPage />}
        {currentPage === 'familles' && <FamillesPage />}
        {currentPage === 'actions' && <ActionsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
      
      {/* Global Styles for Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-up-fade {
          animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .clip-path-slant {
          clip-path: polygon(0 40%, 100% 0, 100% 100%, 0% 100%);
        }
      `}} />
    </div>
  );
};

export default App;