import { ReactNode } from 'react'
import { Navigation } from '../../molecules/Navigation'

type Props = {
    children: ReactNode
    title: string
}

export const BaseLayout = ({ title, children }: Props) => {
    return (
        <div>
            <header className="header">
                <Navigation />
            </header>
            <main className="container">
                <h1 className="title">{title}</h1>
                {children}
            </main>
        </div>
    )
}
