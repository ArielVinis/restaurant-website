import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-primary/20 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Porto dos Guarás
            </h3>
            <p className="text-gray-400">
              Uma jornada gastronômica através do tempo e do espaço. Experimente
              a culinária como nunca antes.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/portodosguaras/"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Cardápio
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Acessibilidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Newsletter (Em breve)
            </h4>
            <p className="text-gray-400 mb-4">
              Inscreva-se em nosso newsletter para eventos especiais e ofertas
              exclusivas. offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Seu endereço de email"
                className="px-4 py-2 bg-gray-900 border border-primary/30 rounded-md focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Porto dos Guarás. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
