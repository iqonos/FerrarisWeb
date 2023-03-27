import { Component } from '@angular/core';
import { IProducto, Productos } from 'src/app/models/productos.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent {
  lstTitleProductosMatafuegos: string[] = [
    'Polvo Químico ABC',
    'Dióxido de Carbono (CO2)',
    'Haloclean (HCFC)',
    'Acetato de Potasio (K)',
    'Agua',
    'Espuma Química',
  ];
  lstTitleProductosKit: string[] = ['Kits'];
  lstTitleProductosArticuloSeguridad: string[] = [
    'Artículos de Seguridad',
    'Cartelería de Seguridad',
    'Soporte Funda de matafuego',
    'Gabinetes metálicos para extintores',
    'Nichos Hidrantes',
    'Elementos de actuación contra incendios',
  ];

  lstTitleProductosSifones: string[] = ['Repuestos de Sifones Automáticos'];

  lstProductos: any = [
    [
      {
        id: 0,
        listaUsos: [
          'Aptos para distintas clases de fuego',
          'Empleados en todo tipo de establecimientos',
          'Utilización manual',
        ],
        titleMasInfo: 'CAPACIDAD',
        txtMasInfo: '2,5 Kg. – 5 Kg. – 10 Kg.',
        img: 'polvo-abc/matafuego-polvo-abc.png',
        enum: Productos.PolvoAbc,
      },
      {
        id: 0,
        listaUsos: [
          'Utilizado en vehículos',
          'Cumple con reglamentación vigente',
        ],
        titleMasInfo: 'CAPACIDAD',
        txtMasInfo: '1 kg',
        img: 'polvo-abc/matafuego-polvo-abc-pq.png',
        enum: Productos.PolvoAbc,
      },
    ],
    [
      {
        id: 1,
        listaUsos: [
          'Ideales para instalaciones eléctricas',
          'Empleados en todo tipo de establecimientos',
          'Utilización manual',
        ],
        titleMasInfo: '',
        txtMasInfo: '',
        img: 'carbono/matafuego-carbono.webp',
        enum: Productos.Carbono,
      },
    ],
    [
      {
        id: 2,
        listaUsos: [
          'Ideales para equipos electrónicos',
          'Utilización manual',
          'No deja residuos tras la extinción',
        ],
        titleMasInfo: '',
        txtMasInfo: '',
        img: 'haloclean/matafuego-haloclean-1.webp',
        enum: Productos.Haloclean,
      },
    ],
    [
      {
        id: 3,
        listaUsos: [
          'Utilizados para protección de cocinas gastronómicas',
          'Contienen Acetato de Potasio',
          'Alta precisión en recorrido del Agente Extintor',
        ],
        titleMasInfo: '',
        txtMasInfo: '',
        img: 'acetato-potasio/matafuego-acetato-de-potasio.webp',
        enum: Productos.Potasio,
      },
    ],
    [
      {
        id: 4,
        listaUsos: [
          'Utilizados para fuegos clase A (combustibles sólidos)',
          'Cilindro de acero inoxidable',
          'No aptos para instalaciones eléctricas',
        ],
        titleMasInfo: '',
        txtMasInfo: '',
        img: 'base-agua/base-agua.webp',
        enum: Productos.Agua,
      },
    ],
    [
      {
        id: 5,
        listaUsos: [
          'Utilizados para fuegos clase AB (combustibles sólidos, líquidos y gaseosos)',
          'Cilindro de acero inoxidable',
          'No aptos para instalaciones eléctricas',
        ],
        titleMasInfo: '',
        txtMasInfo: '',
        img: 'espuma-quimica/espuma-quimica.webp',
        enum: Productos.EspumaQuimica,
      },
    ],
  ];

  lstProductosKits: any = [
    [
      {
        id: 6,
        listaUsos: [
          'Elementos exigidos por Policía Caminera',
          'Por separado o en conjunto',
        ],
        titleMasInfo: '',
        txtMasInfo: '',
        img: 'kit-seguridad/kit-seguridad-0.png',
        enum: Productos.KitSeguridad,
      },
    ],
  ];

  lstProductosArticulos: any = [
    [
      {
        id: 7,
        listaUsos: [
          'Botiquines industriales con y sin elementos',
          'Baldes de incendio',
          'Cintas de señalización y antideslizante',
        ],
        titleMasInfo: '',
        txtMasInfo: '',
        img: 'articulos-seguridad/articulo-sin-bg.png',
        enum: Productos.ArticulosSeguridad,
      },
    ],
    [
      {
        id: 8,
        listaUsos: [
          'Señalización fotoluminiscente y común',
          'Calcomanías y Alto Impacto',
          'Diferentes tamaños',
        ],
        titleMasInfo: '',
        txtMasInfo: '',
        img: 'carteleria-seguridad/carteleria-de-seguridad-1.webp',
        enum: Productos.CartelSeguridad,
      },
    ],
    [
      {
        id: 9,
        listaUsos: [
          'Práctico para fijar el extintor bajo el asiento',
          'Permite la adhesión mediante abrojo',
        ],
        titleMasInfo: '',
        txtMasInfo: '',
        img: 'soporte-matafuegos/soporte-matafuegos-auto.webp',
        enum: Productos.Fundas,
      },
    ],
    [
      {
        id: 10,
        listaUsos: [
          'Para evitar robos y desgaste excesivo de matafuegos',
          'Distintos modelos con y sin puerta',
          'Con vidrios y candados incluidos',
        ],
        titleMasInfo: '',
        txtMasInfo: '',
        img: 'gabinetes/gabinete.webp',
        enum: Productos.Gabinetes,
      },
    ],
    [
      {
        id: 11,
        listaUsos: [
          'Para mangueras de distintos tamaños',
          'Gabinetes de manguera sola',
          'Gabinetes de manguera + matafuego: permiten ahorrar espacio y agregar valor estético al lugar. Presta facilidad para actuar en caso de incendio',
        ],
        titleMasInfo: '',
        txtMasInfo: '',
        img: 'nichos-hidrantes/nicho-hidrante-2.webp',
        enum: Productos.Nichos,
      },
    ],
    [
      {
        id: 12,
        listaUsos: [
          'Mangueras y válvulas de teatro',
          'Lanzas metálicas de chorro pleno y niebla',
          'Sprinklers de pared y techo',
        ],
        titleMasInfo: '',
        txtMasInfo: '',
        img: 'elementos-contra-incendios/elementos-de-actuacion-contra-incendios-1.webp',
        enum: Productos.ElementosContraIncendios,
      },
    ],
  ];

  lstProductosSifon: any[] = [
    [
      {
        id: 13,
        listaUsos: [
          'Reparaciones y repuestos de:',
          'Ferraris',
          'Sifogas',
          'Tipo Drago',
        ],
        titleMasInfo: '',
        txtMasInfo: '',
        img: 'sifon/sifon-1.webp',
        enum: Productos.Sifones,
      },
    ],
  ];

  lstCarruselExtintores: any[] = [
    [
      'polvo-abc/polvo-abc1.webp',
      'polvo-abc/polvo-abc-2.webp',
      'polvo-abc/polvo-abc-3.webp',
      'polvo-abc/polvo-abc-4.webp',
      'polvo-abc/polvo-abc-5.webp',
    ],
    [''],
    [
      'haloclean/matafuego-haloclean-1.webp',
      'haloclean/matafuego-haloclean-2.webp',
    ],
    [''],
    [''],
    [''],
  ];

  lstCarruselKits: any[] = [
    [
      'kit-seguridad/kit-seguridad.webp',
      'kit-seguridad/cuarta-de-remolque.webp',
      'kit-seguridad/chalecos-reflectivos.webp',
      'kit-seguridad/botiquin-primeros-auxilios.webp',
      'kit-seguridad/balizas.webp',
    ],
  ];

  lstCarruselArticulos: any[] = [
    [
      'articulos-seguridad/articulo-de-seguridad-1.webp',
      'articulos-seguridad/articulo-de-seguridad-2.webp',
      'articulos-seguridad/articulo-de-seguridad-3.webp',
    ],
    [
      'carteleria-seguridad/carteleria-de-seguridad-1.webp',
      'carteleria-seguridad/carteleria-de-seguridad-2.webp',
      'carteleria-seguridad/carteleria-de-seguridad-3.webp',
      'carteleria-seguridad/carteleria-de-seguridad-4.webp',
      'carteleria-seguridad/carteleria-de-seguridad-5.webp',
      'carteleria-seguridad/carteleria-de-seguridad-6.webp',
      'carteleria-seguridad/carteleria-de-seguridad-7.webp',
      'carteleria-seguridad/carteleria-de-seguridad-8.webp',
      'carteleria-seguridad/carteleria-de-seguridad-9.webp',
      'carteleria-seguridad/carteleria-de-seguridad-10.webp',
      'carteleria-seguridad/carteleria-de-seguridad-11.webp',
      'carteleria-seguridad/carteleria-de-seguridad-12.webp',
      'carteleria-seguridad/carteleria-de-seguridad-13.webp',
      'carteleria-seguridad/carteleria-de-seguridad-14.webp',
      'carteleria-seguridad/carteleria-de-seguridad-15.webp',
      'carteleria-seguridad/carteleria-de-seguridad-16.webp',
      'carteleria-seguridad/carteleria-de-seguridad-17.webp',
      'carteleria-seguridad/carteleria-de-seguridad-18.webp',
      'carteleria-seguridad/carteleria-de-seguridad-19.webp',
      'carteleria-seguridad/carteleria-de-seguridad-20.webp',
      'carteleria-seguridad/carteleria-de-seguridad-21.webp',
      'carteleria-seguridad/carteleria-de-seguridad-22.webp',
      'carteleria-seguridad/carteleria-de-seguridad-23.webp',
      'carteleria-seguridad/carteleria-de-seguridad-24.webp',
      'carteleria-seguridad/carteleria-de-seguridad-25.webp',
    ],
    [''],
    [''],
    [
      'nichos-hidrantes/nicho-hidrante-1.webp',
      'nichos-hidrantes/nicho-hidrante-2.webp',
      'nichos-hidrantes/nicho-hidrante-3.webp',
    ],
    [
      'elementos-contra-incendios/elementos-de-actuacion-contra-incendios-1.webp',
      'elementos-contra-incendios/elementos-de-actuacion-contra-incendios-2.webp',
      'elementos-contra-incendios/elementos-de-actuacion-contra-incendios-3.webp',
      'elementos-contra-incendios/elementos-de-actuacion-contra-incendios-4.webp',
    ],
  ];

  lstCarruselSifones: any[] = [
    ['sifon/sifon-1.webp', 'sifon/sifon-2.webp', 'sifon/sifon-3.webp'],
  ];
}
