export default function Footer() {
    return (
        <footer className="bg-[#22559C] py-3 w-full mt-auto">
            <div className="container mx-auto px-4">
                <nav className="flex flex-wrap justify-center gap-6 text-white text-sm font-medium">
                    <a href="/materias" className="hover:underline">Cursos</a>
                    <a href="/docs" className="hover:underline">Documentação</a>
                    <a href="/sobre" className="hover:underline">Sobre</a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                    <a href="https://www.univasf.edu.br/" target="_blank" rel="noopener noreferrer" className="hover:underline">UNIVASF Oficial</a>
                </nav>
            </div>
        </footer>
    )
} 