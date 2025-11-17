import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-zinc-500 text-gray-100 p-5 flex justify-between">
      <div className="text-sm">© 2025 부산대학교 김유찬. All rights reserved.</div>
      <div className="flex justify-center space-x-6">
        <a href="https://github.com" aria-label="Github" className="hover:text-lime-400 text-xl transition-colors"><FaGithub /></a>
        <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-400 text-xl transition-colors"><FaInstagram /></a>
        <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-400 text-xl transition-colors"><FaFacebook /></a>
      </div>
    </footer>
  )
}
