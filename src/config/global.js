export default {
  global: {
    componenteFormativo: 'Lista de chequeo del proyecto',
    descripcionCurso:
      'Una lista de chequeo es un documento organizado que enumera elementos esenciales para realizar una tarea o evaluar un proceso. Facilita el seguimiento y la verificación de pasos, garantizando que se completen adecuadamente. En este documento contiene los elementos básicos de una lista de chequeo y la manera como se deben realizar, teniendo en cuenta el paso a paso y un ejemplo que se puede adaptar según las necesidades.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      // {
      //   nombreRuta: 'introduccion',
      //   icono: 'fas fa-info-circle',
      //   titulo: 'Introducción',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Lista de chequeo del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos que componen la lista de chequeo del proyecto',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Pasos para elaborar la evaluación del proyecto',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Recomendaciones para desarrollar la lista de chequeo del proyecto',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Herramientas digitales se pueden utilizar para la lista de chequeo del proyecto',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Ejemplo de la evaluación del proyecto',
            hash: 't_1_6',
          },
        ],
      },

      // {
      //   nombreRuta: 'tema2',
      //   numero: '2',
      //   titulo: 'Titulo de primer nivel',
      //   desarrolloContenidos: true,
      // },
      // {
      //   nombreRuta: 'tema3',
      //   numero: '3',
      //   titulo: 'Titulo de primer nivel',
      //   desarrolloContenidos: true,
      // },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      //   desarrolloContenidos: true,
      // },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      // {
      //   nombreRuta: 'glosario',
      //   icono: 'fas fa-sort-alpha-down',
      //   titulo: 'Glosario',
      // },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: '',
      significado: '',
    },
    {
      termino: '<em></em>',
      significado: '',
    },
  ],
  referencias: [
    {
      referencia:
        'Cardona, C. y Restrepo, A. (s.f). Lista de Chequeo. Herramientas de control. Puntos de encuentro.',
      link:
        'http://puntosdeencuentro.weebly.com/uploads/2/2/3/6/22361874/listas_de_chequeo.pdf',
    },
    {
      referencia:
        'Mancera, M. (2012). Seguridad e higiene industria. Alfaomega.',
      link:
        'https://www.academia.edu/36319515/Seguridad_e_higiene_industrial_Mancera_FernA_ndez_Mario_Alfaomega_Colombia_pdf_1_1_1_',
    },
    {
      referencia: 'Mancera, M. (2008). Lista de chequeo.',
      link: 'http://www.manceras.com.co/publicaciones.htm',
    },
    {
      referencia:
        'Oliva, P. (2009). Listas de chequeo como técnica de control.',
      link: 'https://claudiabernazza.com.ar/ssgp/html/pdf/check_list.pdf',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2015). ISO 9001:2015. Sistemas de gestión de la calidad.',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:es',
    },
    {
      referencia:
        'PDCA. (s.f). Check list / Listas de chequeo: ¿Qué es un checklist y cómo usarlo?',
      link: 'http://www.pdcahome.com/check-list/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
