
export { addComment, getComments };

const addComment = (comment,id) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ comment })
  };

  return fetch("/api/addcomment/" + id, requestOptions).then(handleResponse);
};

const getComments = (id) => {
  const requestOptions = {
    method: "GET"
  };
  return fetch("/api/comments/" + id, requestOptions).then(handleResponse);
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


