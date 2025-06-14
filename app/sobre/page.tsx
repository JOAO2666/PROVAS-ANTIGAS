import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Sobre | Banco de Provas',
}

export default function SobrePage() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-gray-800 dark:text-gray-200">
                    <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">
                        Sobre o Projeto
                    </h1>
                    <div className="prose lg:prose-xl dark:prose-invert mx-auto">
                        <p>
                            Este Banco de Provas foi desenvolvido por{' '}
                            <a href="https://github.com/JOAO2666" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                                João
                            </a>
                            , um estudante calouro do curso de Ciência da Computação na UNIVASF.
                        </p>
                        <p>
                            A principal motivação para a criação deste site foi a necessidade de centralizar e facilitar o acesso a materiais de estudo, como provas e trabalhos antigos, para todos os estudantes da universidade. A ideia é criar uma plataforma colaborativa onde todos possam contribuir e se beneficiar.
                        </p>
                        <p>
                            O projeto foi fortemente inspirado e utiliza uma base semelhante ao excelente trabalho de{' '}
                            <a href="https://github.com/Daniel-Alencar/courses-univasf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                                Daniel Alencar
                            </a>
                            . Agradecimentos a ele por ter iniciado um projeto tão útil para a comunidade acadêmica.
                        </p>
                        <p>
                            Se você tiver alguma sugestão, encontrar algum erro, ou quiser contribuir com o projeto, sinta-se à vontade para abrir uma{' '}
                            <a href="https://github.com/JOAO2666/PROVAS-ANTIGAS/issues" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                                issue no GitHub
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
} 