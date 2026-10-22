import Image from "next/image"

const kitItems = ["Credencial personalizada", "Crachá", "Brinde de participação"]

export function ExclusiveBenefitSection() {
  return (
    <section className="bg-[#1a0c27] px-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-[#ff9f45]">
            O que você leva
          </p>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl font-extrabold leading-tight text-[#fff4df] sm:text-5xl">
            Uma lembrança da aventura para levar para casa.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#f8e9d5]/85">
            Os primeiros 50 ingressos recebem um kit especial da edição Halloween:
          </p>
          <ul className="mt-8 space-y-4 border-l-2 border-[#ff9f45] pl-5 text-lg font-semibold text-[#fff4df]">
            {kitItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#f8e9d5]/75">
            O kit é exclusivo dos primeiros 50 ingressos. Todos os ingressos dão acesso ao evento e às atividades disponíveis, conforme horários, regras e capacidade.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <Image
            src="/images/halloween-kit.png"
            alt="Kit Halloween da Jogadinha Nerd com credencial, crachá e brinde"
            width={1154}
            height={1363}
            sizes="(min-width: 1024px) 450px, (min-width: 640px) 420px, 90vw"
            className="h-auto w-full rounded-2xl shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
          />
        </div>
      </div>
    </section>
  )
}
