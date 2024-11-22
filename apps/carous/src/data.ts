import { ITalk } from "./types";
import wewantyou from "../wewantyou.jpg";

export const eventDetails = {
  title: "React Paris Meetup #5",
  date: "Mercredi 20 Novembre 2024 19h",
  host: "Algolia",
  address: "55 Rue d'Amsterdam, 75008 Paris",
};

export const communityMeetups = [
  {
    groupName: "React Native Paris",
    title: "React Native Paris #6",
    date: "Jeudi 28 Novembre 2024",
    location: "chez PMU",
  },
  {
    groupName: "Vue.js Paris",
    title: "Vue.js Paris #28",
    date: "Merciredi 4 Décembre 2024",
    location: "TBD",
  },
  {
    groupName: "Node.js Paris",
    title: "Node.js Paris #3, Chapitre 12",
    date: "Mercredi 11 Décembre 2024",
    location: "chez Takima",
  },
];

export const talks: ITalk[] = [
  {
    title: "Débugger un composant React legacy : cas pratique",
    description: `Dans une codebase partagée, il est inévitable qu'un·e développeur·se se retrouve face à un bug sur un composant qu'il·elle n'a jamais touché, et dont les créateurs ont quitté l'entreprise depuis longtemps. 

Alors, comment s'y prendre pour résoudre le problème sans tout casser ? Cette présentation revient sur un exemple concret : le débugging d'un autocomplete capricieux. Du diagnostic initial à la résolution, les différentes étapes seront illustrées avec des astuces pratiques pour aborder le code legacy sereinement, éviter les pièges et avancer efficacement sans repartir de zéro.`,
    speaker: {
      name: "Alphonse Bouy",
      title: "Software Engineer",
      profilePicture:
        "https://media.licdn.com/dms/image/v2/D4E03AQFcow71RcaZtg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668933416216?e=1737590400&v=beta&t=tfHmp-JACnDvH0Mh45gzm0ZMekKvl44fhv9uexZAA8s",
    },
  },
  {
    title: "Adopter pas-à-pas React 19 (via Next.js 15)",
    description: `Ce talk présente Next.js 15, le premier framework stable permettant d’utiliser React 19 en production, avec un focus sur l’adoption des React Server Components.

Il est structuré en deux phases : d'abord la séparation d'une page web en fichiers serveur et client, puis l’optimisation de cette séparation pour le rendu des composants.`,
    speaker: {
      name: "Luther Tchofo Safo",
      title: "Full Stack Dev, Freelance",
      profilePicture:
        "https://media.licdn.com/dms/image/v2/D5603AQFwVYbvRvET1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1664731733133?e=1736985600&v=beta&t=eSowUayShmQhOx_Ukd4fTYjpMN7wuH63x4quccoLGyU",
    },
  },
  {
    title: "Réactivité granulaire en React mais sans React Compiler",
    description: `Atteindre une réactivité fine dans une application React sans en compromettre l'expérience développeur a toujours été un défi majeur.

Lors de la conception d'applications temps réel conçues pour afficher des centaines de millions de lignes sans latence perceptible, une réactivité fine est clé. Explorons ensemble comment nous avons réussi à ingérer, afficher et mettre à jour d'immenses ensembles de données de manière fluide, sans sacrifier l'expérience développeur ni l'expérience utilisateur.`,
    speaker: {
      name: "Nicolas Dubien",
      title: "Senior Engineer @Pigment",
      profilePicture:
        "https://media.licdn.com/dms/image/v2/C4D03AQFcyRSWhwgcLA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1566851192829?e=1736985600&v=beta&t=gz7ri1e5zBhlSyzELCiASHNRK6cGrF2VgMH-L6W8F50",
    },
  },
];
