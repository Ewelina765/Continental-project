import { PrismaClient } from '@prisma/client'

import {
  tasks,
  technnology,
  modules,
  sprints,
  kanbanColumns,
  kanbanTasks,
} from './data'

const prisma = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV === 'production') globalThis.prisma

const main = async () => {
  const jsTasksLength = await prisma.javascriptAssignment.count()
  const technologyLength = await prisma.technology.count()
  const allModules = await prisma.module.findMany()

  if (jsTasksLength === 0)
    await prisma.javascriptAssignment.createMany({ data: tasks })

  if (technologyLength === 0)
    await prisma.technology.createMany({ data: technnology })

  if (allModules.length < 6)
    modules.map(
      async (singleModule) =>
        await prisma.module.create({
          data: singleModule,
        })
    )
  if (allModules.length !== 0)
    allModules.map(async ({ id }) => {
      const moduleSprints = await prisma.sprint.findMany({
        where: {
          moduleId: id,
        },
        include: {
          canbanColumn: {
            include: {
              task: true,
            },
          },
        },
      })
      if (moduleSprints.length < 6)
        sprints.map(
          async (sprint) =>
            await prisma.sprint.create({ data: { ...sprint, moduleId: id } })
        )
      if (moduleSprints.length !== 0)
        moduleSprints.map(async ({ id: sprintId, canbanColumn }) => {
          if (canbanColumn.length === 0) {
            await prisma.canbanColumn.createMany({
              data: kanbanColumns.map((column) => ({ ...column, sprintId })),
            })
          }
          if (canbanColumn.length !== 0) {
            canbanColumn.map(
              async ({ columnIndex, id: canbanColumnId, task }) => {
                if (columnIndex === 1 && task.length === 0)
                  await prisma.task.createMany({
                    data: kanbanTasks.map((kanbanTask) => ({
                      ...kanbanTask,
                      canbanColumnId,
                      sprintId,
                    })),
                  })
              }
            )
          }
        })
    })
}

main()
  .catch((e) => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

export default prisma
