
export const  footballScore = () => {
   return fetch("/api/sport/football")
        .then(handleResponse)

};

const handleResponse = response =>{
    return response.json().then(text => {
        const data = text;
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
};





