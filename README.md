# Todo Machine 📝 (En Desarrollo 🚧)

Una aplicación web interactiva para la gestión de tareas construida con React.js. Este proyecto se encuentra actualmente **en pleno desarrollo** como parte de un proceso de aprendizaje profundo para dominar los fundamentos y herramientas avanzadas del ecosistema de React.

## 🚀 Características Actuales

- **Arquitectura Base:** Creación y estructuración inicial de componentes funcionales.
- **Renderizado Dinámico:** Uso de condicionales y propiedades (props) para modificar la interfaz.
- **Estilos Modulares:** Aplicación estricta de la metodología BEM (Block, Element, Modifier) mediante CSS puro y clases dinámicas.

## 🗺️ Roadmap de Aprendizaje y Desarrollo

**Fase 1: Fundamentos y UI Estática (Completado)**
- [x] Creación y estructuración de componentes UI.
- [x] Comunicación entre componentes mediante Props.
- [x] Renderizado de listas a partir de arrays (uso de `key`).
- [x] Maquetación y estilos modulares con metodología BEM y CSS puro.
- [x] Renderizado condicional e inyección de clases dinámicas.

**Fase 2: Interactividad y Persistencia (Completado)**
- [x] Interactividad y Estado: Manejo de Eventos y Estados (`useState`) en React.
- [x] Lógica de Negocio: Funcionalidad para contar, completar y eliminar TODOs.
- [x] Integración de Íconos: Creación de componentes SVG reutilizables.
- [x] Persistencia: Almacenamiento de datos utilizando API genérica del navegador (`localStorage`).
- [x] Custom Hooks: Abstracción de la lógica de almacenamiento en un hook personalizado (`useLocalStorage`).

**Fase 3: Asincronismo y Ciclo de Vida (Por hacer)**
- [ ] Efectos Secundarios: Manejo del ciclo de vida de los componentes con `useEffect`.
- [ ] Estados UI: Gestión de estados de carga (loading) y manejo de errores.
- [ ] Experiencia de Usuario (UX): Implementación de *Loading Skeletons* (pantallas de carga falsas).

**Fase 4: Escalabilidad y Estado Global (Por hacer)**
- [ ] Arquitectura: Organización de archivos y carpetas, directorios *feature-first* y abstracción de componentes.
- [ ] Estado Global: Solución al *Prop Drilling* implementando `React Context` y `useContext`.

**Fase 5: Componentes Avanzados y Formularios (Por hacer)**
- [ ] React Portals: Teletransportación de componentes en el DOM.
- [ ] Modales: Creación de ventanas emergentes para la interfaz de usuario.
- [ ] Formularios: Maquetación, captura de eventos e inserción de nuevos datos en la aplicación.

**Fase 6: Ecosistema y Despliegue (Por hacer)**
- [ ] Despliegue: Preparación y deploy a producción (hosting de la aplicación).
- [ ] Ecosistema React: Análisis de diferencias entre versiones y entornos de desarrollo (Create React App vs. Vite vs. Next.js).

## 🛠️ Tecnologías

- **Librería Core:** React.js
- **Lenguaje:** JavaScript (ES6+)
- **Estilos:** CSS3 Puro (Metodología BEM)
- **Entorno:** Create React App

## ⚙️ Instalación y Uso (Local)

Para probar la versión actual en tu entorno local, sigue estos pasos:

1- Clona el repositorio:
```bash
git clone https://github.com/Tonga26/curso-react-intro
```

2- Accede al directorio del proyecto:
```Bash
cd curso-react-intro
```

3- Instala las dependencias necesarias:
```Bash
npm install
```

4- Inicia el servidor de desarrollo:
```Bash
npm start
```

La aplicación estará disponible en http://localhost:3000.