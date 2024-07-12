import "bootstrap/dist/css/bootstrap.min.css";
import "../style/index.css";
import {AnimatePresence} from 'framer-motion'
import Transition from "./components/transition";
import {useRouter} from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <AnimatePresence mode="wait">
      <Transition key={router.route}>
        <Component {...pageProps} />
      </Transition>
    </AnimatePresence>
}
