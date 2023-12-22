import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <motion.div key="app"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:.2}}
    >
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </motion.div>
  );
}
