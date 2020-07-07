interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    }
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'rodolfo.29r@gmail.com',
      name: 'Rodolfo GoBarber'
    },
  },
} as IMailConfig;
