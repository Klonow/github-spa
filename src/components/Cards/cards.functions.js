export function htmlCards(users) {
    return users.map(user => {
        return `
                    <div class="card">
                        <img src="${user.avatar_url}" alt="${user.avatar_url}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${user.login}</h5>
                            <a href="${user.html_url}" data-click="link" class="btn btn-primary">Открыть</a>
                        </div>
                    </div>
            `
    })
}


export function getButton() {
    return `
        <button
            type="button"
            id="btn-load"
            class="btn"
            data-page="1"
            data-btn="btn" 
        >
           Загрузить ещё
        </button>
    `
}
