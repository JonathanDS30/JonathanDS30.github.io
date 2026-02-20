interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  pushed_at: string
}

export const useGitHubProjects = () => {
  const repos = ref<GitHubRepo[]>([])
  const isLoading = ref(true)
  const error = ref<string | null>(null)

  const GH_USER = 'JonathanDS30'

  const fetchProjects = async () => {
    isLoading.value = true
    error.value = null

    try {
      const response = await $fetch<GitHubRepo[]>(
        `https://api.github.com/users/${GH_USER}/repos`,
        {
          params: {
            type: 'owner',
            sort: 'pushed',
            direction: 'desc',
            per_page: 12,
          },
          headers: {
            Accept: 'application/vnd.github+json',
          },
        }
      )

      // Filtrer le repo profil et limiter à 5
      repos.value = response
        .filter(repo => repo.name.toLowerCase() !== GH_USER.toLowerCase())
        .slice(0, 5)

    } catch (e) {
      error.value = 'Erreur lors du chargement des projets GitHub'
      console.error(e)
    } finally {
      isLoading.value = false
    }
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  // Fetch au montage
  onMounted(fetchProjects)

  return {
    repos,
    isLoading,
    error,
    fetchProjects,
    formatDate,
    GH_USER,
  }
}
