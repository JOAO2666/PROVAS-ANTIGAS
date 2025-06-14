import Link from 'next/link'
import { FaFolderOpen } from 'react-icons/fa'
import fs from 'fs'
import path from 'path'

// Função para buscar as matérias dinamicamente
function getMaterias() {
    const materiasDir = path.join(process.cwd(), 'Banco de Provas')
    const allDirs = fs.readdirSync(materiasDir, { withFileTypes: true })
    return allDirs
        .filter(dirent => dirent.isDirectory() && dirent.name !== 'Indefinido' && dirent.name !== 'provas')
        .map(dirent => {
            // Separar nome da matéria e professor, se houver
            const [nome, ...prof] = dirent.name.split(' - ')
            return {
                nome: nome.trim(),
                professor: prof.length > 0 ? prof.join(' - ').trim() : null,
                slug: encodeURIComponent(dirent.name),
            }
        })
}

export default function Materias() {
    const materias = getMaterias()
    return (
        <main className="min-h-screen bg-[#323232] flex flex-col justify-center items-center py-12">
            <h1 className="text-3xl font-semibold text-gray-100 mb-8">Selecione a matéria</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
                {materias.map((materia) => (
                    <Link
                        key={materia.slug}
                        href={`/materias/${materia.slug}`}
                        className="bg-[#0984e3] rounded-lg shadow-md flex flex-col items-center p-6 text-white transition-transform hover:scale-105 hover:bg-[#0d6fd3]"
                    >
                        <FaFolderOpen className="w-8 h-8 mb-2 text-white" />
                        <div className="text-lg font-medium text-center mb-1">{materia.nome}</div>
                        {materia.professor && (
                            <div className="text-xs text-blue-100 mb-1">{materia.professor}</div>
                        )}
                    </Link>
                ))}
            </div>
        </main>
    )
} 