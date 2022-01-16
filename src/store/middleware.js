export function logger({ dispatch }) {
    return function (next) {
        return function (action) {

            console.log('dispatch action: ', action.type)

            return next(action)
        }
    }
}