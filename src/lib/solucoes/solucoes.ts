// lib/solucoes/solucoes.ts

import { OohComponent } from "@/presentation";
import { ComponentType } from "react";

type Solucao = {
  label: string;
  slug: string;
  component: ComponentType;
};

export const solucoes: Solucao[] = [
  { label: "Out of home - OOH", slug: "out-of-home", component: OohComponent },
  {
    label: "Pontos de venda - PDV",
    slug: "ponto-de-venda",
    component: OohComponent,
  },
  {
    label: "Projetos especiais",
    slug: "projetos-especiais",
    component: OohComponent,
  },
  { label: "Linha ECO", slug: "linha-eco", component: OohComponent },
];
