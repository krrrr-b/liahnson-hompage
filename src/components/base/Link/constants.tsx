export const LINKS = {
    CLIENTS: '/clients',
    CAREERS: '/careers',
    SERVICES: '/services',
    EXPERTS: '/experts',
    ABOUT: '/about',
    TYPE_FORM_EXPERTS: 'https://liahnson.exlink.com/expert_registration.php',
    TYPE_FORM_CLIENTS: 'https://liahnson.exlink.com/client_requests.php?egid=ynzA'
  } as const;
  
  export type Links = (typeof LINKS)[keyof typeof LINKS];
  