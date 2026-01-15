# App Theme Reference

Este documento describe la paleta de colores, estilos de texto y decoraciones definidos en `app_theme.dart`, junto con su uso en la aplicación.

---

## Paleta de Colores

| Nombre                  | Color        | Uso                                                        |
|------------------------ |-------------|------------------------------------------------------------|
| `primaryOrange`         | #E65100      | Elementos activos, títulos principales                     |
| `primaryBlue`           | #1E3A8A      | Textos importantes, títulos de tarjetas                    |
| `backgroundGradientStart`| #A8E6CF     | Fondo de pantalla (gradiente, inicio)                      |
| `backgroundGradientEnd` | #FFF9C4      | Fondo de pantalla (gradiente, fin)                         |
| `cardBackground`        | #FFFFFF      | Fondo de tarjetas                                          |
| `textPrimary`           | #374151      | Texto general, descripciones, listas                       |
| `textSecondary`         | #6B7280      | Texto no seleccionado, palabras encontradas                |
| `avatarBackground`      | #FFCC80      | Fondo del avatar                                           |
| `avatarIcon`            | #FFFFFF      | Icono del avatar                                           |
| `foundWordColor`        | #D81B60      | Palabras encontradas (resaltado)                           |

---

## Estilos de Texto

| Nombre                | Fuente        | Tamaño | Peso         | Color                | Uso                                                        |
|---------------------- |--------------|--------|--------------|----------------------|------------------------------------------------------------|
| `greeting`            | Poppins      | 22     | Bold         | primaryBlue          | Saludo principal                                           |
| `sectionTitle`        | Poppins      | 20     | Bold         | primaryOrange        | Título de sección ("Asignaciones", "Leyendas"), Home      |
| `cardTitle`           | Poppins      | 16     | Bold         | primaryBlue          | Título dentro de una tarjeta                               |
| `cardDescription`     | PublicSans   | 13     | Normal       | textPrimary          | Descripción dentro de una tarjeta                          |
| `listItem`            | PublicSans   | -      | Normal       | textPrimary          | Elemento de lista simple, cuerpo de texto principal        |
| `wordLetter`          | Poppins      | 28     | Bold         | primaryBlue          | Letras de palabras                                         |
| `keyboardLetter`      | Poppins      | 18     | SemiBold     | Blanco               | Letras del teclado                                         |
| `dialogTitle`         | Poppins      | 22     | Bold         | primaryBlue          | Título de diálogos                                         |
| `dialogBody`          | Poppins      | 16     | Normal       | textPrimary          | Cuerpo de diálogos                                         |
| `screenTitle`         | Poppins      | 24     | Bold         | primaryBlue          | Título de pantalla                                         |
| `wordInList`          | Poppins      | 16     | SemiBold     | primaryBlue          | Palabra en lista                                           |
| `foundWordInList`     | Poppins      | 16     | Medium       | textSecondary        | Palabra encontrada en lista (tachado)                      |
| `letterInGrid`        | Poppins      | 18     | Bold         | textPrimary          | Letra en grilla                                            |

---

## Decoraciones y Formas

| Nombre                  | Tipo                | Valor/Descripción                        | Uso                        |
|------------------------ |---------------------|------------------------------------------|----------------------------|
| `cardShapeLarge`        | ShapeBorder         | BorderRadius.circular(20)                | Tarjetas grandes           |
| `cardShapeMedium`       | ShapeBorder         | BorderRadius.circular(15)                | Tarjetas medianas          |
| `imageBorderRadius`     | BorderRadius        | BorderRadius.circular(12)                | Imágenes                   |
| `screenBackgroundGradient`| BoxDecoration     | Gradiente vertical de fondo              | Fondo de pantalla          |

---

## Tema General

- **Fuente por defecto:** PublicSans
- **Fondo de Scaffold:** Transparente (para mostrar gradiente)
- **Colores de barra de navegación:**
  - Seleccionado: primaryOrange
  - No seleccionado: textSecondary
- **Tema de tarjetas:**
  - Fondo: cardBackground
  - Elevación: 2
  - Margen: vertical 6, horizontal 8

---

> **Nota:** Los estilos y colores aquí listados están definidos en `lib/app_theme.dart` y se aplican en las diferentes pantallas y widgets de la app.

