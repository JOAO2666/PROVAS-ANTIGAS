'use client'

import { useState } from 'react'

export default function Contribuir() {
    const [formData, setFormData] = useState({
        curso: '',
        disciplina: '',
        professor: '',
        semestre: '',
        ano: '',
        arquivo: null as File | null,
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Aqui será implementada a lógica de upload do arquivo
        console.log('Dados do formulário:', formData)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, arquivo: e.target.files[0] })
        }
    }

    return (
        <main className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Contribuir com Provas</h1>
                    <p className="text-gray-600">Compartilhe suas provas para ajudar outros alunos</p>
                </header>

                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="curso" className="block text-sm font-medium text-gray-700 mb-1">
                                Curso
                            </label>
                            <input
                                type="text"
                                id="curso"
                                value={formData.curso}
                                onChange={(e) => setFormData({ ...formData, curso: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="disciplina" className="block text-sm font-medium text-gray-700 mb-1">
                                Disciplina
                            </label>
                            <input
                                type="text"
                                id="disciplina"
                                value={formData.disciplina}
                                onChange={(e) => setFormData({ ...formData, disciplina: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="professor" className="block text-sm font-medium text-gray-700 mb-1">
                                Professor
                            </label>
                            <input
                                type="text"
                                id="professor"
                                value={formData.professor}
                                onChange={(e) => setFormData({ ...formData, professor: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="semestre" className="block text-sm font-medium text-gray-700 mb-1">
                                    Semestre
                                </label>
                                <select
                                    id="semestre"
                                    value={formData.semestre}
                                    onChange={(e) => setFormData({ ...formData, semestre: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                >
                                    <option value="">Selecione</option>
                                    <option value="1">1º Semestre</option>
                                    <option value="2">2º Semestre</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="ano" className="block text-sm font-medium text-gray-700 mb-1">
                                    Ano
                                </label>
                                <input
                                    type="number"
                                    id="ano"
                                    value={formData.ano}
                                    onChange={(e) => setFormData({ ...formData, ano: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="arquivo" className="block text-sm font-medium text-gray-700 mb-1">
                                Arquivo da Prova (PDF)
                            </label>
                            <input
                                type="file"
                                id="arquivo"
                                accept=".pdf"
                                onChange={handleFileChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Enviar Prova
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
} 