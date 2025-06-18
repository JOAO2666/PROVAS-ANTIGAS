import fs from 'fs'
import path from 'path'
import { FaFilePdf, FaFileImage, FaFileAlt, FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

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

// Mapeamento de slugs para nomes originais das pastas
let slugParaNomeOriginal: { [key: string]: string } = {};

function gerarMapeamentoDeSlugs() {
    if (Object.keys(slugParaNomeOriginal).length > 0) return;

    const materiasDir = path.join(process.cwd(), 'public', 'provas_unificadas');
    try {
        const allDirs = fs.readdirSync(materiasDir, { withFileTypes: true });
        slugParaNomeOriginal = {}; // Limpa para garantir que está fresco
        allDirs
            .filter(dirent => dirent.isDirectory())
            .forEach(dirent => {
                const parts = dirent.name.split(' - ');
                const nomeMateria = parts.length > 1 ? parts.slice(0, -1).join(' - ') : dirent.name;
                const slugMateria = criarSlug(nomeMateria);

                // Prioriza mapeamentos mais específicos (matéria-professor)
                if (!slugParaNomeOriginal[slugMateria]) {
                    slugParaNomeOriginal[slugMateria] = dirent.name;
                }
                const slugCompleto = criarSlug(dirent.name);
                slugParaNomeOriginal[slugCompleto] = dirent.name;
            });
    } catch (error) {
        console.error("Erro ao ler diretório de matérias:", error);
    }
}

export async function generateStaticParams() {
    gerarMapeamentoDeSlugs();
    return Object.keys(slugParaNomeOriginal).map(slug => ({ slug }));
}

function getArquivosDaMateria(slug: string) {
    gerarMapeamentoDeSlugs();

    const nomeOriginal = slugParaNomeOriginal[slug] || Object.values(slugParaNomeOriginal).find(nome => criarSlug(nome) === slug) || decodeURIComponent(slug);

    if (!nomeOriginal) {
        console.log(`Nenhum nome original encontrado para o slug: ${slug}`);
        return { arquivos: [], nomeOriginal: decodeURIComponent(slug) };
    }

    const pasta = path.join(process.cwd(), 'public', 'provas_unificadas', nomeOriginal);

    if (!fs.existsSync(pasta)) {
        console.log(`Pasta não encontrada: ${pasta}`);
        return { arquivos: [], nomeOriginal };
    }

    // Função recursiva para ler arquivos em subdiretórios
    const lerDiretoriosRecursivamente = (dir: string): { nome: string; tipo: 'pdf' | 'img' | 'outro' }[] => {
        const entradas = fs.readdirSync(dir, { withFileTypes: true });
        const arquivos = entradas.flatMap((entrada) => {
            const res = path.resolve(dir, entrada.name);
            if (entrada.isDirectory()) {
                return lerDiretoriosRecursivamente(res);
            }
            if (entrada.name.startsWith('.')) {
                return [];
            }
            const ext = entrada.name.split('.').pop()?.toLowerCase();
            let tipo: 'pdf' | 'img' | 'outro' = 'outro';
            if (ext === 'pdf') tipo = 'pdf';
            else if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(ext || '')) tipo = 'img';

            // Retorna o caminho relativo da pasta da matéria para uso no link
            const nomeRelativo = path.relative(pasta, res);

            return { nome: nomeRelativo, tipo };
        });
        return arquivos;
    };

    return { arquivos: lerDiretoriosRecursivamente(pasta), nomeOriginal };
}

export default function MateriaDetalhe({ params }: { params: { slug: string } }) {
    const { arquivos, nomeOriginal: nomeMateria } = getArquivosDaMateria(params.slug)

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
                                    <div className="truncate font-medium">{path.basename(arq.nome)}</div>
                                </div>
                                <a
                                    href={`/provas_unificadas/${encodeURIComponent(nomeMateria)}/${arq.nome.replace(/\\/g, '/').split('/').map(part => encodeURIComponent(part)).join('/')}`}
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