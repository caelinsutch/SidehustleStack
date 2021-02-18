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

```graphql
# Write your query or mutation here
mutation {
    createPlatform(platform: {
        name: "New Platform"
        companyLogo: "fea"
        website: "https://google.com"
        founded: "2002"
        headquarteredIn: "Berkeley"
        funding: "Seed"
        description: "Description"
        remoteWork: false
        requiresDigitalAudience: "true"
        applicationRequired: "false"
        creativeWork: false
        minimumAge: 18
        equipmentQualSkills: [COMPUTER]
        otherRequirements: ""
        averageHourlyEarnings: 20
        averageMonthlyEarnings: 2000
        platformPricing: "Pricing"
        email: "caelinsutch@berkeley.edu"
    }) {
        platformId
    }
}
```
