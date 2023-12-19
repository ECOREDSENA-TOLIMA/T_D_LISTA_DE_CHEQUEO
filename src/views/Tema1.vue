<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Lista de chequeo del proyecto
    
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Definición
    
    p(data-aso="fade-left") Las listas de chequeo o de verificación es una técnica común que ayuda a controlar la ejecución de una actividad de manera rigurosa, además permite identificar resultados con base en variables relacionadas a la calidad de la ejecución, el cumplimiento, los riesgos o los factores que el líder del proyecto quiera medir.
    .row.justify-content-center.align-items-center
      .col-lg-5.col-8.mb-3
        figure(data-aso="fade-right")
          img(src='@/assets/curso/temas/tema1/1.jpg', alt='Imagen decorativa')
      .col-lg-7.col-12.mb-3
        p(data-aso="fade-left") Son formatos creados para realizar actividades repetitivas, controlar el cumplimiento de una lista de requisitos o recolectar datos de forma ordenada y sistemática. Se utilizan para realizar controles estandarizados de actividades o productos, asegurándose de no olvidar ningún punto importante.
        .cajon.color-primario.p-4.mb-3(style="background-color: #CDF5E2")
          p(data-aso="fade-left") Según Cardona y Restrepo (s.f.) la lista de chequeo es en sí misma, una ayuda para la memoria, al proporcionar un método para una rápida verificación de los ítems planteados según el tipo de asunto a controlar. Contribuyen a normalizar o estandarizar líneas de acción sistemáticas detallando cada uno de los puntos de actividad o proceso.
    p(data-aso="fade-left") Con el seguimiento de una actividad a través de una lista de chequeo, se puede obtener la información para tomar medidas correctivas que ayuden a reducir el riesgo de fracaso del proyecto.
    p(data-aso="fade-left") Por ejemplo, Mario Mancera (2012), asesor en higiene y seguridad industrial, explica que la lista de chequeo es uno de los mecanismos que ayudan a controlar los riesgos y que permiten detectar condiciones que representen peligro, que, para su campo profesional, se refiere a controlar las variables del ambiente y los cambios que puedan ocasionar peligro en la salud del hombre.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Elementos que componen la lista de chequeo del proyecto
    
    p(data-aso="fade-left") La lista de chequeo, como herramienta metodológica está compuesta por una serie de ítems, factores, propiedades, aspectos, componentes, criterios, dimensiones o comportamientos, necesarios de tomarse en cuenta, para realizar una tarea, controlar y evaluar detalladamente el desarrollo de un proyecto, evento, producto o actividad. Dichos componentes se organizan de manera coherente para permitir que se evalúe de manera efectiva, la presencia o ausencia de los elementos individuales enumerados o por porcentaje de cumplimiento u ocurrencia. (Oliva, 2009). Algunos de los elementos son:

    .row.justify-content-center
      .col-lg-10.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span #[i Elementos de la lista de chequeo]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/2.svg' alt='En la figura 1 se muestran los diferentes elementos que componen una lista de chequeo.')
        .row.justify-content-center
          .col-12 
            figure.movil(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/3.svg' alt='En la figura 1 se muestran los diferentes elementos que componen una lista de chequeo.')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3 Pasos para elaborar la evaluación del proyecto
    p(data-aos="fade-left") Para la elaboración de una lista de chequeo la norma ISO 9001 recomienda los siguientes pasos:

    PasosA.color-acento-contenido.mb-5(tipo="l")
      div
        h3 Determinar el área que se quiere evaluar
        p Los integrantes deben enfocar su atención hacia el análisis de las características del proceso, además deben tener claras las partes del proceso a observar para no perderse. Esta determinación es muy importante cuando una compañía cuenta con varias sedes o localizaciones.

      div
        h3 Diseñar el formato de verificación
        p Escribir las categorías o variables posibles, establecer la escala de ocurrencias y diseñar la cuadrícula. Asegurarse de que todas las partes de la lista de chequeo estén claramente descritas. Esta herramienta busca minimizar problemas y ofrecer un formato claro y fácil de usar. Así que no hacen falta florituras ni colorines, mientras más básico, mejor.

      div
        h3 Tomar nota de la información en el formato de la verificación
        p Esto puede variar de horas a semanas. Además, deben ser períodos realistas y que de verdad aporten información.

      div
        h3 Registrarlo en una base de datos para su tratamiento estadístico y análisis de los resultados
        p Debe estarse seguro de que se dedique el tiempo necesario para esta actividad. El encargado o encargada de recopilar los datos, debe tomarse su tiempo, a veces hay procesos que son un poco repetitivos y tediosos y pueden llegar a cansar.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4 Recomendaciones para desarrollar la lista de chequeo del proyecto
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/4.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | La lectura del componente formativo, los enlaces relacionados en este, el material complementario, la revisión de los anexos, la guía de aprendizaje, así como el seguir de manera precisa las instrucciones de las actividades y orientaciones del instructor, son muy importantes para un logro eficaz de los resultados esperados en el proyecto formativo.
          br
          br
          | 

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_5 1.5 Herramientas digitales se pueden utilizar para la lista de chequeo del proyecto
    
    p(data-aos="fade-left") <b>El instructor le indicará la herramienta digital donde se desarrollará el debate asincrónico, no obstante, se listan a continuación algunas de ellas:</b> 

    .row.justify-content-center.mt-5
      .col-lg-10.col-12
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.p-5(style="background-color: #CDF5E2")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema1/5.svg', alt='Texto que describa la imagen')
            
            h2.text-center <i>Word</i>
            p Es el procesador de texto del paquete <i>Office</i> de <i>Microsoft</i>, es el más usado y tal vez potente en el medio, puede usarse como aplicación nativa o en línea.
          .col-md.tarjeta.p-5(style="background-color: #DBE5F3")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema1/6.svg', alt='Texto que describa la imagen')
            
            h2.text-center <i>Excel</i>
            p <i>Microsoft</i> <i>Office</i> <i>Excel</i> es una hoja de cálculo que sirve para manejar datos numéricos o alfanuméricos agrupados en filas y columnas también llamadas tablas de datos. Con la ayuda del editor VBA de <i>Excel</i> se pueden programar macros.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_6 1.6 Ejemplo de la evaluación del proyecto
    
    .row.justify-content-center
      .col-lg-10.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span #[i Ejemplo de lista de chequeo]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/7.svg' alt='En la figura 1 se muestran los diferentes elementos que componen una lista de chequeo.')
          .col-sm-auto
            a.boton.color-acento-botones.texto-blanco.movil(:href="obtenerLink('/downloads/anexo_Lista_de_chequeo.pdf')" target="_blank")
              span Descargar
              i.fas.fa-file-download
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
