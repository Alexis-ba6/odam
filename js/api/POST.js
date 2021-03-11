

const routes = require('../../config/api-routes.json')

const method = 'POST'

const login = async (login, password) => {
    const request = await fetch(routes.userLogin, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
            email: login,
            password: password
        })
    })
    return [await request.status, await request.json()]
}

const postArticle = async (title, content, token) => {
    let request = await fetch(routes.articleAdd, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({ title, content }),
        mode: 'cors',
        cache: 'default'
    })
    return [await request.status, await request.json()]
}

const postRegister = async (email, username, password) => {
    const request = await fetch(routes.userRegister, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
            'email': email,
            'username': username,
            'password': password
        }),
        cache: 'default'
    })
    return [await request.status, await request.json()]
}

const postUserValid = async (email, code) => {
    let request = await fetch(routes.userValid, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            code
        }),
        mode: 'cors',
        cache: 'default'
    })
    return [await request.status, await request.json()]
}

export { login, postArticle, postRegister, postUserValid }