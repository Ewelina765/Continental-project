const useLessonsLogic = () => {
  const fetchLessons = async (limit: number) => {
    try {
      const response = await fetch(`/api/lessons?limit=${limit}`)
      return await response.json()
    } catch (error) {
      console.error(error)
    }
  }

  return {
    fetchLessons,
  }
}

export default useLessonsLogic
