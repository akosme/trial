"use client"

import type React from "react"
import type { Metadata } from "next";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Stethoscope,
  Users,
  Scale,
  Ear,
  Utensils,
  Shield,
  Brain,
  Heart,
  Clock,
  Mail,
  Microscope,
  X,
} from "lucide-react"
import { useState, useEffect } from "react"

const StomachIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 8C18 8 14 12 14 18C14 20 14.5 21.8 15.3 23.4C16.2 25.2 17.5 26.8 19 28C20.5 29.2 22.2 30 24 30C25.8 30 27.5 29.2 29 28C30.5 26.8 31.8 25.2 32.7 23.4C33.5 21.8 34 20 34 18C34 12 30 8 24 8Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M19 28C17 30 16 32.5 16 35C16 38.3 18.7 41 22 41H26C29.3 41 32 38.3 32 35C32 32.5 31 30 29 28"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
)

const UterusIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 12C20.7 12 18 14.7 18 18V28C18 31.3 20.7 34 24 34C27.3 34 30 31.3 30 28V18C30 14.7 27.3 12 24 12Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="15" cy="15" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="33" cy="15" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M18 18L15 15" stroke="currentColor" strokeWidth="2" />
    <path d="M30 18L33 15" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const MenSymbol = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="30" r="13" stroke="currentColor" strokeWidth="4" fill="none" />
    <path d="M29 19l10-10" stroke="currentColor" strokeWidth="4" fill="none" />
    <path d="M39 9v11" stroke="currentColor" strokeWidth="4" fill="none" />
    <path d="M39 9h-11" stroke="currentColor" strokeWidth="4" fill="none" />
  </svg>
)

const MarsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="28" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M29 19L38 10" stroke="currentColor" strokeWidth="2" />
    <path d="M32 10H38V16" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const HeadProfileIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 24C12 16.3 18.3 10 26 10C33.7 10 40 16.3 40 24C40 31.7 33.7 38 26 38H12V24Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="30" cy="20" r="2" fill="currentColor" />
    <path d="M26 26C26 28 27 30 29 30" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 32H20" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const IntestineIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 12C12 8 15 5 19 5H29C33 5 36 8 36 12V16C36 20 33 23 29 23H25C21 23 18 26 18 30V36C18 40 21 43 25 43H29C33 43 36 40 36 36V32"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M24 15C26 15 28 17 28 19C28 21 26 23 24 23C22 23 20 21 20 19C20 17 22 15 24 15Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
)

const HeartECGIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 38L12 26C8 22 8 16 12 12C16 8 22 8 24 12C26 8 32 8 36 12C40 16 40 22 36 26L24 38Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path d="M6 24H12L16 16L20 32L24 20L28 28L32 24H42" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)

const StethoscopeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="36" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 16V28C12 32 15 35 19 35H29C33 35 36 32 36 28V16" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="24" cy="38" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M24 32V35" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const WomenSymbol = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" strokeLinecap="round" strokeLinejoin="round" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="18" r="13" stroke="currentColor" strokeWidth="4" fill="none" />
    <path d="M24 31v12" stroke="currentColor" strokeWidth="4" fill="none" />
    <path d="M18 39h12" stroke="currentColor" strokeWidth="4" fill="none" />
  </svg>
)

const EarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 8C18 8 13 13 13 19V29C13 35 18 40 24 40C30 40 35 35 35 29V19C35 13 30 8 24 8Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 19C20 17 22 15 24 15C26 15 28 17 28 19V24C28 26 26 28 24 28C22 28 20 26 20 24V19Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path d="M35 24H38C40 24 42 26 42 28C42 30 40 32 38 32H35" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)

const ForkKnifeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8V20C12 22 14 24 16 24C18 24 20 22 20 20V8" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M16 24V40" stroke="currentColor" strokeWidth="2" />
    <path d="M12 8V12" stroke="currentColor" strokeWidth="2" />
    <path d="M16 8V12" stroke="currentColor" strokeWidth="2" />
    <path d="M20 8V12" stroke="currentColor" strokeWidth="2" />
    <path d="M28 8C28 12 30 16 32 16C34 16 36 12 36 8" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M32 16V40" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const ScaleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 8V40" stroke="currentColor" strokeWidth="2" />
    <path d="M12 16L24 8L36 16" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 20C8 18 10 16 12 16C14 16 16 18 16 20V24C16 28 12 32 12 32C12 32 8 28 8 24V20Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M32 20C32 18 34 16 36 16C38 16 40 18 40 20V24C40 28 36 32 36 32C36 32 32 28 32 24V20Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path d="M20 40H28" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 6L12 10V20C12 28 16 35 24 40C32 35 36 28 36 20V10L24 6Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path d="M18 22L22 26L30 18" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const BrainIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 14C14 12 12 14 12 16C10 16 8 18 8 20C8 22 10 24 12 24V28C12 32 15 35 19 35H29C33 35 36 32 36 28V24C38 24 40 22 40 20C40 18 38 16 36 16C36 14 34 12 32 14C30 10 26 8 24 8C22 8 18 10 16 14Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path d="M20 18C20 20 22 22 24 22C26 22 28 20 28 18" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M18 26H30" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export default function Home() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showSamplingModal, setShowSamplingModal] = useState(false)
  const [showImpresszumModal, setShowImpresszumModal] = useState(false)
  const [showAdatkezelesModal, setShowAdatkezelesModal] = useState(false)
  const [showASZFModal, setShowASZFModal] = useState(false)
  const [showCookieModal, setShowCookieModal] = useState(false)
  const [activeTab, setActiveTab] = useState<"16s" | "shotgun">("16s")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsHeaderVisible(false)
      } else {
        // Scrolling up
        setIsHeaderVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

const metadata: Metadata = {
  title: "JustHealthy",
  description: "Független mikrobiom vizsgálat otthoni mintavétellel. Online elemzés és tanácsadás a jobb egészségért.",
  openGraph: {
    title: "JustHealthy",
    description: "Egészséged kulcsa a mikrobiom. Gyors, kényelmes és pontos elemzés otthonról.",
    url: "https://justhealthy.hu",
    siteName: "JustHealthy",
    locale: "hu_HU",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // legacy support for Safari/IE
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const form = e.currentTarget
  const formData = new FormData(form)

  try {
    const res = await fetch("/__form.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })

    if (res.ok) {
      setShowSuccessModal(true)   // show success modal
      setShowErrorModal(false)    // optional: hide error modal
      form.reset()
    } else {
      setShowErrorModal(true)     // show error modal
      setShowSuccessModal(false)  // optional: hide success modal
    }
  } catch (err) {
    console.error(err)
    setShowErrorModal(true)       // show error modal on exception
    setShowSuccessModal(false)
  }
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-orange-50/30 relative overflow-hidden">
      {/* Floating Microbe Dots */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="microbe-dot microbe-1"></div>
        <div className="microbe-dot microbe-2"></div>
        <div className="microbe-dot microbe-3"></div>
        <div className="microbe-dot microbe-4"></div>
        <div className="microbe-dot microbe-5"></div>
        <div className="microbe-dot microbe-6"></div>
        <div className="microbe-dot microbe-7"></div>
        <div className="microbe-dot microbe-8"></div>
        <div className="microbe-dot microbe-9"></div>
        <div className="microbe-dot microbe-10"></div>
        <div className="microbe-dot microbe-11"></div>
        <div className="microbe-dot microbe-12"></div>
        <div className="microbe-dot microbe-13"></div>
        <div className="microbe-dot microbe-14"></div>
        <div className="microbe-dot microbe-15"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`border-b border-white/20 bg-gradient-to-r from-white/95 via-teal-50/80 to-orange-50/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-lg transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a
                href="#home"
                className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                Just.Healthy
              </a>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#importance"
                className="text-gray-700 hover:text-teal-600 transition-all duration-300 hover:scale-105 font-medium"
              >
                Miért fontos?
              </a>
              <a
                href="#technology"
                className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105 font-medium"
              >
                Technológia
              </a>
              <a
                href="#specialties"
                className="text-gray-700 hover:text-teal-600 transition-all duration-300 hover:scale-105 font-medium"
              >
                Kinek hasznos?
              </a>
              <a
                href="#process"
                className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105 font-medium"
              >
                Hogyan működik?
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-teal-600 transition-all duration-300 hover:scale-105 font-medium"
              >
                Rólam
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105 font-medium"
              >
                Kapcsolat
              </a>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 rounded-md p-1"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={closeMobileMenu}></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 md:w-96 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-teal-50/30 to-orange-50/30"></div>
        <div className="relative p-6 h-full bg-white/95 backdrop-blur-md">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-gray-800">Menü</h2>
            <button
              onClick={closeMobileMenu}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-4">
            <a
              href="#home"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200 font-medium"
            >
              Főoldal
            </a>
            <a
              href="#importance"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200 font-medium"
            >
              Miért fontos?
            </a>
            <a
              href="#technology"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium"
            >
              Technológia
            </a>
            <a
              href="#specialties"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200 font-medium"
            >
              Kinek hasznos?
            </a>
            <a
              href="#process"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium"
            >
              Hogyan működik?
            </a>
            <a
              href="#about"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200 font-medium"
            >
              Rólam
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium"
            >
              Kapcsolat
            </a>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-orange-50 relative z-20 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="hero-microbe hero-microbe-1"></div>
          <div className="hero-microbe hero-microbe-2"></div>
          <div className="hero-microbe hero-microbe-3"></div>
          <div className="hero-microbe hero-microbe-4"></div>
          <div className="hero-microbe hero-microbe-5"></div>
          <div className="hero-microbe hero-microbe-6"></div>
          <div className="hero-microbe hero-microbe-7"></div>
          <div className="hero-microbe hero-microbe-8"></div>
          <div className="hero-microbe hero-microbe-9"></div>
          <div className="hero-microbe hero-microbe-10"></div>
          <div className="hero-microbe hero-microbe-11"></div>
          <div className="hero-microbe hero-microbe-12"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/8 via-transparent to-orange-500/8"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-100/20 via-transparent to-orange-100/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-teal-700 to-orange-600 bg-clip-text text-transparent mb-6 text-balance leading-tight">
            Mikrobiom-elemzés tudományosan. Egyénre szabva.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            Diagnosztikai értékű elemzés, online kiértékeléssel, egészségügyi háttérrel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="cursor-pointer select-none transform hover:scale-105 transition-all duration-300 px-9 py-4 rounded-xl text-white font-semibold text-lg shadow-2xl hover:shadow-3xl"
              style={{
                background: "linear-gradient(to right, #f97316, #ea580c)",
                color: "#ffffff",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(to right, #ea580c, #dc2626)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(to right, #f97316, #ea580c)"
              }}
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }
              }}
            >
              Időpontfoglalás
            </button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-teal-600 text-teal-600 hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:border-teal-700 px-8 py-3 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold rounded-xl my-1.5"
              onClick={() => setShowSamplingModal(true)}
            >
              Mintavételről
            </Button>
          </div>
        </div>
      </section>

      {/* Microbiome Importance Section */}
      <section
        id="importance"
        className="py-24 bg-gradient-to-br from-white via-teal-50/40 to-orange-50/40 relative z-20"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-orange-500/5 via-transparent to-teal-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-100/10 via-transparent to-orange-100/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-700 via-teal-600 to-orange-600 bg-clip-text text-transparent mb-6 text-balance">
              Miért fontos a mikrobiom?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A bélmikrobiom összetétele közvetlen hatással van egészségünkre, immunrendszerünkre és általános
              jóllétünkre.
            </p>
          </div>

          {/* Mobile screens: horizontal carousel layout */}
          <div className="block md:hidden">
            <div className="mb-12">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-200/30 to-orange-200/30 rounded-3xl blur-3xl"></div>
                  <img
                    src="/body_silhouette.png"
                    alt="Human body silhouette showing microbiome impact on different organs"
                    className="max-w-full h-auto relative z-10 drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Horizontal carousel */}
            <div className="relative">
              <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4">
                <div className="flex-none w-80 snap-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30 h-full">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-3 h-3 bg-teal-500 rounded-full flex-shrink-0 mt-2"></div>
                      <h3 className="font-semibold text-teal-700 text-lg">Immunrendszer</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      A bélrendszerünkben élő mikroorganizmusok közössége, a mikrobiom, kulcsfontosságú szerepet játszik
                      az egészségünkben. Befolyásolja az immunrendszerünket, az anyagcserénket, sőt még a hangulatunkat
                      is.
                    </p>
                  </div>
                </div>

                <div className="flex-none w-80 snap-center">
                  <div className="bg-gradient-to-br from-teal-50/90 to-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-teal-100/60 h-full">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0 mt-2"></div>
                      <h3 className="font-semibold text-orange-700 text-lg">Betegség kapcsolatok</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      A modern tudomány egyre több összefüggést tár fel a mikrobiom állapota és különböző betegségek
                      között, mint például az elhízás, a cukorbetegség, az autoimmun betegségek és még sok más.
                    </p>
                  </div>
                </div>

                <div className="flex-none w-80 snap-center">
                  <div className="bg-gradient-to-br from-orange-50/90 to-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-orange-100/60 h-full">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-3 h-3 bg-teal-600 rounded-full flex-shrink-0 mt-2"></div>
                      <h3 className="font-semibold text-teal-700 text-lg">Személyre szabott egészség</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      A mikrobiom elemzése lehetővé teszi, hogy személyre szabott megközelítéssel javítsuk az egészségi
                      állapotunkat és megelőzzük a betegségeket.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center space-x-2 mt-6">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Medium and large screens: original stacked layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center hidden md:grid lg:grid">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-200/30 to-orange-200/30 rounded-3xl blur-3xl"></div>
                <img
                  src="/body_silhouette.png"
                  alt="Human body silhouette showing microbiome impact on different organs"
                  className="max-w-full h-auto relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <p className="text-lg text-gray-700 leading-relaxed">A bélrendszer</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A bélrendszerünkben élő mikroorganizmusok közössége, a mikrobiom, kulcsfontosságú szerepet játszik az
                  egészségünkben. Befolyásolja az immunrendszerünket, az anyagcserénket, sőt még a hangulatunkat is.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50/80 to-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-teal-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A modern tudomány egyre több összefüggést tár fel a mikrobiom állapota és különböző betegségek között,
                  mint például az elhízás, a cukorbetegség, az autoimmun betegségek és még sok más.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50/80 to-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A mikrobiom elemzése lehetővé teszi, hogy személyre szabott megközelítéssel javítsuk az egészségi
                  állapotunkat és megelőzzük a betegségeket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section
        id="technology"
        className="py-24 bg-gradient-to-br from-orange-50/60 via-white to-teal-50/60 relative z-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/8 via-transparent to-teal-500/8"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/20 via-transparent to-teal-100/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-teal-600 bg-clip-text text-transparent mb-6 text-balance">
              Technológia
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A mikrobiom-elemzés során két fő technológiát alkalmaznak: a 16S RNS szekvenálást és a Shotgun
              metagenomikát. Mindkettőnek megvannak az előnyei és hátrányai.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/30 hover:shadow-3xl transition-all duration-500">
            {/* Mobile Layout - Tab-based */}
            <div className="block md:hidden">
              <div className="p-6 bg-gradient-to-br from-orange-500 via-orange-600 to-teal-600 text-white">
                <h3 className="font-bold text-xl text-center">Technológia Összehasonlítás</h3>
              </div>

              {/* Tab Navigation */}
              <div className="flex bg-gray-50 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("16s")}
                  className={`flex-1 py-4 px-4 text-sm font-medium transition-all duration-300 ${
                    activeTab === "16s"
                      ? "bg-orange-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                  }`}
                >
                  16S RNS szekvenálás
                </button>
                <button
                  onClick={() => setActiveTab("shotgun")}
                  className={`flex-1 py-4 px-4 text-sm font-medium transition-all duration-300 ${
                    activeTab === "shotgun"
                      ? "bg-teal-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-teal-500 hover:bg-teal-50"
                  }`}
                >
                  Shotgun metagenomika
                </button>
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                {activeTab === "16s" && (
                  <div className="p-6 bg-gradient-to-br from-white to-orange-50/30 animate-in fade-in duration-300">
                    <div className="space-y-4">
                      <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-orange-100">
                        <div className="flex flex-col space-y-2">
                          <span className="font-semibold text-gray-800 text-base">Pontosság</span>
                          <span className="text-orange-600 font-medium text-sm leading-relaxed break-words">
                            Genus (nemzetség) szintű azonosítás
                          </span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-orange-100">
                        <div className="flex flex-col space-y-2">
                          <span className="font-semibold text-gray-800 text-base">Funkcionális információ</span>
                          <span className="text-orange-600 font-medium text-sm">Korlátozott</span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-orange-100">
                        <div className="flex flex-col space-y-2">
                          <span className="font-semibold text-gray-800 text-base">Költség</span>
                          <span className="text-orange-600 font-medium text-sm">Alacsonyabb</span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-orange-100">
                        <div className="flex flex-col space-y-2">
                          <span className="font-semibold text-gray-800 text-base">Adatmennyiség</span>
                          <span className="text-orange-600 font-medium text-sm">Kisebb</span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-orange-100">
                        <div className="flex flex-col space-y-2">
                          <span className="font-semibold text-gray-800 text-base">Alkalmazás</span>
                          <span className="text-orange-600 font-medium text-sm">Szűrővizsgálat</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "shotgun" && (
                  <div className="p-6 bg-gradient-to-br from-white to-teal-50/30 animate-in fade-in duration-300">
                    <div className="space-y-4">
                      <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-teal-100">
                        <div className="flex flex-col space-y-2">
                          <span className="font-semibold text-gray-800 text-base">Pontosság</span>
                          <span className="text-teal-600 font-medium text-sm leading-relaxed break-words">
                            Species (faj) szintű azonosítás
                          </span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-teal-100">
                        <div className="flex flex-col space-y-2">
                          <span className="font-semibold text-gray-800 text-base">Funkcionális információ</span>
                          <span className="text-teal-600 font-medium text-sm">Részletes</span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-teal-100">
                        <div className="flex flex-col space-y-2">
                          <span className="font-semibold text-gray-800 text-base">Költség</span>
                          <span className="text-teal-600 font-medium text-sm">Magasabb</span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-teal-100">
                        <div className="flex flex-col space-y-2">
                          <span className="font-semibold text-gray-800 text-base">Adatmennyiség</span>
                          <span className="text-teal-600 font-medium text-sm">Nagyobb</span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-teal-100">
                        <div className="flex flex-col space-y-2">
                          <span className="font-semibold text-gray-800 text-base">Alkalmazás</span>
                          <span className="text-teal-600 font-medium text-sm">Részletes elemzés</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200/50">
                <div
                  className="p-8 bg-gradient-to-br from-orange-500 via-orange-600 to-teal-600 text-white relative overflow-hidden"
                  style={{ background: "linear-gradient(to bottom right, #f97316, #ea580c, #14b8a6)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-teal-400/20"></div>
                  <h3 className="font-bold text-xl mb-6 relative z-10 text-white">Jellemző</h3>
                  <div className="space-y-6 relative z-10">
                    <div className="py-3 font-medium text-white">Pontosság</div>
                    <div className="py-3 font-medium text-white">Funkcionális információ</div>
                    <div className="py-3 font-medium text-white">Költség</div>
                    <div className="py-3 font-medium text-white">Adatmennyiség</div>
                    <div className="py-3 font-medium text-white">Alkalmazás</div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-white to-orange-50/30">
                  <h3 className="font-bold text-xl mb-6 text-orange-600">16S RNS szekvenálás</h3>
                  <div className="space-y-6 text-gray-700">
                    <div className="py-3 bg-orange-50/50 rounded-lg px-4">Genus (nemzetség) szintű azonosítás</div>
                    <div className="py-3 bg-orange-50/50 rounded-lg px-4">Korlátozott</div>
                    <div className="py-3 bg-orange-50/50 rounded-lg px-4">Alacsonyabb</div>
                    <div className="py-3 bg-orange-50/50 rounded-lg px-4">Kisebb</div>
                    <div className="py-3 bg-orange-50/50 rounded-lg px-4">Szűrővizsgálat</div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-white to-teal-50/30">
                  <h3 className="font-bold text-xl mb-6 text-teal-600">Shotgun metagenomika</h3>
                  <div className="space-y-6 text-gray-700">
                    <div className="py-3 bg-teal-50/50 rounded-lg px-4">Species (faj) szintű azonosítás</div>
                    <div className="py-3 bg-teal-50/50 rounded-lg px-4">Részletes</div>
                    <div className="py-3 bg-teal-50/50 rounded-lg px-4">Magasabb</div>
                    <div className="py-3 bg-teal-50/50 rounded-lg px-4">Nagyobb</div>
                    <div className="py-3 bg-teal-50/50 rounded-lg px-4">Részletes elemzés</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-gray-50/80 via-teal-50/50 to-orange-50/50 border-t border-white/30">
              <p className="text-center text-gray-700 text-lg font-medium">
                A justhealthy.hu a Shotgun metagenomika technológiát alkalmazza a lehető legpontosabb és legrészletesebb
                eredmények érdekében.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Specialties Section */}
      <section
        id="specialties"
        className="py-24 bg-gradient-to-br from-teal-50/60 via-white to-orange-50/60 relative z-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-100/15 via-transparent to-orange-100/15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 via-teal-500 to-orange-600 bg-clip-text text-transparent mb-6 text-balance">
              Kinek hasznos?
            </h2>
          </div>

          {/* Mobile Carousel Layout */}
          <div className="md:hidden">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 pb-4 px-2" style={{ width: "max-content" }}>
                {[
                  {
                    icon: <Stethoscope className="w-12 h-12" />,
                    title: "Belgyógyászat",
                    desc: "Gyulladás, emésztőrendszeri betegségek, metabolikus zavarok",
                    color: "orange",
                  },
                  {
                    icon: <WomenSymbol className="w-12 h-12" />,
                    title: "Nőgyógyászat",
                    desc: "Hüvelyi mikrobiom, fertőzések, hormonális problémák",
                    color: "teal",
                  },
                  {
                    icon: <MenSymbol className="w-12 h-12" />,
                    title: "Férfiegészség",
                    desc: "Prosztatagyulladás, libidó és a mikrobiom kapcsolata",
                    color: "orange",
                  },
                  {
                    icon: <Scale className="w-12 h-12" />,
                    title: "Obezitológia",
                    desc: "Testsúly, metabolikus szindróma",
                    color: "teal",
                  },
                  {
                    icon: <Ear className="w-12 h-12" />,
                    title: "Fül-orr-gégészet",
                    desc: "Krónikus torokfájás, sinusitis, anaerob túlsúly",
                    color: "orange",
                  },
                  {
                    icon: <Utensils className="w-12 h-12" />,
                    title: "Gastroenterológia",
                    desc: "IBD, IBS, SIBO, funkcionális emésztési zavarok",
                    color: "teal",
                  },
                  {
                    icon: <Shield className="w-12 h-12" />,
                    title: "Immunológia",
                    desc: "Autoimmun betegségek, immunhiányos állapotok",
                    color: "orange",
                  },
                  {
                    icon: <Brain className="w-12 h-12" />,
                    title: "Neurológia",
                    desc: "Depresszió, szorongás, migrén, Parkinson, Alzheimer",
                    color: "teal",
                  },
                  {
                    icon: <Heart className="w-12 h-12" />,
                    title: "Kardiológia",
                    desc: "Szív-és érrendszeri betegségek megelőzése",
                    color: "orange",
                  },
                ].map((specialty, index) => (
                  <Card
                    key={index}
                    className={`min-w-[260px] w-[260px] bg-white/95 backdrop-blur-md border-2 border-transparent hover:shadow-xl transition-all duration-300 ${
                      specialty.color === "orange"
                        ? "hover:border-orange-200/50 hover:bg-gradient-to-br hover:from-white hover:to-orange-50/40"
                        : "hover:border-teal-200/50 hover:bg-gradient-to-br hover:from-white hover:to-teal-50/40"
                    }`}
                  >
                    <CardHeader className="text-center pb-3">
                      <div className="relative mb-4">
                        <div
                          className={`absolute inset-0 ${
                            specialty.color === "orange"
                              ? "bg-gradient-to-r from-orange-200/30 to-orange-300/30"
                              : "bg-gradient-to-r from-teal-200/30 to-teal-300/30"
                          } rounded-full blur-lg`}
                        ></div>
                        <div
                          className={`${
                            specialty.color === "orange" ? "text-orange-500" : "text-teal-600"
                          } mx-auto relative z-10`}
                        >
                          {specialty.icon}
                        </div>
                      </div>
                      <CardTitle
                        className={`${
                          specialty.color === "orange" ? "text-orange-500" : "text-teal-600"
                        } text-lg font-bold`}
                      >
                        {specialty.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 text-xs leading-relaxed px-1">{specialty.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === 0 ? "bg-gradient-to-r from-teal-500 to-orange-500 w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/95 backdrop-blur-md border-2 border-transparent hover:border-orange-200/50 hover:bg-gradient-to-br hover:from-white hover:to-orange-50/40 group">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-orange-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <Stethoscope className="w-16 h-16 text-orange-500 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-orange-500 text-xl font-bold">Belgyógyászat</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Gyulladás, emésztőrendszeri betegségek, metabolikus zavarok
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/95 backdrop-blur-md border-2 border-transparent hover:border-teal-200/50 hover:bg-gradient-to-br hover:from-white hover:to-teal-50/40 group">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-200/30 to-teal-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <WomenSymbol className="w-16 h-16 text-teal-600 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-teal-600 text-xl font-bold">Nőgyógyászat</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Hüvelyi mikrobiom, fertőzések, hormonális problémák, terhesség
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/95 backdrop-blur-md border-2 border-transparent hover:border-orange-200/50 hover:bg-gradient-to-br hover:from-white hover:to-orange-50/40 group">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-orange-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <MenSymbol className="w-16 h-16 text-orange-500 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-orange-500 text-xl font-bold">Férfiegészség</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Prosztatagyulladás, libidó és a mikrobiom kapcsolata, férfi meddőség
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/95 backdrop-blur-md border-2 border-transparent hover:border-teal-200/50 hover:bg-gradient-to-br hover:from-white hover:to-teal-50/40 group">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-200/30 to-teal-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <Scale className="w-16 h-16 text-teal-600 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-teal-600 text-xl font-bold">Obezitológia</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">Testsúly, metabolikus szindróma</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/95 backdrop-blur-md border-2 border-transparent hover:border-orange-200/50 hover:bg-gradient-to-br hover:from-white hover:to-orange-50/40 group">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-orange-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <Ear className="w-16 h-16 text-orange-500 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-orange-500 text-xl font-bold">Fül-orr-gégészet</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">Krónikus torokfájás, sinusitis, anaerob túlsúly</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/95 backdrop-blur-md border-2 border-transparent hover:border-teal-200/50 hover:bg-gradient-to-br hover:from-white hover:to-teal-50/40 group">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-200/30 to-teal-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <Utensils className="w-16 h-16 text-teal-600 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-teal-600 text-xl font-bold">Gastroenterológia</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  IBD, IBS, SIBO, funkcionális emésztési zavarok, antibiotikum-asszociált hasmenés
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/95 backdrop-blur-md border-2 border-transparent hover:border-orange-200/50 hover:bg-gradient-to-br hover:from-white hover:to-orange-50/40 group">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-orange-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <Shield className="w-16 h-16 text-orange-500 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-orange-500 text-xl font-bold">Immunológia</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Autoimmun betegségek, immunhiányos állapotok, immunrendszer optimalizálás
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/95 backdrop-blur-md border-2 border-transparent hover:border-teal-200/50 hover:bg-gradient-to-br hover:from-white hover:to-teal-50/40 group">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-200/30 to-teal-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <Brain className="w-16 h-16 text-teal-600 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-teal-600 text-xl font-bold">Neurológia</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Depresszió, szorongás, migrén, Parkinson, Alzheimer, szklerózis multiplex
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/95 backdrop-blur-md border-2 border-transparent hover:border-orange-200/50 hover:bg-gradient-to-br hover:from-white hover:to-orange-50/40 group">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-orange-300/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <Heart className="w-16 h-16 text-orange-500 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-orange-500 text-xl font-bold">Kardiológia</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Szív-és érrendszeri betegségek megelőzése, gyulladásos markerek csökkentése, koleszterin-anyagcsere
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Model Process */}
      <section id="process" className="py-24 bg-gradient-to-br from-white via-teal-50/50 to-orange-50/50 relative z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-orange-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-100/10 via-transparent to-orange-100/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-700 via-teal-600 to-orange-600 bg-clip-text text-transparent mb-6 text-balance">
              Hogyan működik?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A mikrobiom elemzés folyamata egyszerű és kényelmes. Íme a lépések:
            </p>
          </div>

          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-6">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center max-w-xs group">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-orange-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="process-circle process-circle-1">1</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Konzultáció</h3>
                <p className="text-gray-600 leading-relaxed">Ingyenes állapotfelmérő konzultáció</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center max-w-xs group">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-teal-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="process-circle process-circle-2">2</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  <button
                    type="button"
                    onClick={() => setShowSamplingModal(true)}
                    className="text-gray-900 hover:underline focus:outline-none"
                  >
                    Mintavétel
                  </button>
                </h3>
                <p className="text-gray-600 leading-relaxed">Egyszerű otthoni mintavételi készlet használata.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center max-w-xs group">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-orange-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="process-circle process-circle-3">3</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Elemzés</h3>
                <p className="text-gray-600 leading-relaxed">Laboratóriumi feldolgozás és shotgun metagenomika.</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center max-w-xs group">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-teal-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="process-circle process-circle-4">4</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kiértékelés</h3>
                <p className="text-gray-600 leading-relaxed">Részletes jelentés és személyre szabott ajánlások.</p>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center max-w-xs group">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-orange-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="process-circle process-circle-5">5</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Követés</h3>
                <p className="text-gray-600 leading-relaxed">Utánkövetés és szükség esetén terápiamódosítás.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-gray-50/80 via-teal-50/60 to-orange-50/60 relative z-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/10 via-transparent to-orange-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-100/15 via-transparent to-orange-100/15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 via-teal-500 to-orange-600 bg-clip-text text-transparent mb-6">
              Rólam
            </h2>
          </div>

          {/* Mobile Layout */}
          <div className="block lg:hidden">
            {/* Centered Portrait Photo */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-200/40 to-orange-200/40 rounded-full blur-3xl"></div>
                <div className="w-64 h-64 bg-gradient-to-br from-teal-100 via-white to-orange-100 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/60 relative z-10 overflow-hidden">
                  <img
                    src="/webfoto.jpg"
                    alt="Mészáros-Szeszták Zsófia - Mikrobiom szakértő"
                    className="w-full h-full object-cover object-[30%_20%] rounded-full scale-95"
                  />
                </div>
              </div>
            </div>

            {/* Statistics Cards - Stacked Vertically */}
            <div className="space-y-4 mb-12">
              <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 text-white p-8 rounded-2xl text-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-teal-600/20"></div>
                <div className="text-4xl font-bold mb-3 relative z-10">100+</div>
                <div className="text-lg font-medium relative z-10">elemzett minta</div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white p-8 rounded-2xl text-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20"></div>
                <div className="text-4xl font-bold mb-3 relative z-10">10+</div>
                <div className="text-lg font-medium relative z-10">partner orvos</div>
              </div>
            </div>

            {/* Professional Background Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">
                Szakmai háttér
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-4 p-3 rounded-lg hover:bg-teal-50/50 transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                  <span className="leading-relaxed">Egészségügyi végzettség</span>
                </li>
                <li className="flex items-start space-x-4 p-3 rounded-lg hover:bg-orange-50/50 transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                  <span className="leading-relaxed">Mikrobiom elemzésben szerzett több éves tapasztalat</span>
                </li>
                <li className="flex items-start space-x-4 p-3 rounded-lg hover:bg-teal-50/50 transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-br from-teal-500 via-orange-400 to-teal-600 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                  <span className="leading-relaxed">Független, partneralapú működés több szakterületen</span>
                </li>
                <li className="flex items-start space-x-4 p-3 rounded-lg hover:bg-orange-50/50 transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-br from-orange-500 via-teal-400 to-orange-600 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                  <span className="leading-relaxed">Folyamatos továbbképzés</span>
                </li>
                <li className="flex items-start space-x-4 p-3 rounded-lg hover:bg-teal-50/50 transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-br from-teal-400 via-teal-600 to-teal-700 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                  <span className="leading-relaxed">WMP Associate-tag</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop Layout - Original */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-200/40 to-orange-200/40 rounded-full blur-3xl"></div>
                <div className="w-96 h-96 bg-gradient-to-br from-teal-100 via-white to-orange-100 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/60 relative z-10 hover:scale-105 transition-transform duration-500 overflow-hidden">
                  <img
                    src="/webfoto.jpg"
                    alt="Mészáros-Szeszták Zsófia - Mikrobiom szakértő"
                    className="w-full h-full object-cover object-[30%_20%] rounded-full scale-95"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 text-white p-8 rounded-2xl text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-teal-600/20"></div>
                  <div className="text-4xl font-bold mb-3 relative z-10">100+</div>
                  <div className="text-sm font-medium relative z-10">elemzett minta</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white p-8 rounded-2xl text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20"></div>
                  <div className="text-4xl font-bold mb-3 relative z-10">10+</div>
                  <div className="text-sm font-medium relative z-10">partner orvos</div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/30 hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">
                  Szakmai háttér
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-4 p-3 rounded-lg hover:bg-teal-50/50 transition-colors duration-300">
                    <div className="w-3 h-3 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                    <span className="leading-relaxed">Egészségügyi végzettség</span>
                  </li>
                  <li className="flex items-start space-x-4 p-3 rounded-lg hover:bg-orange-50/50 transition-colors duration-300">
                    <div className="w-3 h-3 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                    <span className="leading-relaxed">Mikrobiom elemzésben szerzett több éves tapasztalat</span>
                  </li>
                  <li className="flex items-start space-x-4 p-3 rounded-lg hover:bg-teal-50/50 transition-colors duration-300">
                    <div className="w-3 h-3 bg-gradient-to-br from-teal-500 via-orange-400 to-teal-600 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                    <span className="leading-relaxed">Független, partneralapú működés több szakterületen</span>
                  </li>
                  <li className="flex items-start space-x-4 p-3 rounded-lg hover:bg-orange-50/50 transition-colors duration-300">
                    <div className="w-3 h-3 bg-gradient-to-br from-orange-500 via-teal-400 to-orange-600 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                    <span className="leading-relaxed">Folyamatos továbbképzés</span>
                  </li>
                  <li className="flex items-start space-x-4 p-3 rounded-lg hover:bg-teal-50/50 transition-colors duration-300">
                    <div className="w-3 h-3 bg-gradient-to-br from-teal-400 via-teal-600 to-teal-700 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                    <span className="leading-relaxed">WMP Associate-tag</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-white via-gray-50/60 to-teal-50/40 relative z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-orange-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-teal-100/10 via-transparent to-orange-100/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-700 via-teal-600 to-orange-600 bg-clip-text text-transparent mb-6 text-balance">
              Kapcsolat / Időpontfoglalás
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-teal-600 bg-clip-text text-transparent mb-12">
                Gyors elérhetőség
              </h3>

              <div className="space-y-8">
                <Card className="p-8 bg-white/95 backdrop-blur-md border-2 border-transparent hover:border-teal-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Válaszidő</div>
                      <div className="text-teal-600 font-semibold">48 órán belül</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-white/95 backdrop-blur-md border-2 border-transparent hover:border-orange-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Konzultáció</div>
                      <div className="text-orange-500 font-semibold">Online</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-white/95 backdrop-blur-md border-2 border-transparent hover:border-teal-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Microscope className="w-8 h-8 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Mintavétel</div>
                      <div className="text-teal-600 font-semibold">Otthoni kit</div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Vegye fel velem a kapcsolatot!</h4>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Kérdése van mikrobiom elemzéssel kapcsolatban? Szeretne időpontot foglalni konzultációra? Vegye fel
                  velem a kapcsolatot!
                </p>
              </div>
            </div>

            <div>
              <Card className="p-10 bg-white/95 backdrop-blur-md shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 rounded-3xl">
                {/* <form className="space-y-8" onSubmit={handleFormSubmit}> */}
                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-8" onSubmit={handleFormSubmit}>
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Név *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Az Ön neve"
                      required
                      className="h-12 rounded-xl border-2 focus:border-teal-500 transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      required
                      className="h-12 rounded-xl border-2 focus:border-teal-500 transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                      Üzenet *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Írja le kérdését vagy kérését..."
                      rows={5}
                      required
                      className="rounded-xl border-2 focus:border-teal-500 transition-colors duration-300"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white py-4 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 font-semibold text-lg rounded-xl border-0 cursor-pointer"
                    style={{
                      background: "linear-gradient(to right, #f97316, #ea580c, #dc2626)",
                      color: "#ffffff",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "linear-gradient(to right, #ea580c, #dc2626, #b91c1c)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "linear-gradient(to right, #f97316, #ea580c, #dc2626)"
                    }}
                  >
                    Küldés
                  </button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform animate-in fade-in zoom-in duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4 text-green-500">✔️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Köszönjük!</h3>
              <p className="text-gray-600 mb-6">Üzenetedet sikeresen elküldtük.</p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300"
              >
                Rendben
              </button>
            </div>
          </div>
        </div>
      )}

      {showErrorModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform animate-in fade-in zoom-in duration-300">
            <div className="text-center">
              <div className="text-4xl mb-4 text-orange-500">❌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hoppá!</h3>
              <p className="text-gray-600 mb-6">Valami hiba történt, kérjük, próbáld újra.</p>
              <button
                onClick={() => setShowErrorModal(false)}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300"
              >
                Bezárás
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 via-gray-900 to-orange-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-gray-900 to-orange-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-white via-teal-200 to-orange-200 bg-clip-text text-transparent mb-6">
                justhealthy.hu
              </div>
              <p className="text-white leading-relaxed text-lg">
                Professzionális mikrobiom-elemzés egyénre szabott egészségügyi megoldásokkal.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Gyors linkek</h3>
              <ul className="space-y-3 text-white">
                <li>
                  <a
                    href="#importance"
                    className="hover:text-teal-300 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Miért fontos?
                  </a>
                </li>
                <li>
                  <a
                    href="#technology"
                    className="hover:text-teal-300 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Technológia
                  </a>
                </li>
                <li>
                  <a
                    href="#specialties"
                    className="hover:text-teal-300 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Szakterületek
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    className="hover:text-teal-300 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Folyamat
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Kapcsolat</h3>
              <div className="space-y-4 text-white">
                <div className="flex items-center space-x-3 hover:text-teal-300 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                  <span>szesztak.zsofia@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700/50 mt-12 pt-8">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <button
                onClick={() => setShowImpresszumModal(true)}
                className="text-white hover:text-teal-300 transition-colors duration-300"
              >
                Impresszum
              </button>
              <button
                onClick={() => setShowAdatkezelesModal(true)}
                className="text-white hover:text-teal-300 transition-colors duration-300"
              >
                Adatkezelés
              </button>
              <button
                onClick={() => setShowASZFModal(true)}
                className="text-white hover:text-teal-300 transition-colors duration-300"
              >
                ÁSZF
              </button>
              <button
                onClick={() => setShowCookieModal(true)}
                className="text-white hover:text-teal-300 transition-colors duration-300"
              >
                Cookie-szabályzat
              </button>
            </div>
            <div className="text-center text-white">
              <p className="text-lg">&copy; 2024 justhealthy.hu. Minden jog fenntartva.</p>
            </div>
          </div>
        </div>
      </footer>

      {showAdatkezelesModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-orange-500 p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Adatkezelés</h2>
                <button
                  onClick={() => setShowAdatkezelesModal(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Adatkezelő adatai</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">Mészáros-Szeszták Zsófia egyéni vállalkozó</p>
                  <p>
                    <span className="font-medium">Egyéni vállalkozói adószám:</span> 58450318-1-25
                  </p>
                  <p>
                    <span className="font-medium">Cím:</span> 1103 Budapest, Kőér köz 29/B
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> szesztak.zsofia@gmail.com
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-teal-50 to-white p-4 rounded-xl border border-teal-100">
                  <h4 className="font-bold text-teal-700 mb-2">Milyen adatot gyűjtünk</h4>
                  <p className="text-gray-700 text-sm">Név, email, egészségügyi adatok.</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white p-4 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-orange-700 mb-2">Adatkezelés célja</h4>
                  <p className="text-gray-700 text-sm">Érdeklődői kapcsolat, konzultáció előkészítése.</p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-white p-4 rounded-xl border border-teal-100">
                  <h4 className="font-bold text-teal-700 mb-2">Jogalap</h4>
                  <p className="text-gray-700 text-sm">Felhasználó önkéntes hozzájárulása (GDPR).</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white p-4 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-orange-700 mb-2">Adattárolás ideje</h4>
                  <p className="text-gray-700 text-sm">Szolgáltatás teljesítéséig és jogszabályi kötelezettségekig.</p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-white p-4 rounded-xl border border-teal-100">
                  <h4 className="font-bold text-teal-700 mb-2">Harmadik féllel történő adatmegosztás</h4>
                  <p className="text-gray-700 text-sm">Csak szükséges esetben, jogszerűen.</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white p-4 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-orange-700 mb-2">Felhasználói jogok</h4>
                  <p className="text-gray-700 text-sm">Hozzáférés, helyesbítés, törlés, panasz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showASZFModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-orange-500 p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Általános Szerződési Feltételek</h2>
                <button
                  onClick={() => setShowASZFModal(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Szolgáltató adatai</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">Mészáros-Szeszták Zsófia</p>
                  <p>
                    <span className="font-medium">Egyéni vállalkozói adószám:</span> 58450318-1-25
                  </p>
                  <p>
                    <span className="font-medium">Cím:</span> 1103 Budapest, Kőér köz 29/b 2/13
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> szesztak.zsofia@gmail.com
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-teal-50 to-white p-4 rounded-xl border border-teal-100">
                  <h4 className="font-bold text-teal-700 mb-2">Szolgáltatás leírása</h4>
                  <div className="text-gray-700 text-sm space-y-1">
                    <p>• Online konzultáció és mikrobiom tanácsadás</p>
                    <p>• Nem minősül orvosi diagnózisnak</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white p-4 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-orange-700 mb-2">Időpontfoglalás</h4>
                  <div className="text-gray-700 text-sm space-y-1">
                    <p>• Konzultáció előre egyeztetett időpontban</p>
                    <p>• Lemondás minimum 24 órával korábban</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-white p-4 rounded-xl border border-teal-100">
                  <h4 className="font-bold text-teal-700 mb-2">Fizetés és számlázás</h4>
                  <div className="text-gray-700 text-sm space-y-1">
                    <p>• Konzultáció után elektronikus számla</p>
                    <p>• Számlán bankszámlaszám található</p>
                    <p>• Összeg átutalása a bankszámlára</p>
                    <p>• Szolgáltatás teljesítése az átutalás beérkezésével</p>
                    <p>• Számlázás a jogszabályoknak megfelelően</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white p-4 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-orange-700 mb-2">Felhasználó jogai és kötelezettségei</h4>
                  <div className="text-gray-700 text-sm space-y-1">
                    <p>• Pontos és valós információk</p>
                    <p>• Időben történő megjelenés</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white p-4 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-700 mb-2">Felelősség korlátozása</h4>
                  <p className="text-gray-700 text-sm">Nincs felelősség egészségügyi diagnózisért</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-700 mb-2">Panaszkezelés</h4>
                  <p className="text-gray-700 text-sm">Panasz emailben</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCookieModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-orange-500 p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Cookie-szabályzat</h2>
                <button
                  onClick={() => setShowCookieModal(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Süti-nyilatkozat</h3>
                <p className="text-gray-700">
                  Ez a nyilatkozat tájékoztatja Önt arról, hogy weboldalunk hogyan használja a sütiket (cookie-kat).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-teal-50 to-white p-4 rounded-xl border border-teal-100">
                  <h4 className="font-bold text-teal-700 mb-2">Milyen sütiket használunk</h4>
                  <div className="text-gray-700 text-sm space-y-1">
                    <p>
                      • <span className="font-medium">Funkcionális</span> - A weboldal működéséhez szükséges
                    </p>
                    <p>
                      • <span className="font-medium">Analitikai</span> - Látogatottsági statisztikák készítése
                    </p>
                    <p>
                      • <span className="font-medium">Marketing</span> - Személyre szabott tartalom megjelenítése
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white p-4 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-orange-700 mb-2">Miért használjuk</h4>
                  <div className="text-gray-700 text-sm space-y-1">
                    <p>
                      • <span className="font-medium">Felhasználói élmény javítása</span> - Optimális böngészési élmény
                    </p>
                    <p>
                      • <span className="font-medium">Statisztikák</span> - Weboldal használatának elemzése
                    </p>
                    <p>
                      • <span className="font-medium">Marketing</span> - Releváns tartalom megjelenítése
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-white p-4 rounded-xl border border-teal-100">
                  <h4 className="font-bold text-teal-700 mb-2">Hogyan kezelhetők</h4>
                  <div className="text-gray-700 text-sm space-y-1">
                    <p>
                      • <span className="font-medium">Böngésző beállításain keresztül</span>
                    </p>
                    <p>• Bármikor letilthatja vagy törölheti a sütiket</p>
                    <p>• A funkcionális sütik letiltása befolyásolhatja a weboldal működését</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white p-4 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-orange-700 mb-2">Hozzájárulás</h4>
                  <div className="text-gray-700 text-sm space-y-1">
                    <p>
                      • <span className="font-medium">Weboldal használatával</span> elfogadja a sütik használatát
                    </p>
                    <p>• Hozzájárulását bármikor visszavonhatja</p>
                    <p>• További kérdések esetén vegye fel velünk a kapcsolatot</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">További információ</h3>
                <p className="text-gray-700">
                  Ha kérdése van a cookie-szabályzattal kapcsolatban, kérjük, vegye fel velünk a kapcsolatot az
                  <span className="font-medium text-blue-600"> szesztak.zsofia@gmail.com</span> email címen.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSamplingModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowSamplingModal(false)} // click on overlay closes modal
        >
          <div
            className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/30 relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
          <div
            className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/30 relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-white/50 to-orange-50/30 rounded-3xl"></div>

            <div className="relative z-10 p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">
                  Mintavételi útmutató
                </h2>
                <button
                  onClick={() => setShowSamplingModal(false)}
                  className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Előkészület */}
                <Card className="bg-gradient-to-br from-teal-50/80 to-white/80 backdrop-blur-sm border-2 border-teal-100/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-teal-700 text-xl flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        1
                      </div>
                      <span>Előkészület</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold text-sm mt-0.5">
                          1
                        </div>
                        <p className="text-gray-700 leading-relaxed">Töltsd ki a megrendelőlapot.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold text-sm mt-0.5">
                          2
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Vedd le a kupakot a mintavételi csőről, de hagyd kéznél!
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold text-sm mt-0.5">
                          3
                        </div>
                        <p className="text-gray-700 leading-relaxed">Vigyázz, ki ne boruljon a folyadék a csőből!</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold text-sm mt-0.5">
                          4
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Állítsd a mintavételi csövet a dobozban található tartóba.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold text-sm mt-0.5">
                          5
                        </div>
                        <p className="text-gray-700 leading-relaxed">Vedd ki a pálcát a csomagolásból.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Székletminta vétele */}
                <Card className="bg-gradient-to-br from-orange-50/80 to-white/80 backdrop-blur-sm border-2 border-orange-100/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-orange-700 text-xl flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        2
                      </div>
                      <span>Székletminta vétele</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold text-sm mt-0.5">
                          1
                        </div>
                        <p className="text-gray-700 leading-relaxed">Székletürítés után használj WC-papírt.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold text-sm mt-0.5">
                          2
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          A WC-papíron maradt székletet finom mozdulattal vidd fel a mintavételi pálca vattával borított
                          végére a vatta teljes felületének elszíneződéséig.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Vonalkód és beküldés */}
                <Card className="bg-gradient-to-br from-purple-50/80 to-white/80 backdrop-blur-sm border-2 border-purple-100/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-purple-700 text-xl flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        3
                      </div>
                      <span>Vonalkód és beküldés</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      A mellékelt vonalkódot őrizd meg, ezzel tudsz majd hozzáférni az eredményekhez. A
                      mikrobiomvizsgalatok.hu oldalon a vonalkód megadásával töltsd ki a táplálkozási kérdőívet.
                    </p>
                  </CardContent>
                </Card>

                {/* A minta konzerválása */}
                <Card className="bg-gradient-to-br from-green-50/80 to-white/80 backdrop-blur-sm border-2 border-green-100/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-green-700 text-xl flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        4
                      </div>
                      <span>A minta konzerválása</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm mt-0.5">
                          1
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Az elszíneződött pálcát helyezd a mintavételi csőben lévő folyadékba, a vattával lefele.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm mt-0.5">
                          2
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Körkörös, illetve kismértékű le-fel irányuló mozgással kevergesd a folyadékot 1 percig.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm mt-0.5">
                          3
                        </div>
                        <p className="text-gray-700 leading-relaxed">Vedd ki és dobd ki a pálcát.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm mt-0.5">
                          4
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Csavard a kupakot résmentesen a mintavételi csőre, és rázd a csövet 1 percig.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Követés és beküldés */}
                <Card className="bg-gradient-to-br from-blue-50/80 to-white/80 backdrop-blur-sm border-2 border-blue-100/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-blue-700 text-xl flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        5
                      </div>
                      <span>Követés és beküldés</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                        A vonalkód alatt található szám segítségével tudsz online tájékozódni a mintád feldolgozottsági
                        alapjáról, illetve az eredményeidről.
                      </p>
                      <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-200/30">
                        <p className="text-blue-800 font-medium">
                          📮 Helyezd a mintát tartalmazó csövet és a kitöltött megrendelő-lapot a mellékelt felcímzett
                          borítékba és add fel postán.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                                <Card className="bg-gradient-to-br from-teal-50/80 to-orange-50/80 backdrop-blur-sm border-2 border-gray-200/50 shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <p className="text-gray-600 text-sm mb-4">
                        További kérdések esetén vedd fel velünk a kapcsolatot!
                      </p>
                      <Button
                        onClick={() => {
                          setShowSamplingModal(false)
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                        }}
                        className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        Kapcsolatfelvétel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}

      {showImpresszumModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-orange-500 p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Impresszum</h2>
                <button
                  onClick={() => setShowImpresszumModal(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Weboldal üzemeltetője</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">Mészáros-Szeszták Zsófia egyéni vállalkozó</p>
                  <p>
                    <span className="font-medium">Egyéni vállalkozói adószám:</span> 58450318-1-25
                  </p>
                  <p>
                    <span className="font-medium">Cím:</span> 1103 Budapest, Kőér köz 29/B
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> szesztak.zsofia@gmail.com
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-teal-50 to-white p-4 rounded-xl border border-teal-100">
                  <h4 className="font-bold text-teal-700 mb-2">Szerzői jog</h4>
                  <p className="text-gray-700 text-sm">
                    A weboldal tartalmának szerzői joga Mészáros-Szeszták Zsófiát illeti.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white p-4 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-orange-700 mb-2">Felelősség</h4>
                  <p className="text-gray-700 text-sm">A weboldalon található információk tájékoztató jellegűek.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Kapcsolat</h3>
                <p className="text-gray-700">
                  Ha kérdése van az impresszummal kapcsolatban, kérjük, vegye fel velünk a kapcsolatot az
                  <span className="font-medium text-blue-600"> szesztak.zsofia@gmail.com</span> email címen.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
