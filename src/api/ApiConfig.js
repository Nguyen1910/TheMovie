const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '37858bb0389ab9916f43a4ca104982a5',
    originalImagePath: (imagePath) => `https://image.tmdb.org/t/p/original/${imagePath}`,
    w500lImagePath: (imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`
}

export default apiConfig;