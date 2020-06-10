import eventPageModules from './eventPageModules'

export default function renderEventPageModule(module, eventTheme, index) {
    const moduleKey = module.sys.contentType.sys.id
    if (eventPageModules[moduleKey]) {
        return eventPageModules[moduleKey](module, eventTheme, index)
    }
    return ''
}