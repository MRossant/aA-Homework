export const fetchSearchGiphys = searchTerm => (
    $.ajax({
        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=qZ8nKlxLheAlXHt5qMt3XGadxiwQ7lD1&limit=2`
    })
)