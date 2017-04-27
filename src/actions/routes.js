/**
 * Created by Dat Tran on 12/21/16.
 */
export function push({routeKey, routeTitle}) {
    return {
        type: 'push',
        routeKey,
        routeTitle
    }
}

export function pop() {
    return {
        type: 'pop'
    }
}

export function popToRoute(routeKey) {
    return {
        type: 'popToRoute',
        routeKey
    }
}

export function popToRoot() {
    return {
        type: 'popToRoot'
    }
}

export function resetToRoute({routeKey, routeTitle}){
    return {
        type: 'reset',
        routeKey,
        routeTitle
    }
}