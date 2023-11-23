# Estrategias de Optimización en Angular

## 1. Optimizar la Carga de Imágenes - Nueva Directiva ngSrc en Angular v14 y Posteriores

En aplicaciones que muestran numerosas imágenes, reducir el tiempo de renderizado es crucial para mejorar la experiencia del usuario. 
La nueva directiva `ngSrc` introducida en Angular v14 y posteriores permite reducir significativamente el tiempo de carga de imágenes. 
La implementación es sencilla, solo se debe cambiar el atributo `src` por `ngSrc`.

## 2. Carga diferida (Lazy Loading)

En aplicaciones grandes es importante evitar cargar todos los módulos. Por ello, revisaría bien el proyecto y ver qué puntos se pueden mejorar. 
Aunque por lo general esta estrategia es implementada en cualquier proyecto, ya que es algo básico que todo conocedor de angular debe saber. La implementación 
es sencilla y ya se pudo observar en el ejercicio 2.

## 3. Control de Change Detection

Como se mencionó anteriormente, la experiencia de usuario es un factor importante para el éxito de un proyect. 
Es por ello que es importante gestionar correctamente la detección de cambios, ya que de esta manera evitamos ciclos 
de detección innecesarios. La implementación es sencilla, se debe utilizar  ChangeDetectionStrategy.OnPush en los componentes 
que se desee gestionar manualmente los cambios.
