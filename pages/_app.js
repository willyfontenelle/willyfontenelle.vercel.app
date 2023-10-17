import '../styles/globals.css'

import { useEffect } from 'react';
import { useRouter } from 'next/router'; // Importe o 'useRouter' do 'next/router'.

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Exemplo de monitoramento de mudanças de rota
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Execute algum código sempre que a rota mudar
      console.log('Rota mudou para:', url);
    };

    // Adicione um ouvinte de evento para monitorar as mudanças de rota
    router.events.on('routeChangeStart', handleRouteChange);

    // Remova o ouvinte de evento quando o componente for desmontado
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]); // Inclua 'router.events' na lista de dependências.

  return <Component {...pageProps} />;
}

export default MyApp;
