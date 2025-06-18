'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-gray-100 dark:bg-[#232323] border-b dark:border-gray-800 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-3">
                        {/* Logo UNIVASF SVG fiel */}
                        <svg width="60" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="0" y="22" fontFamily="Arial Black, Arial, sans-serif" fontSize="24" fill="#00AEEF" fontWeight="bold">UNIVASF</text>
                            <circle cx="110" cy="10" r="6" fill="#FFD600" />
                        </svg>
                        <div className="flex flex-col leading-tight">
                            <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">Banco de Provas</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">UNIVASF Juazeiro</span>
                        </div>
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/materias" className="text-gray-700 dark:text-[#3bb0ff] hover:text-blue-600 dark:hover:text-white transition-colors">
                            Matérias
                        </Link>
                        <Link href="/professores" className="text-gray-700 dark:text-[#3bb0ff] hover:text-blue-600 dark:hover:text-white transition-colors">
                            Professores
                        </Link>
                        <Link href="/contribuir" className="text-gray-700 dark:text-[#3bb0ff] hover:text-blue-600 dark:hover:text-white transition-colors">
                            Contribuir
                        </Link>
                        <Link href="/sobre" className="text-gray-700 dark:text-[#3bb0ff] hover:text-blue-600 dark:hover:text-white transition-colors">
                            Sobre
                        </Link>
                        <a href="https://github.com/JOAO2666/Univasf-materials" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-[#3bb0ff] hover:text-blue-600 dark:hover:text-white transition-colors">
                            GitHub
                        </a>
                        <a href="https://www.univasf.edu.br/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-[#3bb0ff] hover:text-blue-600 dark:hover:text-white transition-colors">
                            UNIVASF Oficial
                        </a>
                        <ThemeSwitcher />
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
                    <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#232323]">
                        <div className="flex flex-col space-y-4">
                            <Link href="/materias" className="text-gray-700 dark:text-[#3bb0ff] hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded" onClick={() => setIsMenuOpen(false)}>
                                Matérias
                            </Link>
                            <Link href="/professores" className="text-gray-700 dark:text-[#3bb0ff] hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded" onClick={() => setIsMenuOpen(false)}>
                                Professores
                            </Link>
                            <Link href="/contribuir" className="text-gray-700 dark:text-[#3bb0ff] hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded" onClick={() => setIsMenuOpen(false)}>
                                Contribuir
                            </Link>
                            <Link href="/sobre" className="text-gray-700 dark:text-[#3bb0ff] hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded" onClick={() => setIsMenuOpen(false)}>
                                Sobre
                            </Link>
                            <a href="https://github.com/JOAO2666/PROVAS-ANTIGAS" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-[#3bb0ff] hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded">
                                GitHub
                            </a>
                            <a href="https://www.univasf.edu.br/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-[#3bb0ff] hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded">
                                UNIVASF Oficial
                            </a>
                            <div className="px-4 pt-2">
                                <ThemeSwitcher />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
} 