'use client'

import { useState } from 'react'

export default function Contribuir() {
    const [formData, setFormData] = useState({
        curso: '',
        disciplina: '',
        professor: '',
        semestre: '',
        ano: '',
    })
    const [emailEnviado, setEmailEnviado] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const emailDestino = "joaoemanuel2666@gmail.com"; // <--! IMPORTANTE: Troque pelo seu email !-->
        const assunto = `Contribuição de Prova: ${formData.disciplina}`;
        const corpoEmail = `
Olá,

Gostaria de contribuir com a seguinte prova:

- Curso: ${formData.curso}
- Disciplina: ${formData.disciplina}
- Professor: ${formData.professor}
- Semestre: ${formData.semestre}º
- Ano: ${formData.ano}

O arquivo da prova está em anexo.

Obrigado!
        `.trim();

        const mailtoLink = `mailto:${emailDestino}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;

        window.location.href = mailtoLink;
        setEmailEnviado(true);
    }

    return (
        <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
            <div className="container mx-auto px-4">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Contribuir com Provas</h1>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Compartilhe suas provas para ajudar outros alunos. Ao clicar em "Preparar Envio", seu aplicativo de e-mail será aberto com as informações preenchidas para que você possa anexar e nos enviar o arquivo.
                    </p>
                </header>

                <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
                    {emailEnviado ? (
                        <div className="text-center p-6 bg-green-100 dark:bg-green-900/50 rounded-lg">
                            <h2 className="text-2xl font-semibold text-green-800 dark:text-green-200">Verifique seu aplicativo de e-mail!</h2>
                            <p className="text-green-700 dark:text-green-300 mt-2">
                                Um rascunho de e-mail foi preparado. Por favor, anexe o arquivo da prova e envie-o.
                                Se nada aconteceu, verifique se você possui um cliente de e-mail padrão configurado no seu dispositivo.
                            </p>
                            <button
                                onClick={() => setEmailEnviado(false)}
                                className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Enviar outra prova
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="curso" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Curso
                                </label>
                                <input
                                    type="text"
                                    id="curso"
                                    value={formData.curso}
                                    onChange={(e) => setFormData({ ...formData, curso: e.target.value })}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="disciplina" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Disciplina
                                </label>
                                <input
                                    type="text"
                                    id="disciplina"
                                    value={formData.disciplina}
                                    onChange={(e) => setFormData({ ...formData, disciplina: e.target.value })}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="professor" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Professor
                                </label>
                                <input
                                    type="text"
                                    id="professor"
                                    value={formData.professor}
                                    onChange={(e) => setFormData({ ...formData, professor: e.target.value })}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="semestre" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Semestre
                                    </label>
                                    <select
                                        id="semestre"
                                        value={formData.semestre}
                                        onChange={(e) => setFormData({ ...formData, semestre: e.target.value })}
                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                                        required
                                    >
                                        <option value="">Selecione</option>
                                        {Array.from({ length: 10 }, (_, i) => (
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1}º Semestre
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="ano" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Ano
                                    </label>
                                    <input
                                        type="number"
                                        id="ano"
                                        min="2000"
                                        max={new Date().getFullYear()}
                                        value={formData.ano}
                                        onChange={(e) => setFormData({ ...formData, ano: e.target.value })}
                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                                        required
                                    />
                                </div>
                            </div>

                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                Nota: Você precisará anexar o arquivo da prova manualmente no e-mail que será aberto.
                            </p>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-transform transform hover:scale-105"
                            >
                                Preparar Envio por E-mail
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </main>
    )
} 