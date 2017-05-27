class ApiService {

  get(endpoint) {
    return fetch(endpoint)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  post(endpoint, json) {
    fetch(endpoint, {
      method: 'POST',
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: json
    })
  }
}

export default ApiService;
