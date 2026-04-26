@description('Azure region for resource deployment')
param location string = resourceGroup().location

@description('Name of the Static Web App')
param staticWebAppName string = 'connect-framework-swa'

resource staticSite 'Microsoft.Web/staticSites@2023-12-01' = {
  name: staticWebAppName
  location: location
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    repositoryUrl: ''
    branch: 'main'
    buildProperties: {
      appLocation: 'apps/web'
      outputLocation: ''
    }
  }
}

output staticWebAppResourceId string = staticSite.id
