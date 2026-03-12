/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Wind, 
  Moon, 
  Sun, 
  CloudRain, 
  Shield, 
  Sparkles, 
  Compass, 
  Download, 
  ChevronRight, 
  ArrowLeft,
  Quote,
  BookOpen,
  Fingerprint
} from 'lucide-react';
import { guides, Guide, Meditation, TappingScript, AffirmationCategory, JournalItem } from './constants';
import { cn } from './lib/utils';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const AffirmationCard = ({ category, onClick }: { category: AffirmationCategory; onClick: () => void }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-[40px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-warm-accent/5 flex flex-col h-full text-center overflow-hidden"
    >
      {category.imageUrl ? (
        <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6">
          <img 
            src={category.imageUrl} 
            alt={category.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <div className="w-16 h-16 bg-warm-accent/5 rounded-2xl flex items-center justify-center text-warm-accent mx-auto mb-6 group-hover:bg-warm-accent group-hover:text-white transition-all duration-500">
          <Sparkles size={32} />
        </div>
      )}
      <h3 className="text-2xl font-serif font-bold mb-4 text-warm-ink group-hover:text-warm-accent transition-colors">
        {category.title}
      </h3>
      <p className="text-sm text-warm-ink/50 italic leading-relaxed mb-6">
        {category.description}
      </p>
      <div className="mt-auto flex items-center justify-center text-warm-accent font-semibold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
        Ver afirmaciones <ChevronRight className="ml-1 w-3 h-3" />
      </div>
    </motion.div>
  );
};

const MeditationCard = ({ item, type, onClick }: { item: Meditation | TappingScript | JournalItem; type: 'meditation' | 'tapping' | 'affirmations' | 'journal'; onClick: () => void }) => {
  const isMeditation = type === 'meditation';
  const isJournal = type === 'journal';
  const med = item as Meditation;
  const tap = item as TappingScript;
  const journal = item as JournalItem;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-[40px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-warm-accent/5 flex flex-col h-full"
    >
      <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6">
        {(isMeditation || tap.imageUrl || isJournal || item.imageUrl) ? (
          <img
            src={item.imageUrl || (isMeditation ? `https://picsum.photos/seed/${med.imageSeed}/800/1000` : (isJournal ? `https://picsum.photos/seed/journal-${journal.day}/800/1000` : tap.imageUrl))}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full bg-warm-soft flex items-center justify-center group-hover:bg-warm-accent/5 transition-colors duration-500">
            <Fingerprint className="w-20 h-20 text-warm-accent/20 group-hover:text-warm-accent/40 transition-colors" />
          </div>
        )}
        <div className="absolute inset-0 bg-warm-accent/10 group-hover:bg-transparent transition-colors duration-500" />
        <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-warm-accent shadow-sm">
          <span className="text-xs font-bold">{item.id}</span>
        </div>
      </div>
      <div className="px-2 pb-2">
        <h3 className="text-xl font-serif font-bold mb-3 leading-tight text-warm-ink group-hover:text-warm-accent transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-warm-ink/50 italic line-clamp-2 leading-relaxed mb-4">
          {isMeditation ? med.intention : (isJournal ? 'Plantilla diaria de gratitud' : tap.whenToUse)}
        </p>
        <div className="flex items-center text-warm-accent font-semibold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
          {isJournal ? 'Abrir plantilla' : 'Explorar práctica'} <ChevronRight className="ml-1 w-3 h-3" />
        </div>
      </div>
    </motion.div>
  );
};

const TappingPointsMap = () => (
  <div className="relative w-full max-w-lg mx-auto aspect-square bg-warm-soft rounded-[40px] p-8 border border-warm-accent/5">
    <div className="absolute inset-0 flex items-center justify-center opacity-10">
      <Fingerprint className="w-64 h-64 text-warm-accent" />
    </div>
    <div className="relative z-10 h-full flex flex-col justify-between items-center py-4">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-warm-accent mb-2 shadow-sm" />
        <span className="text-[10px] uppercase tracking-widest font-bold text-warm-accent">Coronilla</span>
      </div>
      
      <div className="w-full flex justify-between px-4">
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-warm-accent mb-2 shadow-sm" />
          <span className="text-[10px] uppercase tracking-widest font-bold text-warm-accent">Ceja</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-warm-accent mb-2 shadow-sm" />
          <span className="text-[10px] uppercase tracking-widest font-bold text-warm-accent">Lado del Ojo</span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-warm-accent mb-2 shadow-sm" />
        <span className="text-[10px] uppercase tracking-widest font-bold text-warm-accent">Debajo del Ojo</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-warm-accent mb-2 shadow-sm" />
        <span className="text-[10px] uppercase tracking-widest font-bold text-warm-accent">Debajo de la Nariz</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-warm-accent mb-2 shadow-sm" />
        <span className="text-[10px] uppercase tracking-widest font-bold text-warm-accent">Barba</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-warm-accent mb-2 shadow-sm" />
        <span className="text-[10px] uppercase tracking-widest font-bold text-warm-accent">Clavícula</span>
      </div>

      <div className="w-full flex justify-between px-8">
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-warm-accent mb-2 shadow-sm" />
          <span className="text-[10px] uppercase tracking-widest font-bold text-warm-accent">Bajo el Brazo</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-warm-accent mb-2 shadow-sm" />
          <span className="text-[10px] uppercase tracking-widest font-bold text-warm-accent">Punto Karate</span>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [currentGuide, setCurrentGuide] = useState<Guide>(guides[0]);
  const [selectedItem, setSelectedItem] = useState<Meditation | TappingScript | AffirmationCategory | JournalItem | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = async () => {
    if (!pdfRef.current) return;
    setIsExporting(true);
    
    try {
      const container = pdfRef.current;
      
      // Ensure all images are loaded
      const images = Array.from(container.getElementsByTagName('img')) as HTMLImageElement[];
      await Promise.all(images.map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      }));

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const margin = 15;
      const buffer = 15; // Increased safety buffer
      const contentWidth = pdfWidth - (2 * margin);
      const maxContentHeight = pdfHeight - (2 * margin) - buffer;
      
      const sections = Array.from(container.querySelectorAll('[data-pdf-section]')) as HTMLElement[];
      let currentY = margin;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const canvas = await html2canvas(section, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#fdfcf9',
          logging: false,
          allowTaint: true
        });
        
        let sectionImgWidth = contentWidth;
        let sectionImgHeight = (canvas.height * contentWidth) / canvas.width;

        // If the section is taller than the available page height, scale it down
        if (sectionImgHeight > maxContentHeight) {
          sectionImgHeight = maxContentHeight;
          sectionImgWidth = (canvas.width * sectionImgHeight) / canvas.height;
        }

        // Force page break after cover or if it doesn't fit
        const isCover = i === 0;
        if (i > 0 && (isCover || currentY + sectionImgHeight > pdfHeight - margin)) {
          pdf.addPage();
          currentY = margin;
        }

        const imgData = canvas.toDataURL('image/jpeg', 0.90);
        const xOffset = margin + (contentWidth - sectionImgWidth) / 2;
        pdf.addImage(imgData, 'JPEG', xOffset, currentY, sectionImgWidth, sectionImgHeight);
        
        // If it's the cover, we usually want the next content on a new page
        if (isCover) {
          pdf.addPage();
          currentY = margin;
        } else {
          currentY += sectionImgHeight + 10; // Increased gap
        }
      }

      pdf.save(`Guia-${currentGuide.title.replace(/\s+/g, '-')}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Hubo un error al generar el PDF. Por favor, intenta de nuevo.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleGuideChange = (guide: Guide) => {
    setCurrentGuide(guide);
    setSelectedItem(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-warm-accent/10">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-warm-bg/60 backdrop-blur-xl border-b border-warm-accent/5 px-8 py-5 no-print">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => {
              setSelectedItem(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-11 h-11 bg-warm-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-warm-accent/20 rotate-3 group-hover:rotate-0 transition-transform">
              <Wind size={22} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-warm-ink">Amiga Fortaleza</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-warm-accent font-bold opacity-60">Espacio de Calma</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-warm-soft/50 p-1 rounded-full border border-warm-accent/5">
            {guides.map((guide) => (
              <button
                key={guide.id}
                onClick={() => handleGuideChange(guide)}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                  currentGuide.id === guide.id 
                    ? "bg-white text-warm-accent shadow-sm" 
                    : "text-warm-ink/40 hover:text-warm-ink"
                )}
              >
                {guide.navLabel}
              </button>
            ))}
          </div>
          
          <button
            onClick={handleExportPDF}
            disabled={isExporting}
            className="flex items-center gap-2 px-6 py-2.5 bg-warm-accent text-white rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-warm-accent/20 transition-all disabled:opacity-50 active:scale-95"
          >
            {isExporting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Preparando...</span>
              </div>
            ) : (
              <>
                <Download size={16} />
                <span className="hidden sm:inline">Descargar Guía</span>
              </>
            )}
          </button>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto w-full px-8 py-16">
        <AnimatePresence mode="wait">
          {!selectedItem ? (
            <motion.div
              key={currentGuide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-24"
            >
              {/* Cover Image */}
              <section className="max-w-3xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="relative aspect-[3/4] md:aspect-[4/5] rounded-[60px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-warm-accent/5"
                >
                  <img
                    src={currentGuide.coverImageUrl}
                    alt={currentGuide.title}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-ink/20 to-transparent" />
                </motion.div>
              </section>

              {/* Hero Section */}
              <section className="text-center max-w-4xl mx-auto space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-1.5 bg-warm-accent/5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] text-warm-accent mb-4"
                >
                  {currentGuide.type === 'meditation' ? 'Prácticas de 5 Minutos' : 
                   currentGuide.type === 'tapping' ? 'Técnica de Liberación Emocional' :
                   currentGuide.type === 'journal' ? 'Diario de Gratitud' : 'Afirmaciones de Alta Vibración'}
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-5xl md:text-7xl font-serif font-bold leading-tight text-warm-ink"
                >
                  {currentGuide.title}
                </motion.h1>
                <p className="text-xl md:text-2xl text-warm-ink/60 leading-relaxed font-light max-w-2xl mx-auto">
                  {currentGuide.subtitle}
                </p>
                <div className="pt-8">
                  <div className="w-px h-16 bg-gradient-to-b from-warm-accent/40 to-transparent mx-auto" />
                </div>
              </section>

              {/* Intro Letter */}
              <section className="max-w-4xl mx-auto">
                <div className="bg-warm-soft rounded-[60px] p-12 md:p-20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-warm-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                  <div className="relative z-10 space-y-10">
                    <Quote className="text-warm-accent/20 w-16 h-16" />
                    <div className="space-y-8">
                      {currentGuide.intro.imageUrl && (
                        <div className="w-full flex justify-center mb-12">
                          <img 
                            src={currentGuide.intro.imageUrl} 
                            alt="Introducción" 
                            className="max-w-md w-full h-auto rounded-[40px] shadow-sm"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                      <h2 className="text-4xl font-serif font-bold">{currentGuide.intro.title}</h2>
                      <div className="text-xl text-warm-ink/70 space-y-6 leading-relaxed font-light">
                        {currentGuide.intro.content.map((p, i) => <p key={i}>{p}</p>)}
                      </div>
                      <div className="pt-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-warm-accent/10 flex items-center justify-center text-warm-accent">
                          <Heart size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold uppercase tracking-widest">{currentGuide.intro.closing}</p>
                          <p className="font-serif italic text-lg">{currentGuide.intro.author}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Points Info for Tapping */}
              {currentGuide.type === 'tapping' && currentGuide.pointsInfo && (
                <section className="max-w-5xl mx-auto space-y-16">
                  <div className="text-center space-y-4">
                    <h2 className="text-4xl font-serif font-bold">Los Puntos de Tapping</h2>
                    <p className="text-warm-ink/60 max-w-xl mx-auto">Conoce los meridianos energéticos que vamos a trabajar.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {currentGuide.pointsInfo.imageUrl ? (
                      <div className="relative bg-warm-soft/30 rounded-[60px] border border-warm-accent/5 flex items-center justify-center p-4 md:p-8">
                        <img 
                          src={currentGuide.pointsInfo.imageUrl} 
                          alt="Puntos de Tapping" 
                          className="max-w-md w-full h-auto rounded-2xl"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <TappingPointsMap />
                    )}
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {currentGuide.pointsInfo.description.map((point, idx) => (
                          <div key={idx} className="bg-white p-6 rounded-[32px] border border-warm-accent/5 shadow-sm">
                            <span className="text-xs font-black text-warm-accent mb-2 block">{point.point}</span>
                            <h4 className="font-bold text-sm mb-1">{point.label}</h4>
                            <p className="text-xs text-warm-ink/50 italic">{point.detail}</p>
                          </div>
                        ))}
                      </div>
                      <div className="bg-warm-accent/5 p-8 rounded-[32px] border border-warm-accent/10">
                        <h4 className="text-xs font-black uppercase tracking-widest text-warm-accent mb-4">¿Cómo se hace?</h4>
                        <p className="text-sm leading-relaxed text-warm-ink/70 italic">{currentGuide.pointsInfo.howTo}</p>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Grid */}
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {currentGuide.type === 'affirmations' ? (
                  currentGuide.affirmationCategories?.map((category, idx) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <AffirmationCard 
                        category={category} 
                        onClick={() => setSelectedItem(category)} 
                      />
                    </motion.div>
                  ))
                ) : (
                  currentGuide.items?.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <MeditationCard 
                        item={item} 
                        type={currentGuide.type}
                        onClick={() => setSelectedItem(item)} 
                      />
                    </motion.div>
                  ))
                )}
              </section>

              {/* How to Use Section */}
              {(currentGuide.type === 'affirmations' || currentGuide.type === 'journal') && currentGuide.howToUse && (
                <section className="max-w-4xl mx-auto">
                  <div className="bg-warm-ink text-white rounded-[60px] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-warm-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="relative z-10 space-y-12">
                      <div className="space-y-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-warm-accent">Guía Práctica</span>
                        <h2 className="text-4xl font-serif font-bold">{currentGuide.howToUse.title}</h2>
                        <p className="text-white/60 font-light leading-relaxed">{currentGuide.howToUse.intro}</p>
                      </div>
                      <div className="grid grid-cols-1 gap-6">
                        {currentGuide.howToUse.steps.map((step, i) => (
                          <div key={i} className="flex gap-6 items-start bg-white/5 p-8 rounded-[32px] border border-white/10">
                            <div className="w-10 h-10 rounded-full bg-warm-accent/20 flex items-center justify-center text-warm-accent shrink-0">
                              <span className="text-xs font-bold">{i + 1}</span>
                            </div>
                            <p className="text-lg font-light text-white/80 leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                      <div className="pt-8 border-t border-white/10">
                        <p className="text-xl font-serif italic text-warm-accent leading-relaxed">
                          {currentGuide.howToUse.footer}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Bonus for Tapping */}
              {currentGuide.type === 'tapping' && currentGuide.bonus && (
                <section className="max-w-4xl mx-auto">
                  <div className="bg-warm-ink text-white rounded-[60px] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
                    <div className="relative z-10 space-y-12">
                      <div className="space-y-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-warm-accent">Extra</span>
                        <h2 className="text-4xl font-serif font-bold">{currentGuide.bonus.title}</h2>
                        <p className="text-white/60 font-light">{currentGuide.bonus.description}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentGuide.bonus.scripts.map((s, i) => (
                          <div key={i} className="flex gap-4 items-start bg-white/5 p-6 rounded-[32px] border border-white/10">
                            <div className="w-8 h-8 rounded-full bg-warm-accent/20 flex items-center justify-center text-warm-accent shrink-0">
                              <Sparkles size={14} />
                            </div>
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-widest text-warm-accent mb-1">{s.point}</p>
                              <p className="text-sm font-serif italic text-white/80">{s.phrase}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Guide Footer */}
              <section className="max-w-4xl mx-auto pt-20 pb-10 text-center space-y-8">
                {currentGuide.footer.imageUrl && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-md mx-auto rounded-[40px] overflow-hidden shadow-2xl shadow-warm-accent/10 border border-warm-accent/5"
                  >
                    <img 
                      src={currentGuide.footer.imageUrl} 
                      alt="Cierre" 
                      className="w-full h-auto"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                )}
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-warm-accent/10 rounded-full flex items-center justify-center text-warm-accent mx-auto">
                    <Heart size={24} />
                  </div>
                  <p className="text-3xl font-serif italic text-warm-ink">
                    {currentGuide.footer.closing} <span className="block mt-2 font-bold not-italic text-warm-accent">{currentGuide.footer.author}</span>
                  </p>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-5xl mx-auto"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="flex items-center gap-3 text-warm-accent font-bold text-xs uppercase tracking-widest mb-10 hover:translate-x-[-6px] transition-transform group"
              >
                <ArrowLeft size={16} className="group-hover:scale-110 transition-transform" />
                <span>Volver a la guía</span>
              </button>

              <div className="bg-white rounded-[64px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.06)] border border-warm-accent/5">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-square lg:aspect-auto">
                    {currentGuide.type === 'meditation' || selectedItem.imageUrl ? (
                      <img
                        src={currentGuide.type === 'meditation' 
                          ? ((selectedItem as Meditation).imageUrl || `https://picsum.photos/seed/${(selectedItem as Meditation).imageSeed}/1000/1200`)
                          : selectedItem.imageUrl
                        }
                        alt={selectedItem.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full bg-warm-soft flex items-center justify-center">
                        <Fingerprint className="w-32 h-32 text-warm-accent/20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-warm-ink/40 via-transparent to-transparent" />
                  </div>

                  <div className="p-10 md:p-20 flex flex-col">
                    <div className="mb-12">
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-warm-accent mb-4 block">
                        {currentGuide.type === 'affirmations' ? 'Categoría' : (currentGuide.title.includes('RITUALES') ? 'Ritual' : 'Práctica')} {selectedItem.id}
                      </span>
                      <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
                        {selectedItem.title}
                      </h2>
                      <div className="h-px w-20 bg-warm-accent/20 mb-8" />
                    </div>

                    <div className="space-y-12 flex-grow">
                      {currentGuide.type === 'journal' ? (
                        <div className="space-y-10">
                          <div className="flex justify-between items-center border-b border-warm-accent/10 pb-4">
                            <span className="text-sm font-medium text-warm-ink/40">Fecha: ____ / ____ / ______</span>
                            <span className="text-xs font-bold text-warm-accent uppercase tracking-widest">Día {(selectedItem as JournalItem).day}</span>
                          </div>
                          <div className="space-y-12">
                            {(selectedItem as JournalItem).sections.map((section, idx) => (
                              <div key={idx} className="space-y-4">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-warm-accent">{section.label}</h4>
                                {section.type === 'list' ? (
                                  <div className="space-y-4">
                                    {Array.from({ length: section.count || 1 }).map((_, i) => (
                                      <div key={i} className="flex gap-4 items-center border-b border-warm-soft pb-2">
                                        <span className="w-2 h-2 rounded-full bg-warm-accent/20" />
                                        <div className="h-6 w-full bg-warm-soft/30 rounded-md" />
                                      </div>
                                    ))}
                                  </div>
                                ) : section.type === 'drawing' ? (
                                  <div className="aspect-video w-full bg-warm-soft/30 rounded-[32px] border-2 border-dashed border-warm-accent/10 flex items-center justify-center">
                                    <span className="text-sm text-warm-ink/20 italic">Espacio para tu pensamiento o dibujo libre</span>
                                  </div>
                                ) : (
                                  <div className="h-32 w-full bg-warm-soft/30 rounded-[32px] p-6">
                                     <span className="text-sm text-warm-ink/20 italic">{section.placeholder}</span>
                                  </div>
                                )}
                              </div>
                            ))}
                            {(selectedItem as JournalItem).closingQuote && (
                              <div className="pt-10 border-t border-warm-accent/10">
                                <p className="text-xl font-serif italic text-warm-accent text-center">
                                  {(selectedItem as JournalItem).closingQuote}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : currentGuide.type === 'affirmations' ? (
                        <div className="space-y-10">
                          <p className="text-xl font-serif italic text-warm-ink/60 leading-relaxed">
                            { (selectedItem as AffirmationCategory).description }
                          </p>
                          <div className="grid grid-cols-1 gap-6">
                            {(selectedItem as AffirmationCategory).items.map((affirmation, idx) => (
                              <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-warm-soft/30 p-8 rounded-[32px] border border-warm-accent/5 hover:border-warm-accent/20 transition-all group"
                              >
                                <div className="flex gap-6 items-start">
                                  <Quote className="w-6 h-6 text-warm-accent/20 shrink-0 group-hover:text-warm-accent transition-colors" />
                                  <p className="text-2xl font-serif font-medium text-warm-ink leading-tight">
                                    {affirmation}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="bg-warm-soft/50 rounded-[32px] p-8 border border-warm-accent/5">
                            <h4 className="text-[10px] uppercase tracking-widest font-black text-warm-accent/40 mb-3">
                              {currentGuide.title.includes('RITUALES') ? 'Propósito' : (currentGuide.type === 'meditation' ? 'La Intención' : 'Cuándo usarlo')}
                            </h4>
                            <p className="text-xl font-serif italic text-warm-ink/80 leading-snug">
                              "{currentGuide.type === 'meditation' ? (selectedItem as Meditation).intention : (selectedItem as TappingScript).whenToUse}"
                            </p>
                          </div>

                          <div className="space-y-8 text-lg leading-relaxed text-warm-ink/80 font-light">
                            {currentGuide.type === 'meditation' ? (
                              (selectedItem as Meditation).content.map((paragraph, idx) => (
                                <p key={idx} className="relative">{paragraph}</p>
                              ))
                            ) : (
                              <div className="space-y-12">
                                <div className="space-y-4">
                                  <h4 className="text-xs font-bold uppercase tracking-widest text-warm-accent">Preparación</h4>
                                  <p className="italic">{(selectedItem as TappingScript).preparation}</p>
                                </div>
                                
                                <div className="space-y-4">
                                  <h4 className="text-xs font-bold uppercase tracking-widest text-warm-accent">Punto de Karate</h4>
                                  <div className="space-y-2">
                                    {(selectedItem as TappingScript).karatePoint.map((p, i) => (
                                      <p key={i} className="font-serif italic text-xl text-warm-ink">{p}</p>
                                    ))}
                                  </div>
                                </div>

                                <div className="space-y-6">
                                  <h4 className="text-xs font-bold uppercase tracking-widest text-warm-accent">Secuencia</h4>
                                  <div className="space-y-4">
                                    {(selectedItem as TappingScript).sequence.map((s, i) => (
                                      <div key={i} className="flex gap-4 items-baseline">
                                        <span className="text-[10px] font-black text-warm-accent/40 shrink-0 w-24 uppercase tracking-tighter">{s.point}</span>
                                        <p className="font-serif italic">{s.phrase}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="p-6 bg-warm-soft rounded-[32px] border border-warm-accent/5">
                                  <p className="text-sm italic text-warm-ink/60">{(selectedItem as TappingScript).postBreath}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="mt-20 pt-10 border-t border-warm-accent/10 flex flex-col sm:flex-row justify-between items-center gap-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-warm-accent/5 rounded-2xl flex items-center justify-center text-warm-accent">
                          <Sparkles size={24} />
                        </div>
                        <p className="text-sm text-warm-ink/40 italic font-light">
                          {currentGuide.type === 'meditation' ? 'Respira hondo y vuelve a tu ritmo.' : (currentGuide.type === 'tapping' ? 'Golpea suave, suelta profundo.' : 'Siente cada palabra en tu corazón.')}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="w-full sm:w-auto px-10 py-4 bg-warm-accent text-white rounded-full font-bold text-sm uppercase tracking-widest hover:shadow-xl hover:shadow-warm-accent/20 transition-all active:scale-95"
                      >
                        He terminado
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Hidden PDF Template */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0, zIndex: -100 }}>
        <div 
          ref={pdfRef} 
          className="pdf-safe-container"
          style={{ 
            backgroundColor: '#fdfcf9', 
            padding: '20px', 
            color: '#3a3a3a', 
            width: '920px', // Even wider to use more horizontal space
            fontFamily: 'serif'
          }}
        >
          <div data-pdf-section className="text-center mb-8" style={{ paddingBottom: '40px' }}>
            <div style={{ marginBottom: '32px', borderRadius: '32px', overflow: 'hidden', width: '100%', aspectRatio: '16/9', backgroundColor: '#f4f1ea' }}>
              <img 
                src={currentGuide.coverImageUrl} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                referrerPolicy="no-referrer"
              />
            </div>
            <div style={{ 
              display: 'inline-block', 
              padding: '6px 20px', 
              border: '1px solid rgba(124, 106, 90, 0.2)', 
              borderRadius: '9999px', 
              fontSize: '14px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em', 
              color: '#7c6a5a', 
              marginBottom: '20px' 
            }}>{
              currentGuide.type === 'meditation' ? 'Guía de Meditación' : 
              currentGuide.type === 'tapping' ? 'Guía de Tapping' : 
              currentGuide.type === 'affirmations' ? 'Guía de Afirmaciones' : 
              'Guía de Gratitud'
            }</div>
            <h1 style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '16px', color: '#3a3a3a', lineHeight: '1.1' }}>{currentGuide.title}</h1>
            <p style={{ fontSize: '24px', fontStyle: 'italic', color: 'rgba(124, 106, 90, 0.6)' }}>{currentGuide.subtitle}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div data-pdf-section style={{ backgroundColor: '#f4f1ea', padding: '40px', borderRadius: '32px' }}>
              {currentGuide.intro.imageUrl && (
                <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                  <img 
                    src={currentGuide.intro.imageUrl} 
                    style={{ maxWidth: '350px', width: '100%', height: 'auto', borderRadius: '24px' }} 
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '24px', color: '#3a3a3a' }}>{currentGuide.intro.title}</h2>
              <div style={{ lineHeight: '1.8', fontSize: '18px', opacity: '0.8', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {currentGuide.intro.content.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            {currentGuide.type === 'tapping' && currentGuide.pointsInfo && (
              <div data-pdf-section style={{ padding: '40px', border: '1px solid rgba(124, 106, 90, 0.1)', borderRadius: '32px' }}>
                <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px', color: '#3a3a3a' }}>Los Puntos de Tapping</h2>
                {currentGuide.pointsInfo.imageUrl && (
                  <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                    <img 
                      src={currentGuide.pointsInfo.imageUrl} 
                      style={{ maxWidth: '400px', width: '100%', height: 'auto', borderRadius: '24px' }} 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {currentGuide.pointsInfo.description.map((point, idx) => (
                    <div key={idx} style={{ padding: '16px', border: '1px solid rgba(124, 106, 90, 0.1)', borderRadius: '16px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#7c6a5a' }}>{point.point}</span>
                      <h4 style={{ fontSize: '14px', fontWeight: 'bold' }}>{point.label}</h4>
                      <p style={{ fontSize: '12px', opacity: '0.6' }}>{point.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentGuide.type === 'affirmations' && currentGuide.affirmationCategories && (
              <>
                {currentGuide.affirmationCategories.map((cat) => (
                  <div key={cat.id} data-pdf-section style={{ padding: '40px', border: '1px solid rgba(124, 106, 90, 0.1)', borderRadius: '32px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '12px', color: '#3a3a3a' }}>{cat.title}</h2>
                    <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#7c6a5a', marginBottom: '30px' }}>{cat.description}</p>
                    {cat.imageUrl && (
                      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                        <img 
                          src={cat.imageUrl} 
                          style={{ maxWidth: '350px', width: '100%', height: 'auto', borderRadius: '24px' }} 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {cat.items.map((item, i) => (
                        <div key={i} style={{ padding: '20px', backgroundColor: '#f4f1ea', borderRadius: '24px', fontSize: '18px', fontStyle: 'italic' }}>
                          "{item}"
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            {currentGuide.howToUse && (
              <div data-pdf-section style={{ padding: '40px', backgroundColor: '#f4f1ea', borderRadius: '32px' }}>
                <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#3a3a3a' }}>{currentGuide.howToUse.title}</h2>
                <p style={{ fontSize: '16px', marginBottom: '30px' }}>{currentGuide.howToUse.intro}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {currentGuide.howToUse.steps.map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: '16px' }}>
                      <span style={{ fontWeight: 'bold', color: '#7c6a5a', fontSize: '16px' }}>{i + 1}.</span>
                      <p style={{ fontSize: '16px' }}>{step}</p>
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: '30px', fontSize: '20px', fontStyle: 'italic', color: '#7c6a5a' }}>{currentGuide.howToUse.footer}</p>
              </div>
            )}

            {currentGuide.items?.map((item: any) => (
              <div key={item.id} data-pdf-section style={{ padding: '40px', border: '1px solid rgba(124, 106, 90, 0.1)', borderRadius: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '30px' }}>
                  <span style={{ fontSize: '48px', fontWeight: '300', color: 'rgba(124, 106, 90, 0.2)' }}>{String(item.id).padStart(2, '0')}</span>
                  <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#3a3a3a' }}>{item.title}</h2>
                </div>
                
                {item.imageUrl && (
                  <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <img 
                      src={item.imageUrl} 
                      style={{ maxWidth: '180px', width: '100%', height: 'auto', borderRadius: '24px' }} 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                {currentGuide.type === 'journal' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(124, 106, 90, 0.1)', paddingBottom: '16px' }}>
                      <span style={{ fontSize: '20px', color: 'rgba(124, 106, 90, 0.6)' }}>Fecha: ____ / ____ / ______</span>
                      <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#7c6a5a' }}>DÍA {item.day}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                      {item.sections.map((section: any, idx: number) => (
                        <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <h4 style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', color: '#7c6a5a' }}>{section.label}</h4>
                          {section.type === 'list' ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                              {Array.from({ length: section.count || 1 }).map((_, i) => (
                                <div key={i} style={{ height: '44px', borderBottom: '1px solid #f4f1ea', display: 'flex', alignItems: 'center' }}>
                                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(124, 106, 90, 0.2)', marginRight: '12px' }}></div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div style={{ height: section.type === 'drawing' ? '150px' : '100px', backgroundColor: '#fcfbf9', border: '1px solid rgba(124, 106, 90, 0.1)', borderRadius: '20px', padding: '16px' }}>
                              <span style={{ fontSize: '20px', color: 'rgba(124, 106, 90, 0.4)', fontStyle: 'italic' }}>{section.placeholder}</span>
                            </div>
                          )}
                        </div>
                      ))}
                      {item.closingQuote && (
                        <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(124, 106, 90, 0.1)', textAlign: 'center' }}>
                          <p style={{ fontSize: '24px', fontStyle: 'italic', color: '#7c6a5a' }}>{item.closingQuote}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : currentGuide.type === 'meditation' ? (
                  <>
                    <div style={{ marginBottom: '32px', fontStyle: 'italic', color: '#7c6a5a', fontSize: '24px' }}>
                      "{item.intention}"
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '20px', lineHeight: '1.8', opacity: '0.9' }}>
                      {item.content.map((p: string, i: number) => <p key={i}>{p}</p>)}
                    </div>
                  </>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    <div style={{ fontStyle: 'italic', color: '#7c6a5a', fontSize: '22px' }}>"{item.whenToUse}"</div>
                    <div style={{ fontSize: '18px', lineHeight: '1.6' }}>
                      <h4 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Preparación</h4>
                      <p>{item.preparation}</p>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 'bold', marginBottom: '16px' }}>Punto de Karate</h4>
                      {item.karatePoint.map((p: string, i: number) => <p key={i} style={{ fontStyle: 'italic', fontSize: '22px', marginBottom: '8px' }}>{p}</p>)}
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 'bold', marginBottom: '16px' }}>Secuencia</h4>
                      {item.sequence.map((s: any, i: number) => (
                        <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '12px' }}>
                          <span style={{ width: '120px', fontSize: '12px', fontWeight: 'bold', opacity: '0.4' }}>{s.point}</span>
                          <p style={{ fontStyle: 'italic', fontSize: '20px' }}>{s.phrase}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div data-pdf-section style={{ padding: '80px 60px', textAlign: 'center' }}>
              {currentGuide.footer.imageUrl && (
                <div style={{ marginBottom: '48px', textAlign: 'center' }}>
                  <img 
                    src={currentGuide.footer.imageUrl} 
                    style={{ maxWidth: '500px', width: '100%', height: 'auto', borderRadius: '48px' }} 
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <div style={{ 
                width: '64px', 
                height: '64px', 
                backgroundColor: 'rgba(124, 106, 90, 0.1)', 
                borderRadius: '9999px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#7c6a5a', 
                margin: '0 auto 32px' 
              }}>
                <Heart size={32} />
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '32px', color: '#3a3a3a' }}>{currentGuide.footer.closing} {currentGuide.footer.author}</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-warm-accent/5 py-16 px-8 no-print">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 opacity-40">
          <div className="flex items-center gap-3">
            <Wind size={20} />
            <span className="font-serif font-bold">Amiga Fortaleza</span>
          </div>
          <div className="flex gap-10">
            <Heart size={18} />
            <Compass size={18} />
            <Sparkles size={18} />
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold">
            © {new Date().getFullYear()} • Espacio de Calma
          </p>
        </div>
      </footer>
    </div>
  );
}
