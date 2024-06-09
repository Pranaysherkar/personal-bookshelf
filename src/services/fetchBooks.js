import api from "./Service";

const fetchBooks = async (query) => {
    try {
        let response = await api.get(`search.json?q=${query}&limit=10&page=1`);
    return response.data.docs;
    }catch(error){
        console.log("Error fetching books:",error);
        return[];
    }
}

export default fetchBooks;