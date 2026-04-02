export enum TypeService {
  Introduction = "Intro",
  OOH = "Out of Home",
  PDV = "Ponto de venda",
  SpecialProjects = "Projetos especiais",
  LinhaEco = "Linha Eco",
}

export interface IListServices {
  service: TypeService;
  imgDeskt: string;
  imgMobile: string;
  descriptionJob: string;
  listCheck: string[];
}

export const listServices: IListServices[] = [
  {
    service: TypeService.Introduction,
    imgDeskt: "/images/intro-home.jpg",
    imgMobile: "/images/web-mob.png",
    descriptionJob:
      "Desenvolvemos projetos que conectam sua marca com o público nos principais pontos de contato — das ruas ao ponto de venda.",
    listCheck: [],
  },
  {
    service: TypeService.OOH,
    imgDeskt: "/images/process/urbano.png",
    imgMobile: "/images/web-mob.png",
    descriptionJob:
      "Projetos de mídia OOH com produção e instalação de outdoors, painéis, frontlights e outras soluções de publicidade externa.",
    listCheck: [],
  },
  {
    service: TypeService.PDV,
    imgDeskt: "/images/mobile-desktop.png",
    imgMobile: "/images/app-mob.png",
    descriptionJob:
      "Produção de materiais para PDV que fortalecem a presença da marca no momento da decisão de compra.",
    listCheck: [],
  },

  {
    service: TypeService.SpecialProjects,
    imgDeskt: "/images/specialProject-Home.png",
    imgMobile: "/images/ux-mob.png",
    descriptionJob:
      "Desenvolvimento e execução de projetos personalizados para campanhas que exigem soluções fora do padrão.",
    listCheck: [],
  },
  {
    service: TypeService.LinhaEco,
    imgDeskt: "/images/ecotela.avif",
    imgMobile: "/images/branding-mob.png",
    descriptionJob:
      "Produção com foco em materiais sustentáveis e soluções com menor impacto ambiental.",
    listCheck: [],
  },
];
