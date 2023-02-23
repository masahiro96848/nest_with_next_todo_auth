import { ReactNode } from 'react'
import { Navigation } from '../../molecules/Navigation'

type Props = {
    children: ReactNode
    title: string
}

export const BaseLayout = ({ title, children }: Props) => {
    return (
        <div className="container">
            <section className="common">
                <Navigation />
            </section>
            <h1 className="title">{title}</h1>
            {children}
        </div>
    )
}
