# Blackjack con Vite

Juego de Blackjack (21) desarrollado con JavaScript vanilla y Vite. El jugador compite contra la computadora pidiendo cartas o plantándose, con una baraja de 52 cartas mezclada al inicio de cada partida.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- npm

## Instalación

```bash
npm install
```

## Uso

```bash
# Iniciar el servidor de desarrollo
npm run dev

# Generar la versión de producción en dist/
npm run build

# Previsualizar la build de producción
npm run preview
```

## Cómo jugar

- **New Game**: reinicia la partida y mezcla una baraja nueva.
- **Get Card**: pide una carta. Si llegas a 21 o más, la computadora juega automáticamente.
- **Stop Game**: termina tu turno y la computadora pide cartas hasta superarte o pasarse de 21.

Gana quien se acerque más a 21 sin pasarse.

## Estructura del proyecto

```
.
├── index.html               # Página principal e interfaz
├── src/
│   ├── main.js              # Punto de entrada
│   ├── styles.css           # Estilos del juego
│   └── blackjack/
│       ├── index.js         # Inicialización y eventos del juego
│       └── usecases/
│           ├── create-deck.js    # Creación y mezcla de la baraja
│           ├── card-cases.js     # Obtener carta, dibujar y valor
│           ├── computer-turn.js  # Turno de la computadora
│           ├── handle-cases.js   # Acciones de nueva partida, pedir y plantar
│           └── ui.js             # Marcador, banner de resultado y estados
└── public/assets/cards/     # Imágenes de las cartas
```

## Tecnologías

- JavaScript (ES Modules)
- Vite
- CSS moderno (variables, grid/flexbox, animaciones)
