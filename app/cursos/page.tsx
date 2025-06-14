import Link from 'next/link'

// Dados de exemplo - posteriormente serão substituídos por dados do banco de dados
const cursos = [
    {
        id: 1,
        nome: 'Ciência da Computação',
        sigla: 'CC',
        provas: [
            { id: 1, nome: 'Cálculo I', professor: 'Dr. Silva', periodo: '2023.1' },
            { id: 2, nome: 'Programação I', professor: 'Dra. Santos', periodo: '2023.2' },
            { id: 3, nome: 'Estrutura de Dados', professor: 'Dr. Oliveira', periodo: '2023.1' },
        ]
    },
    {
        id: 2,
        nome: 'Engenharia Civil',
        sigla: 'EC',
        provas: [
            { id: 4, nome: 'Mecânica dos Solos', professor: 'Dr. Oliveira', periodo: '2023.1' },
            { id: 5, nome: 'Estruturas', professor: 'Dr. Costa', periodo: '2023.2' },
            { id: 6, nome: 'Hidráulica', professor: 'Dr. Pereira', periodo: '2023.1' },
        ]
    },
    {
        id: 3,
        nome: 'Medicina',
        sigla: 'MED',
        provas: [
            { id: 7, nome: 'Anatomia', professor: 'Dra. Lima', periodo: '2023.1' },
            { id: 8, nome: 'Fisiologia', professor: 'Dr. Santos', periodo: '2023.2' },
            { id: 9, nome: 'Bioquímica', professor: 'Dra. Costa', periodo: '2023.1' },
        ]
    },
]

export default function Cursos() {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Cursos</h1>
                    <p className="text-xl text-gray-600">Selecione um curso para ver as provas disponíveis</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cursos.map((curso) => (
                        <div key={curso.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-2xl font-semibold text-gray-900">{curso.nome}</h2>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        {curso.sigla}
                                    </span>
                                </div>
                                <div className="space-y-4">
                                    {curso.provas.map((prova) => (
                                        <div key={prova.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-medium text-gray-900">{prova.nome}</h3>
                                                <span className="text-sm text-gray-500">{prova.periodo}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-2">Professor: {prova.professor}</p>
                                            <Link
                                                href={`/provas/${prova.id}`}
                                                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                                            >
                                                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                Baixar Prova
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
} 