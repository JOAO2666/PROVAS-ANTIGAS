import Link from 'next/link'
import { FaFolderOpen } from 'react-icons/fa'
import fs from 'fs'
import path from 'path'

// Função para criar um slug seguro para URL
function criarSlug(texto: string) {
    const comAcento = "áàãâéêíóôõúçÁÀÃÂÉÊÍÓÔÕÚÇ";
    const semAcento = "aaaaeeioooucaaaaeeiooouc";

    let novoTexto = texto
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

    for (let i = 0; i < comAcento.length; i++) {
        novoTexto = novoTexto.replace(new RegExp(comAcento[i], "g"), semAcento[i]);
    }

    return novoTexto.replace(/[^a-z0-9-]/g, "");
}

type Materia = {
    nome: string;
    slug: string;
}

function getMaterias() {
    const materiasDir = path.join(process.cwd(), 'public', 'provas_unificadas')
    const allDirs = fs.readdirSync(materiasDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() && dirent.name !== 'Indefinido' && dirent.name !== 'provas')
        .map(dirent => ({
            nome: dirent.name,
            slug: criarSlug(dirent.name.split(' - ').slice(0, -1).join(' - ') || dirent.name)
        }));

    // Remove duplicatas de slugs, mantendo o nome mais completo
    const materiasUnicas: { [key: string]: Materia } = {};
    allDirs.forEach(materia => {
        if (!materiasUnicas[materia.slug] || materiasUnicas[materia.slug].nome.length < materia.nome.length) {
            // Ajusta o nome para não incluir o professor se já existir uma matéria com o mesmo slug base
            const parts = materia.nome.split(' - ');
            if (parts.length > 1) {
                const nomeBase = parts.slice(0, -1).join(' - ');
                if (allDirs.some(m => m.nome === nomeBase)) {
                    materiasUnicas[materia.slug] = { ...materia, nome: nomeBase };
                    return;
                }
            }
            materiasUnicas[materia.slug] = materia;
        }
    });

    return Object.values(materiasUnicas).sort((a, b) => a.nome.localeCompare(b.nome));
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
                    </Link>
                ))}
            </div>
        </main>
    )
} 