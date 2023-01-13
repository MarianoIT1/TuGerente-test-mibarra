import axios from "axios"
import { API } from "../constants"

export default {
  fetchUsers: async () => {
    const res = await axios(`${API}/users`).then(res => res.data)
    const users =
      res.map(user => {
        return {
          ...user, 
          email: user.email.toLowerCase(),
        }
      }).sort(function (a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      })
    return users
  },
  fetchPosts: async (userId) => {
    try {
      const posts = await axios(`${API}/posts?userId=${userId}`).then(res => res.data)
        .then(posts => {
          const PhotoPromises = posts.map(async (post) => {
            try {
              const photo = await axios(`${API}/photos/${post.id}`)
              .then(res => res.data)
              post.title = post.title[0].toUpperCase() + post.title.slice(1)
              // JSONPlaceholder utiliza imagenes de placeholder.com, esta API tiene severos errores al pasarle un formato (jpg, png, etc)
              // y React Native no renderiza imagenes externas sin formato explicito en la URL, por lo que tome la decision de extraer el hexcode
              // para el background que llega en el URL, y solicito la imagen a otra API. la misma tiene los servers en Asia por lo que ralentiza
              // un poco la carga. No es lo ideal, pero siendo solo una prueba crei que valdria la pena. 
              post.thumbnail = `http://placehold.jp/${photo.thumbnailUrl.slice(-6)}/ffffff/150x150.png`
              post.image = `http://placehold.jp/${photo.thumbnailUrl.slice(-6)}/ffffff/600x600.png`
              return post
            } catch (error) {
              console.log(error)
            }
          })
          return Promise.all(PhotoPromises)
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