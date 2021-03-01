# Side Hustle Stack Web

## Getting Started

### Install MongoDB

Install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)

## Tools
Some commands that enhance the dev experience

```shell

yarn generate # Quickly generate new pages or components
yarn GraphQL # Generate new graphQL types based on `src/GraphQL/schema.GraphQL`

```

### Route Aliases

We've created aliases for common routes, for example, access the `src/Components` directory with `@Components` from anywhere in the app. 

These are configured in `.babelrc` and `tsconfig.json`. 


## Default Platform

Mutation to create a test platform in your DB. 

```graphql
mutation {
    createPlatform(platform: {
        name: "Test 5"
        companyLogo: "https://www.arborday.org/images/hero/medium/hero-aerial-forest-evergreen-trees.jpg"
        website: "Test"
        founded: "Test"
        headquarteredIn: "Test"
        funding: ZERO
        tags: ["Tag 1", "Tag 2"]
        description: "Test"
        typeOfWork: AUDIO_CONTENT_CREATOR
        category: CREATOR
        requiresDigitalAudience: RECOMMENDED
        applicationRequired: YES_SELECTIVE
        remoteWork: true
        minimumAge: 18
        equipmentQualSkills: [COMPUTER]
        averageEarnings: {
            amount: 12
            per: "days"
        }
        timeToFirstDollar: {
            amount: 12
            per: "weeks"
        }
        geographicalFocus: "USA"
        affiliateLink: "google.com"
        founderMessage: "Test Message"
        founderTwitter: "@caelinsutch"
        email: "caelinsutch@gmail.com"
        platformType: PLATFORM
    }) {
        id
    }
}
```
