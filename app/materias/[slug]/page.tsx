import fs from 'fs'
import path from 'path'
import { FaFilePdf, FaFileImage, FaFileAlt, FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

export async function generateStaticParams() {
    const materiasDir = path.join(process.cwd(), 'Banco de Provas')
    const allDirs = fs.readdirSync(materiasDir, { withFileTypes: true })
    return allDirs
        .filter(dirent => dirent.isDirectory() && dirent.name !== 'Indefinido' && dirent.name !== 'provas')
        .map(dirent => ({ slug: encodeURIComponent(dirent.name) }))
}

function getArquivosDaMateria(slug: string) {
    const pasta = path.join(process.cwd(), 'Banco de Provas', decodeURIComponent(slug))
    if (!fs.existsSync(pasta)) return []
    return fs.readdirSync(pasta)
        .filter(nome => !nome.startsWith('.'))
        .map(nome => {
            const ext = nome.split('.').pop()?.toLowerCase()
            let tipo: 'pdf' | 'img' | 'outro' = 'outro'
            if (ext === 'pdf') tipo = 'pdf'
            else if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(ext || '')) tipo = 'img'
            return { nome, tipo }
        })
}

export default function MateriaDetalhe({ params }: { params: { slug: string } }) {
    const arquivos = getArquivosDaMateria(params.slug)
    const nomeMateria = decodeURIComponent(params.slug)

    return (
        <main className="min-h-screen bg-[#323232] flex flex-col items-center py-10 px-2">
            <div className="w-full max-w-3xl">
                <Link href="/materias" className="flex items-center text-[#3bb0ff] hover:underline mb-6">
                    <FaArrowLeft className="mr-2" /> Voltar para matérias
                </Link>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-8 text-center">{nomeMateria}</h1>
                {arquivos.length === 0 ? (
                    <div className="text-gray-300 text-center">Nenhum arquivo encontrado para esta matéria.</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {arquivos.map((arq) => (
                            <div key={arq.nome} className="bg-[#0984e3] rounded-lg p-5 flex items-center space-x-4 text-white shadow-md">
                                <div>
                                    {arq.tipo === 'pdf' && <FaFilePdf className="w-8 h-8 text-red-200" />}
                                    {arq.tipo === 'img' && <FaFileImage className="w-8 h-8 text-yellow-200" />}
                                    {arq.tipo === 'outro' && <FaFileAlt className="w-8 h-8 text-white" />}
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <div className="truncate font-medium">{arq.nome}</div>
                                </div>
                                <a
                                    href={`/Banco de Provas/${encodeURIComponent(nomeMateria)}/${encodeURIComponent(arq.nome)}`}
                                    download
                                    className="bg-white text-[#0984e3] px-3 py-1 rounded font-semibold text-sm hover:bg-blue-100 transition"
                                >
                                    Download
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
} 