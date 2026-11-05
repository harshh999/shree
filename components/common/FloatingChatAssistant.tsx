"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  X,
  ChevronRight,
  ArrowLeft,
  Home,
  MessageCircle,
  Phone,
  ChevronDown,
} from "lucide-react";
import { faqCategories, FAQCategory, FAQQuestion } from "@/data/faq";

const WELCOME_MESSAGE =
  "Namaste! Welcome to Shree Ganesh Nursery & Farm. How can we help you today?";

export function FloatingChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Navigation state:
  // selectedCategory: null => Category list view
  // selectedCategory != null && selectedQuestion == null => Questions list view
  // selectedCategory != null && selectedQuestion != null => Answer view
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory | null>(
    null
  );
  const [selectedQuestion, setSelectedQuestion] = useState<FAQQuestion | null>(
    null
  );

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Manage tooltip auto-hide and subtle re-appearance
  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);

    const repeatInterval = setInterval(() => {
      if (!isOpen) {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 5000);
      }
    }, 60000);

    return () => {
      clearTimeout(hideTimer);
      clearInterval(repeatInterval);
    };
  }, [isOpen]);

  // Hide tooltip when opened
  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
    }
  }, [isOpen]);

  // Scroll to top of content area on navigation changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [selectedCategory, selectedQuestion]);

  const handleSelectCategory = (cat: FAQCategory) => {
    setSelectedCategory(cat);
    setSelectedQuestion(null);
  };

  const handleSelectQuestion = (q: FAQQuestion) => {
    setSelectedQuestion(q);
  };

  const handleBack = () => {
    if (selectedQuestion) {
      // Go back to questions list
      setSelectedQuestion(null);
    } else if (selectedCategory) {
      // Go back to category list
      setSelectedCategory(null);
    }
  };

  const handleHome = () => {
    setSelectedCategory(null);
    setSelectedQuestion(null);
  };

  const canGoBack = selectedCategory !== null;

  return (
    <aside
      aria-label="Nursery FAQ Assistant"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[1000] flex flex-col items-end pointer-events-auto"
    >
      {/* 1. Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Shree Ganesh Nursery Assistant"
          className="mb-3 w-[calc(100vw-28px)] max-w-[370px] sm:w-[370px] h-[min(540px,calc(100dvh-100px))] bg-surface rounded-[20px] border border-borderLight shadow-[0_12px_40px_-8px_rgba(23,75,53,0.22)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          {/* Branded Header */}
          <div className="bg-forest text-paper px-4 py-3.5 flex items-center justify-between border-b border-forest-dark shrink-0">
            <div className="flex items-center gap-2.5">
              {canGoBack ? (
                <button
                  type="button"
                  onClick={handleBack}
                  title="Back"
                  aria-label="Go back to previous screen"
                  className="w-8 h-8 rounded-full bg-forest-dark flex items-center justify-center text-pale hover:text-paper hover:bg-forest-deep transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              ) : (
                <div className="w-9 h-9 rounded-full bg-forest-dark flex items-center justify-center text-sage-light border border-sage/30 shadow-inner">
                  <Sparkles className="w-4 h-4 text-sage-light" />
                </div>
              )}

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-serif text-base font-semibold leading-none tracking-tight text-paper">
                    Nursery Assistant
                  </h2>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase text-emerald-300 bg-forest-dark/80 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-pale/80 font-sans mt-0.5 truncate max-w-[170px]">
                  {selectedCategory ? selectedCategory.title : "Shree Ganesh Nursery & Farm"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {canGoBack && (
                <button
                  type="button"
                  onClick={handleHome}
                  title="Main categories"
                  aria-label="Return to main categories"
                  className="p-1.5 text-pale/75 hover:text-paper hover:bg-forest-dark rounded-lg transition-colors"
                >
                  <Home className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close assistant"
                aria-label="Close assistant"
                className="p-1.5 text-pale/75 hover:text-paper hover:bg-forest-dark rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Content Area */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#FAFBF9]/90 text-ink scroll-smooth"
          >
            {/* Initial Welcome Message Bubble (Assistant) */}
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-forest text-paper flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-serif">
                SG
              </div>
              <div className="bg-surface text-ink border border-borderLight/80 rounded-2xl rounded-tl-xs px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed shadow-sm">
                <p>{WELCOME_MESSAGE}</p>
              </div>
            </div>

            {/* SCREEN 1: CATEGORY SELECTION */}
            {!selectedCategory && !selectedQuestion && (
              <div className="pt-1 space-y-2 animate-in fade-in duration-200">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted px-1">
                  Browse by Topic
                </p>
                <div className="space-y-1.5">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => handleSelectCategory(category)}
                      className="w-full text-left bg-surface hover:bg-pale/40 border border-borderLight rounded-xl px-3.5 py-2.5 text-xs sm:text-[13px] font-medium text-ink flex items-center justify-between gap-2 shadow-xs hover:border-forest/40 transition-all duration-150 group"
                    >
                      <span className="group-hover:text-forest transition-colors">
                        {category.title}
                      </span>
                      <ChevronRight className="w-4 h-4 text-ink-subtle group-hover:text-forest group-hover:translate-x-0.5 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SCREEN 2: QUESTIONS IN SELECTED CATEGORY */}
            {selectedCategory && !selectedQuestion && (
              <div className="pt-1 space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center justify-between px-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                    Frequently Asked Questions
                  </p>
                  <button
                    type="button"
                    onClick={handleHome}
                    className="text-[11px] text-forest font-medium hover:underline"
                  >
                    All Topics
                  </button>
                </div>
                <div className="space-y-1.5">
                  {selectedCategory.questions.map((q, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectQuestion(q)}
                      className="w-full text-left bg-surface hover:bg-pale/40 border border-borderLight rounded-xl px-3.5 py-2.5 text-xs sm:text-[13px] font-medium text-ink flex items-start justify-between gap-2 shadow-xs hover:border-forest/40 transition-all duration-150 group"
                    >
                      <span className="group-hover:text-forest transition-colors leading-snug">
                        {q.question}
                      </span>
                      <ChevronRight className="w-4 h-4 text-ink-subtle group-hover:text-forest group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SCREEN 3: QUESTION & ANSWER DISPLAY */}
            {selectedQuestion && (
              <div className="space-y-3 pt-1 animate-in fade-in duration-200">
                {/* User's clicked question */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] bg-forest text-paper rounded-2xl rounded-br-xs px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed shadow-sm font-medium">
                    {selectedQuestion.question}
                  </div>
                </div>

                {/* Assistant's predefined answer */}
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-forest text-paper flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-serif">
                    SG
                  </div>
                  <div className="bg-surface text-ink border border-borderLight/80 rounded-2xl rounded-tl-xs px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed shadow-sm space-y-2">
                    <p className="whitespace-pre-wrap">{selectedQuestion.answer}</p>
                  </div>
                </div>

                {/* Return actions */}
                <div className="pt-2 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-[11px] bg-pale/60 hover:bg-forest hover:text-paper text-forest font-semibold px-3 py-1.5 rounded-lg border border-borderLight transition-colors"
                  >
                    ← More {selectedCategory?.title} questions
                  </button>
                  <button
                    type="button"
                    onClick={handleHome}
                    className="text-[11px] bg-surface hover:bg-pale/50 text-ink-muted hover:text-forest font-semibold px-3 py-1.5 rounded-lg border border-borderLight transition-colors"
                  >
                    All categories
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Action Footer: WhatsApp & Call Nursery */}
          <div className="p-3 bg-surface border-t border-borderLight shrink-0 space-y-2">
            <p className="text-[11px] font-medium text-ink-muted text-center">
              Need personalized assistance?
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/919586109298"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-forest hover:bg-forest-dark text-paper font-semibold text-xs py-2 px-3 rounded-xl shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                <span>Talk to our team</span>
              </a>
              <a
                href="tel:+919586109298"
                className="inline-flex items-center justify-center gap-1.5 bg-pale/70 hover:bg-pale text-forest font-semibold text-xs py-2 px-3 rounded-xl border border-borderLight transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-forest" />
                <span>Call Nursery</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 2. Floating Launcher Button & Tooltip */}
      <div className="relative flex items-center">
        {/* Tooltip speech bubble */}
        {showTooltip && !isOpen && (
          <div
            role="tooltip"
            className="absolute bottom-full right-0 mb-3 pointer-events-none animate-in fade-in slide-in-from-bottom-2 duration-300"
          >
            <div className="relative bg-surface text-forest px-3 py-1.5 rounded-[12px] text-xs font-semibold shadow-[0_4px_16px_rgba(23,75,53,0.14)] border border-borderLight flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3 h-3 text-sage" />
              <span>Ask AI</span>
              {/* Downward pointer directed towards icon */}
              <div className="absolute top-full right-5 -mt-[1px] w-0 h-0 border-x-4 border-x-transparent border-t-[6px] border-t-surface" />
            </div>
          </div>
        )}

        {/* Launcher Button */}
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          aria-expanded={isOpen}
          aria-label={
            isOpen
              ? "Close Shree Ganesh Nursery Assistant"
              : "Open Shree Ganesh Nursery Assistant"
          }
          className="group relative w-14 h-14 rounded-full bg-forest hover:bg-forest-dark text-paper shadow-[0_6px_20px_rgba(23,75,53,0.32)] hover:shadow-[0_8px_26px_rgba(23,75,53,0.45)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest"
        >
          {isOpen ? (
            <ChevronDown className="w-6 h-6 transition-transform group-hover:translate-y-0.5" />
          ) : (
            <>
              <Sparkles className="w-6 h-6 text-sage-light group-hover:rotate-12 transition-transform duration-300" />
              <span className="sr-only">Ask Assistant</span>
            </>
          )}

          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-forest/30 animate-ping -z-10 opacity-75" />
          )}
        </button>
      </div>
    </aside>
  );
}
