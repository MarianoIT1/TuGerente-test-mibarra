import axios from "axios"

const API = 'https://jsonplaceholder.typicode.com'

export default {
  fetchUsers: async () => {
    const res = await axios(`${API}/users`)
    return res.data
  },
  fetchPosts: async (id) => {
    const res = await axios(`${API}/posts?userId=${id}`)
    return res.data
  },
  fetchPhotos: async () => {
    const res = await axios(`${API}/photos`)
    return res.data
  },
  newFetchPost: async (userId) => {
    try {
      const posts = await axios(`${API}/posts?userId=${userId}`).then(res => res.data)
        .then(posts => {
          const modifiedPosts = posts.map(async (post) => {
            try {
              const photo = await axios(`${API}/photos/${post.id}`)
              .then(res => res.data)
              post.image = photo.thumbnailUrl + '.jpg'
              return post
            } catch (error) {
              console.log(error)
            }
          })
          return Promise.all(modifiedPosts)
            .then(finalData => {
              return (finalData)
            })
        })
      return posts
    } catch (error) {
      console.log(error)
    }
    
  }
}


// fetch('https://tu-endpoint.com/posts')
//   .then(response => response.json())
//   .then(data => {
//     // Aquí puedes trabajar con los datos recibidos
//     // Por ejemplo, puedes iterar sobre el arreglo de posts
//     const modifiedData = data.map(async (post) => {
//       try {
//         // Aquí puedes hacer una petición GET para cada post
//         // para obtener la imagen correspondiente
//         let response = await fetch(`https://tu-endpoint.com/images?userId=${post.userId}`);
//         let image = await response.json();
//         // Aquí asignas la propiedad imagen al post correspondiente
//         post.image = image;
//         return post;
//       } catch (error) {
//         console.error(error);
//       }
//     });
//     // waiting for all promises to resolve
//     Promise.all(modifiedData).then(finalData => {
//       // Aquí tienes el arreglo de post con las imágenes
//       console.log(finalData);
//     });
//   })
//   .catch(error => {
//     // Maneja el error en caso de que la primera petición falle
//     console.error(error)
//   });
