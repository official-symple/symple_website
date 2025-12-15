import React from "react"
import { Hero, About, Features, Service, Game, Chat, HealthRecord } from "@/components/duck-dream"

export default function DuckDreamPage() {
  return (
    <main className="duckdream-scroll h-screen w-full snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
      <section className="flex h-screen w-screen items-center justify-center overflow-hidden snap-start">
        <Hero />
      </section>

      <section className="flex h-screen w-screen items-center justify-center overflow-hidden snap-start">
        <About />
      </section>

      <section className="flex h-screen w-screen items-center justify-center overflow-hidden snap-start">
        <Features />
      </section>

      <section className="flex h-screen w-screen items-center justify-center overflow-hidden snap-start">
        <Service />
      </section>

      <section className="flex h-screen w-screen items-center justify-center overflow-hidden snap-start">
        <Game />
      </section>

      <section className="flex h-screen w-screen items-center justify-center overflow-hidden snap-start">
        <Chat />
      </section>

      <section className="flex h-screen w-screen items-center justify-center overflow-hidden snap-start">
        <HealthRecord />
      </section>
    </main>
  )
}
