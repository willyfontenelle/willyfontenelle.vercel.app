/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: {
    // Configuração para exportar o site como HTML estático
    dir: 'out',
    // Desativar a API de Otimização de Imagens durante a exportação
    images: { unoptimized: true },
  },
}

module.exports = nextConfig
