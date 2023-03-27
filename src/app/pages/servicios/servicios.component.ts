import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent {
  lstServicios = [
    {
      img: 'extintores-matafuego-servicio.jpg',
      alt:"",
      texto:
        'Nos encargamos del retiro de sus matafuegos, que serán llevados a nuestra planta industrial y en el lapso de 24 a 48 horas serán entregados a domicilio. Mientras tanto, para que su establecimiento esté cubierto y provisto de seguridad, se entregan extintores en carácter de préstamo. Este servicio no tiene ningún costo extra sobre el precio de la propia recarga.',
      titulo: 'Mantenimiento y Recarga de extintores',
    },
    {
      img: 'sello-calidad-cefarec-utn.webp',
      alt:"",
      texto:
        'Ser socios fundadores de la Cámara de Fabricantes y Recargadores de Extintores de Córdoba nos permite garantizar el mejor servicio posible a la sociedad. A su vez, la oblea de certificación de la Universidad Tecnológica Nacional asegura que el proceso de recarga de los extintores es el correcto. ¡ Exija que sus matafuegos sean mantenidos con la mayor calidad !',
      titulo: 'Certificación CAFAREC - UTN',
    },
    {
      img: 'planes-de-evacuacion.jpeg',
      alt:"",
      texto:
        'A través de nuestros profesionales lograremos reducir al mínimo las consecuencias de una posible situación de riesgo en su establecimiento. Esto se logra a través de distintos niveles de actuación, que son la previsión, la prevención y la protección. Su tranquilidad estará asegurada y no se preocupará por tener que realizar trámites engorrosos.Capacitar a las personas que compartan un espacio físico es esencial para una mejor respuesta ante un siniestro.',
      titulo: 'Planes de Evacuación y Cursos de Capacitación',
    },
    {
      img: 'mantenimiento-consorcios-matafuegos.jpeg',
      alt:"",
      texto:
        'Visitamos los distintos establecimientos para relevar las condiciones generales del mismo y presupuestar lo necesario en materia de seguridad, en caso de adquirir nuestros servicios nos comunicaremos regularmente para recordar sobre vencimientos o labores a realizar en el lugar. También realizamos controles trimestrales del estado correcto de extintores',
      titulo:
        'Mantenimiento de consorcios, empresas, industrias y grandes edificios',
    },
    {
      img: 'seguridad-higiene.jpeg',
      alt:"",
      texto:
        'Llevamos a cabo los distintos servicios que son exigidos para la prevención de accidentes y enfermedades, entre ellos se encuentran:Certificados para habilitaciones Programas de seguridad Identificación y evaluación de riesgos laborales ',
      titulo: 'Asesoramiento en Higiene y Seguridad',
    },
    {
      img: 'baños-accesorios-carteleria.jpeg',
      alt:"",
      texto:
        'Realizamos la instalación de cartelería en general y fotoluminiscente, así como cintas antideslizantes, gabinetes, nichos hidrantes, válvulas de teatro, mangueras, lanzas y sprinklers.',
      titulo: 'Colocación de accesorios de Seguridad',
    },
    {
      img: 'sifon-reparacion-service.jpeg',
      alt:"",
      texto:
        'Si su sifón marca Ferraris, tipo Drago o Sifogas no logra la mejor soda o funciona de manera incorrecta, no significa que ya no sirva. ¡ Se puede arreglar ! Desde el primer día prestamos este servicio y lo seguimos haciendo de manera exclusiva. Acérquese a nuestro local comercial para que elaboremos su presupuesto y disfrute de la mejor soda.',
      titulo: 'Reparación y Service de sifones automáticos',
    },
  ];

  lstImg = [
    { nombre: 'cefarec-logo-servicio.webp' , alt:""},
    { nombre: 'utn-logo.webp', alt:""},
    { nombre: 'sello-calidad-cefarec-utn.webp', alt:""},
    { nombre: 'cambios-polvo-quimico.webp', alt:""},
    { nombre: 'vida-util-extintores.webp', alt:""},
    { nombre: 'oblea-certificado.webp', alt:""},
  ];
}
