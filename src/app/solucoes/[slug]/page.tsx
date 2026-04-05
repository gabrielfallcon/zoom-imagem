import { notFound } from "next/navigation";
import "../../../styles/global.scss";
import { solucoes } from "@/lib/solucoes/solucoes";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return solucoes.map((s) => ({ slug: s.slug }));
}

export default async function Solutions({ params }: Props) {
  const { slug } = await params;

  const solucao = solucoes.find((s) => s.slug === slug);

  if (!solucao) notFound();

  const Pagina = solucao!.component;

  return <Pagina />;
}
