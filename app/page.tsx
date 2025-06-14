import Link from 'next/link'

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-12">
                <header className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Banco de Provas</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Compartilhe e acesse provas antigas da sua faculdade
                    </p>
                </header>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card de Matérias */}
                        <Link href="/materias" className="group">
                            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-1">Matérias</h2>
                                        <p className="text-gray-600">Acesse provas por disciplina</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Card de Professores */}
                        <Link href="/professores" className="group">
                            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="h-12 w-12 bg-green-50 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors">
                                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-1">Professores</h2>
                                        <p className="text-gray-600">Encontre provas por professor</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Card de Contribuir */}
                        <Link href="/contribuir" className="group">
                            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="h-12 w-12 bg-purple-50 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                                        <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-1">Contribuir</h2>
                                        <p className="text-gray-600">Compartilhe suas provas</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Card de Sobre */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="flex items-center space-x-4">
                                <div className="h-12 w-12 bg-gray-50 rounded-lg flex items-center justify-center">
                                    <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-1">Sobre</h2>
                                    <p className="text-gray-600">Saiba mais sobre o projeto</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
} 