const resourcesUrl = 'https://gist.githubusercontent.com/HiDeoo/3882c01c3618180c9a834b8d06a9e7c5/raw/'

let resources: Resources | undefined = undefined

export async function getResourcesByType(type: ResourceType): Promise<Resource[]> {
  const resources = await getResources()
  return resources[type]
}

async function getResources(): Promise<Resources> {
  if (resources) {
    return resources
  }

  try {
    const response = await fetch(resourcesUrl)
    resources = (await response.json()) as Resources
    return resources
  } catch (error) {
    throw new Error('Failed to fetch resources.', { cause: error })
  }
}

interface Resource {
  name: string
  description: string
  url?: string
}

export type ResourceType = 'plugins' | 'components' | 'tools'

type Resources = Record<ResourceType, Resource[]>
