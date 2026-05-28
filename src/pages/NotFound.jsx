import { FaArrowLeft, FaHome } from 'react-icons/fa'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-leaf-pattern">
      <div className="absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-harvest-100/60 blur-3xl" aria-hidden="true" />
      <Container className="relative grid min-h-[60vh] place-items-center py-20 text-center">
        <div>
          <p className="font-display text-[8rem] font-bold leading-none text-brand-700 sm:text-[12rem]">
            404
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            This field doesn&apos;t exist.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-ink-600">
            The page you&apos;re looking for has been harvested, moved or never planted.
            Let&apos;s get you back on familiar soil.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/" variant="primary" icon={FaHome}>Back to Home</Button>
            <Button to="/products" variant="outline" icon={FaArrowLeft}>Browse Products</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
