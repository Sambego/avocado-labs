export interface Registrant {
  email: string
  first_name: string
  last_name: string
  job_title: string
  org: string
  custom_questions: Array<{ title: string; value: any }>
}

export interface User {
  email: string
  email_verified: boolean
  family_name: string
  given_name: string
  'https://avocado-labs.com/meta': {
    consent: boolean
    job_title: string
    org: string
  }
  locale: string
  name: string
  nickname: string
  picture: string
  sub: string
  updated_at: string
}

export function normalizeRegistrant(user: User): Registrant {
  return {
    email: user.email,
    first_name: user.given_name,
    last_name: user.family_name,
    org: user['https://avocado-labs.com/meta'].org,
    job_title: user['https://avocado-labs.com/meta'].job_title,
    custom_questions: [
      {
        title: 'Never miss a thing!',
        value: user['https://avocado-labs.com/meta'].consent
          ? 'Check this box to receive relevant content and upcoming episodes.'
          : '',
      },
    ],
  }
}

export async function addAttendee(user: User, webinar: number, token: string) {
  const body = normalizeRegistrant(user)

  return fetch(`${process.env.GATSBY_API_URL}/webinar/${webinar}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .catch((e) => (error = e))
}

export async function checkAttendee(
  attendeeEmail: string,
  webinar: number,
  token: string
): Promise<{ isRegistered: boolean }> {
  return fetch(
    `${
      process.env.GATSBY_API_URL
    }/webinar/${webinar}/attending/${encodeURIComponent(attendeeEmail)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .catch((e) => (error = e))
}

export async function getWebinarDetails(
  webinar: number,
  token: string
): Promise<any> {
  return fetch(`${process.env.GATSBY_API_URL}/webinar/${webinar}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((e) => (error = e))
}
