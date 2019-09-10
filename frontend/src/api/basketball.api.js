
export const basketballScore = () => {
    return fetch("/api/sport/basketball")
        .then(handleResponse)

};

const handleResponse = response =>{
    return response.json().then(text => {
        const data = text;
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
       // console.log(data)
        return data;
    });
};


