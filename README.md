# React Native Test - TuGerente

## Consigna

Tendrá una duración de 48hrs⏳,lo que debes hacer en esta prueba es:

- 📝Realizar una app en react-native con las siguientes características:

### Home
La pantalla inicial debe tener una búsqueda de usuario en base a su correo y mostrar los resultados de la búsqueda, además de un botón de "Ingresar".
La app debe recordar el id del último usuario buscado para los siguientes puntos.

### User
Al dar seleccionar el botón de ingresar, se debe mostrar una lista de "posts" que pertenezcan al usuario buscado en la pantalla anterior.
La lista debe consistir en una imagen y el título del post. Para saber qué imagen corresponde a qué post, usar el mismo id del post para obtener la imagen. Solo usar la imagen thumbnail para el listado

### Post
Al seleccionar un post de la lista, se debe mostrar una nueva pantalla con la siguiente estructura:
En la parte superior, la imagen (el tamaño original, NO el thumbnail) del post. Luego, el título. Luego, el body del post.

### Endpoints:
- GET [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- GET [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
- GET [https://jsonplaceholder.typicode.com/photos](https://jsonplaceholder.typicode.com/photos)

## Resultado

<p float="left">
<img src="https://user-images.githubusercontent.com/74881239/212414011-1bc15410-5e2a-4aac-b926-be7d4cc76e6c.png" alt="Home" style="width:45%;"/>
<img src="https://user-images.githubusercontent.com/74881239/212414639-ab19aa40-1d29-4dc7-b616-a5e5cf9a0cc3.png" alt="Home" style="width:45%;"/>
<img src="https://user-images.githubusercontent.com/74881239/212414644-a3cf8213-dcf8-4975-b7a9-1d6e359ff303.png" alt="Home" style="width:45%;"/>
<img src="https://user-images.githubusercontent.com/74881239/212414648-b59030f4-2e45-45ee-9cc9-2b876bd53dba.png" alt="Home" style="width:45%;"/>
</p>


### User


<img src="https://user-images.githubusercontent.com/74881239/212414651-55e870e9-b987-41c1-a7f3-46617182317c.png" alt="Home" style="width:45%;"/>


### Post


<p float="left">
<img src="https://user-images.githubusercontent.com/74881239/212414659-7f49299a-a987-4d44-a7c7-a21f10ae7eb8.png" alt="Home" style="width:45%;"/>
<img src="https://user-images.githubusercontent.com/74881239/212414663-1ea5af74-001c-4db2-9c4a-dab2830be372.png" alt="Home" style="width:45%;"/>
</p>

