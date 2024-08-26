const useLesson = () => {
  const fetchLesson = async (moduleId: string) => {
    try {
      const response = await fetch(`/api/lessons/${moduleId}`)
      return await response.json()
    } catch (error) {
      console.error(error)
    }
  }

  return {
    fetchLesson,
  }
}

export default useLesson
