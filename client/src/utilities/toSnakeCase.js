export const toSnakeCase = (string) =>
    string.replace(/\s-\s/g, '-').replace(/\s/g, '-').toLowerCase()