export interface ThemeConfig {
  groupName: string;
  contactInfo: {
    title: string;
    hostText: string;
    hostLink: string;
    talkText: string;
    talkLink: string;
  };
}

export const themeConfigs: Record<string, ThemeConfig> = {
  'react-paris': {
    groupName: 'React Paris',
    contactInfo: {
      title: 'Contact',
      hostText: 'Vous souhaitez hoster un meetup ?',
      hostLink: 'https://github.com/ReactParis',
      talkText: 'ou proposer un talk ?',
      talkLink: 'https://github.com/ReactParis/talks'
    }
  },
  'nodejs': {
    groupName: 'Node.js Paris',
    contactInfo: {
      title: 'Rejoignez-nous',
      hostText: 'Vous voulez organiser un meetup Node.js ?',
      hostLink: 'https://github.com/NodeParis',
      talkText: 'ou partager votre expérience ?',
      talkLink: 'https://github.com/NodeParis/talks'
    }
  },
  'vuejs': {
    groupName: 'Vue.js Paris',
    contactInfo: {
      title: 'Participez',
      hostText: 'Intéressé pour héberger un meetup Vue.js ?',
      hostLink: 'https://github.com/VueParis',
      talkText: 'ou présenter un sujet ?',
      talkLink: 'https://github.com/VueParis/talks'
    }
  },
  'paris-typescript': {
    groupName: 'TypeScript Paris',
    contactInfo: {
      title: 'Contribuez',
      hostText: 'Envie d\'accueillir un meetup TypeScript ?',
      hostLink: 'https://github.com/TypeScriptParis',
      talkText: 'ou faire une présentation ?',
      talkLink: 'https://github.com/TypeScriptParis/talks'
    }
  },
  'dark': {
    groupName: 'Tech Meetup',
    contactInfo: {
      title: 'Contact Us',
      hostText: 'Want to host a meetup?',
      hostLink: 'https://github.com/TechMeetup',
      talkText: 'or give a talk?',
      talkLink: 'https://github.com/TechMeetup/talks'
    }
  },
  'light': {
    groupName: 'Tech Meetup',
    contactInfo: {
      title: 'Contact Us',
      hostText: 'Want to host a meetup?',
      hostLink: 'https://github.com/TechMeetup',
      talkText: 'or give a talk?',
      talkLink: 'https://github.com/TechMeetup/talks'
    }
  }
};
