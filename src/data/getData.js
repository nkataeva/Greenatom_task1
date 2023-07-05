// без использования прокси-сервера запрос блокиируется из-за политики CORS
// https://dev.to/cigwe416/fix-cors-error-javascript-1na2


async function getData() {
    try {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=json&lang=ru&json=?';
        const response = await fetch(proxyUrl + apiUrl);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Ошибка запроса');
        }
    } catch (error) {
        console.log(error);
    }
}

export default getData;