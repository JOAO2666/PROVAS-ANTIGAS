'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-[#232323] border-b border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-3">
                        {/* Logo UNIVASF SVG fiel */}
                        <svg width="60" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="0" y="22" fontFamily="Arial Black, Arial, sans-serif" fontSize="24" fill="#00AEEF" fontWeight="bold">UNIVASF</text>
                            <circle cx="110" cy="10" r="6" fill="#FFD600" />
                        </svg>
                        <div className="flex flex-col leading-tight">
                            <span className="text-lg font-semibold text-gray-100">Banco de Provas</span>
                            <span className="text-xs text-gray-400">UNIVASF Juazeiro</span>
                        </div>
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/materias" className="text-[#3bb0ff] hover:text-white transition-colors">
                            Matérias
                        </Link>
                        <Link href="/docs" className="text-[#3bb0ff] hover:text-white transition-colors">
                            Documentação
                        </Link>
                        <Link href="/sobre" className="text-[#3bb0ff] hover:text-white transition-colors">
                            Sobre
                        </Link>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-[#3bb0ff] hover:text-white transition-colors">
                            GitHub
                        </a>
                        <a href="https://www.univasf.edu.br/" target="_blank" rel="noopener noreferrer" className="text-[#3bb0ff] hover:text-white transition-colors">
                            UNIVASF Oficial
                        </a>
                    </div>

                    {/* Menu Mobile Button */}
                    <button
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Menu Mobile */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-800">
                        <div className="flex flex-col space-y-4">
                            <Link href="/materias" className="text-[#3bb0ff] hover:text-white px-4" onClick={() => setIsMenuOpen(false)}>
                                Matérias
                            </Link>
                            <Link href="/docs" className="text-[#3bb0ff] hover:text-white px-4" onClick={() => setIsMenuOpen(false)}>
                                Documentação
                            </Link>
                            <Link href="/sobre" className="text-[#3bb0ff] hover:text-white px-4" onClick={() => setIsMenuOpen(false)}>
                                Sobre
                            </Link>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-[#3bb0ff] hover:text-white px-4">
                                GitHub
                            </a>
                            <a href="https://www.univasf.edu.br/" target="_blank" rel="noopener noreferrer" className="text-[#3bb0ff] hover:text-white px-4">
                                UNIVASF Oficial
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
} 