"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-32">
              <Image src="/images/symple-wordmark.png" alt="SYMPLE Logo" fill className="object-contain" />
            </div>
          </Link>

          {!isMobile ? (
            <>
              <nav className={`flex items-center space-x-8 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                <Link href="#why-symple" className="hover:text-symple transition-colors">
                  Why SYMPLE?
                </Link>
                <Link href="#products" className="hover:text-symple transition-colors">
                  서비스
                </Link>
                <Link href="#technology" className="hover:text-symple transition-colors">
                  기술
                </Link>
                <Link href="#partners" className="hover:text-symple transition-colors">
                  회사 소개
                </Link>
                <Link href="#blog" className="hover:text-symple transition-colors">
                  아티클
                </Link>
                <Link href="#faq" className="hover:text-symple transition-colors">
                  FAQ
                </Link>
              </nav>

              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  className={`border-duck ${
                    isScrolled
                      ? "bg-duck/30 hover:bg-duck text-gray-700 hover:text-white"
                      : "bg-duck/30 text-white hover:bg-duck"
                  } transition-colors`}
                >
                  오리의 꿈 다운로드
                </Button>
                <Button
                  className={`border-symple ${
                    isScrolled
                      ? "bg-symple/30 hover:bg-symple text-gray-700 hover:text-white"
                      : "bg-symple/30 text-white hover:bg-symple"
                  } transition-colors`}
                >
                  SYMPLE 앱 다운로드
                </Button>
              </div>
            </>
          ) : (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          )}
        </div>

        {isMobile && isMenuOpen && (
          <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#why-symple"
                className="text-gray-700 hover:text-symple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why SYMPLE?
              </Link>
              <Link
                href="#products"
                className="text-gray-700 hover:text-symple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                서비스
              </Link>
              <Link
                href="#technology"
                className="text-gray-700 hover:text-symple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                기술
              </Link>
              <Link
                href="#partners"
                className="text-gray-700 hover:text-symple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                회사 소개
              </Link>
              <Link
                href="#blog"
                className="text-gray-700 hover:text-symple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                아티클
              </Link>
              <Link
                href="#faq"
                className="text-gray-700 hover:text-symple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </nav>
            <div className="mt-4 flex flex-col space-y-2">
              <Button variant="outline" className="w-full border-duck bg-duck/30 hover:bg-duck hover:text-white">
                오리의 꿈 다운로드
              </Button>
              <Button className="w-full border-symple bg-symple/30 hover:bg-symple hover:text-white">
                SYMPLE 앱 다운로드
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
