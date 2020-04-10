export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Last edited documents',
        order: '_updatedAt desc',
      },
      layout: {
        width: 'auto',
        height: 'large',
      },
    },
    {
      name: 'project-info',
      options: {
        layout: {
          width: 'small',
        },
      },
    },
    {
      name: 'project-users',
      options: {
        layout: {
          width: 'small',
        },
      },
    },
    {
      name: 'netlify',
      options: {
        title: 'Netlify Deploys',
        layout: {
          width: 'small',
          height: 'auto',
        },
        sites: [
          {
            title: 'Site',
            apiId: 'fa9418d0-6230-4e94-a4f9-7c8c57b5bfa9',
            buildHookId: 'https://api.netlify.com/build_hooks/5e8d398d44d11449b0e93adf',
            name: 'family-recipe',
          },
          {
            title: 'CMS',
            apiId: '0fa9a49d-44c6-46b8-9aeb-9deaeaade770',
            buildHookId: 'https://api.netlify.com/build_hooks/5e8fd8413fee3236347eb490',
            name: 'cms-family-recipe',
          },
        ],
      },
    },
    {
      name: 'sanity-tutorials',
    },
  ],
};
