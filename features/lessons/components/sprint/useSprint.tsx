const useSprint = () => {
  const fetchSprint = async (moduleId: string, sprintId: string) => {
    try {
      const response = await fetch(`/api/lessons/${moduleId}/${sprintId}`)
      return await response.json()
    } catch (error) {
      console.error(error)
    }
  }

  return {
    fetchSprint,
  }
}

export default useSprint
