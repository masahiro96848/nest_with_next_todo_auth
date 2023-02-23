import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { TodoProvider } from '@/contexts/TodoContext'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <TodoProvider>
            <Component {...pageProps} />
        </TodoProvider>
    )
}
