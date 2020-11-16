## Adding an event

Create a new `.json` file in the `data/events` folder. Use this as a template

```JSON
{
    "title": "This is the Title",
    "slug": "please-use-only-url-friendly-characters",
    "metaTags": {
        "title": "This is the Title",
        "description": {
            "description": "This is a description."
        },
        "ogImage": "https://cdn.auth0.com/blog/avocado-labs/avocado_jecelyn.jpg",
        "twitterSite": "@Avocado_Labs",
        "twitterCreator": "@Avocado_Labs"
    },
    "eventDate": "2020-11-15",
    "navigationTime": "17:00 CET",
    "navigationLocation": "Online",
    "heroTitle": "Avocado Labs - Online talks",
    "heroButtonText": "Join us at 17:00 CET",
    "heroButtonLink": "https://www.meetup.com/avocado-labs-talks/events/EVENT-ID/",
    "heroDescription": {
        "heroDescription": "A description that will go on top of the event page",
    },
    "parts": [{
            "title": "Talk",
            "overviewSubsections": [{
                "title": "Talk title",
                "description": {
                    "childMarkdownRemark": {
                        "rawMarkdownBody": "Talk Description"
                    }
                },
                "image": {
                    "file": {
                        "url": "//images.ctfassets.net/kbkgmx9upatd/6lpY0TmKsNO3zwpa01kwGe/8b91a26994da3e822ccdadc5acfdf4f5/avocado_entero_2.png"
                    }
                }
            }],
            "type": "eventPageOverviewSection"
        },
        {
            "title": "Speaker",
            "speakers": [{
                "name": "Speaker name",
                "linkedInAccount": null,
                "intro": {
                    "intro": "About the speaker"
                },
                "githubAccount": null,
                "company": "Speaker company",
                "title": "Speaker job title",
                "twitterAccount": "https://twitter.com/",
                "picture": {
                    "file": {
                        "url": "url to speaker img"
                    }
                }
            }],
            "type": "eventPageSpeakersSection"
        },
        {
            "title": "Schedule",
            "schedule": [
                { "hour": "17:00", "description": { "description": "Welcome!" } },
                {
                    "hour": "17:05",
                    "description": { "description": "Talk title" }
                },
                {
                    "hour": "17:35",
                    "description": { "description": "Q&A with speaker" }
                },
                { "hour": "17:40", "description": { "description": "Goodbye!" } }
            ],
            "type": "eventPageScheduleSection"
        }
    ]
}
```
