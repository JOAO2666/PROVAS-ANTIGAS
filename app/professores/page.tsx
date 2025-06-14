import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Professores | Banco de Provas',
}

// Função para criar um slug seguro para URL
function criarSlug(texto: string) {
    return texto
        .normalize("NFD")
        .replace(/[\\u0300-\\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9\\s-]/g, "")
        .trim()
        .replace(/\\s+/g, "-")
        .replace(/-+/g, "-");
}

type Materia = {
    nome: string;
    slug: string;
}

type Professor = {
    nome: string;
    materias: Materia[];
}

function getProfessores(): Professor[] {
    const materiasDir = path.join(process.cwd(), 'public', 'provas_unificadas')
    const allDirs = fs.readdirSync(materiasDir, { withFileTypes: true })

    const professoresMap: { [key: string]: Materia[] } = {}

    allDirs
        .filter(dirent => dirent.isDirectory() && dirent.name !== 'Indefinido')
        .forEach(dirent => {
            const parts = dirent.name.split(' - ');
            let nomeMateria = dirent.name;
            let nomeProfessor = 'Não especificado';

            if (parts.length > 1) {
                nomeMateria = parts.slice(0, -1).join(' - ');
                nomeProfessor = parts[parts.length - 1];
            }

            if (!professoresMap[nomeProfessor]) {
                professoresMap[nomeProfessor] = [];
            }

            professoresMap[nomeProfessor].push({
                nome: nomeMateria,
                slug: criarSlug(dirent.name)
            });
        });

    return Object.entries(professoresMap)
        .map(([nome, materias]) => ({ nome, materias }))
        .sort((a, b) => a.nome.localeCompare(b.nome));
}

export default function ProfessoresPage() {
    const professores = getProfessores()

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-10 text-blue-600 dark:text-blue-400">
                    Matérias por Professor
                </h1>
                <div className="space-y-8">
                    {professores.map((professor) => (
                        <div key={professor.nome} className="p-6 rounded-lg shadow-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{professor.nome}</h2>
                            <ul className="space-y-2">
                                {professor.materias.map((materia) => (
                                    <li key={materia.slug}>
                                        <Link href={`/materias/${materia.slug}`} className="text-lg text-blue-600 dark:text-blue-400 hover:underline">
                                            {materia.nome}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 