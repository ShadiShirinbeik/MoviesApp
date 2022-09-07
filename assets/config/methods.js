import endpoints from '~/assets/config/endpoint'

// get endpoint url
export function getUrl (route, query = {}, replacements = {}) {
  if (route.includes('https') || route.includes('/')) {
    return {
      name: route,
      path: route,
      method: 'get'
    }
  } else {
    let controller = JSON.parse(JSON.stringify(endpoints.controllers))
    const routeArray = route.split('.')
    routeArray.forEach((route) => {
      if (controller[route]) {
        controller = controller[route]
        if (controller.actions) {
          controller = controller.actions
        }
      }
    })
    const path = controller.path
    const replaceVariables = path.match(/({)+([a-z])+(})/g)
    const variables = replaceVariables
      ? replaceVariables.map(item => item.replace('{', '').replace('}', ''))
      : []
    variables.forEach((variable) => {
      controller.path = controller.path.replace(
        `{${variable}}`,
        replacements[variable]
      )
    })
    if (Object.keys(query).length > 0) {
      let queries = Object.keys(query)
        .filter(item => !!query[item])
        .map(item => `${item}=${query[item]}`)
      queries = queries.join('&')
      controller.path = controller.path + '?' + queries
    }
    return { ...controller }
  }
}

// get endpoint address
export function getEndpoint (route, replacements = {}) {
  let routes = endpoints.endpoints
  const routeArray = route.split('.')
  let routePath = ''
  routeArray.forEach(function (node) {
    routes = routes[node]
    if (node !== 'globals') {
      routePath += `/${node}`
    }
  })
  const replacementsKeys = Object.keys(replacements)
  replacementsKeys.forEach((replacement) => {
    routePath = routePath.replace(`{${replacement}}`, replacements[replacement])
  })
  routePath = routePath.replace(/\/$/, '')
  return routePath
}

export default {
  getEndpoint,
  getUrl,
}