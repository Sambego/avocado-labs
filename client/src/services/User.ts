export function addMetaDataToUser(
  userId: string,
  metaData: any,
  token: string
): Promise<any> {
  return fetch(`${process.env.GATSBY_API_URL}/authentication/meta/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...metaData }),
  })
    .then((response) => response.json())
    .catch((e) => e)
}
